import "./poke.css";
export const PokeCards=({curr})=>{
  const Types = () => {
    return curr.types.map(ele => ele.type.name).join(", ");
};
    return (
        <div className="max-w-[14rem]  w-full mx-auto min-h-[20rem] px-4 poke-card flex flex-col items-center justify-start relative gap-2 bg-white shadow rounded-lg  hover:scale-105 transition-transform duration-300">
            <figure className="flex justify-center items-center z-10 h-32 w-full">
                <img className="max-h-full object-contain w-1/2" src={curr.sprites.other.dream_world.front_default} alt="404" />
            </figure>
            <h1 className="text-xl sm:text-2xl md:text-3xl">{curr.name}</h1>
           <span className="text-xs  bg-green-400 py-2 px-3 rounded-3xl text-white">{Types()}</span>
            <div className="flex justify-center gap-6 gap-y-2 flex-wrap ">
                <span className="text-xs">Height: <span className="font-normal">{curr.height}</span></span>
                <span className="text-xs">Weight: <span className="font-normal">{curr.weight}</span></span>
                <span className="text-xs">Experience: <span className="font-normal">{curr.base_experience}</span></span>
                <span className="text-xs">Attack: <span className="font-normal">{curr.stats[1].base_stat}</span></span>
                <span className="text-xs">Ability: <span className="font-normal">{curr.abilities[0].ability.name}</span></span>
                <span className="text-xs">Speed: <span className="font-normal">{curr.stats[0].base_stat}</span></span>
            </div>
           </div>
    )
}