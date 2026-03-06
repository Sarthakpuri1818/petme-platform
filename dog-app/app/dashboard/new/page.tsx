"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "./new.css";

export default function AddDogPage() {
  const router = useRouter();

  const [dog, setDog] = useState({
    name: "",
    breed: "",
    age: "",
    location: "",
    description: "",
    contact:"",
    imageUrl: ""
  });

  const addDog = async () => {
    try {
      if (!dog.name || !dog.breed || !dog.age) {
        alert("Name, breed, and age are required");
        return;
      }

      await axios.post("/api/dogs", {
        ...dog,
        age: Number(dog.age)
      });

      router.push("/dashboard");

    } catch (error) {
      console.log("Error adding dog:", error);
    }
  };

  return (
    <div className="add-dog-page">

      <h1>Add Dog</h1>

      <input
        placeholder="Dog Name"
        value={dog.name}
        onChange={(e) => setDog({ ...dog, name: e.target.value })}
      />

      <input
        placeholder="Breed"
        value={dog.breed}
        onChange={(e) => setDog({ ...dog, breed: e.target.value })}
      />

      <input
        placeholder="Age"
        value={dog.age}
        onChange={(e) => setDog({ ...dog, age: e.target.value })}
      />

      <input
        placeholder="Location"
        value={dog.location}
        onChange={(e) => setDog({ ...dog, location: e.target.value })}
      />

      <input
        placeholder="Image URL"
        value={dog.imageUrl}
        onChange={(e) => setDog({ ...dog, imageUrl: e.target.value })}
      />

      <textarea
        placeholder="Description"
        value={dog.description}
        onChange={(e) => setDog({ ...dog, description: e.target.value })}
      />
      <input
  placeholder="contact"
  value={dog.contact}
  onChange={(e)=> setDog({...dog, contact: e.target.value})}
/>

      <button onClick={addDog}>
        Submit
      </button>

    </div>
  );
}