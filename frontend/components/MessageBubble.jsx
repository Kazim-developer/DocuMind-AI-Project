export default function MessageBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-4 text-sm leading-7 shadow-sm ${
          isUser
            ? "bg-zinc-200 text-zinc-900"
            : "border border-zinc-800 bg-zinc-900 text-zinc-100"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
