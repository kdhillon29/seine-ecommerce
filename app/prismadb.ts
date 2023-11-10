import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
// globalThis.prisma = undefined;
console.log(globalThis.prisma);
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

// export default client;
// import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;
// globalThis.prisma = undefined;

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!globalThis.prisma) {
//     globalThis.prisma = new PrismaClient();
//   }
//   prisma = globalThis.prisma;
// }

export default client;
