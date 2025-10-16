# 🔍 Sentry Setup Guide

Este guia mostra como configurar o Sentry para monitoramento de produção do seu portfolio.

## ⏱️ Tempo Estimado: 5 minutos

---

## 📋 Pré-requisitos

- ✅ Conta no Sentry (gratuita)
- ✅ Projeto deployado na Vercel
- ✅ Acesso às configurações de ambiente da Vercel

---

## 🚀 Passo a Passo

### 1. Criar Conta no Sentry

1. Acesse: https://sentry.io/signup/
2. Escolha **"Sign up for free"**
3. Complete o cadastro com email ou GitHub

**Free Tier Inclui**:
- ✅ 5,000 errors/mês
- ✅ 10,000 performance transactions/mês
- ✅ 50 session replays/mês
- ✅ 30 dias de retenção de dados
- ✅ Projetos ilimitados

> **Suficiente para**: ~1,000 visitantes/mês ✅

---

### 2. Criar Projeto Next.js

1. No dashboard do Sentry, clique em **"Create Project"**
2. Selecione plataforma: **Next.js**
3. Escolha nome do projeto: `zer0spin-portfolio` (ou seu nome)
4. Clique em **"Create Project"**

---

### 3. Copiar DSN (Data Source Name)

Após criar o projeto, você verá a página de setup.

1. Na seção **"Configure SDK"**, copie o **DSN**
2. Deve ter formato: `https://xxxxx@o123456.ingest.sentry.io/123456`

Alternativamente, você pode acessar:
- **Settings** → **Projects** → Seu Projeto → **Client Keys (DSN)**

---

### 4. Configurar Variáveis de Ambiente na Vercel

#### Opção A: Via Dashboard Vercel

1. Acesse seu projeto na Vercel
2. Vá em **Settings** → **Environment Variables**
3. Adicione as seguintes variáveis:

```bash
# Obrigatório
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@o123456.ingest.sentry.io/123456

# Opcional (para upload de source maps)
SENTRY_ORG=your-org-slug
SENTRY_PROJECT=zer0spin-portfolio
SENTRY_AUTH_TOKEN=your-auth-token
```

4. Selecione ambientes: **Production, Preview, Development**
5. Clique em **"Save"**

#### Opção B: Via Vercel CLI

```bash
# Instalar Vercel CLI (se não tiver)
npm i -g vercel

# Login
vercel login

# Adicionar variáveis
vercel env add NEXT_PUBLIC_SENTRY_DSN
# Cole o DSN quando solicitado

# Opcional: Adicionar outras variáveis
vercel env add SENTRY_ORG
vercel env add SENTRY_PROJECT
vercel env add SENTRY_AUTH_TOKEN
```

---

### 5. (Opcional) Obter Auth Token para Source Maps

Source maps permitem ver código original nos erros (em vez de código minificado).

1. No Sentry, vá em **Settings** → **Account** → **API** → **Auth Tokens**
2. Clique em **"Create New Token"**
3. Configurações:
   - **Name**: `Vercel Deploy`
   - **Scopes**: 
     - ✅ `project:read`
     - ✅ `project:releases`
     - ✅ `org:read`
4. Clique em **"Create Token"**
5. **Copie o token** (não será mostrado novamente!)
6. Adicione na Vercel como `SENTRY_AUTH_TOKEN`

---

### 6. Deploy e Verificar

1. Faça commit das mudanças:
   ```bash
   git add .
   git commit -m "feat: add Sentry monitoring"
   git push origin main
   ```

2. Aguarde o deploy na Vercel (1-2 minutos)

3. Visite seu site e navegue por algumas páginas

4. No dashboard do Sentry, vá em **Issues** para ver se eventos estão chegando

---

## ✅ Verificação de Funcionamento

### Testar Error Tracking

Adicione temporariamente um erro de propósito:

```typescript
// src/app/page.tsx (APENAS PARA TESTE)
useEffect(() => {
  // Forçar erro para testar Sentry
  throw new Error('Sentry test error - DELETE ME');
}, []);
```

1. Deploy
2. Acesse a página
3. No Sentry, vá em **Issues**
4. Você deve ver o erro aparecer em segundos
5. **IMPORTANTE**: Remova o erro de teste depois!

### Testar Performance Monitoring

1. No Sentry, vá em **Performance**
2. Navegue pelo seu site
3. Você deve ver transações aparecendo:
   - Page loads
   - Navigation timing
   - Web Vitals (LCP, FID, CLS)

### Testar Session Replay

1. No Sentry, vá em **Replays**
2. Navegue pelo site e interaja
3. Após alguns minutos, você deve ver sessões gravadas
4. Clique para ver replay da navegação

---

## 🎨 Personalizar Configuração (Opcional)

### Ajustar Sample Rates

Edite `sentry.client.config.ts`:

```typescript
Sentry.init({
  dsn: SENTRY_DSN,
  
  // Capturar 100% de erros
  tracesSampleRate: 1.0,
  
  // Session Replay
  replaysOnErrorSampleRate: 1.0,  // 100% de sessões com erro
  replaysSessionSampleRate: 0.1,  // 10% de sessões normais
  
  // Reduzir para economizar quota (se necessário)
  // tracesSampleRate: 0.5,        // 50% de transactions
  // replaysSessionSampleRate: 0.05, // 5% de sessões
});
```

### Filtrar Erros Específicos

Adicione filtros personalizados:

```typescript
Sentry.init({
  beforeSend(event, hint) {
    // Ignorar erros de extensões de browser
    if (
      hint.originalException?.message?.includes('chrome-extension://') ||
      hint.originalException?.message?.includes('moz-extension://')
    ) {
      return null;
    }
    
    // Ignorar erros 404
    if (event.exception?.values?.[0]?.value?.includes('404')) {
      return null;
    }
    
    return event;
  },
});
```

### Adicionar Contexto Customizado

```typescript
import * as Sentry from '@sentry/nextjs';

// Adicionar user context (se tiver autenticação)
Sentry.setUser({
  id: user.id,
  email: user.email,
  username: user.username,
});

// Adicionar tags customizadas
Sentry.setTag('page_locale', 'pt-BR');
Sentry.setTag('theme', 'dark');

// Adicionar contexto extra
Sentry.setContext('performance', {
  lcp: metrics.lcp,
  fid: metrics.fid,
  cls: metrics.cls,
});
```

---

## 📊 Dashboard Recomendado

### Alerts para Configurar

1. **New Issue Alert**
   - Notifica quando erro novo aparece
   - Settings → Alerts → Create Alert
   - Trigger: "A new issue is created"
   - Action: Email

2. **Performance Degradation**
   - Notifica quando performance cai
   - Trigger: "Transaction duration increases by 50%"
   - Action: Email

3. **Error Rate Spike**
   - Notifica quando taxa de erro aumenta
   - Trigger: "Error rate increases by 200%"
   - Action: Email + Slack (opcional)

### Widgets Úteis

No dashboard customizado:

1. **Most Common Errors** - Top 5 erros por frequência
2. **Error Rate Over Time** - Gráfico de linha
3. **Performance Metrics** - LCP, FID, CLS
4. **User Impact** - Quantos usuários afetados

---

## 🔒 Boas Práticas de Segurança

### 1. Nunca Commitar Tokens

❌ **ERRADO**:
```typescript
const SENTRY_DSN = 'https://xxx@sentry.io/xxx'; // Hard-coded
```

✅ **CORRETO**:
```typescript
const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;
```

### 2. Mascarar Dados Sensíveis

```typescript
Sentry.init({
  beforeSend(event) {
    // Remover dados sensíveis
    if (event.request?.cookies) {
      delete event.request.cookies;
    }
    
    if (event.request?.headers?.['Authorization']) {
      delete event.request.headers['Authorization'];
    }
    
    return event;
  },
});
```

### 3. Session Replay Masking

Já configurado por padrão:

```typescript
Sentry.replayIntegration({
  maskAllText: true,      // Mascara todo texto
  blockAllMedia: true,    // Bloqueia imagens/vídeos
})
```

---

## 💡 Troubleshooting

### Erro: "No DSN provided"

**Causa**: Variável `NEXT_PUBLIC_SENTRY_DSN` não configurada

**Solução**:
1. Verifique `.env.local` (dev) ou Vercel (prod)
2. Certifique-se que começa com `NEXT_PUBLIC_`
3. Reinicie o servidor de dev: `npm run dev`

### Erro: "Failed to upload source maps"

**Causa**: Auth token inválido ou faltando

**Solução**:
1. Gere novo auth token no Sentry
2. Adicione `SENTRY_AUTH_TOKEN` na Vercel
3. Verifique `SENTRY_ORG` e `SENTRY_PROJECT`

### Nenhum Evento Aparecendo

**Possíveis causas**:
1. DSN incorreto - Verifique o formato
2. Bloqueado por ad-blocker - Teste em aba anônima
3. CSP bloqueando - Verifique `connect-src` no middleware
4. Ambiente dev - Sentry só funciona em produção por padrão

**Solução**:
```typescript
// Forçar Sentry em dev (para testes)
if (process.env.NODE_ENV === 'development') {
  Sentry.init({ /* config */ });
}
```

---

## 📚 Recursos Adicionais

- **Documentação Oficial**: https://docs.sentry.io/platforms/javascript/guides/nextjs/
- **Dashboard Sentry**: https://sentry.io/
- **API Reference**: https://docs.sentry.io/platforms/javascript/api/
- **Best Practices**: https://docs.sentry.io/platforms/javascript/best-practices/

---

## 🎯 Checklist Final

- [ ] Conta no Sentry criada
- [ ] Projeto Next.js criado no Sentry
- [ ] DSN copiado
- [ ] Variável `NEXT_PUBLIC_SENTRY_DSN` adicionada na Vercel
- [ ] (Opcional) Auth token gerado e adicionado
- [ ] Deploy realizado
- [ ] Erro de teste funcionou
- [ ] Eventos aparecendo no dashboard
- [ ] Alerts configurados

---

**Monitoramento profissional em 5 minutos.** 🔍

**Quota gratuita suficiente para ~1000 visitantes/mês.** ✅
