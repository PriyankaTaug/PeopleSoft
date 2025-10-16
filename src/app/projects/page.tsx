"use client";

import Image from 'next/image';
import { AppHeader } from '@/components/app-header';
import { properties, type PropertyCategory } from './data';
import { AnimatePresence, motion } from 'framer-motion';
import { Building, Briefcase, ChevronRight, CircleUserRound, Files, FolderKanban, Home, HomeIcon, LandPlot, PanelLeft, RefreshCw, Warehouse } from 'lucide-react';
import { NewPropertyCard } from '@/components/projects/new-property-card';
import { Button } from '@/components/ui/button';

export default function ProjectsPage() {

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#E9E5DE]">
      <div className="relative h-screen w-full overflow-hidden rounded-3xl">
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
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:text-white">
                <RefreshCw className="rotate-90" />
              </Button>
              <span className="font-semibold">Restroom</span>
            </div>
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="sm" className="gap-2 text-white hover:bg-white/10 hover:text-white">
                <FolderKanban /> Organizations
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-white hover:bg-white/10 hover:text-white">
                <Files /> Reports
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold">Bedroom</span>
              <Button variant="ghost" size="icon" className="bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:text-white">
                <RefreshCw className="-rotate-90" />
              </Button>
            </div>
          </header>

          <main className="flex-1 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-7xl font-bold leading-tight">
                Porto
                <br />
                Santo Stefano
              </h1>
              <div className="mt-4 max-w-sm text-white/90">
                <p>Via della Grotta, 54-23, 58019 Porto Santo Stefano GR General Construction - Stefano Construct Company</p>
              </div>
            </motion.div>
          </main>

          {/* Property Cards */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full px-8">
            <div className="flex items-end justify-center gap-4">
              <NewPropertyCard property={properties[0]} color="yellow" />
              <NewPropertyCard property={properties[1]} color="white" />
              <NewPropertyCard property={properties[2]} color="purple" />
              <NewPropertyCard property={properties[3]} color="white" />
               <NewPropertyCard property={properties[4]} color="white" />
            </div>
          </div>
          
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
