import Link from "next/link";
import "./dashboard.css";
import LogoutButton from "./logoutbutton";
import { connectDB } from "@/app/databse/databse";
import Dog from "@/app/models/dog";

export const dynamic = "force-dynamic";

async function getDogs() {
  try {
    await connectDB();
    const dogs = await Dog.find({}).lean();
    return JSON.parse(JSON.stringify(dogs));
  } catch (error) {
    console.log("Error fetching dogs:", error);
    return [];
  }
}

export default async function DashboardPage() {
  const dogs = await getDogs();

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Dog Listings</h1>

        <Link href="/dashboard/new" className="add-btn">
          Add Dog
        </Link>

        <LogoutButton />
      </div>

      <div className="dog-container">
        {dogs.length === 0 ? (
          <p>No dogs added yet.</p>
        ) : (
          dogs.map((dog: any) => (
            <div key={dog._id} className="dog-card">
              <img
                src={dog.imageUrl?.trim() || "/dog-placeholder.png"}
                alt={dog.name}
                width={320}
                height={220}
              />

              <h3>{dog.name}</h3>
              <p>{dog.breed}</p>
              <p>{dog.age} years old</p>
              <p>{dog.location}</p>
              <p>{dog.contact}</p>
              <p className="status">{dog.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
