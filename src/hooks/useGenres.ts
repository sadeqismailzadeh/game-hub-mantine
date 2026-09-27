
import genres from "@/data/genres";


const useGenres = () =>
  ({ data: genres, isLoading: false, error: "" } as const);


export default useGenres;