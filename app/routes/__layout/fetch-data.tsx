import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import useSWR from "swr";
import type { PublicApiEntryType } from "~/types/PublicApiType";

export const loader = async () => {
  const response = await fetch(
    "https://api.publicapis.org/entries?category=Cryptocurrency"
  );
  const data = (await response.json()) as PublicApiEntryType;
  return json(data);
};

// export const links: LinksFunction = () => {
//   return [
//     {
//       rel: "preload",
//       href: "https://api.publicapis.org/entries?category=Cryptocurrency",
//       as: "fetch",
//       crossOrigin: "anonymous",
//     },
//   ];
// };

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Child = () => {
  const { data, error } = useSWR<PublicApiEntryType>(
    "https://api.publicapis.org/entries?category=Cryptocurrency",
    fetcher
  );
  return (
    <>
      <h1>How to fetch data.</h1>
      {data ? (
        <ol style={{ marginBottom: 24 }}>
          {data.entries.map((entry) => {
            return (
              <li key={entry.API}>
                <a href={entry.Link}>{entry.API}</a>
              </li>
            );
          })}
        </ol>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

const FetchData = () => {
  const loaderData = useLoaderData<typeof loader>();
  const { data, error } = useSWR(
    "https://api.publicapis.org/entries?category=Cryptocurrency",
    fetcher
  );
  return (
    <>
      <h1>How to fetch data.</h1>
      {/* <ol>
        {loaderData.entries.map((entry) => {
          return (
            <li key={entry.API}>
              <a href={entry.Link}>{entry.API}</a>
            </li>
          );
        })}
      </ol> */}
      {data ? (
        <ol style={{ marginBottom: 24 }}>
          {data.entries.map((entry) => {
            return (
              <li key={entry.API}>
                <a href={entry.Link}>{entry.API}</a>
              </li>
            );
          })}
        </ol>
      ) : (
        <p>Loading</p>
      )}
      <Child />
    </>
  );
};

export default FetchData;
