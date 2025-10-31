import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, CheckCircle2 } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  daysUntil: number;
  attendees?: number;
}

const EventCard = ({ title, date, time, location, image, daysUntil, attendees = 0 }: EventCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 bg-[var(--gradient-card)] border-border">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        
        {/* Days Counter Badge */}
        <div className="absolute top-4 right-4 rounded-full bg-accent text-accent-foreground px-3 py-1 text-sm font-bold shadow-[var(--shadow-soft)]">
          {daysUntil === 0 ? "Hoje" : daysUntil === 1 ? "Amanhã" : `${daysUntil} dias`}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {attendees > 0 && `${attendees} confirmados`}
          </div>
          <Button 
            size="sm" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)]"
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Confirmar Presença
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
