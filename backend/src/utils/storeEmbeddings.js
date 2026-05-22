import { prisma } from "../db/prisma.js";

export async function storeEmbedding(content, embedding) {
  await prisma.$executeRaw`
    INSERT INTO "Document" (content, embedding)
    VALUES (
      ${content},
      ${`[${embedding.join(",")}]`}::vector
    )
  `;
}
