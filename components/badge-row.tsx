import { Badge } from "@/components/ui/badge";

interface BadgeRowProps {
  items: string[];
  variant?: "default" | "secondary" | "outline";
}

export function BadgeRow({ items, variant = "secondary" }: BadgeRowProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant={variant} className="text-sm px-3 py-1">
          {item}
        </Badge>
      ))}
    </div>
  );
}

