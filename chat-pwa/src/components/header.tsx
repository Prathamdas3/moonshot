import ProfilePic from './avatar'
import DropDown from './dropdown'
import { ArrowLeft, SquarePen } from 'lucide-react'

export default function Header({
  name,
  from,
  to,
}: {
  name: string
  from: string
  to: string
}) {
  return (
    <header className="fixed top-0 z-50 w-full px-4 py-5 space-y-4 bg-white sm:container ">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <ArrowLeft size={24} />
          <p className="text-2xl font-bold leading-[30.12px]">{name}</p>
        </div>
        <SquarePen size={24} />
      </nav>
      <div className="flex items-center justify-between gap-3 ">
        <div className="flex gap-4">
          <ProfilePic
            src="https://github.com/shadcn.png"
            className="w-12 h-12"
          />
          <div>
            <p className="text-[#606060] text-[16px] font-medium leading-[20.08px]">
              From
              {'  '}
              <span className="text-lg font-bold leading-[22.59px] text-[#141E0D]">
                {from}
              </span>
            </p>
            <p className="text-[#606060] ">
              To{' '}
              <span className="text-lg font-bold leading-[22.59px] text-[#141E0D]">
                {to}
              </span>
            </p>
          </div>
        </div>
        <DropDown />
      </div>
    </header>
  )
}
