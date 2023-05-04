import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { Platform } from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms, next: "" },
  });

export default usePlatforms;
