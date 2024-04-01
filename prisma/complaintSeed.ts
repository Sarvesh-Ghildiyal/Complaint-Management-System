import { db } from "~/utils/db.server";

function getComplaints() {
  return [
    {
      userEmail: "user@gmail.com",
      title: "Printer not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "printers not working properly",
    },
    {
      userEmail: "user@gmail.com",
      title: "AC not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "AC not working properly",
    },
    {
      userEmail: "user@gmail.com",
      title: "Fan not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "Fan not working properly",
    },
    {
      userEmail: "user@gmail.com",
      title: "Chair not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "Chair not working properly",
    },
    {
      userEmail: "user@gmail.com",
      title: "Table not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "Table not working properly",
    },
    {
      userEmail: "user@gmail.com",
      title: "Heat not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "User",
      requested_by: "User",
      body: "Heat not working properly",
    },
    {
      userEmail: "admin@gmail.com",
      title: "Projector not working",
      room_n0: 205,
      department: "CSE",
      reported_by: "Admin",
      requested_by: "Admin",
      body: "Projector not working properly",
    },
    {
      userEmail: "worker@gmail.com",
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
  } catch (error) {
    console.log("Error seed database", error);
  } finally {
    await db.$disconnect();
  }
}

seed();
