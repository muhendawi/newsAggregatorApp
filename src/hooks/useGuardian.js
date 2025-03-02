import { useQuery } from "@tanstack/react-query";
import { fetchGuardian } from "../services/apiFetching";

const useGuardian = () => {
  return useQuery({
    queryKey: ["theGuardian"],
    queryFn: fetchGuardian,
  });
};

const useGuardianWithSection = (sectionName) => {
  return useQuery({
    queryKey: ["theGuardian", sectionName],
    queryFn: () => fetchGuardian(sectionName),
  });
};

export { useGuardian, useGuardianWithSection };
