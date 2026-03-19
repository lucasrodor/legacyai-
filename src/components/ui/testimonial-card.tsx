import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar?: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-2xl border border-zinc-200",
        "bg-white shadow-sm",
        "p-6 text-start",
        "hover:border-primary/30 hover:shadow-xl transition-all duration-300",
        "max-w-[320px] sm:max-w-[340px] shrink-0",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border border-zinc-200 bg-primary/10 shrink-0">
          <AvatarFallback className="bg-transparent text-primary font-heading font-black text-2xl uppercase flex items-center justify-center">
            {author.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start translate-y-0.5">
          <h3 className="text-zinc-900 text-sm font-heading font-black leading-none uppercase italic">
            {author.name}
          </h3>
          <p className="text-[10px] md:text-xs text-primary font-heading font-bold tracking-widest uppercase">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-zinc-600 font-sans italic leading-relaxed">
        "{text}"
      </p>
    </Card>
  )
}
