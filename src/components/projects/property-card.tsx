import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Property } from '@/app/projects/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { ArrowRight, MapPin } from 'lucide-react';

type PropertyCardProps = {
  property: Property;
  className?: string;
};

export function PropertyCard({ property, className }: PropertyCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === property.image);

  return (
    <Card className={cn("group flex flex-col overflow-hidden rounded-xl border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-2xl", className)}>
      <div className="relative overflow-hidden">
        {placeholder ? (
            <Image
                src={placeholder.imageUrl}
                alt={property.title}
                width={600}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={placeholder.imageHint}
            />
        ) : <div className="bg-muted aspect-[3/2] w-full"></div>}
         <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground backdrop-blur-sm">{property.price}</Badge>
      </div>
      <CardContent className="flex flex-1 flex-col p-6">
        <h3 className="font-headline text-xl font-bold">{property.title}</h3>
        <div className="mt-2 flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4 shrink-0" />
            <span>{property.place}</span>
        </div>
        <p className="mt-4 flex-grow text-sm text-muted-foreground line-clamp-3">{property.description}</p>
        <Button className="mt-6 w-full group-hover:bg-primary/90">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
