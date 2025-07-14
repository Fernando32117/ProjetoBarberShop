import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

const Header = () => {
  return (
    <Card className="rounded-t-none">
      <CardContent className="flex flex-row items-center justify-between p-5 md:p-10">
        <Link href="/">
          <h1 className="text-xl font-bold md:text-[40px]">
            <span className="text-primary">BARBER</span>
            <span className="font-light">SHOP</span>
          </h1>
        </Link>
        <div className="flex items-center gap-x-2 md:gap-x-5">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="md:h-[50px] md:w-[50px]"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
