import Banner from "@/components/Banner";
import Header from "@/components/Header";
import requests from "@/utils/requests";
import { Movie } from "@/typings";
import Row from "@/components/Row";
import Modal from "@/components/Modal";


type Props = {
};

export default async function Home() {
  const [netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json())
  ]);

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals.results} />
        <section className="md:space-y-20">
          <Row title="Trending Now" movies={trendingNow.results} />
          <Row title="Top Rated" movies={topRated.results} />
          <Row title="Action Movies" movies={actionMovies.results} />
          <Row title="Comedy Movies" movies={comedyMovies.results} />
          <Row title="Horror Movies" movies={horrorMovies.results} />
          <Row title="Romance Movies" movies={romanceMovies.results} />
          <Row title="Documentaries" movies={documentaries.results} />
        </section>
      </main>
    </div>
  );
}
