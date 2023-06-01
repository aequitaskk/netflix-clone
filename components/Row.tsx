import { Movie } from "@/typings";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Thumbnail from "./Thumbnail";

type Props = {
  title: string;
  movies: Movie[];
};

const Row = ({ title, movies }: Props) => {
  return (
    <div className="h-40 space-x-0.5 md:space-y-2 mb-4 md:mb-8 lg:mb-12">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <AiOutlineLeft className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />

        <div className="flex items-center space-x-0.5 overflow-x-scroll hide-scrollbar md:space-x-2.5 md:p-2">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <AiOutlineRight className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Row;
