import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Что вы можете найти на нашем сайте:</h1>
      <h3>Ссылки для перехода нужную страницу:</h3>
      <div className="flex flex-col ">
        <Button variant="link">
          <Link href="./user">Пользователи</Link>
        </Button>
        <Button variant="link">
          <Link href="./user">Посты</Link>
        </Button>
        <Button variant="link">
          <Link href="./user">Картинки</Link>
        </Button>
      </div>
      <h3>Кнопки для перехода нужную страницу:</h3>
      <div className="flex justify-around mt-5">
        <Button variant="outline">
          <Link href="./user">Пользователи</Link>
        </Button>
        <Button variant="outline">
          <Link href="./posts">Посты</Link>
        </Button>
        <Button variant="outline">
          <Link href="./images">Картинки</Link>
        </Button>
      </div>
    </div>
  );
}
