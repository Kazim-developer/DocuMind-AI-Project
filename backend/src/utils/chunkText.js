export function chunkText(text, chunkSize = 1000, overlap = 150) {
  const chunks = [];

  let i = 0;

  while (i < text.length) {
    const chunk = text.slice(i, i + chunkSize);
    chunks.push(chunk);

    i += chunkSize - overlap; // sliding window
  }

  return chunks;
}
