import { text } from "@/styles/primitives/text.css"
import { heroText, wrapper } from "./home-hero.css"

interface HeroProps {
}

const HomeHero: React.FC<HeroProps> = () => {
  return (
    <section className={wrapper}>
      <h1 className={heroText}>
        <span>Nate</span>
        <span>Lentz</span>
      </h1>
    </section>
  )

}

export default HomeHero