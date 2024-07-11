import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Camera, Video, Paperclip, FileText } from 'lucide-react'

export default function ToolTips() {
  return (
    <Popover>
      <PopoverTrigger>
        <Paperclip size={16} />
      </PopoverTrigger>
      <PopoverContent className="flex items-center gap-4 rounded-full  bg-[#008000] py-3 px-4 relative bottom-1">
        <Camera size={20} color="#fff" />
        <Video size={20} color="#fff" />
        <FileText size={20} color="#fff" />
      </PopoverContent>
    </Popover>
  )
}
