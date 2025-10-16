import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Building,
  Home as HomeIcon,
  LandPlot,
  Warehouse,
} from 'lucide-react';

export default function Page() {
  return (
    <div className="bg-white text-[#0d1a1a]">
      <header className="py-4 px-8 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold">People Soft</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-gray-700">
              Features
            </a>
            <a href="#" className="hover:text-gray-700">
              Accounts
            </a>
            <a href="#" className="hover:text-gray-700">
              Company
            </a>
            <a href="#" className="hover:text-gray-700">
              Insight
            </a>
          </nav>
        </div>
      </header>

      <main className="grid md:grid-cols-2 gap-8 px-8 md:px-16 lg:px-24 py-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold text-[#0d1a1a] tracking-widest mb-2">
            TRY IT NOW!
          </p>
          <h2 className="text-5xl md:text-6xl font-serif">Change the way</h2>
          <h2 className="text-5xl md:text-6xl font-serif mb-4">
            you use your{' '}
            <span className="font-['Playfair_Display',_serif]">money</span>
          </h2>

          <p className="max-w-md text-gray-600 mb-8">
            From your everyday spending, to planning for your future with
            savings and investments, People Soft helps you get more from your money.
          </p>
          <div className="flex items-center gap-4">
            <Button className="rounded-full px-6 py-3">
              Get Started Now
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card className="col-span-1 bg-[#F3F3F3] p-6 flex flex-col justify-center items-center rounded-2xl text-center aspect-square">
            <HomeIcon className="w-12 h-12 mb-2 text-gray-600" />
            <p className="font-bold text-lg">Home kerala</p>
          </Card>
          <Card className="col-span-1 bg-[#F0EFEA] p-6 flex flex-col justify-center items-center rounded-2xl text-center aspect-square">
            <Building className="w-12 h-12 mb-2 text-gray-600" />
            <p className="font-bold text-lg">Real estate</p>
          </Card>
          <Card className="col-span-1 bg-[#EAF0EF] p-6 flex flex-col justify-center items-center rounded-2xl text-center">
            <Warehouse className="w-12 h-12 mb-2 text-gray-600" />
            <p className="font-bold text-lg">Rentals</p>
          </Card>
           <Card className="col-span-1 bg-[#F3F3F3] p-6 flex flex-col justify-center items-center rounded-2xl text-center">
            <LandPlot className="w-12 h-12 mb-2 text-gray-600" />
            <p className="font-bold text-lg">Land</p>
          </Card>
        </div>
      </main>
      <footer className="bg-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">People Soft</h2>
        </div>
      </footer>
    </div>
  );
}
