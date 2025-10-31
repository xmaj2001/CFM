import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ZoomIn, ZoomOut, Users } from "lucide-react";

const TreePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">Árvore Genealógica</h1>
          <p className="text-muted-foreground text-lg">
            Explore as conexões e gerações da Família José
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="p-6 mb-8 shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome, sobrenome ou geração..."
                className="pl-10 bg-background"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ZoomOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Tree Visualization Area */}
        <Card className="min-h-[600px] p-8 shadow-[var(--shadow-medium)] border-border bg-card">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Visualização Interativa em Desenvolvimento
            </h3>
            <p className="text-muted-foreground max-w-md mb-6">
              A árvore genealógica interativa será exibida aqui. Conecte o sistema a um banco de dados 
              para começar a adicionar membros da família e visualizar as conexões entre gerações.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground">
              Adicionar Membros da Família
            </Button>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card className="p-6 shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Gerações Registradas</div>
          </Card>
          <Card className="p-6 shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Membros Totais</div>
          </Card>
          <Card className="p-6 shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border">
            <div className="text-3xl font-bold text-primary mb-2">32</div>
            <div className="text-sm text-muted-foreground">Ramos Familiares</div>
          </Card>
          <Card className="p-6 shadow-[var(--shadow-soft)] bg-[var(--gradient-card)] border-border">
            <div className="text-3xl font-bold text-primary mb-2">1905</div>
            <div className="text-sm text-muted-foreground">Ano de Origem</div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TreePage;
