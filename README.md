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
- [ ] Personalised recommendations
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

## Licence

MIT
