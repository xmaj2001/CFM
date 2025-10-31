import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Calendar } from "lucide-react";
import eventBirthdayImg from "@/assets/event-birthday.jpg";
import eventReunionImg from "@/assets/event-reunion.jpg";
import eventChristmasImg from "@/assets/event-christmas.jpg";

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: "Aniversário do Patriarca João José",
      date: "15 de Novembro, 2025",
      time: "14:00 - 20:00",
      location: "Chácara Família José, São Paulo",
      image: eventBirthdayImg,
      daysUntil: 3,
      attendees: 42
    },
    {
      title: "Reunião Anual da Família",
      date: "25 de Dezembro, 2025",
      time: "12:00 - 22:00",
      location: "Salão de Eventos Villa José",
      image: eventReunionImg,
      daysUntil: 43,
      attendees: 87
    },
    {
      title: "Ceia de Natal",
      date: "24 de Dezembro, 2025",
      time: "19:00 - 00:00",
      location: "Casa da Matriarca Maria José",
      image: eventChristmasImg,
      daysUntil: 42,
      attendees: 65
    }
  ];

  const pastEvents = [
    {
      title: "Aniversário de 80 Anos do Vovô",
      date: "20 de Outubro, 2025",
      time: "15:00 - 22:00",
      location: "Chácara Família José",
      image: eventBirthdayImg,
      daysUntil: -23,
      attendees: 156
    },
    {
      title: "Churrasco de Verão",
      date: "15 de Setembro, 2025",
      time: "12:00 - 18:00",
      location: "Clube Recreativo",
      image: eventReunionImg,
      daysUntil: -58,
      attendees: 89
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-3">Eventos da Família</h1>
            <p className="text-muted-foreground text-lg">
              Organize e participe dos encontros familiares
            </p>
          </div>
          <Button size="lg" className="bg-primary text-primary-foreground gap-2">
            <Plus className="h-5 w-5" />
            Criar Evento
          </Button>
        </div>

        {/* Tabs for filtering */}
        <Tabs defaultValue="upcoming" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming" className="gap-2">
              <Calendar className="h-4 w-4" />
              Próximos Eventos
            </TabsTrigger>
            <TabsTrigger value="past">Eventos Passados</TabsTrigger>
            <TabsTrigger value="all">Todos os Eventos</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...upcomingEvents, ...pastEvents].map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Empty State for database connection */}
        <Card className="p-12 text-center shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border mt-8">
          <div className="max-w-md mx-auto">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Conecte um Banco de Dados
            </h3>
            <p className="text-muted-foreground mb-6">
              Para adicionar eventos reais e permitir que a família confirme presença, 
              conecte o sistema ao Lovable Cloud.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default EventsPage;
