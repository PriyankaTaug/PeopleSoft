"use client";

import { properties } from './data';
import { NewPropertyCard } from '@/components/projects/new-property-card';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const stats = [
    { value: '115k+', label: 'Capital Raised' },
    { value: '70k+', label: 'Happy Customers' },
    { value: '47K+', label: 'Property Options' },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold leading-tight text-black">
            People Soft
          </h1>
        </motion.div>

        <div className="mt-12 w-full">
          <div className="flex items-center justify-center gap-8">
            <NewPropertyCard property={{ ...properties.find(p => p.category === 'Buy')!, title: 'Buy' }} color="white" />
            <NewPropertyCard property={{ ...properties.find(p => p.category === 'Rent')!, title: 'Rent' }} color="blue" />
            <NewPropertyCard property={{ ...properties.find(p => p.category === 'Plot')!, title: 'Plot' }} color="white" />
          </div>
        </div>

      </main>
    </div>
  );
}
