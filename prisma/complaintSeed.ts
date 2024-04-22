import { db } from "~/utils/db.server";

function getComplaints() {
  return [
    {
      userId: "6ccdfaf1-116b-4f18-aab9-71749defc144",
      title: "Printer not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "printers not working properly",
    },
    {
      userId: "6ccdfaf1-116b-4f18-aab9-71749defc144",
      title: "AC not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "AC not working properly",
    },
    {
      userId: "6ccdfaf1-116b-4f18-aab9-71749defc144",
      title: "Fan not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "Fan not working properly",
    },
    {
      userId: "6ccdfaf1-116b-4f18-aab9-71749defc144",
      title: "Chair not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "Chair not working properly",
    },
    {
      userId: "6ccdfaf1-116b-4f18-aab9-71749defc144",
      title: "Table not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "Table not working properly",
    },
    {
      userId: "6ccdfaf1-116b-4f18-aab9-71749defc144",
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
