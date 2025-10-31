import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

interface MemberCardProps {
  name: string;
  title: string;
  image: string;
  achievement?: string;
}

const MemberCard = ({ name, title, image, achievement }: MemberCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-500 hover:-translate-y-2 bg-[var(--gradient-card)] border-border cursor-pointer">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          {achievement && (
            <div className="flex-shrink-0">
              <Award className="h-5 w-5 text-accent" />
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {title}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Card>
  );
};

export default MemberCard;
