//import the data from api
import getData from "../api/calendar";

export default async function Home() {
  //call getData from the api to fetch
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page</h1>
      <h1>{data.summary}</h1>
    </main>
  );
}
