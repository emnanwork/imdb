'use client';

import React, { useRef, useState }  from 'react'
import { useRouter } from "next/navigation";


export default function SearchBox() {
    // 
    const [search, setSearch] = useState("");
    const router = useRouter();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        // window.lo cation.href = `/search?q=${search}`;
        router.push(`/search/${search}`);
      };


  return (
    <div>
         <form
            onSubmit={formSubmitHandler}
            className="max-w-6xl mx-auto flex justify-between items-center"
      
         >
      <input
       onChange={(e) => setSearch(e.target.value)}
       value={search}
        type="text"
        name="Search"
        placeholder="Search Keywords..."
        className="w-full h-14 rounded-md outline-none placeholder-gray-500 placeholder:text-lg bg-transparent flex-1"
      />
      <button type="submit" className="disabled:text-gray-400 mr-4 text-2xl font-bold text-amber-400" disabled={search === ''}>
       search
      </button>
    </form>
    </div>
  )
}
