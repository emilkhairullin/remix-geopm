import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { PublicApiEntryType } from "~/types/PublicApiType";

export const loader = async () => {
  const response = await fetch("https://api.publicapis.org/entries");
  const data = (await response.json()) as PublicApiEntryType;
  return json(data);
};

const FetchData = () => {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <h1>How to fetch data.</h1>
      <ol>
        {data.entries.map((entry) => {
          return (
            <li key={entry.API}>
              <a href={entry.Link}>{entry.API}</a>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default FetchData;
