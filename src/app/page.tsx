import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Globe, Star } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-[#0d1a1a]">
      <div className="bg-[#0d1a1a] text-white text-center p-2 text-sm">
        <span>Session 2024 Early-bird registration now open</span>
        <ArrowRight className="inline h-4 w-4 ml-2" />
      </div>

      <header className="py-4 px-8 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold">Ascone</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-gray-700">Features</a>
            <a href="#" className="hover:text-gray-700">Accounts</a>
            <a href="#" className="hover:text-gray-700">Company</a>
            <a href="#" className="hover:text-gray-700">Insight</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Login</Button>
          <Button className="bg-[#0d1a1a] text-white rounded-full">
            Sign Up <ArrowRight className="ml-2" />
          </Button>
        </div>
      </header>

      <main className="grid md:grid-cols-2 gap-8 px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold text-[#0d1a1a] tracking-widest mb-2">TRY IT NOW!</p>
          <h2 className="text-5xl md:text-6xl font-serif">Change the way</h2>
          <h2 className="text-5xl md:text-6xl font-serif mb-4">you use your <span className="font-['Playfair_Display',_serif]">money</span></h2>
          <p className="max-w-md text-gray-600 mb-8">
            From your everyday spending, to planning for your future with savings and investments, Ascone helps you get more from your money.
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-[#0d1a1a] text-white rounded-full px-6 py-3">Get Started Now</Button>
            <div className="flex flex-col">
              <div className="flex items-center">
                <Star fill="gold" strokeWidth={0} className="w-5 h-5" />
                <Star fill="gold" strokeWidth={0} className="w-5 h-5" />
                <Star fill="gold" strokeWidth={0} className="w-5 h-5" />
                <Star fill="gold" strokeWidth={0} className="w-5 h-5" />
                <Star fill="gold" strokeWidth={0} className="w-5 h-5" />
                <span className="ml-2 font-bold">5.0</span>
              </div>
              <p className="text-xs text-gray-500">from 120+ reviews</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <Card className="col-span-1 row-span-1 bg-[#F3F3F3] p-4 flex justify-center items-center rounded-2xl">
            <Image 
              src="https://picsum.photos/seed/phone/300/400"
              alt="Hand holding phone" 
              width={150}
              height={300}
              className="object-contain"
              data-ai-hint="hand holding phone"
            />
          </Card>
          <Card className="col-span-1 row-span-1 bg-[#F0EFEA] p-6 flex flex-col justify-between rounded-2xl">
            <div>
              <p className="text-4xl font-bold">56+</p>
              <p>Currencies</p>
            </div>
            <Globe className="w-20 h-20 self-center text-gray-400" />
          </Card>
          <Card className="col-span-1 row-span-1 bg-[#EAF0EF] p-6 flex flex-col justify-between rounded-2xl">
            <div>
              <div className="flex gap-2">
                <Star className="w-6 h-6 text-[#0d1a1a]" />
                <Star className="w-6 h-6 text-[#0d1a1a]" />
              </div>
              <p className="mt-4">Users Active</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <Image src="https://picsum.photos/seed/user1/40/40" alt="user 1" width={32} height={32} className="rounded-full border-2 border-white" data-ai-hint="person avatar" />
                <Image src="https://picsum.photos/seed/user2/40/40" alt="user 2" width={32} height={32} className="rounded-full border-2 border-white" data-ai-hint="person avatar" />
                <Image src="https://picsum.photos/seed/user3/40/40" alt="user 3" width={32} height={32} className="rounded-full border-2 border-white" data-ai-hint="person avatar" />
              </div>
              <Button size="icon" className="bg-[#0d1a1a] text-white rounded-full">
                <ArrowRight />
              </Button>
            </div>
          </Card>
          <Card className="col-span-1 row-span-1 bg-[#0d1a1a] text-white p-6 flex flex-col justify-between rounded-2xl">
            <div>
              <p className="text-3xl font-bold">$196,000 <ArrowRight className="inline transform -rotate-45" /></p>
              <p>Saving</p>
            </div>
             <svg viewBox="0 0 100 40" className="w-full h-auto">
                <path d="M 0 35 Q 10 20, 20 25 T 40 20 Q 50 10, 60 15 T 80 25 Q 90 30, 100 20" fill="none" stroke="white" strokeWidth="2"/>
            </svg>
          </Card>
        </div>
      </main>
    </div>
  );
}
