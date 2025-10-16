
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Property } from '@/app/projects/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

type PropertyCardProps = {
  property: Property;
  className?: string;
  color: 'yellow' | 'white' | 'purple';
};

export function NewPropertyCard({ property, className, color }: PropertyCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === property.image);

  const colorClasses = {
    yellow: 'bg-[#FFD700] text-black',
    white: 'bg-white/80 text-black backdrop-blur-md',
    purple: 'bg-purple-200 text-black',
  };

  return (
    <Card className={cn("group w-56 shrink-0 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-2xl", colorClasses[color], className)}>
      <CardContent className="p-4 flex flex-col justify-center items-center h-full">
        <h3 className="font-semibold text-lg">{property.title}</h3>
      </CardContent>
    </Card>
  );
}
