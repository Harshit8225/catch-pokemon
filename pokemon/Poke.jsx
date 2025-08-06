import "./poke.css";
import { useState,useEffect } from "react";
import { FiLoader } from "react-icons/fi";
import { PokeCards } from "./PokeCards";
export const Poke=()=>{
    const [pokemon,setPokemon]=useState(null);
    const [search,setSearch]=useState("");
    const API="https://pokeapi.co/api/v2/pokemon?limit=24"
    const fetchPokemon= async ()=>{
        try{
          const res =await fetch(API);
          const data=await res.json();
          const detailedPokemon=data.results.map(async (ele)=>{
            const res=await fetch(ele.url);
            const data=await res.json();
            return data;
          })
          const detailedResponse=await Promise.all(detailedPokemon);
          setPokemon(detailedResponse);
        }catch{
          console.log(error);
        }
    }
    useEffect(()=>{
        fetchPokemon();
    },[]);
    if (!pokemon) {
  return (
   <div className="h-full flex items-center justify-center">
   {/* <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> */}
      <FiLoader className="w-15 h-15 animate-spin text-green-500"/>
   </div>
   );
}
    const searchData=pokemon.filter((ele)=>{
    return ele.name.toLowerCase().includes(search.toLowerCase());
    })
    return (
        <section className="flex flex-col items-center gap-8 w-full font-semibold pb-8" >
            <h1 className="text-4xl">Let's catch Pokemon</h1>
            <div className="poke-inp relative  w-[16rem] max-w-[80%] h-[2.2rem]"><input className="text-xs sm:text-sm bg-white rounded-xs pl-2 shadow w-full h-full "type="text" placeholder="Search Pokemon" value={search} onChange={(e)=>setSearch(e.target.value)}/></div>
            <div className="w-full h-full container grid  grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 mt-4">
              {searchData.map((curr)=>{
                  return <PokeCards key={curr.id} curr={curr}/>
              })}
            </div>
        </section>
    )
}