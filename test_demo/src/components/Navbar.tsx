'use client'
import { FloatingNav } from './ui/floating-navbar'
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      //   icon: <IconHome className="w-4 h-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Products',
      link: '/about',
      //   icon: <IconUser className="w-4 h-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Resources',
      link: '/contact',
      //   icon: (
      //     <IconMessage className="w-4 h-4 text-neutral-500 dark:text-white" />
      //   ),
    },
    {
      name: 'Pricing',
      link: '/contact',
      //   icon: (
      //     <IconMessage className="w-4 h-4 text-neutral-500 dark:text-white" />
      //   ),
    },
  ]
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} className="text-black" />
    </div>
  )
}
