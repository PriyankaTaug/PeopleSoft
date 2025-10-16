
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
      <CardContent className="p-4">
        {color === 'white' && placeholder && (
          <div className="relative h-24 w-full mb-2 rounded-lg overflow-hidden grid grid-cols-2 gap-px">
            <Image
                src={placeholder.imageUrl}
                alt={property.title}
                width={100}
                height={100}
                className="object-cover w-full h-full"
                data-ai-hint={placeholder.imageHint}
            />
            <div className="grid grid-rows-2 gap-px">
                 <Image
                    src="https://picsum.photos/seed/sub1/100/50"
                    alt="sub image 1"
                    width={100}
                    height={50}
                    className="object-cover w-full h-full"
                />
                 <Image
                    src="https://picsum.photos/seed/sub2/100/50"
                    alt="sub image 2"
                    width={100}
                    height={50}
                    className="object-cover w-full h-full"
                />
            </div>
          </div>
        )}
        <h3 className="font-semibold truncate">{property.title}</h3>
        <div className="flex justify-between text-sm mt-2">
          <span className="text-xs">Draw total</span>
          <span className="font-bold">{property.price}</span>
        </div>
        <div className="flex justify-between items-center text-xs mt-1">
          <span>Funded</span>
          <span>06 Feb 2023</span>
        </div>
      </CardContent>
    </Card>
  );
}
