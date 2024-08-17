"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  const API = "https://image.tmdb.org/t/p/original/";
  const myLoader=({src})=>{
    return `${API}${
      result.backdrop_path ||
      result.poster_path}`;
  }
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 
    transition-shadow duration-200'>
      <Link rel="stylesheet" href={`/movie/${result.id}`} >
      {/*  */}
      <Image 
      loader={myLoader}
      src={`https://image.tmdb.org/t/p/original/${
        result.backdrop_path ||
        result.poster_path}`}
        width={500}
        height={300}
        className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
        ></Image>
      </Link>
      <div className="p-2">
        <p className="line-clamp-2 text-md">{result.overview}</p>
        <h1 className='text-lg font-bold truncate'>{result.title || result.orginal_name}</h1>
        <p className='flex items-center'>
          {result.release_date || result.first_air_date}
          <FiThumbsUp className='h-5 mr-1 ml-3' /> 
          {result.vote_count}
        </p>
      </div>
        {/* <div key={result.id} className="key">
            <h2>{result.original_title}</h2>
        </div> */}
    </div>
  )
}
