import Nav from "./components/Nav";
import requests from "../utils/requests";
import Results from "./components/Results";
export default async function Home({searchParams}) {
      console.log(searchParams.genre)
    // fetch movies  
      const request = await fetch(
        `https://api.themoviedb.org/3${
          requests[searchParams.genre]?.url || requests.fetchTrending.url
        }`
      ).then((res) => res.json());
      const results = request.results
  
  return (
    <main className="">
         <Nav/>
         <Results results={results}/>
    </main>
  );
}
