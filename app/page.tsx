import Banner from "@/components/Banner";
import Header from "@/components/Header";
import requests from "@/utils/requests";
import { Movie } from "@/typings";

type Props = {
  netflixOriginals: Movie[];
};

export default async function Home() {
  const netflixOriginals = await fetch(requests.fetchNetflixOriginals).then(
    (res) => res.json()
  );

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
      </main>
    </div>
  );
}
