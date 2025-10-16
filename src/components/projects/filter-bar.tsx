"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PropertyCategory } from "@/app/projects/data";

const filters: PropertyCategory[] = ['Buy', 'Rent', 'Plot', 'Commercial'];

type FilterBarProps = {
  activeFilter: PropertyCategory;
  onFilterChange: (filter: PropertyCategory) => void;
};

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="sticky top-16 z-10 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex justify-center space-x-2 border-b p-4 sm:space-x-4">
            {filters.map((filter) => (
                <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                className={cn(
                    "rounded-full transition-all duration-300",
                    activeFilter === filter
                    ? "border-primary"
                    : "border-border text-muted-foreground"
                )}
                onClick={() => onFilterChange(filter)}
                >
                {filter}
                </Button>
            ))}
        </div>
    </div>
  );
}
