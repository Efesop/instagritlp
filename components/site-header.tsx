"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const logoPath = '/logo.png'

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto'
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <header className="sticky top-0 z-[101] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-8">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            aria-label="Instagrit Home"
          >
            <Image
              src={logoPath}
              alt="Instagrit Logo"
              width={32}
              height={32}
              priority
              unoptimized
              className="w-8 h-8 relative"
            />
            <span>Instagrit</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex ml-12">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>The app</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        {
                          title: "What is Instagrit?",
                          description: "No nonsense habit tracker",
                          href: "/#path-to-resistance"
                        },
                        {
                          title: "How it works",
                          description: "Solo or shared accountability to get disciplined",
                          href: "/#how-it-works"
                        },
                        /*{
                          title: "Analytics",
                          description: "Get insights into your progress",
                        },*/
                      ].map((item) => (
                        <Link
                          key={item.title}
                          href={item.href || "#"}
                          className="group grid gap-1 p-3 hover:bg-accent rounded-lg transition-colors"
                        >
                          <h3 className="text-sm font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#testimonials" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Testimonials
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="ml-auto flex items-center space-x-4">
            <Link 
              href="https://apps.apple.com/gb/app/instagrit/id6737732671"
              className="hidden md:inline-flex"
            >
              <Button variant="default" className="group">
                Download
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Semi-transparent backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={handleMenuToggle}
          />
          
          {/* Menu Content */}
          <div 
            className="absolute right-0 top-16 h-[calc(100vh-4rem)] w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <nav className="relative flex flex-col items-center text-center p-6 space-y-8">
              <Link 
                href="/#path-to-resistance" 
                className="text-lg font-medium hover:text-blue-600 transition-colors"
                onClick={handleMenuItemClick}
              >
                What is Instagrit?
              </Link>
              <Link 
                href="/#how-it-works" 
                className="text-lg font-medium hover:text-blue-600 transition-colors"
                onClick={handleMenuItemClick}
              >
                How it works
              </Link>
              <Link 
                href="/#testimonials" 
                className="text-lg font-medium hover:text-blue-600 transition-colors"
                onClick={handleMenuItemClick}
              >
                Testimonials
              </Link>
              <Link 
                href="/blog" 
                className="text-lg font-medium hover:text-blue-600 transition-colors"
                onClick={handleMenuItemClick}
              >
                Blog
              </Link>
              <Link 
                href="#pricing" 
                className="text-lg font-medium hover:text-blue-600 transition-colors"
                onClick={handleMenuItemClick}
              >
                Pricing
              </Link>
              <Link 
                href="https://apps.apple.com/gb/app/instagrit/id6737732671"
                className="w-full max-w-[200px]"
                onClick={handleMenuItemClick}
              >
                <Button variant="default" className="w-full group">
                  Download Now
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
} 