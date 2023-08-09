import { Container } from "@/components/Container"
import { Clients } from "@/components/sections/clients"
import { HomepageHero } from "@/components/sections/homepage-hero"


export default function Home() {
  return (

    <>
      

      <div className="   overflow-hidden pb-[16.4rem] md:pb-[25.6rem] ">

        <Container className="pt-[6.4rem]">
          
            <HomepageHero />
            

          

        </Container>

      </div>

      <Container>
        <Clients />
      </Container>




      {/* <div className="xl:top-[39rem] 2xl:top-[55rem] rounded-3xl shadow-xl w-[90vw] h-[100vh] top-[51rem] sm:top-[37rem] bg-red-200 mx-auto relative">
    
  </div> */}

  {/* <div className="xl:top-[39rem] 2xl:top-[55rem] rounded-3xl shadow-xl  mt-20 w-[90vw] h-[100vh] top-[50rem] sm:top-[37rem] bg-red-200 mx-auto relative">
    
  </div>  */}



    </>



  )
}
