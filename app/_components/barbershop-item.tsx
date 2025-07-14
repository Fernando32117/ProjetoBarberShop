import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import Link from "next/link"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] cursor-pointer rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:w-full">
      <CardContent className="p-0 px-1 pt-1 md:px-3 md:pt-3">
        {/* IMAGEM */}
        <div className="relative h-[159px]">
          <Image
            alt={barbershop.name}
            fill
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
          />

          <Badge
            className="absolute left-2 top-2 space-x-1 md:px-5 md:py-2"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold md:text-lg">5,0</p>
          </Badge>
        </div>

        {/* TEXTO */}
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold md:text-lg">
            {barbershop.name}
          </h3>
          <p className="truncate text-sm text-gray-400 md:text-lg">
            {barbershop.address}
          </p>
          <Button
            variant="secondary"
            className="mt-3 w-full md:text-lg"
            asChild
          >
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
