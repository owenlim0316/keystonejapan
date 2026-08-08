"use client";

import React, { useState, useRef, useEffect } from "react";
import { Message } from "@/lib/claude-client";
import { translations, Language } from "@/lib/translations";

interface ChatMessage extends Message {
  timestamp: Date;
}

const t = (key: string, lang: Language = "ja") => {
  const trans = translations[lang] as Record<string, string>;
  return trans[key] || key;
};

export default function Home() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: t("hello", "ja"),
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>("ja");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setError(null);

    try {
      // Prepare conversation history for API
      const history = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
          history: history,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(errorMsg);
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>{t("title", language)}</h1>
        <p>{t("subtitle", language)}</p>
        <div style={{ marginTop: "10px", fontSize: "12px" }}>
          <button
            onClick={() => setLanguage("ja")}
            style={{
              marginRight: "10px",
              opacity: language === "ja" ? 1 : 0.5,
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              textDecoration: language === "ja" ? "underline" : "none",
            }}
          >
            日本語
          </button>
          <button
            onClick={() => setLanguage("en")}
            style={{
              opacity: language === "en" ? 1 : 0.5,
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              textDecoration: language === "en" ? "underline" : "none",
            }}
          >
            English
          </button>
        </div>
      </div>

      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <div>
              <div className="message-content">{msg.content}</div>
              <div className="message-time">{formatTime(msg.timestamp)}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message assistant">
            <div className="loading">
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
            </div>
          </div>
        )}
        {error && <div className="error-message">{error}</div>}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="input-area">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={t("chatPlaceholder", language)}
          disabled={isLoading}
          autoFocus
        />
        <button type="submit" disabled={isLoading || !inputValue.trim()}>
          {t("send", language)}
        </button>
      </form>
    </div>
  );
}
