import { prisma } from "../db/prisma.js";

export async function searchSimilarDocs(embedding, limit = 5) {
  const result = await prisma.$queryRaw`
    SELECT content
    FROM "Document"
    ORDER BY embedding <-> ${`[${embedding.join(",")}]`}::vector
    LIMIT ${limit};
  `;

  return result;
}
