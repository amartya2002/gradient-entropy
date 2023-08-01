import { Container } from "@/components/Container"
import { HomepageHero } from "@/components/sections/homepage-hero"

export default function Home() {
  return (
   
    <div>
  {/* First section */}
  <div className="fixed w-full h-[100vh] top-0 left-0 bg-gray-200">
    <Container>
    <div className="pt-[6.4rem]">
      <HomepageHero />
    </div>
    </Container>
    
  </div>

  {/* Second section */}
  <div className="xl:top-[39rem] 2xl:top-[55rem] rounded-3xl shadow-xl w-[90vw] h-[100vh] top-[51rem] sm:top-[37rem] bg-white mx-auto relative">
    {/* Content for the second section */}
  </div>

  <div className="xl:top-[39rem] 2xl:top-[55rem] rounded-3xl shadow-xl  mt-20 w-[90vw] h-[100vh] top-[50rem] sm:top-[37rem] bg-white mx-auto relative">
    {/* Content for the second section */}
  </div>



</div>

      

  )
}
