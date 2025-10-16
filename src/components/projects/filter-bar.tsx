"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PropertyCategory } from "@/app/projects/data";
import { Building, Home, LandPlot, Warehouse } from "lucide-react";

const filters: { name: PropertyCategory, icon: React.ElementType }[] = [
    { name: 'Buy', icon: Home },
    { name: 'Rent', icon: Building },
    { name: 'Plot', icon: LandPlot },
    { name: 'Commercial', icon: Warehouse },
];

type FilterBarProps = {
  activeFilter: PropertyCategory;
  onFilterChange: (filter: PropertyCategory) => void;
};

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="sticky top-16 z-10 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex justify-center p-2">
            <div className="flex space-x-2 rounded-full bg-muted p-1">
                {filters.map((filter) => (
                    <Button
                        key={filter.name}
                        variant={activeFilter === filter.name ? 'default' : 'ghost'}
                        className={cn(
                            "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-6",
                            activeFilter === filter.name
                            ? "bg-primary text-primary-foreground shadow"
                            : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
                        )}
                        onClick={() => onFilterChange(filter.name)}
                    >
                        <filter.icon className="mr-2 h-5 w-5" />
                        {filter.name}
                    </Button>
                ))}
            </div>
        </div>
    </div>
  );
}
