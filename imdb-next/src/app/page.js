import Results from "@/components/Results";
import { resolve } from "styled-jsx/css";


const API_KEY = process.env.API_KEY;


export default async function Home({searchParams}) {
  // 
  const genre = searchParams.genre || 'fetchTrending';
  const url = `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
    }?api_key=${API_KEY}&language=en-US&page=1`;
  //   console.log(url);
  // const res = await new Promise((resolve) => {
  //   // 
  //   setTimeout(async () => {
  //     // 
  //     const response = await fetch(
  //       url,
  //       {next: {revalidate:60}}
  //     );
  //     resolve(response);
  //   }, 2000); //delay of two second
  // });
  const res = await fetch(
    url,
    {next: {revalidate:10000}}
  );
  // const res = await fetch(
  //   `https://api.themoviedb.org/3${
  //     genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
  //   }?api_key=${API_KEY}&language=en-US&page=1`
  // );
  // // 
  const data = await res.json();
  // 
  if(!res.ok) {
    throw new Error('Failed to fetch data')
  } else {
    // 
    const results = data.results;
    // console.log(results);
  }
  const results = data.results;

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWJhYTBjNGM1ZjAxMGRlOThlMTBiOGViNTAwMzgyMCIsIm5iZiI6MTcyMzQ5NTI4My41MzA3Mywic3ViIjoiNjZiYTViODIzODQwYjE0Njk4MDVmZWQxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.dOYGB5rcrftq70C-aVUdELt57-IAKRO8XXIRRxQK49c'
  //   }
  // };
  // fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));

  return (
    <div>
      <Results  results={results}/>
    </div>
  
  );
}
