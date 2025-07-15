"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso!")
  }

  return (
    <div
      className="flex justify-between md:justify-center md:gap-10"
      key={phone}
    >
      {/* ESQUERDA */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon className="md:size-7" />
        <p className="text-sm md:text-[22px]">{phone}</p>
      </div>
      {/* DIREITA */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhoneClick(phone)}
        className="md:text-[18px]"
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
