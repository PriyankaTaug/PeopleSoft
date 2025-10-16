'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { PropertyCategory } from '@/app/projects/data';

type CategoryCardProps = {
  category: PropertyCategory;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
};

export function CategoryCard({ category, icon: Icon, isActive, onClick }: CategoryCardProps) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        'group cursor-pointer bg-white/10 p-4 text-center text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20',
        'w-32 h-32 sm:w-36 sm:h-36 flex flex-col items-center justify-center rounded-lg',
        isActive ? 'bg-primary/80 ring-2 ring-primary-foreground' : 'hover:scale-105'
      )}
    >
      <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
      <p className="mt-2 text-sm font-semibold sm:text-base">{category}</p>
    </Card>
  );
}
