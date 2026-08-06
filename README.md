# Futcit ⚽

 <!-- Substitua com um screenshot da sua aplicação -->

**Futcit** é uma plataforma web completa, desenvolvida para simplificar a organização e o gerenciamento de times e partidas de futebol amador. A aplicação conecta donos de time e jogadores, facilitando desde a formação de elencos até o agendamento de confrontos.

---

## 📋 Índice

*   [Sobre o Projeto](#-sobre-o-projeto)
*   [✨ Funcionalidades](#-funcionalidades)
*   [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
*   [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
*   [API](#-api)
*   [Autor](#-autor)

---

## 📖 Sobre o Projeto

A organização de times de futebol de várzea pode ser um desafio: encontrar jogadores, gerenciar o elenco, marcar jogos e manter um histórico de partidas. O Futcit nasceu para resolver esses problemas, oferecendo uma interface centralizada e intuitiva para donos de time e jogadores.

A plataforma permite que donos de time criem e administrem suas equipes, enquanto jogadores podem encontrar times para participar, criando uma comunidade vibrante e organizada em torno do futebol amador.

---

## ✨ Funcionalidades

### Para Donos de Time

*   **Autenticação e Perfil:** Cadastro e login (local e com Google), com perfil de "Dono de Time".
*   **Gerenciamento de Times:**
    *   Criação, edição e exclusão de até 2 times por dono.
    *   Upload de escudo personalizado para cada time.
    *   Cadastro de informações como nome, bairro, cidade e Instagram do time.
*   **Gestão de Elenco:**
    *   Visualização de solicitações de entrada de jogadores.
    *   Aprovação ou recusa de solicitações.
    *   Remoção de jogadores do elenco.
*   **Agendamento de Jogos:**
    *   Definição do status do time como "Disponível para desafios".
    *   Envio de propostas de jogo (desafios) para outros times disponíveis.
    *   Visualização e gerenciamento de jogos agendados e placares.

### Para Jogadores

*   **Autenticação e Perfil:** Cadastro e login (local e com Google), com perfil de "Jogador" e definição de posição em campo.
*   **Busca de Times:**
    *   Visualização de todos os times públicos da plataforma.
    *   Busca e filtro de times por nome ou localidade.
*   **Participação em Times:**
    *   Envio de solicitação para entrar em um time (limite de 2 times por jogador).
    *   Envio de solicitação para sair de um time.
    *   Visualização do status de todas as solicitações enviadas.

---

## 💻 Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias e ferramentas:

*   **Frontend:**
    *   **React:** Biblioteca principal para a construção da interface.
    *   **Vite:** Ferramenta de build e desenvolvimento rápido.
    *   **React Router:** Para gerenciamento de rotas na aplicação (SPA).
    *   **Zustand:** Gerenciador de estado global, leve e poderoso.
    *   **Axios:** Cliente HTTP para comunicação com a API.
    *   **React Hot Toast:** Para exibição de notificações e alertas.
    *   **React Icons:** Biblioteca de ícones.
    *   **CSS Personalizado:** Estilização com variáveis CSS para um tema consistente.

*   **Backend:**
    *   API RESTful desenvolvida separadamente (hospedada na Render).

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

*   [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
*   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU_USUARIO/futcit-frontend.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd futcit-frontend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Crie o arquivo de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione a URL da API.
    ```dotenv
    VITE_API_URL=https://futcit-backend.onrender.com
    ```
    *Se estiver rodando o backend localmente, use `http://localhost:8080`.*

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

6.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal).

---

## 🔗 API

Este projeto consome uma API RESTful para todas as operações de dados. O backend é um projeto separado e precisa estar em execução para que o frontend funcione corretamente. O repositório do backend pode ser encontrado em: link-para-o-repo-backend.

---

## 👨‍💻 Autor

Desenvolvido com 💙 por **Eduardo Santos**.

[!LinkedIn](https://www.linkedin.com/in/eduaardo-saantos/)
[!Instagram](https://www.instagram.com/eduaardosaantos)
[!WhatsApp](https://wa.me/5535992131330)

---