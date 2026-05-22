import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export async function extractTextFromPDF(fileBuffer) {
  try {
    // ✅ FIX: convert Buffer → Uint8Array
    const uint8Array = new Uint8Array(fileBuffer);

    const loadingTask = pdfjsLib.getDocument({ data: uint8Array });
    const pdf = await loadingTask.promise;

    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();

      const pageText = content.items.map((item) => item.str).join(" ");
      text += pageText + " ";
    }

    return text.replace(/\s+/g, " ").trim();
  } catch (error) {
    console.error("PDF EXTRACTION ERROR:", error);
    throw new Error("Failed to extract PDF text");
  }
}
