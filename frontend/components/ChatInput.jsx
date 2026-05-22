"use client";

import { SendHorizonal } from "lucide-react";
import { useState } from "react";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: message }),
    });
    const data = await res.json();

    console.log(data);

    console.log(data.answer);
  };

  return (
    <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-5">
      <div className="mx-auto flex max-w-4xl items-end gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask questions about your uploaded documents..."
          rows={1}
          className="max-h-40 flex-1 resize-none bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
        />

        <button
          className="flex items-center gap-2 rounded-xl bg-zinc-100 px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-300"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(message);
            handleSubmit();
          }}
        >
          <SendHorizonal size={16} />
          Send
        </button>
      </div>
    </div>
  );
}
