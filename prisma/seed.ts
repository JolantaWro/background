import { prisma } from "@/lib/db"


async function main() {
    const user = await prisma.user.upsert({
      where: {
        email: "jolanta.woronowska@gmail.com",
      },
      update: {},
      create: {
        id: "test1",
        email: "jolanta.woronowska@gmail.com",
        first_name: "Jolanta",
        last_name: "Woronowska"
      }
    });
}

main()
.then(async () => {
  await prisma.$disconnect();
})
.catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});