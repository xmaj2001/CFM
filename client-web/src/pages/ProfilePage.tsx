import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Phone, MapPin, Calendar, Edit, Save, Camera } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">Meu Perfil</h1>
          <p className="text-muted-foreground text-lg">
            Gerencie suas informações pessoais e preferências
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-[var(--shadow-medium)] bg-[var(--gradient-card)] border-border">
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-4">
                  <Avatar className="h-32 w-32 border-4 border-primary/20">
                    <AvatarImage src="" alt="Foto de perfil" />
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full h-10 w-10 shadow-[var(--shadow-medium)]"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-1">João da Silva José</h2>
                <p className="text-muted-foreground mb-4">Membro desde 2020</p>

                {/* Quick Stats */}
                <div className="w-full space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Geração</span>
                    <span className="text-sm font-semibold text-foreground">4ª Geração</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Eventos Confirmados</span>
                    <span className="text-sm font-semibold text-foreground">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Fotos Compartilhadas</span>
                    <span className="text-sm font-semibold text-foreground">156</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <Card className="shadow-[var(--shadow-medium)] bg-[var(--gradient-card)] border-border">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
                  <TabsTrigger 
                    value="personal" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Informações Pessoais
                  </TabsTrigger>
                  <TabsTrigger 
                    value="genealogy"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Genealogia
                  </TabsTrigger>
                  <TabsTrigger 
                    value="preferences"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Preferências
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        Nome
                      </Label>
                      <Input id="firstName" placeholder="João" className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input id="lastName" placeholder="José" className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="joao@exemplo.com" className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        Telefone
                      </Label>
                      <Input id="phone" placeholder="(11) 98765-4321" className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="birthdate" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        Data de Nascimento
                      </Label>
                      <Input id="birthdate" type="date" className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        Localização
                      </Label>
                      <Input id="location" placeholder="São Paulo, SP" className="bg-background" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografia</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Conte um pouco sobre você..."
                      className="min-h-[120px] bg-background"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-border">
                    <Button variant="outline">
                      <Edit className="mr-2 h-4 w-4" />
                      Cancelar
                    </Button>
                    <Button className="bg-primary text-primary-foreground">
                      <Save className="mr-2 h-4 w-4" />
                      Salvar Alterações
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="genealogy" className="p-6">
                  <div className="text-center py-12">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Informações Genealógicas
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      Conecte ao banco de dados para adicionar informações sobre pais, cônjuge, 
                      filhos e posição na árvore genealógica.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="preferences" className="p-6">
                  <div className="text-center py-12">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Preferências do Sistema
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      Configure notificações, privacidade e outras preferências do sistema.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
