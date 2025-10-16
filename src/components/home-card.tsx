import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type HomeCardProps = {
  title: string;
  description: string;
  href?: string;
  isExternal?: boolean;
  isComingSoon?: boolean;
};

export function HomeCard({ title, description, href, isExternal, isComingSoon }: HomeCardProps) {
  const cardContent = (
    <Card className={cn(
      "h-full min-h-[150px] flex flex-col justify-center transition-all duration-300 ease-in-out",
      !isComingSoon && "hover:shadow-xl hover:-translate-y-1 hover:border-primary",
      isComingSoon && "bg-accent cursor-not-allowed"
    )}>
      <CardHeader className="relative h-full">
        <CardTitle className="font-headline">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {isComingSoon && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white/70 dark:bg-black/70">
            <span className="rounded-full bg-secondary px-4 py-1 text-sm font-semibold text-secondary-foreground">
              Coming Soon
            </span>
          </div>
        )}
      </CardHeader>
    </Card>
  );

  if (isComingSoon || !href) {
    return <div className="h-full">{cardContent}</div>;
  }

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="h-full block">
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={href} className="h-full block">
      {cardContent}
    </Link>
  );
}
