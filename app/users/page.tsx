// app/users/page.tsx
export const dynamic = "force-dynamic"; // Ensures fresh content on each request

interface User {
  id: number;
  firstName: string;
  lastName: string;
  // Add any other properties you expect from the user object
}

interface UsersResponse {
  users: User[];
}

export default async function UsersPage() {
  // Fetching data from a remote API on the server side (SSR)
  const users = await fetchUsers();

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.users.map((user: User) => (
          <li key={user.id}>
            {user.firstName} - {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Function to fetch data from an external API
async function fetchUsers(): Promise<UsersResponse> {
  const res = await fetch(`https://dummyjson.com/users`, {
    // Fetch fresh data on each request by disabling caching
    cache: "no-store",
  });

  // Check if fetch has been made succesfully
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
