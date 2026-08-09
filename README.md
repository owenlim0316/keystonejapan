# Keystone Japan - Malaysia Migration Chatbot

A Next.js-based chatbot powered by Claude AI, specifically designed to help Japanese residents planning to migrate to Malaysia.

## Features

- 🤖 Claude AI-powered chatbot
- 🇯🇵 Japanese language support
- 🇲🇾 Malaysia-specific migration context
- 💬 Real-time chat interface
- 📱 Responsive design

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **AI**: Anthropic Claude API
- **Styling**: CSS/Tailwind (to be added)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Anthropic API key (get one at https://console.anthropic.com)

### Installation

1. Clone the repository
```bash
git clone https://github.com/owenlim0316/keystonejapan.git
cd keystonejapan
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.local.example .env.local
# Edit .env.local and add your Anthropic API key
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/
│   ├── api/              # API routes
│   │   └── chat/        # Claude chat endpoint
│   ├── components/       # React components
│   ├── page.tsx         # Home page
│   └── layout.tsx       # Root layout
├── lib/
│   ├── claude-client.ts # Claude API wrapper
│   ├── contexts.ts      # Malaysia migration knowledge base
│   └── translations.ts  # Japanese translations
├── public/              # Static assets
└── styles/              # CSS files
```

## Features in Development

### Phase 1 (Current)
- [ ] Basic chatbot UI
- [ ] Claude API integration
- [ ] Malaysia context setup
- [ ] Japanese language support

### Phase 2
- [ ] Knowledge base expansion
- [ ] Chat history persistence
- [ ] Multi-language support

### Phase 3
- [ ] User authentication
- [ ] Personalized recommendations
- [ ] Resource database

## Malaysia Migration Context Topics

The chatbot provides guidance on:

- 🛂 **Visa & Immigration**: MM2H, work visas, student visas
- 💼 **Employment**: Job market, salary expectations, industries
- 🏠 **Housing & Cost of Living**: Accommodation, expenses, popular areas
- 🌍 **Culture & Integration**: Local customs, Japanese community, lifestyle
- 🏥 **Healthcare & Insurance**: Medical system, insurance options
- 🎓 **Education**: Schools, universities, language courses
- 💰 **Finance & Banking**: Accounts, taxation, remittance
- 🚗 **Transportation**: Driving, public transport, visas for driving

## Debugging & Contributing

Please report issues and share feature requests on the [Issues](https://github.com/owenlim0316/keystonejapan/issues) page.

## License

MIT


14:18:25.586Z	[SERVER]	Installing dependencies...
14:18:25.990Z	[SERVER]	Installing dependencies with pnpm@10.34.3...
14:18:26.401Z	[SERVER]	Lockfile is up to date, resolution step is skipped
Progress: resolved 1, reused 0, downloaded 0, added 0
Packages: +395
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
14:18:27.403Z	[SERVER]	Progress: resolved 395, reused 230, downloaded 0, added 0
14:18:28.404Z	[SERVER]	Progress: resolved 395, reused 395, downloaded 0, added 22
14:18:29.107Z	[SERVER]	Progress: resolved 395, reused 395, downloaded 0, added 395, done
14:18:29.299Z	[SERVER]	dependencies:
+ @base-ui/react 1.5.0
+ @vercel/analytics 1.6.1
+ class-variance-authority 0.7.1
+ clsx 2.1.1
+ lucide-react 1.17.0
+ next 16.3.0
+ react 19.2.4
+ react-dom 19.2.4
+ shadcn 4.10.0
+ tailwind-merge 3.4.0
+ tw-animate-css 1.4.0

devDependencies:
+ @tailwindcss/postcss 4.3.3
+ @types/node 24.10.4
+ @types/react 19.2.14
+ @types/react-dom 19.2.3
+ postcss 8.5.6
+ tailwindcss 4.3.3
+ typescript 5.7.3

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: msw@2.14.6.                                         │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
Done in 3.3s using pnpm v10.34.3
14:18:30.164Z	[SERVER]	Starting dev server: pnpm run dev
14:18:30.577Z	[SERVER]	> my-project@0.1.0 dev /vercel/share/v0-project
> next dev
14:18:31.177Z	[SERVER]	▲ Next.js 16.3.0 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://100.64.131.101:3000
- Environments: .env.development.local
✓ Ready in 463ms
14:18:31.278Z	[SERVER]	✓ Running next.config.mjs took 23ms
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry
14:18:31.879Z	[SERVER]	- Experiments (use with caution):
  · serverActions
  ✓ transitionIndicator
14:18:36.393Z	[SERVER]	GET / 200 in 3.0s (next.js: 2.8s, application-code: 245ms)
14:18:59.255Z	[SERVER]	GET / 200 in 61ms (next.js: 4ms, application-code: 57ms)
14:33:05.284Z	[SERVER]	Reload env: .env.development.local
14:33:07.490Z	[SERVER]	GET / 200 in 189ms (next.js: 49ms, application-code: 140ms)
14:36:10.042Z	[SERVER]	Reload env: .env.development.local
14:36:10.354Z	[SERVER]	GET / 200 in 191ms (next.js: 50ms, application-code: 141ms)