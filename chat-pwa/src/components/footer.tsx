import { SendHorizontal } from 'lucide-react'
import { Input } from './ui/input'
import ToolTips from './tooltip'
export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 w-full px-4 py-2 bg-white sm:container">
      <div className="flex items-center gap-4 p-3">
        <Input
          placeholder="Reply to @Rohit Yadav"
          className=" placeholder:text-[#B7B7B7] border-none outline-none focus-visible:outline-none text-[#141E0D]  focus-visible:ring-0"
        />
        <ToolTips />
        <SendHorizontal size={20} />
      </div>
    </footer>
  )
}
