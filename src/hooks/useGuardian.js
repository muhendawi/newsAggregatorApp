import { useQuery } from "@tanstack/react-query";
import { fetchGuardian } from "../services/apiFetching";

const useGuardianWithSection = (sectionName) => {
  return useQuery({
    queryKey: ["theGuardian", sectionName],
    queryFn: () => fetchGuardian(sectionName),
  });
};

export { useGuardianWithSection };
