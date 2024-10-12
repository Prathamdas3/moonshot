import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function ProfilePic({
  src,
  className,
}: {
  src: string
  className?: string
}) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt="group logo" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
