import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";
import { fetchCharacterDetailData } from "../../api/api";

export const characterDetailQuery = (id: string) => ({
  queryKey: ["character", id],
  queryFn: async () => {
    const character = await fetchCharacterDetailData(id);
    if (!character) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return character;
  },
});

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const query = characterDetailQuery(params.id || "");
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };
