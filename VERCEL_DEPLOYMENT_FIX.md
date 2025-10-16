# Correção de Deploy na Vercel (resumo)

O diagnóstico completo do conflito de peer dependencies com React 19 e a solução via `.npmrc` + `vercel.json` agora está consolidado em `docs/VERCEL_DEPLOYMENT_SOLUTION.md`, com contexto complementar no journal `docs/journal/2025-10-15-engineering.md`.

- ✅ Flags `--legacy-peer-deps` aplicadas em build/instalação
- ✅ Evidências de build local e validações de segurança
- ✅ Plano para remoção quando `next-mdx-remote` suportar React 19 oficialmente

→ Consulte os arquivos referenciados para logs, comandos e próximos passos detalhados.
