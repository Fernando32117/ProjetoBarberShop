import { Globe, Linkedin } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer className="mt-auto">
      <Card className="rounded-b-none">
        <CardContent className="flex items-center justify-between p-5 md:p-10">
          <p className="text-sm text-muted-foreground md:text-[20px]">
            ©{" "}
            <span className="font-bold text-primary">
              <a
                href="https://www.linkedin.com/in/gerfernandosouza/"
                target="_blank"
              >
                Fernando Souza
              </a>
            </span>
          </p>
          <div className="flex items-center gap-x-4">
            <a
              href="https://www.linkedin.com/in/gerfernandosouza/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 text-sm text-muted-foreground transition-colors hover:text-primary md:text-[20px]"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://portifolio-fernando-souza.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 text-sm text-muted-foreground transition-colors hover:text-primary md:text-[20px]"
            >
              <Globe size={18} />
              Portfólio
            </a>
          </div>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
