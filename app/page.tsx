type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers(): Promise<User[]> {
  const response = await fetch("http://localhost:3000/api");
  const data = await response.json();

  return data.users;
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="grid grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="inline-block border-2 border-black p-4 shadow-md cursor-pointer transition-all hover:shadow-xs"
        >
          <h4 className="font-head text-2xl font-medium mb-1">{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
