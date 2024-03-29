import { PrismaClient, Role } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  try {
    await Promise.all(
      getUsers().map((user) => {
        return db.user.create({ data: user });
      })
    );
    console.log("Seed data has been inserted successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await db.$disconnect();
  }
}

seed();

function getUsers() {

  return [
    {
      name: "User",
      passwordHash: "password",
      email: "user@gmail.com",
    },
    {
      name: "Admin",
      passwordHash: "password",
      role:Role.ADMIN,
      email: "admin@gmail.com",
    },
    {
      name: "Worker",
      passwordHash: "password",
      role:Role.WORKER,
      email: "worker@gmail.com",
    },
  ];
}
