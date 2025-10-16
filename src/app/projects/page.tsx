"use client";

import Image from 'next/image';
import { properties } from './data';
import { motion } from 'framer-motion';
import { Briefcase, CircleUserRound, HomeIcon, PanelLeft, RefreshCw } from 'lucide-react';
import { NewPropertyCard } from '@/components/projects/new-property-card';
import { Button } from '@/components/ui/button';

export default function ProjectsPage() {

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#E9E5DE]">
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587212586638-859557433363?q=80&w=2070&auto=format&fit=crop"
          alt="Woman relaxing in a modern living room"
          fill
          className="object-cover"
          data-ai-hint="woman living room"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex h-full flex-col p-8 text-white">

          <main className="flex flex-1 flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-7xl font-bold leading-tight">
                People Soft
              </h1>
              <div className="mt-4 max-w-sm text-white/90">
                <p>"The key to your new home is just a click away. Discover your future."</p>
              </div>
            </motion.div>

            {/* Property Cards */}
            <div className="mt-12 w-full">
              <div className="flex items-end justify-center gap-4">
                <NewPropertyCard property={{ ...properties.find(p => p.category === 'Buy')!, title: 'Buy' }} color="yellow" className="h-28" />
                <NewPropertyCard property={{ ...properties.find(p => p.category === 'Rent')!, title: 'Rent' }} color="white" className="h-28" />
                <NewPropertyCard property={{ ...properties.find(p => p.category === 'Plot')!, title: 'Plot' }} color="purple" className="h-28" />
                <NewPropertyCard property={{ ...properties.find(p => p.category === 'Commercial')!, title: 'Commercial' }} color="white" className="h-28" />
              </div>
            </div>
          </main>
          
          <footer className="absolute bottom-0 left-0 right-0 p-4">
             <div className="mx-auto max-w-md rounded-full bg-zinc-800/80 px-6 py-3 text-white backdrop-blur-md">
                 <div className="flex items-center justify-between">
                     <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20"><HomeIcon /></Button>
                     <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20"><Briefcase /></Button>
                     <Button variant="ghost" size="icon" className="rounded-full bg-white text-zinc-800 hover:bg-gray-200"><PanelLeft /></Button>
                     <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20"><RefreshCw /></Button>
                     <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20"><CircleUserRound /></Button>
                 </div>
             </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
