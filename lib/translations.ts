// Japanese translations for Malaysia migration topics

export const translations = {
  ja: {
    // UI
    title: "キーストン・ジャパン - マレーシア移住ガイド",
    subtitle: "マレーシア移住を計画中の日本人向けAIチャットボット",
    chatPlaceholder: "マレーシアへの移住について質問してください...",
    send: "送信",
    loading: "応答中...",
    error: "エラーが発生しました。もう一度お試しください。",
    
    // Topics
    visa: "ビザ・移民",
    employment: "就職・仕事",
    housing: "住宅・生活費",
    culture: "文化・生活",
    healthcare: "医療・保険",
    education: "教育",
    finance: "金融・銀行",
    transportation: "交通",
    
    // Common phrases
    hello: "こんにちは！マレーシア移住についてお手伝いします。",
    whatCanHelp: "以下のトピックについてお答えできます：",
    notUnderstand: "申し訳ございません。その質問はよく理解できません。別の質問をお試しください。",
  },
  en: {
    // UI
    title: "Keystone Japan - Malaysia Migration Guide",
    subtitle: "AI Chatbot for Japanese planning to migrate to Malaysia",
    chatPlaceholder: "Ask about migrating to Malaysia...",
    send: "Send",
    loading: "Responding...",
    error: "An error occurred. Please try again.",
    
    // Topics
    visa: "Visa & Immigration",
    employment: "Employment",
    housing: "Housing & Cost of Living",
    culture: "Culture & Lifestyle",
    healthcare: "Healthcare & Insurance",
    education: "Education",
    finance: "Finance & Banking",
    transportation: "Transportation",
    
    // Common phrases
    hello: "Hello! I'm here to help you with your Malaysia migration plans.",
    whatCanHelp: "I can help you with the following topics:",
    notUnderstand: "I'm sorry, I don't quite understand that question. Please try another one.",
  },
};

export type Language = 'ja' | 'en';

export const getTranslation = (lang: Language, key: string): string => {
  return translations[lang]?.[key as keyof typeof translations['ja']] || key;
};
