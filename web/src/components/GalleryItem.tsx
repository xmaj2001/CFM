import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface GalleryItemProps {
  title: string;
  date: string;
  image: string;
  photoCount?: number;
}

const GalleryItem = ({ title, date, image, photoCount = 0 }: GalleryItemProps) => {
  return (
    <Card className="group overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-500 cursor-pointer border-border bg-card">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Photo Count Badge */}
        {photoCount > 0 && (
          <div className="absolute top-3 right-3 bg-primary-foreground/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold shadow-[var(--shadow-soft)]">
            {photoCount} fotos
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-primary-foreground font-bold text-lg mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{date}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GalleryItem;
