import { Container } from "@/components/Container"
import { HomepageHero } from "@/components/sections/homepage-hero"


export default function Home() {
  return (
   
    <div className="">
  {/* First section */}
  {/* <div className=" bg-[url('../public/test.png')] bg-cover w-full h-[100vh] "> </div> */}
  
  <div className="   w-full h-[100vh] bg-contain bg-repeat-round  top-0 left-0  bg-[url('../public/test.png')] ">
  
    <Container>
    <div className="pt-[6.4rem]">
      <HomepageHero />
    </div>
    </Container>
    
  </div>4
  <div className="w-full h-[250vh]"></div>
  

  

  {/* Second section */}
  {/* <div className="xl:top-[39rem] 2xl:top-[55rem] rounded-3xl shadow-xl w-[90vw] h-[100vh] top-[51rem] sm:top-[37rem] bg-white mx-auto relative">
    
  </div>

  <div className="xl:top-[39rem] 2xl:top-[55rem] rounded-3xl shadow-xl  mt-20 w-[90vw] h-[100vh] top-[50rem] sm:top-[37rem] bg-white mx-auto relative">
    
  </div> */}



</div>

      

  )
}
