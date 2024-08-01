import CardImg from "@/components/cardImg/cardImg";
import Main from "@/components/content/main";
import { list } from "@vercel/blob";

export default async function Home() {
  const response = await list();
  return (
    <main className="flex w-full h-screen justify-center items-center px-3">
      <CardImg/>
      <Main response={response}/>
    </main>
  );
}
