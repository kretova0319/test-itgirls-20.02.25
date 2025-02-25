import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Photo } from "./contentImages";
// import Image from "next/image";

async function getPhotos(albumId: number): Promise<Photo[]> {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    if (!res.ok) {
      throw new Error(`Ошибка HTTP: ${res.status}`);
    }
    const photos: Photo[] = await res.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке:", error);
    return [];
  }
}

export default async function Photos() {
  const photos: Photo[] = await getPhotos(2);
  return (
    <div>
      <h1>Страница со всеми картинками</h1>
      <div className="flex flex-wrap gap-6 justify-center ">
        {photos.map((photo: Photo) => (
          <div key={photo.id}>
            <Card className="w-60 h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  <h3 className="pb-1">{photo.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                {/* <Image src={photo.url} alt="photo" width={100} height={100} /> */}

                <Link
                  href={`/images`}
                  className="text-grey font-extralight text-xs hover:underline"
                >
                  Show full screen...
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
