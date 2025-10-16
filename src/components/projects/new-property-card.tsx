
import { Card, CardContent } from '@/components/ui/card';
import type { Property } from '@/app/projects/data';
import { cn } from '@/lib/utils';
import { Building, Home, Land, Warehouse } from 'lucide-react';

type PropertyCardProps = {
  property: Property;
  className?: string;
  color: 'blue' | 'white';
};

const categoryIcons = {
  'Buy': Home,
  'Rent': Building,
  'Plot': Land,
  'Commercial': Warehouse,
}

export function NewPropertyCard({ property, className, color }: PropertyCardProps) {

  const colorClasses = {
    blue: 'bg-[#009ACD] text-white',
    white: 'bg-white text-black shadow-lg',
  };

  const Icon = categoryIcons[property.title as keyof typeof categoryIcons] || Home;

  return (
    <Card className={cn("group w-56 h-64 shrink-0 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-3xl", colorClasses[color], className)}>
      <CardContent className="p-6 flex flex-col justify-between items-start h-full">
        <div>
          <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", color === 'blue' ? 'bg-white/20' : 'bg-gray-100')}>
            <Icon className={cn("w-6 h-6", color === 'blue' ? 'text-white' : 'text-[#009ACD]')} />
          </div>
          <h3 className="font-semibold text-xl">{property.title}</h3>
          <p className={cn("text-sm mt-1", color === 'blue' ? 'text-white/80' : 'text-gray-500' )}>200+ deals</p>
        </div>
        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center self-end", color === 'blue' ? 'bg-white/20 text-white' : 'bg-gray-100 text-[#009ACD]')}>
          <span>→</span>
        </div>
      </CardContent>
    </Card>
  );
}
