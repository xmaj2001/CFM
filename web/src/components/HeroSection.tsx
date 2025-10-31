import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Heart } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Família José reunida"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl text-primary-foreground">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 text-sm border border-primary-foreground/20">
            <Heart className="h-4 w-4" />
            <span>Celebrando Nossa História desde 1905</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Família José:
            <br />
            <span className="text-accent-foreground/90">Celebrando Nossa História</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed max-w-2xl">
            Unidos por laços eternos, construindo memórias e preservando nosso legado para as próximas gerações.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm text-primary-foreground/80">Membros Cadastrados</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl font-bold">120+</div>
                <div className="text-sm text-primary-foreground/80">Anos de História</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 group"
          >
            Explorar a Árvore Genealógica
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
