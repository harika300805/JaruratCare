export async function fetchPatients() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch patients");
  const data = await res.json();

  return data.map((user) => ({
    id: user.id,
    name: user.name,
    age: Math.floor(Math.random() * 40) + 20, 
    address: `${user.address.suite}, ${user.address.street}, ${user.address.city}`,
    notes: "No allergies recorded.",
  }));
}
