import React from 'react'
import Results from "@/components/Results";

export default async function SearchPage({params}) {
    const searchTerm = params.searchTerm;
    console.log(searchTerm);
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.customKey}&query=${searchTerm}&include_adult=false&language=en-US&page=1`
        
    ); 
    const data = await res.json();
    const results = data.results;
    
  return (
    
    <div>
        {
            
            results && results.length ===  (
                <div className="text-center pt-6">
                    No results found
                </div>
            )
        }

        {
            results && 
                <Results  results={results}/>
            
        }
    </div>
  )
}
