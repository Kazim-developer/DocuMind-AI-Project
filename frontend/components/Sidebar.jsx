"use client";

import { FileText } from "lucide-react";
import UploadBox from "./UploadBox";

const files = [
  "company-policy.pdf",
  "backend-notes.pdf",
  "contract.pdf",
  "pricing-guide.pdf",
];

export default function Sidebar() {
  return (
    <aside className="flex w-[320px] flex-col border-r border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 p-6">
        <h1 className="text-2xl font-bold tracking-tight">DocuMind AI</h1>

        <p className="mt-2 text-sm text-zinc-400">
          AI-powered semantic document assistant
        </p>
      </div>

      <div className="p-4">
        <UploadBox />
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Uploaded Files
          </h2>

          <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
            {files.length}
          </span>
        </div>

        <div className="space-y-3">
          {files.map((file) => (
            <div
              key={file}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-3 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <div className="rounded-lg bg-zinc-800 p-2">
                <FileText size={18} />
              </div>

              <div className="overflow-hidden">
                <p className="truncate text-sm font-medium">{file}</p>

                <p className="text-xs text-zinc-500">Indexed document</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
