import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Property } from '@/app/projects/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

type PropertyCardProps = {
  property: Property;
  className?: string;
};

export function PropertyCard({ property, className }: PropertyCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === property.image);

  return (
    <Card className={cn("flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg", className)}>
      <div className="relative aspect-[3/2] w-full">
        {placeholder ? (
            <Image
                src={placeholder.imageUrl}
                alt={placeholder.description}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                data-ai-hint={placeholder.imageHint}
            />
        ) : <div className="bg-muted h-full w-full"></div>}
      </div>
      <CardHeader>
        <CardTitle className="font-headline">{property.title}</CardTitle>
        <CardDescription>{property.place}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">{property.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-accent/50 pt-4">
        <p className="text-lg font-semibold text-primary">{property.price}</p>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  );
}
