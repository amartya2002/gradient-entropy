
import { Hero, HeroTitle, HeroSubtitle } from "../Hero";
import { ChevronIcon } from "../icons/chevron";
import { HeroImage } from "../hero-image";
import { Button, Highlight } from "../button";
export const HomepageHero = () => (

  <Hero>
<div className="sm:block flex justify-center">
<Button
      className="translate-y-[-1rem] animate-fade-in opacity-0  "
      href="/"
      variant="secondary"
      size="medium"
    >

      <span>Entropy </span>
      <Highlight>UI</Highlight>
    </Button>
</div>
    

    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Linear is a better way
      <br className="hidden md:block" /> to build products
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Meet the new standard for modern software development.
      <br className="hidden md:block" /> Streamline issues, sprints, and product
      roadmaps.
    </HeroSubtitle>


    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] w-full sm:w-auto flex justify-center"
      href="/"
      variant="primary"
      size="large"
    >
      <span className="">Get Started </span>
      <Highlight>
        <ChevronIcon />
      </Highlight>

    </Button>

    <HeroImage />

  </Hero>

);