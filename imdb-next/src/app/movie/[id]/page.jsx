
'use client'

import React from 'react'
import Image from 'next/image';
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

export default async function MoviePage({params}) {
  console.log("movieId");
  console.log(params);
  const movieId = params.id;
  console.log("params");
  console.log(movieId);
  const res = await fetch(
      `https:api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.customKey}`
  );
  const movie = await res.json();
  console.log(movie);
  const myLoader=({ src, width, quality })=>{
    return `https://image.tmdb.org/t/p/original/${
                movie.backdrop_path ||
                movie.poster_path}?w=${width}`;
  }
  const src = `https://image.tmdb.org/t/p/original/${
                movie.backdrop_path ||
                movie.poster_path}`;
  return (
    <div className='w-full'>
      
        <div className="p-6 flex flex-col lg:flex-row items-center content-center mt-12 max-w-6xl mx-auto">
        <Image
        loader={myLoader}
          className="rounded-lg mb-4 sm:mr-4"
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={400}
          style={{ maxWidth: "100%", height: "100%" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie Image"
        />
          <div  className="sm:w-9/12">
            <h2  className="text-2xl font-bold text-cyan-500 mb-2" >
              {movie.title || movie.original_name}
            </h2>
            <p className="mt-2">
              <span className="text-xl font-semibold text-cyan-500 mr-1">
                Overview:
              </span>
              {movie.overview}
            </p>
            <p className="mt-2">
              <span className="text-xl font-semibold text-cyan-500 mr-1">
                Production country:
              </span>
              {movie.production_countries[0]?.name || "Not available"}
            </p>
            <p className="mt-2">
              <span className="text-xl font-semibold text-cyan-500 mr-1">
                Date Released:
              </span>
              {movie.release_date}
            </p>
            <div className="flex items-center mt-2 flex-wrap">
              <p className="flex items-center mr-8 mb-2">
                <AiFillStar className="text-amber-500 mr-1 text-xl" />
                {Number(movie.vote_average).toFixed(1)}
              </p>
              {movie.revenue !== 0 && (
                <p className="mr-8 flex items-center mb-2">
                  <BsCurrencyDollar className="mr-1 text-xl text-green-500" />
                  {movie.revenue.toLocaleString("en-Us")}
                </p>
              )}
              <p className="mr-8 flex items-center mb-2">
                <BiTimeFive className="mr-1 text-xl text-cyan-500" />
                {movie.runtime} Minutes
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}






// import Image from "next/image";
// import React from "react";
// import { AiFillStar } from "react-icons/ai";
// import { BsCurrencyDollar } from "react-icons/bs";
// import { BiTimeFive } from "react-icons/bi";

// const MoviePage = async ({ params }) => {
//   const paramsId = params.id;

//   try {
//     const api = await fetch(
//       `https://api.themoviedb.org/3/movie/${paramsId}?api_key=${process.env.API_KEY}`
//     );

//     if (!api.ok) throw new Error("Can not fetching the movie data!");

//     const data = await api.json();

//     return (
//       <div className="p-6 flex flex-col lg:flex-row items-center content-center mt-12 max-w-6xl mx-auto ">
//         <Image
//           className="rounded-lg mb-4 sm:mr-4"
//           src={`https://image.tmdb.org/t/p/w500${
//             data.backdrop_path || data.poster_path
//           }`}
//           width={500}
//           height={400}
//           style={{ maxWidth: "100%", height: "100%" }}
//           placeholder="blur"
//           blurDataURL="/spinner.svg"
//           alt="Movie Image"
//         />
//         <div className="sm:w-9/12">
//           <h2 className="text-2xl font-bold text-cyan-500 mb-2">
//             {data.title || data.original_title}
//           </h2>
//           <p className="mt-2">
//             <span className="text-xl font-semibold text-cyan-500 mr-1">
//               Overview:
//             </span>
//             {data.overview}
//           </p>
//           <p className="mt-2">
//             <span className="text-xl font-semibold text-cyan-500 mr-1">
//               Production country:
//             </span>
//             {data.production_countries[0]?.name || "Not available"}
//           </p>
//           <p className="mt-2">
//             <span className="text-xl font-semibold text-cyan-500 mr-1">
//               Date Released:
//             </span>
//             {data.release_date}
//           </p>
//           <div className="flex items-center mt-2 flex-wrap">
//             <p className="flex items-center mr-8 mb-2">
//               <AiFillStar className="text-amber-500 mr-1 text-xl" />
//               {Number(data.vote_average).toFixed(1)}
//             </p>
//             {data.revenue !== 0 && (
//               <p className="mr-8 flex items-center mb-2">
//                 <BsCurrencyDollar className="mr-1 text-xl text-green-500" />
//                 {data.revenue.toLocaleString("en-Us")}
//               </p>
//             )}
//             <p className="mr-8 flex items-center mb-2">
//               <BiTimeFive className="mr-1 text-xl text-cyan-500" />
//               {data.runtime} Minutes
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   } catch (err) {
//     return <p>{err.message}</p>;
//   }
// };

// export default MoviePage;



















