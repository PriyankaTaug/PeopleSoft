import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from './ui/button';

export function AppHeader() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur-sm sticky top-0 z-20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary font-headline">
          AquaEstate
        </Link>
        <Button variant="ghost" size="icon" asChild>
          <Link href="/" aria-label="Go to homepage">
            <Home className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
