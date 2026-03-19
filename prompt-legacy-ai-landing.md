# PROMPT — Landing Page Legacy AI (TwoLegacy)

Crie uma landing page completa, de altíssima qualidade visual e 100% focada em conversão para o produto **Legacy AI**, da agência de marketing **TwoLegacy Company**.

---

## CONTEXTO DO PRODUTO

**Legacy AI** é um agente de inteligência artificial comercial que atua via **WhatsApp**, desenvolvido para o setor de **hotelaria e eventos** (hotéis, pousadas, resorts, chalés, cabanas, chácaras, espaços para eventos).

O agente qualifica leads que chegam via WhatsApp, consulta disponibilidade e conduz o contato até o fechamento da reserva — podendo encaminhar para o proprietário/humano fechar, ou integrar com um motor de reservas diretas para automação completa.

É um serviço personalizado. Implementação em **15 dias úteis**.

---

## OBJETIVO DA PÁGINA

Capturar leads qualificados via formulário. A página deve ter **um único objetivo**: fazer o visitante preencher o formulário de qualificação e clicar no CTA final.

---

## DESIGN SYSTEM

**Cores:**
```css
--primary: #8B1A2B;        /* vermelho escuro / crimson */
--primary-hover: #6e1422;
--black: #000000;
--white: #FFFFFF;
--gray-light: #F5F5F5;
--gray-text: #666666;
--border: rgba(255,255,255,0.1);
```

**Tipografia:**
- Headlines: `Syne` (Google Fonts) — bold/extrabold, impactante
- Corpo: `DM Sans` (Google Fonts) — limpo, moderno, legível
- Destaques em vermelho `#8B1A2B` sempre nas palavras-chave de dor ou solução

**Tom visual:**
- Contraste alto entre seções: alternância entre fundo branco (#FFF) e fundo preto (#000)
- Elementos tech sutis: linhas de grid, círculos com glow, gradientes suaves
- Sem excesso de decoração — cada elemento existe por um motivo

---

## STACK TÉCNICA

- HTML5 semântico
- Tailwind CSS via CDN (`https://cdn.tailwindcss.com`)
- Vanilla JavaScript (sem frameworks)
- Google Fonts: Syne + DM Sans
- AOS.js para animações de scroll (`https://unpkg.com/aos@2.3.1/dist/aos.js`)
- Lucide Icons via CDN para ícones SVG

**Arquivo único:** tudo em um `index.html`. CSS customizado em `<style>` no `<head>`. JS no final do `<body>`.

---

## ESTRUTURA DA PÁGINA (seção por seção)

---

### SEÇÃO 1 — HERO (fundo preto)

Inspiração: componente `HeroGeometric` com formas geométricas animadas flutuando no fundo. Implemente isso com CSS puro: elipses/círculos absolutamente posicionados com `border-radius: 50%`, `opacity` baixa, bordas sutis, e animação `float` em CSS keyframes (subir/descer suavemente).

**Conteúdo:**
- Badge no topo: `» Legacy AI` (ícone chevron duplo em vermelho + texto branco)
- Headline principal (2 linhas):
  ```
  Você está perdendo
  RESERVAS ENQUANTO DORME
  ```
  Linha 1: branco, peso 700
  Linha 2: vermelho `#8B1A2B`, peso 900, tamanho maior
- Subtítulo: `"A cada minuto sem resposta, outra hospedagem fecha a reserva. Sua IA atende em segundos, todos os dias do ano."`
- CTA primário: botão vermelho com efeito shimmer (animação de brilho passando pelo botão via CSS `@keyframes shimmer` com `background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)` e `background-size: 200%`)
  Texto: `"CONHEÇA A IA COMERCIAL"`
- Scroll indicator animado (seta ou dot pulsando) na base

**Efeito especial no hero:** implemente um efeito de texto com contador animado em JS que conta de 0 até 82 ao entrar na tela, mostrando `"82% dos hóspedes reservam com a PRIMEIRA hospedagem que responde"` — o número conta rápido e para em 82.

---

### SEÇÃO 2 — BARRA DE PROVA SOCIAL (fundo vermelho `#8B1A2B`)

Barra horizontal com 3 dados separados por divisores verticais brancos:

| Dado | Detalhe |
|------|---------|
| 82% dos hóspedes | reservam com quem responde primeiro |
| Atendimento em < 10s | enquanto você dorme |
| Implementação em 15 dias | seu negócio já vendendo com IA |

Fonte branca, negrito nos números. Layout flex, responsivo (empilha no mobile).

---

### SEÇÃO 3 — O PROBLEMA (fundo branco)

Título seção: `"Se a reserva depende de você..."` (preto)
Subtítulo grande: `"você não tem escala"` (vermelho, extra bold)

**3 cards de dor** em grid (3 colunas desktop, 1 mobile) com ícone Lucide + título + descrição:

1. 🕐 **Você não responde 24h** — "Leads chegam de madrugada, no fim de semana, no feriado. Sem resposta = reserva perdida."
2. 📱 **WhatsApp cheio ≠ Agenda cheia** — "Volume não é conversão. Mensagens sem qualificação viram tempo desperdiçado."
3. 📉 **Depois de 5 minutos, a chance despenca** — "Estudos mostram que o interesse cai drasticamente em minutos. Velocidade vence."

Cards com sombra sutil, borda esquerda vermelha, hover que levanta o card (transform translateY + shadow maior).

---

### SEÇÃO 4 — A SOLUÇÃO (fundo preto)

Badge: `"A SOLUÇÃO"`
Título: `"Sua hospedagem vendendo 24h, sem contratar ninguém"`
Subtítulo: `"A Legacy AI é um agente de vendas treinado exclusivamente para hotelaria — que atende, qualifica e fecha reservas no WhatsApp, enquanto você faz o que importa."`

**Implementar Bento Grid** (inspirado no componente BentoGrid do 21st.dev):
Grid assimétrico com cards de tamanhos variados. Fundo dos cards: `#111111` com borda `rgba(255,255,255,0.08)`.

Cards:
- **Grande (col-span-2):** `"Responde em segundos"` — ícone raio — "Atende qualquer lead instantaneamente, 24 horas por dia, 7 dias por semana, 365 dias por ano."
- **Pequeno:** `"Qualifica leads"` — ícone filtro — "Separa curioso de quem quer reservar de verdade."
- **Pequeno:** `"Consulta disponibilidade"` — ícone calendário — "Integrado ao seu sistema ou calendário."
- **Grande (col-span-2):** `"Personalizado para você"` — ícone settings — "Cada implementação é única. Sua IA aprende seu negócio, seus preços, sua linguagem."
- **Médio:** `"Encaminha para fechar"` — ícone handshake — "Leva o lead pronto para você ou para o motor de reservas diretas."

Hover nos cards: borda superior vermelha aparece + leve brilho interno.

---

### SEÇÃO 5 — COMO FUNCIONA (fundo branco)

Título: `"Do lead à reserva em segundos"`

**Timeline horizontal** (3 passos com linha conectando, desktop) / vertical (mobile):

```
[1] Lead chega no WhatsApp
    → IA responde em < 10 segundos

[2] IA qualifica e apresenta opções
    → Pergunta datas, número de pessoas, preferências

[3] Reserva fechada
    → Encaminha para humano ou motor de reservas diretas
```

Cada passo: círculo numerado vermelho, título bold, descrição menor. Linha conectando os círculos (border-top dashed em vermelho). Animação de entrada com AOS `fade-up` com delay escalonado.

---

### SEÇÃO 6 — PARA QUEM É (fundo `#F5F5F5`)

Título: `"Feito para quem vive de hospitalidade"`

**5 cards horizontais** com ícone + label, scroll horizontal no mobile:

- 🏨 Hotéis & Pousadas
- 🌴 Chalés & Cabanas
- 🎪 Chácaras & Eventos
- 🏖️ Resorts
- 🏡 Espaços para Locação

Cards com fundo branco, sombra, hover com borda vermelha.

---

### SEÇÃO 7 — DEPOIMENTOS (fundo preto)

Título: `"O que nossos clientes dizem"`
Subtítulo: `"Hospedagens que já vendem com IA enquanto dormem"`

**Marquee infinito horizontal** (carrossel automático sem parar, pausa no hover):

Implemente com CSS `@keyframes marquee` que translada o container de 0 a -100% continuamente:
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  animation: marquee 35s linear infinite;
  width: max-content;
}
.marquee-track:hover {
  animation-play-state: paused;
}
```

O container tem `overflow: hidden`. Duplique os cards no HTML (os mesmos 6 cards duas vezes seguidas) para criar o loop infinito perfeito.

**Gradiente fade nas bordas** (efeito de desvanecimento):
```css
.marquee-container::before,
.marquee-container::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: 120px;
  z-index: 2;
  pointer-events: none;
}
.marquee-container::before { left: 0; background: linear-gradient(to right, #000, transparent); }
.marquee-container::after  { right: 0; background: linear-gradient(to left, #000, transparent); }
```

**6 depoimentos fictícios** (cards com fundo `#111`, borda `rgba(255,255,255,0.08)`, border-radius `12px`, padding `24px`, largura fixa `300px`):

Card 1:
- Avatar: iniciais "MF" em círculo vermelho
- Nome: **Marcos Ferreira**
- Cargo/Negócio: Proprietário — Pousada Vale Verde, MG
- Estrelas: ★★★★★
- Texto: *"Antes eu perdia reserva toda semana por não responder a tempo. Desde que implementei a Legacy AI, meu WhatsApp responde sozinho e minha taxa de conversão triplicou em 2 meses."*

Card 2:
- Avatar: iniciais "CA" em círculo vermelho
- Nome: **Camila Andrade**
- Cargo/Negócio: Gestora — Chalé dos Pinheiros, SC
- Estrelas: ★★★★★
- Texto: *"Achei que meus hóspedes iam perceber que era uma IA. Não perceberam. Continuam elogiando o atendimento. A IA fala exatamente como eu quero."*

Card 3:
- Avatar: iniciais "RP" em círculo vermelho
- Nome: **Ricardo Pimentel**
- Cargo/Negócio: Sócio — Resort Águas Claras, BA
- Estrelas: ★★★★★
- Texto: *"Implementação foi em 12 dias. No primeiro mês já fechamos 18 reservas que vieram direto do WhatsApp, sem intervenção humana. ROI imediato."*

Card 4:
- Avatar: iniciais "JL" em círculo vermelho
- Nome: **Juliana Lima**
- Cargo/Negócio: Proprietária — Espaço para Eventos Jardim Real, SP
- Estrelas: ★★★★★
- Texto: *"Minha agenda de eventos estava pela metade. Hoje está lotada com 3 meses de antecedência. A IA qualifica tão bem que só chega pra mim quem realmente quer fechar."*

Card 5:
- Avatar: iniciais "TS" em círculo vermelho
- Nome: **Thiago Souza**
- Cargo/Negócio: Proprietário — Cabanas do Rio, GO
- Estrelas: ★★★★★
- Texto: *"Eu dormia preocupado com leads que não respondia. Hoje durmo tranquilo. A IA trabalha enquanto eu descanso e de manhã já tem reservas confirmadas."*

Card 6:
- Avatar: iniciais "AF" em círculo vermelho
- Nome: **Ana Figueiredo**
- Cargo/Negócio: Diretora — Hotel Boutique Cenário, RJ
- Estrelas: ★★★★★
- Texto: *"A TwoLegacy entendeu o nosso posicionamento premium. A IA não só atende — ela vende experiência, assim como a gente faz pessoalmente. Superou todas as expectativas."*

**Estilo dos cards de depoimento:**
- Fundo: `#111111`
- Borda: `1px solid rgba(255,255,255,0.08)`
- Border-radius: `12px`
- Padding: `24px`
- Width fixa: `300px`
- Margin-right: `20px` (gap entre cards)
- Topo do card: foto/avatar (círculo 48px com iniciais em vermelho) + nome + cargo lado a lado
- Estrelas em amarelo `#F59E0B`
- Texto do depoimento em `rgba(255,255,255,0.7)`, tamanho 14px, linha 1.6
- Hover: border muda para `rgba(139,26,43,0.5)` com transição suave

---

### SEÇÃO 8 — QUEBRA DE OBJEÇÕES (fundo preto)

Título: `"Sua dúvida tem resposta"`

**Accordion** (expand/collapse em JS puro) com 4 perguntas:

1. **"Meu cliente não gosta de falar com robô"**
   → "A Legacy AI não parece um robô. É treinada com a linguagem do seu negócio, responde de forma natural e calorosa. Seu hóspede vai sentir que está sendo bem atendido — não que está falando com uma máquina."

2. **"Vou perder o toque humano?"**
   → "Não. A IA faz o trabalho pesado de qualificação. Quando o lead está pronto para fechar, ela passa para você. Você foca em quem realmente vai reservar."

3. **"E se a IA errar alguma informação?"**
   → "A implementação inclui treinamento completo com as informações do seu negócio. E você tem controle total para atualizar qualquer dado a qualquer momento."

4. **"15 dias é rápido demais?"**
   → "Nossa metodologia já foi aplicada em dezenas de hospedagens. Em 15 dias úteis sua IA está ativa, testada e vendendo."

Acordeão com animação suave de altura (CSS transition max-height). Ícone + que vira × ao abrir.

---

### SEÇÃO 9 — FORMULÁRIO DE QUALIFICAÇÃO (fundo branco — SEÇÃO PRINCIPAL)

Badge vermelho: `"VAGAS LIMITADAS"`
Título: `"Descubra se a Legacy AI é certa para você"`
Subtítulo: `"Preencha abaixo e um especialista entra em contato em até 24h"`

**Formulário com os seguintes campos** (layout 2 colunas no desktop, 1 no mobile):

```
Nome completo *
WhatsApp (com DDD) *
E-mail
Tipo de hospedagem * (select: Hotel/Pousada | Chalé/Cabana | Chácara/Espaço para Eventos | Resort | Outro)
Quantos quartos/unidades você tem? * (select: Até 10 | 11 a 30 | 31 a 60 | Mais de 60)
Qual sua maior dificuldade hoje? * (select: Demoro para responder leads | Recebo muitas mensagens mas poucas reservas | Não consigo atender fora do horário comercial | Quero reduzir dependência de OTAs | Outro)
```

CTA do formulário (botão grande, largura total, fundo vermelho com efeito shimmer):
`"QUERO MINHA IA EM 15 DIAS →"`

Abaixo do botão, texto menor cinza:
`"✓ Sem compromisso  ✓ Consultoria gratuita  ✓ Resposta em até 24h"`

**Comportamento do formulário:**
- Validação em JS (campos obrigatórios marcados com *)
- Ao submeter: **NÃO abre WhatsApp, NÃO faz requisição externa**. Apenas exibe a tela de sucesso no lugar do formulário.
- Feedback visual de erro: campos inválidos ficam com borda vermelha `#8B1A2B` + mensagem de erro abaixo em vermelho, tamanho 12px
- Ao submeter com sucesso: oculta o formulário com `display: none` e exibe div de confirmação com animação fade-in:
  ```
  ✅ Perfeito, [Nome]!
  Recebemos suas informações.
  Um especialista da TwoLegacy vai entrar em contato em até 24h.
  ```
  Centralizado, fundo `#F5F5F5`, borda verde sutil, ícone check grande em verde.
- Os dados do formulário devem ser armazenados em um objeto JS `window.formData = {...}` para facilitar integração futura com qualquer backend/CRM via uma única função `submitForm(data)` já declarada mas com corpo vazio com comentário `// TODO: integrar com backend`.
- Declarar no topo do JS a constante: `const FORM_ACTION = ""; // TODO: URL do endpoint`

**Estilo dos inputs:**
- Border `1px solid #E0E0E0`
- Border-radius `8px`
- Focus: border vermelho `#8B1A2B` + box-shadow sutil vermelho
- Padding generoso: `14px 16px`
- Label acima, bold, tamanho 14px

---

### SEÇÃO 10 — FOOTER (fundo preto)

- Logo: `»| Legacy AI` (texto branco, chevron vermelho)
- Tagline: `"Uma solução TwoLegacy Company"`
- Links: `twolegacycompany.com`
- Copyright: `© 2025 TwoLegacy Company. Todos os direitos reservados.`
- Centralizado, minimalista

---

## EFEITOS E ANIMAÇÕES GLOBAIS

1. **Navbar fixa** no topo: fundo transparente que vira preto sólido ao rolar 50px (JS scroll listener + transition). Contém logo Legacy AI à esquerda e CTA "Falar com especialista" à direita (botão vermelho pequeno).

2. **Cursor customizado** (desktop): substituir cursor padrão por um ponto vermelho pequeno (`width: 8px, height: 8px, background: #8B1A2B, border-radius: 50%`) que segue o mouse com `transform: translate(-50%, -50%)` via JS mousemove.

3. **AOS.js** em todas as seções: `data-aos="fade-up"` com `data-aos-delay` escalonado nos cards.

4. **Shimmer button CSS:** implementar animação de brilho passando nos botões CTA principais:
```css
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.btn-shimmer {
  background: linear-gradient(90deg, #8B1A2B 40%, #c0392b 50%, #8B1A2B 60%);
  background-size: 200% auto;
  animation: shimmer 2.5s linear infinite;
}
```

5. **Smooth scroll** para âncoras: `scroll-behavior: smooth` no CSS.

6. **Contador animado** no Hero: ao entrar na viewport (IntersectionObserver), contar de 0 a 82 em ~1.5s com easing.

---

## RESPONSIVIDADE

- Mobile-first
- Breakpoints: `640px` (sm), `768px` (md), `1024px` (lg)
- Grid de cards: 3 colunas → 1 coluna no mobile
- Bento grid: assimétrico no desktop → 1 coluna no mobile
- Texto hero: `text-5xl` no mobile, `text-8xl` no desktop
- Formulário: 2 colunas no desktop, 1 no mobile
- Navbar: sem links no mobile, só logo + botão CTA

---

## NOTAS FINAIS

- Não usar imagens externas (sem Unsplash). Todo visual por CSS, ícones SVG Lucide e gradientes.
- Não usar frameworks JS (React, Vue, etc.). Apenas Vanilla JS.
- Código semântico: usar `<section>`, `<header>`, `<footer>`, `<form>`, `<nav>` corretamente.
- Performance: sem requests desnecessários. Tailwind CDN + AOS + Lucide são suficientes.
- O formulário não deve fazer nenhuma requisição externa. Toda integração com backend/CRM será feita posteriormente via a função `submitForm(data)` já declarada no JS.
