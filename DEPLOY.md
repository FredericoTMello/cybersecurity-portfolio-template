# 🚀 Guia de Deploy - Portfolio zer0spin

Este guia fornece instruções detalhadas para fazer deploy do portfolio Blue Team em diferentes plataformas.

## 📋 Pré-requisitos

- Node.js 18+ instalado
# Guia de Deploy (consolidado)

O fluxo completo de deploy, rollback, monitoramento e checklists está documentado em `docs/DEPLOYMENT.md`.

- ✅ Pipeline para `main`, previews e hooks manuais
- ✅ Pré-flight de lint/build e checklist final
- ✅ Passo a passo de rollback seguro
- ✅ Monitoramento com Vercel Analytics e Sentry

→ Acesse `docs/DEPLOYMENT.md` para instruções detalhadas. Registros operacionais recentes continuam em `docs/journal/` com datas específicas.
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## ☁️ Deploy em VPS (AWS, DigitalOcean, etc.)

### 1. Preparar o Servidor

```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar PM2 (process manager)
sudo npm install -g pm2

# Instalar Nginx (opcional, para reverse proxy)
sudo apt install nginx -y
```

### 2. Clonar e Configurar Projeto

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/zer0spin-portfolio.git
cd zer0spin-portfolio

# Instalar dependências
npm install

# Build de produção
npm run build
```

### 3. Rodar com PM2

```bash
# Iniciar aplicação
pm2 start npm --name "zer0spin-portfolio" -- start

# Salvar configuração
pm2 save

# Configurar startup automático
pm2 startup
```

### 4. Configurar Nginx (Opcional)

Criar arquivo de configuração em `/etc/nginx/sites-available/zer0spin`:

```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Ativar configuração:

```bash
sudo ln -s /etc/nginx/sites-available/zer0spin /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5. Configurar HTTPS com Let's Encrypt

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obter certificado SSL
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com

# Renovação automática está configurada por padrão
```

## 🔐 Variáveis de Ambiente

Se você adicionar integrações que precisam de API keys, crie um arquivo `.env.local`:

```env
# Exemplo de variáveis (se necessário no futuro)
# NEXT_PUBLIC_ANALYTICS_ID=seu-id-analytics
# NEXT_PUBLIC_CONTACT_EMAIL=zer0spinsec@proton.me
```

**IMPORTANTE**: Nunca commite `.env.local` no Git!

## 📊 Monitoramento e Analytics

### Configurar Analytics (Opcional)

1. **Google Analytics**:
   - Adicione o código no `layout.tsx`

2. **Plausible Analytics** (Privacy-friendly):
   - Mais recomendado para portfólio profissional
   - Adicione o script no `layout.tsx`

### Monitorar Performance

- **Vercel Analytics**: Habilitado automaticamente na Vercel
- **Lighthouse**: Rode auditorias regulares
- **Uptime Monitoring**: Use serviços como UptimeRobot ou Better Uptime

## 🔄 CI/CD Automatizado

### GitHub Actions (Exemplo)

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🎯 Domínio Customizado

### Vercel

1. Vá em Settings > Domains
2. Adicione seu domínio
3. Configure DNS records conforme instruções

### Netlify

1. Vá em Domain settings
2. Adicione custom domain
3. Configure DNS records conforme instruções

## 🐛 Troubleshooting

### Build Falha

```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Problemas de Permissão

```bash
# Dar permissões corretas
chmod -R 755 .
```

### Port Já em Uso

```bash
# Encontrar processo usando porta 3000
lsof -i :3000

# Matar processo
kill -9 PID
```

## 📝 Checklist Pós-Deploy

- [ ] Site está acessível via HTTPS
- [ ] Todas as seções estão carregando corretamente
- [ ] Links de contato funcionam
- [ ] Menu flutuante funciona em mobile
- [ ] Traduções PT/EN funcionam
- [ ] Animações estão suaves
- [ ] Performance score > 90 (Lighthouse)
- [ ] SEO score > 90 (Lighthouse)
- [ ] Accessibility score > 90 (Lighthouse)

## 🆘 Suporte

Se encontrar problemas durante o deploy:

1. Verifique logs de build
2. Consulte documentação da plataforma
3. Abra issue no GitHub do projeto
4. Entre em contato: zer0spinsec@proton.me

---

**Defendendo sistemas. Conectando pessoas. Inspirando a próxima geração do Blue Team.** 🛡️
