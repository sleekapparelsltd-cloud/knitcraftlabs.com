
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone, Mail } from 'lucide-react'
import { CartIcon } from '@/components/cart-icon'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Shop', href: '/shop' },
    { name: 'Sample Development', href: '/sample-development' },
    { name: 'Uniforms', href: '/uniforms' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-40 h-12">
                <Image
                  src="https://cdn.abacus.ai/images/84f892a3-46b4-4aa5-a6ab-61f415b7cd50.png"
                  alt="KnitCraft Labs - Professional Apparel Manufacturing"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems?.slice(1, 8)?.map((item) => (
              <Link
                key={item?.name}
                href={item?.href}
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors whitespace-nowrap"
              >
                {item?.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <CartIcon />
            <Link href="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <div className="relative w-8 h-8">
                    <Image
                      src="https://cdn.abacus.ai/images/84f892a3-46b4-4aa5-a6ab-61f415b7cd50.png"
                      alt="KnitCraft Labs"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-lg">KnitCraft Labs</span>
                </Link>
                
                <nav className="flex flex-col space-y-4">
                  {navItems?.map((item) => (
                    <Link
                      key={item?.name}
                      href={item?.href}
                      className="text-lg font-medium text-slate-700 hover:text-emerald-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item?.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Phone className="w-4 h-4" />
                    <span>+880 1861 011367</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Mail className="w-4 h-4" />
                    <span>connect@knitcraftlabs.com</span>
                  </div>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Get Free Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
