# CFM

**CFM (Connected Family Members)** é uma plataforma digital abrangente, projetada para unir o legado da genealogia familiar com a dinâmica da interação moderna. Usando o termo Kimbundo **$\text{Jindandu}$** (Parentes/Família) como inspiração e *branding*, a aplicação oferece um ecossistema seguro e envolvente para preservar a história, celebrar eventos e fortalecer os laços entre todos os membros da família.

## ✨ Visão Geral do Projeto

O **CFM** transforma a administração familiar em uma experiência colaborativa. Ele é arquitetado para garantir que os dados históricos sejam protegidos e validados, enquanto a interação diária e a criação de conteúdo acontecem de forma fluida e móvel.

A aplicação é dividida em três módulos distintos, cada um otimizado para seu público e função:

1.  **Módulo Admin (Web):** O centro de controle e moderação.
2.  **Módulo Cliente (Web):** O portal visual e de consulta para consumo de conteúdo em tela grande.
3.  **Módulo App (Mobile):** O ponto de interação e criação de conteúdo (mutações) dos membros da família.

## 🚀 Estrutura do Repositório e Tecnologias

O projeto está organizado modularmente para facilitar o desenvolvimento e a manutenção:

| Pasta Proposta | Módulo | Foco UI/UX | Tecnologias Chave |
| :--- | :--- | :--- | :--- |
| `/admin` | **Admin (Web)** | Funcional, alto contraste, focado em moderação e segurança. | [Tecnologia Web Frontend / Backend Dashboard] |
| `/client-web` | **Cliente (Web)** | Elegante, acolhedor (Hero Section), otimizado para visualização da Árvore. | [Tecnologia Web Frontend] |
| `/mobile-app` | **App (Mobile)** | Fluido, rápido, intuitivo. **Ponto das Mutações** (uploads, criação de eventos, etc.). | **React Native, Expo, NativeWind** |
| `/api-backend` | **Backend Comum** | Gestão de dados, autenticação e API unificada. | [Tecnologia Backend / DB] |

## 🎯 Funcionalidades Essenciais do CFM

### 1. Genealogia e Memória
* **Árvore Genealógica Interativa:** Visualização dinâmica da estrutura familiar com perfis detalhados e navegáveis.
* **Membros de Destaque:** Destaque para membros com contribuições notáveis ou cargos altos na estrutura familiar.
* **Integridade de Dados:** O Módulo Admin garante a validação e aprovação de todas as alterações (mutações) na árvore e perfis.

### 2. Conexão e Eventos
* **Criação de Eventos (Mobile):** Ferramenta fácil para membros agendarem e gerenciarem eventos familiares.
* **RSVP Simplificado:** Confirmação de presença rápida diretamente pelo celular.
* **Notificações em Tempo Real:** Alertas instantâneos sobre novos eventos, nascimentos ou notícias importantes.

### 3. Galeria de Mídia
* **Galeria por Evento:** Fotos e vídeos organizados em álbuns temáticos, permitindo reviver memórias.
* **Upload Imediato (Mobile):** Facilidade para adicionar fotos e vídeos a um evento diretamente após a ocorrência.

---
*Para começar a desenvolver, clone o repositório e configure as dependências em cada uma das pastas modulares.*
