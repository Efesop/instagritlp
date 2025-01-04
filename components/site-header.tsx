import Link from "next/link"
import { Button } from "./ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="font-bold">
          Instagrit
        </Link>
        <nav className="flex items-center ml-auto gap-4">
          <Link href="https://apps.apple.com/gb/app/instagrit/id6737732671">
            <Button>Download</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
} 