import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

function getComplaints() {
  return [
    {
      // hardcoded userId, so keep that in mind
      // next time you try to run complaint migrations
      userId: "0fc8a0a9-d498-4200-8f8e-1cb5fc8280a0",
      title: "Printer not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "printers not working properly",
    },
    {
      userId: "0fc8a0a9-d498-4200-8f8e-1cb5fc8280a0",
      title: "AC not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "AC not working properly",
    },
    {
      userId: "0fc8a0a9-d498-4200-8f8e-1cb5fc8280a0",
      title: "Fan not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "Fan not working properly",
    },
    {
      userId: "0fc8a0a9-d498-4200-8f8e-1cb5fc8280a0",
      title: "Chair not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "Chair not working properly",
    },
    {
      userId: "0fc8a0a9-d498-4200-8f8e-1cb5fc8280a0",
      title: "Table not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "Table not working properly",
    },
    {
      userId: "0fc8a0a9-d498-4200-8f8e-1cb5fc8280a0",
      title: "Heat not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "Heat not working properly",
    },
    {
      userId: "7029e61c-84dd-4575-bbeb-e6c337fa4058",
      title: "Projector not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "Admin",
      requested_by: "Admin",
      body: "Projector not working properly",
    },
    {
      userId: "f86026c5-3070-425f-9986-509529ce4b7a",
      title: "Computer not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "Worker",
      requested_by: "Worker",
      body: "Computer not working properly",
    },
  ];
}

async function seed() {
  try {
    await Promise.all(
      getComplaints().map((complaint) => {
        return db.complaint.create({ data: complaint });
      })
    );
    console.log("Seed data has been inserted successfully.");
  } catch (error) {
    console.log("Error seed database", error);
  } finally {
    await db.$disconnect();
  }
}

seed();
