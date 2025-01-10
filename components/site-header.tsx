import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight, Menu } from "lucide-react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"

export function SiteHeader() {
  const logoPath = '/logo.png'

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
} 