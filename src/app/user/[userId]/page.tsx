import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;

    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

async function getUsers(id: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}

interface UserIdProps {
  params: { userId: number };
}

export default async function User({ params }: UserIdProps) {
  const user = await getUsers(params.userId);
  return (
    <Card className="w-80 mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-green-950 text-4xl font-bold text-center">
          Персональная страница
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Полное имя: <strong>{user.name}</strong>
        </p>
        <p>
          User name: <strong>{user.username}</strong>
        </p>
        <p>
          Email: <strong>{user.email}</strong>
        </p>
        <p>
          Адрес:{" "}
          <strong>
            {user.address.street}, {user.address.city}
          </strong>
        </p>
        <p>
          Телефон: <strong>{user.phone}</strong>
        </p>
        <p>
          Вебсайт: <strong>{user.username}</strong>
        </p>
        <p>
          Название компании: <strong>{user.company.name}</strong>
        </p>
      </CardContent>
      <CardFooter className="p-4 border-t ">
        <Link
          href="/user"
          className="text-grey font-extralight text-xs hover:underline"
        >
          {"<<<<"}Назад
        </Link>
      </CardFooter>
    </Card>
  );
}
