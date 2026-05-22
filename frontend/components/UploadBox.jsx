"use client";

import { UploadCloud } from "lucide-react";
import { useState } from "react";

export default function UploadBox() {
  const [_, setFile] = useState(null);

  const handleUpload = async (selectedFile) => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);
      alert("uploaded successfully");
    } catch (err) {
      console.log(err);
      //   alert("upload failed");
    }
  };

  return (
    <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-950 px-6 py-10 text-center transition hover:border-zinc-500 hover:bg-zinc-900">
      <UploadCloud className="mb-4 text-zinc-400" size={34} />

      <p className="text-sm font-medium text-zinc-200">Upload PDF Document</p>

      <p className="mt-1 text-xs text-zinc-500">
        Drag & drop or click to browse
      </p>

      <input
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={(e) => {
          const selected = e.target.files[0];
          setFile(selected);
          handleUpload(selected);
        }}
      />
    </label>
  );
}
