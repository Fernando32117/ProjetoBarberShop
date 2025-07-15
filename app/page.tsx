import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getConfirmedBookings } from "./_data/get-confirmed-bookings"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  const confirmedBookings = await getConfirmedBookings()

  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5 md:p-10">
        {/* TEXTO */}
        <h2 className="text-xl font-bold md:mb-5 md:mt-5 md:text-[50px]">
          Olá, {session?.user ? session.user.name : "faça login para agendar"} !
        </h2>
        <p className="md:mb-5 md:text-[20px]">
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

        {/* IMAGEM */}
        <div className="relative mb-2 mt-2 h-[150px] w-full md:h-[500px]">
          <Image
            alt="Agende nos melhores com Barbershops"
            src="/banner3.jpg"
            fill
            quality={100}
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTOS */}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 md:text-[18px]">
              Agendamentos
            </h2>

            {/* AGENDAMENTO */}
            <div className="flex gap-3 overflow-x-auto md:mb-3 md:grid md:grid-cols-4 [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </div>
          </>
        )}

        {/* BUSCA */}
        <div>
          <Search />
        </div>

        {/* BUSCA RÁPIDA */}
        <div className="mt-2 flex gap-2 overflow-x-scroll py-2 [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="cursor-pointer gap-2 rounded-lg px-4 py-2 text-sm shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-xl md:px-10 md:py-8 md:text-lg"
              size="lg"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 md:mt-[50px] md:text-[20px]">
          Recomendadas
        </h2>
        <div className="flex gap-4 overflow-x-auto pt-2 md:grid md:grid-cols-4 md:gap-3 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 md:mt-[50px] md:text-[20px]">
          Populares
        </h2>
        <div className="flex gap-4 overflow-x-auto pt-2 md:grid md:grid-cols-4 md:gap-3 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
