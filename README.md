# GPT Audiodescritor Educacional

Landing page moderna para divulgação de um GPT desenvolvido no ChatGPT, voltado à criação de audiodescrições educacionais de imagens.

## Como personalizar

Abra o arquivo `src/App.jsx` e altere, no início do arquivo:

```js
const CONFIG = {
  gptLink: "https://chatgpt.com/g/SEU-LINK-AQUI",
  projectName: "GPT Audiodescritor Educacional",
  ownerName: "Profa. Dra. Mariella Berger Andrade",
  institution: "Cefor/Ifes",
  contactEmail: "mariellaberger@gmail.com",
};
```

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como publicar na Vercel

1. Crie um repositório no GitHub.
2. Envie estes arquivos para o repositório.
3. Acesse https://vercel.com e conecte sua conta do GitHub.
4. Clique em "Add New Project" e selecione o repositório.
5. Mantenha as configurações padrão do Vite.
6. Clique em "Deploy".

## Como publicar no GitHub Pages

Também é possível publicar no GitHub Pages, mas para React/Vite a Vercel costuma ser mais simples e profissional.
