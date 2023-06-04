import { QueryClient } from "@tanstack/react-query";
import { fetchCharactersData } from "../../api/api";

export const homeQuery = () => ({
  queryKey: ["characters"],
  queryFn: async () => {
    const characters = await fetchCharactersData();
    if (!characters) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return characters;
  },
});

export const loader = (queryClient: QueryClient) => async () => {
  const query = homeQuery();
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
