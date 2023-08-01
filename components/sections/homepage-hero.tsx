
import { Hero, HeroTitle, HeroSubtitle } from "../Hero";

export const HomepageHero = () => (
    <Hero>

        <HeroTitle className="">
            Linear is a better way
            <br className="hidden md:block" /> to build products
        </HeroTitle>
        <HeroSubtitle className="">
            Meet the new standard for modern software development.
            <br className="hidden md:block" /> Streamline issues, sprints, and product
            roadmaps.
        </HeroSubtitle>


        
        {/* <button
        

        className="rounded-full bg-blck px-10 py-3 text-black text-center w-full sm:w-auto " >
        <span className="text-center">Explore More &#10132; </span>

    </button> */}
     
        
     <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[2px] w-full sm:w-auto hover:scale-105 duration-300 active:scale-110'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1  font-medium text-white backdrop-blur-3xl'>
        Explore More &#10132;
      </span>
    </button>

    </Hero>
);