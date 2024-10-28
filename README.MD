# 1. Clone o repositório (se estiver usando Git) ou crie uma nova pasta
mkdir sherlock-website
cd sherlock-website

# 2. Inicialize um novo projeto Node.js e instale as dependências
npm create vite@latest . -- --template react-ts
npm install

# 3. Instale as dependências adicionais
npm install lucide-react

# 4. Instale as dependências de desenvolvimento
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
-----------------------------------------------------------------------
# Inicie o servidor de desenvolvimento
npm run dev
-----------------------------------------------------------------------
O site estará disponível em http://localhost:5173

Para build de produção:


npm run build