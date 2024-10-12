import ProfilePic from './avatar'
import { BadgeCheck } from 'lucide-react'
import { Card } from './ui/card'

export default function TextCards({
  des,
  src,
  self,
  verified,
}: {
  des: string
  src: string
  self: boolean
  verified: boolean
}) {
  return (
    <section className={`${self && 'flex justify-end'}`}>
      <div className="flex gap-2">
        {!self && (
          <div>
            <ProfilePic src={src} className="w-6 h-6" />
            {verified && (
              <BadgeCheck
                size={16}
                className="relative z-1 left-[70%] -top-4"
                color="#fff"
                fill="#1C63D5"
              />
            )}
          </div>
        )}
        <Card
          className={` p-2 rounded-xl  text-wrap w-72 sm:w-full drop-shadow-xl ${
            self
              ? 'rounded-br-none bg-[#1C63D5] text-white '
              : 'rounded-tl-none text-[##606060] '
          } `}
        >
          <p className="leading-[17.57px] text-sm font-normal text-justify">
            {des}
          </p>
        </Card>
      </div>
    </section>
  )
}
