import { Database, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8 py-5">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          AI Knowledge Workspace
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Query documents using semantic AI search
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
          <Sparkles size={16} />
          RAG Enabled
        </div>

        <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
          <Database size={16} />
          pgvector Active
        </div>
      </div>
    </header>
  );
}
