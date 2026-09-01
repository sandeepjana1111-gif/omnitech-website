import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Products from '../components/home/Products'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Projects from '../components/home/Projects'
import CTA from '../components/home/CTA'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <Projects />
      <CTA />
    </main>
  )
}

export default Home
