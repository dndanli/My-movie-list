import { v4 as uuidv4 } from "uuid";

type GenresProps = {
  className: string;
  genres: string[];
};

const Genres = ({ className, genres }: GenresProps) => {
  return (
    <ul className={className}>
      {genres.map((genre: any) => {
        return (
          <li key={uuidv4()} className="genre-button">
            <p>{genre.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Genres;
