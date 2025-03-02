import { useQuery } from "@tanstack/react-query";
import { fetchNewsAPI } from "../services/apiFetching";

const useNewsAPIWithSearch = (search) => {
  return useQuery({
    queryKey: ["newsApi", search],
    queryFn: fetchNewsAPI,
  });
};

export { useNewsAPIWithSearch };
