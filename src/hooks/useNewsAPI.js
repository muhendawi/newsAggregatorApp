import { useQuery } from "@tanstack/react-query";
import { fetchNewsAPI } from "../services/apiFetching";

const useNewsAPIWithSearch = () => {
  return useQuery({
    queryKey: ["newsApi"],
    queryFn: fetchNewsAPI,
  });
};

export { useNewsAPIWithSearch };
