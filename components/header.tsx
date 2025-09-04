import { Button } from "@/components/ui/button"
import { Bell, Search, User } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">PostHub</h1>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hover:bg-accent/10 hover:text-accent transition-colors">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-accent/10 hover:text-accent transition-colors">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-accent/10 hover:text-accent transition-colors">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
