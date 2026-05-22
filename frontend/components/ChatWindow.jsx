"use client";

import MessageBubble from "./MessageBubble";

const messages = [
  {
    role: "assistant",
    content:
      "Welcome to DocuMind AI. Upload a document and ask questions about its content.",
  },
  {
    role: "user",
    content: "What is the refund policy?",
  },
  {
    role: "assistant",
    content:
      "According to the indexed document, refunds are allowed within 30 days of purchase.",
  },
];

export default function ChatWindow() {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            role={message.role}
            content={message.content}
          />
        ))}
      </div>
    </div>
  );
}
