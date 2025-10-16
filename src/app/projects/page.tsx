"use client";

import { useState } from 'react';
import Image from 'next/image';
import { AppHeader } from '@/components/app-header';
import { PropertyCard } from '@/components/projects/property-card';
import { properties, type PropertyCategory } from './data';
import { AnimatePresence, motion } from 'framer-motion';
import { CategoryCard } from '@/components/projects/category-card';
import { Building, Home, LandPlot, Warehouse } from 'lucide-react';

const categories: { name: PropertyCategory; icon: React.ElementType }[] = [
  { name: 'Buy', icon: Home },
  { name: 'Rent', icon: Building },
  { name: 'Plot', icon: LandPlot },
  { name: 'Commercial', icon: Warehouse },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<PropertyCategory>('Buy');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = properties
    .filter((property) => property.category === activeFilter)
    .filter((property) =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.place.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <AppHeader />

      <section className="relative h-[60vh] w-full text-white">
        <Image
          src="https://picsum.photos/seed/456/1920/1080"
          alt="Modern real estate"
          fill
          className="object-cover"
          data-ai-hint="modern real estate"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-8 text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
            People soft
          </h1>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                category={category.name}
                icon={category.icon}
                isActive={activeFilter === category.name}
                onClick={() => setActiveFilter(category.name)}
              />
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            >
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          {filteredProperties.length === 0 && (
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
            >
                <p className="text-xl text-muted-foreground">No properties found.</p>
             </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
