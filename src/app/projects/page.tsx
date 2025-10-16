"use client";

import Image from 'next/image';
import { properties } from './data';
import { motion } from 'framer-motion';
import { NewPropertyCard } from '@/components/projects/new-property-card';

export default function ProjectsPage() {

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#E9E5DE]">
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop"
          alt="Modern house"
          fill
          className="object-cover"
          data-ai-hint="modern house"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex h-full flex-col p-8">

          <main className="flex flex-1 flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-8xl font-bold leading-tight text-white">
                People Soft solutions
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
          
        </div>
      </div>
    </div>
  );
}
