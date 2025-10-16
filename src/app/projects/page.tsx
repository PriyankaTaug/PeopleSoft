"use client";

import { useState } from 'react';
import { AppHeader } from '@/components/app-header';
import { FilterBar } from '@/components/projects/filter-bar';
import { PropertyCard } from '@/components/projects/property-card';
import { properties, type PropertyCategory } from './data';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<PropertyCategory>('Buy');

  const filteredProperties = properties.filter(
    (property) => property.category === activeFilter
  );

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AppHeader />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
