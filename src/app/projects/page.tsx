"use client";

import { useState } from 'react';
import { AppHeader } from '@/components/app-header';
import { FilterBar } from '@/components/projects/filter-bar';
import { PropertyCard } from '@/components/projects/property-card';
import { properties, type PropertyCategory } from './data';
import { AnimatePresence, motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

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

      <section className="bg-background py-12 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Find Your Dream Property
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our curated list of properties across Kerala.
            </p>
            <div className="relative mt-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name or location..."
                className="w-full rounded-full bg-background p-6 pl-12 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

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
