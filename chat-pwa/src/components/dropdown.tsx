import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from './ui/dropdown-menu'

import { EllipsisVertical, Users, Phone, MessageSquareX } from 'lucide-react'

export default function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative -left-4 w-[156px]">
        <DropdownMenuLabel className="flex gap-1 items-center text-sm font-semibold leading-[17.57px] text-[#141E0D] py-[14px] px-3">
          <Users size={20} />
          Members
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="p-[1px]" />
        <DropdownMenuLabel className="flex gap-1 items-center text-sm font-semibold leading-[17.57px] text-[#141E0D] py-[14px] px-3">
          <Phone size={20} />
          Share Number
        </DropdownMenuLabel>
        <DropdownMenuSeparator color="#E5E5E0" />
        <DropdownMenuLabel className="flex gap-1 items-center text-sm font-semibold leading-[17.57px] text-[#141E0D] py-[14px] px-3">
          <MessageSquareX size={20} />
          Report
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
