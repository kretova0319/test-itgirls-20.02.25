import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import User from "./contentUsers";
// Получаем всех юзеров используя interface
// interface User {
//   id: number;
//   username: string;
//   email: string;
//   company: {
//     name: string;
//   };
// }

async function getUsers(): Promise<User[]> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`Ошибка HTTP: ${res.status}`);
    }
    const users: User[] = await res.json();
    return users;
  } catch (error) {
    console.error("Ошибка при загрузке:", error);
    return [];
  }
}

export default async function Users() {
  const users: User[] = await getUsers();
  return (
    <div>
      <h1>Страница со всеми пользователями</h1>
      <div className="flex flex-wrap gap-6 justify-center ">
        {users.map((user: User) => (
          <div key={user.id}>
            <Card className="w-60 h-full flex flex-col justify-between">
              <CardContent className="flex-grow p-4">
                <h3>
                  Полное имя: <strong>{user.username}</strong>
                </h3>
                <p>
                  Email: <strong>{user.email}</strong>
                </p>
                <p>
                  Компания: <strong>{user.company.name}</strong>
                </p>
              </CardContent>
              <CardFooter className="p-4 border-t ">
                <Link
                  href={`/user/${user.id}`}
                  className="text-grey font-extralight text-xs hover:underline"
                >
                  Подробнее {">>>>"}
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
