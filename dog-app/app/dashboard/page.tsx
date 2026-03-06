import Link from "next/link";
import "./dashboard.css";
import Image from "next/image";
import LogoutButton from "./logoutbutton";





async function getDogs() {
  try {
  const res = await fetch("http://localhost:3000/api/dogs", {
  cache: "no-store",
});
      
   

    const data = await res.json();
    return data.dogs || [];
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

        {/* <Link href="/" className="add-btn" onClick={logout}>
        Logout
        
        </Link> */}


      
      </div>

      <div className="dog-container">
        {dogs.length === 0 ? (
          <p>No dogs added yet.</p>
        ) : (
          dogs.map((dog: any) => (
            <div key={dog._id} className="dog-card">
              <img
                src={dog.imageUrl.trim() || "/dog-placeholder.png"}
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
