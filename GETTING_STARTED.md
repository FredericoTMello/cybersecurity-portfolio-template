# 🚀 Getting Started - Portfolio zer0spin

Bem-vindo ao seu portfolio Blue Team Cybersecurity! Este guia vai te ajudar a ter o site no ar em **menos de 10 minutos**.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- ✅ Node.js 18+ instalado ([Download](https://nodejs.org/))
- ✅ npm ou yarn instalado (vem com Node.js)
- ✅ Editor de código (VS Code recomendado)
- ✅ Git instalado (opcional, mas recomendado)

### Verificar Instalações

```bash
node --version   # Deve ser v18 ou superior
npm --version    # Deve ser v9 ou superior
```

---

## ⚡ Início Rápido (5 minutos)

### 1️⃣ Instalar Dependências

```bash
# No diretório do projeto
npm install
```

**Tempo estimado**: 1-2 minutos

### 2️⃣ Rodar em Desenvolvimento

```bash
npm run dev
```

Acesse: **http://localhost:3000**

**Pronto!** Seu portfolio está rodando localmente! 🎉

---

## ✏️ Personalização Básica (5 minutos)

### Passo 1: Atualizar Suas Informações

#### a) **Nome e Bio**

Abra: `src/components/sections/Home.tsx`

```typescript
// Linha 42-44: Altere seu nome
<span className="text-white">SEU NOME COMPLETO </span>
<span className="text-cyber-cyan font-mono">(seu-codinome)</span>

// Linha 51: Altere o tagline
Seu tagline profissional aqui.

// Linha 59-64: Altere a biografia
Sua biografia profissional completa...
```

#### b) **Links de Contato**

Abra: `src/components/sections/Contact.tsx`

```typescript
// Linha 15-36: Atualize seus links
href: 'https://linkedin.com/in/SEU-PERFIL',
href: 'https://github.com/SEU-USUARIO',
href: 'mailto:SEU-EMAIL@domain.com',
```

#### c) **SEO e Meta Tags**

Abra: `src/app/layout.tsx`

```typescript
// Linha 15-19: Atualize informações SEO
title: 'Seu Nome (codinome) - Blue Team Cybersecurity',
description: 'Sua descrição personalizada...',
keywords: ['suas', 'palavras', 'chave'],
authors: [{ name: 'Seu Nome', url: 'https://seu-site.com' }],
```

### Passo 2: Salvar e Ver Mudanças

O servidor de desenvolvimento atualiza automaticamente! Só salvar e recarregar o navegador.

---

## 🎨 Personalização Avançada (10+ minutos)

### Adicionar Projetos

Abra: `src/components/sections/Projects.tsx`

```typescript
// Adicione após linha 20
{
  title: 'Meu Projeto Incrível',
  description: 'Descrição detalhada do que o projeto faz...',
  image: '/images/projects/meu-projeto.svg',
  status: 'In Use',  // Opções: 'In Use', 'Open Source', 'POC'
  statusColor: 'bg-cyber-green',  // ou bg-cyber-cyan, bg-cyber-orange
  tags: ['Python', 'SIEM', 'Blue Team', 'Automation'],
  links: {
    github: 'https://github.com/usuario/projeto',
    demo: 'https://demo.projeto.com'  // Opcional
  }
}
```

### Adicionar Certificações

Abra: `src/components/sections/Formation.tsx`

```typescript
// Adicione após linha 13
{
  title: 'Sua Certificação',
  organization: 'Organização Emissora',
  description: 'Descrição do valor desta certificação...',
  icon: '🔒',  // Escolha um emoji
  date: '2024'  // Opcional
}
```

### Adicionar Experiências

Abra: `src/components/sections/Experience.tsx`

```typescript
// Adicione após linha 15
{
  title: 'Seu Cargo',
  company: 'Nome da Empresa',
  period: '2023 - Presente',
  description: 'Suas responsabilidades e contribuições...',
  icon: <Shield size={20} />,
  achievements: [
    'Sua conquista 1',
    'Sua conquista 2',
    'Sua conquista 3'
  ]
}
```

---

## 🌍 Configurar Traduções

### Português

Edite: `src/messages/pt-BR.json`

```json
{
  "home": {
    "title": "Seu Título",
    "tagline": "Sua Tagline"
  }
}
```

### Inglês

Edite: `src/messages/en.json`

```json
{
  "home": {
    "title": "Your Title",
    "tagline": "Your Tagline"
  }
}
```

---

## 🚀 Deploy (10 minutos)

### Opção 1: Vercel (Recomendado)

**Método 1: Via Interface Web**

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe o repositório do GitHub
4. Clique em "Deploy"
5. Pronto! URL disponível em 2 minutos

**Método 2: Via CLI**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login e deploy
vercel login
vercel

# Para produção
vercel --prod
```

### Opção 2: Netlify

**Via Interface:**

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Arraste a pasta do projeto
3. Ou conecte ao GitHub
4. Deploy automático!

**Via CLI:**

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login e deploy
netlify login
netlify deploy --prod
```

---

## 📊 Testar Build de Produção

Antes de fazer deploy, teste localmente:

```bash
# Build de produção
npm run build

# Rodar build
npm run start
```

Acesse: **http://localhost:3000**

Se tudo funcionar, está pronto para deploy! ✅

---

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento (porta 3000)

# Produção
npm run build        # Build otimizado
npm run start        # Servidor de produção

# Qualidade
npm run lint         # Verificar código com ESLint
```

---

## 📁 Estrutura do Projeto

```
zer0spin/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Layout + SEO
│   │   ├── page.tsx           # Página inicial
│   │   └── globals.css        # Estilos globais
│   ├── components/            # Componentes React
│   │   ├── Header.tsx         # Navegação
│   │   ├── FloatingNav.tsx    # Menu flutuante
│   │   └── sections/          # Seções
│   │       ├── Home.tsx       # Hero
│   │       ├── Projects.tsx   # Projetos
│   │       ├── Formation.tsx  # Certificações
│   │       ├── Experience.tsx # Timeline
│   │       ├── Blog.tsx       # Blog
│   │       └── Contact.tsx    # Contato
│   ├── messages/              # Traduções
│   │   ├── pt-BR.json        # Português
│   │   └── en.json           # Inglês
│   └── i18n.ts               # Config i18n
├── public/                    # Assets
├── tailwind.config.ts         # Config Tailwind
├── next.config.js            # Config Next.js
├── package.json              # Dependências
└── README.md                 # Docs
```

---

## 🎨 Personalizar Cores

Edite: `tailwind.config.ts`

```typescript
colors: {
  'cyber-cyan': '#1ad1ff',     // Azul neon
  'cyber-green': '#00ffae',    // Verde neon
  'cyber-dark': '#0a1929',     // Background
  // Adicione mais cores...
}
```

---

## 📝 Checklist de Lançamento

Antes de fazer o deploy final:

- [ ] ✅ Nome e informações pessoais atualizadas
- [ ] ✅ Links de contato funcionando (LinkedIn, GitHub, Email)
- [ ] ✅ Pelo menos 3 projetos adicionados
- [ ] ✅ Certificações atualizadas
- [ ] ✅ Experiências profissionais completas
- [ ] ✅ Traduções PT/EN revisadas
- [ ] ✅ Build local funcionando (`npm run build`)
- [ ] ✅ Testado em desktop
- [ ] ✅ Testado em mobile
- [ ] ✅ Favicon personalizado (opcional)
- [ ] ✅ OG image para redes sociais (opcional)

---

## 🐛 Problemas Comuns

### Porta 3000 Ocupada

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Linux/Mac:**
```bash
lsof -i :3000
kill -9 <PID>
```

### Erro ao Instalar

```bash
# Limpar cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build Falha

```bash
# Limpar e rebuildar
rm -rf .next
npm run build
```

---

## 📚 Próximos Passos

1. ✅ **Personalizar**: Nome, links, projetos
2. ✅ **Testar**: Build local + responsividade
3. ✅ **Deploy**: Vercel ou Netlify
4. 🔜 **Domínio**: Configurar domínio personalizado
5. 🔜 **Analytics**: Adicionar Google Analytics ou Plausible
6. 🔜 **Blog**: Começar a publicar artigos técnicos

---

## 📖 Documentação Completa

- **[README.md](README.md)** - Visão geral completa
- **[QUICKSTART.md](QUICKSTART.md)** - Guia rápido de 5 minutos
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - Personalização avançada
- **[DEPLOY.md](DEPLOY.md)** - Guias detalhados de deploy
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Resumo do projeto

---

## 🆘 Precisa de Ajuda?

### Recursos
- 📚 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [TailwindCSS Docs](https://tailwindcss.com/docs)
- 🎭 [Framer Motion](https://www.framer.com/motion/)

### Suporte
- 💬 Abra uma [issue no GitHub](https://github.com/zer0spin/portfolio/issues)
- 📧 Email: zer0spinsec@proton.me
- 💼 LinkedIn: linkedin.com/in/marcos-oliveira

---

## 🎉 Você Conseguiu!

Se seguiu todos os passos, agora você tem:

✅ Portfolio profissional Blue Team rodando
✅ Design cyber minimalista único
✅ 6 seções completas e responsivas
✅ Suporte a PT-BR e EN
✅ Pronto para impressionar recrutadores! 🚀

---

**Defendendo sistemas. Conectando pessoas. Inspirando a próxima geração do Blue Team.** 🛡️

*Bora colocar no ar! 💪*
