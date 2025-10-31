import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import MemberCard from "@/components/MemberCard";
import NotificationItem from "@/components/NotificationItem";
import GalleryItem from "@/components/GalleryItem";

import eventBirthdayImg from "@/assets/event-birthday.jpg";
import eventReunionImg from "@/assets/event-reunion.jpg";
import eventChristmasImg from "@/assets/event-christmas.jpg";
import memberDoctorImg from "@/assets/member-doctor.jpg";
import memberCeoImg from "@/assets/member-ceo.jpg";
import memberArtistImg from "@/assets/member-artist.jpg";

const Index = () => {
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

  const featuredMembers = [
    {
      name: "Dra. Maria José",
      title: "Renomada Cirurgiã Cardiovascular - Hospital das Clínicas",
      image: memberDoctorImg,
      achievement: "Prêmio Excelência Médica 2024"
    },
    {
      name: "Pedro José",
      title: "CEO & Fundador - TechVision Inovações",
      image: memberCeoImg,
      achievement: "Empreendedor do Ano 2023"
    },
    {
      name: "Ana José Silva",
      title: "Artista Plástica Reconhecida Internacionalmente",
      image: memberArtistImg,
      achievement: "Exposição no MASP 2024"
    }
  ];

  const notifications = [
    {
      type: "birth" as const,
      title: "Nascimento de Lucas José",
      description: "Bem-vindo à família! Filho de Carlos e Amanda José.",
      time: "Há 2 horas"
    },
    {
      type: "event" as const,
      title: "Novo Evento: Churrasco da Família",
      description: "Evento criado para o dia 30 de Novembro.",
      time: "Há 5 horas"
    },
    {
      type: "new-member" as const,
      title: "Novo Membro Adicionado",
      description: "Mariana José Silva entrou para a árvore genealógica.",
      time: "Há 1 dia"
    },
    {
      type: "death" as const,
      title: "Em Memória: José Carlos (1940-2025)",
      description: "Com profundo pesar, registramos a partida de nosso querido tio.",
      time: "Há 3 dias"
    },
    {
      type: "event" as const,
      title: "Confirmações Abertas",
      description: "Confirme sua presença no Aniversário do Patriarca.",
      time: "Há 1 semana"
    }
  ];

  const galleryHighlights = [
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12 space-y-16">
        {/* Upcoming Events Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Próximos Eventos</h2>
            <p className="text-muted-foreground">Não perca os encontros da família</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>

        {/* Featured Members Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Membros de Destaque</h2>
            <p className="text-muted-foreground">Celebrando conquistas e legados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMembers.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </section>

        {/* Two Column Layout: Notifications + Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Notifications Section */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Últimas Notificações</h2>
              <p className="text-muted-foreground">Fique por dentro de tudo</p>
            </div>

            <div className="bg-card rounded-xl shadow-[var(--shadow-soft)] border border-border overflow-hidden">
              <div className="divide-y divide-border">
                {notifications.map((notification, index) => (
                  <NotificationItem key={index} {...notification} />
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Highlights Section */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Galeria de Destaque</h2>
              <p className="text-muted-foreground">Memórias visuais da família</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {galleryHighlights.map((item, index) => (
                <GalleryItem key={index} {...item} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">© 2025 Família José. Todos os direitos reservados.</p>
            <p className="text-xs mt-2">Preservando nossa história para as próximas gerações.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
