type Props = {
  params: {
    id: string;
  };
};

const MoviePage = async ({ params }: Props) => {
  const { id } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  ).then((res) => res.json());

  const video = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  ).then((res) => res.json());

  const trailer = video.results[0]?.key;

  return (
    <div>
      <iframe
        width="1920"
        height="1080"
        src={`https://www.youtube.com/embed/${trailer}`}
        className="absolute top-0 left-0 w-full h-full"
        title={data.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MoviePage;
