import Navbar from "@/components/Navbar";
import GalleryItem from "@/components/GalleryItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Filter, Upload, Image as ImageIcon } from "lucide-react";
import eventBirthdayImg from "@/assets/event-birthday.jpg";
import eventReunionImg from "@/assets/event-reunion.jpg";
import eventChristmasImg from "@/assets/event-christmas.jpg";

const GalleryPage = () => {
  const galleryItems = [
    {
      title: "Festa de Aniversário - 80 Anos do Vovô",
      date: "Outubro 2025",
      image: eventBirthdayImg,
      photoCount: 156
    },
    {
      title: "Reunião Familiar no Campo",
      date: "Setembro 2025",
      image: eventReunionImg,
      photoCount: 203
    },
    {
      title: "Ceia de Natal em Família",
      date: "Dezembro 2024",
      image: eventChristmasImg,
      photoCount: 178
    },
    {
      title: "Churrasco da Família José",
      date: "Agosto 2025",
      image: eventReunionImg,
      photoCount: 124
    },
    {
      title: "Batizado da Pequena Sofia",
      date: "Julho 2025",
      image: eventBirthdayImg,
      photoCount: 89
    },
    {
      title: "Casamento de Paula e Roberto",
      date: "Junho 2025",
      image: eventChristmasImg,
      photoCount: 312
    },
    {
      title: "Aniversário de 15 Anos - Ana",
      date: "Maio 2025",
      image: eventBirthdayImg,
      photoCount: 145
    },
    {
      title: "Páscoa em Família",
      date: "Abril 2025",
      image: eventReunionImg,
      photoCount: 67
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-3">Galeria da Família</h1>
            <p className="text-muted-foreground text-lg">
              Memórias visuais e momentos especiais preservados
            </p>
          </div>
          <Button size="lg" className="bg-primary text-primary-foreground gap-2">
            <Upload className="h-5 w-5" />
            Upload de Fotos
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="p-6 mb-8 shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar por evento, data ou pessoa..."
                className="pl-10 bg-background"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border">
            <div className="text-2xl font-bold text-primary mb-1">1,234</div>
            <div className="text-sm text-muted-foreground">Fotos Totais</div>
          </Card>
          <Card className="p-4 shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border">
            <div className="text-2xl font-bold text-primary mb-1">56</div>
            <div className="text-sm text-muted-foreground">Álbuns</div>
          </Card>
          <Card className="p-4 shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border">
            <div className="text-2xl font-bold text-primary mb-1">23</div>
            <div className="text-sm text-muted-foreground">Vídeos</div>
          </Card>
          <Card className="p-4 shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border">
            <div className="text-2xl font-bold text-primary mb-1">2025</div>
            <div className="text-sm text-muted-foreground">Último Upload</div>
          </Card>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} {...item} />
          ))}
        </div>

        {/* Empty State for database connection */}
        <Card className="p-12 text-center shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border mt-12">
          <div className="max-w-md mx-auto">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
              <ImageIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Armazene Fotos Reais
            </h3>
            <p className="text-muted-foreground mb-6">
              Conecte ao Lovable Cloud para fazer upload e organizar as fotos da família 
              com armazenamento seguro e compartilhamento fácil.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default GalleryPage;
