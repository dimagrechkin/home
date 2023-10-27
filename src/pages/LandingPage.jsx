import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GroguImage } from '../assets/images'

const LandingPage = () => {
  return (
    <section className="h-[75vh] flex flex-col items-center justify-around md:gap-6 gap-2 p-8 md:text-xl text-xs text-custom-black helvetica">
      <motion.p initial={{ y: 275, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 5, delay: 1 }}>
        <div className="shadow-2xl">
          Contacts: Dima Grechkin Trainee Javascript developer Phone: +380952103981 telegram E-mail:
          Dima.grechkin8@gmail.com Skype: Dima.grechkin8@gmail.com Linkedln:
          https://www.linkedin.com/in/dima-grechkin-a502501b6/ Git: https://github.com/unitedProgrammer
        </div>
      </motion.p>
      <motion.p initial={{ y: 275, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 5, delay: 1 }}>
        Contacts: Dima Grechkin Trainee Javascript developer Phone: +380952103981 telegram E-mail:
        Dima.grechkin8@gmail.com Skype: Dima.grechkin8@gmail.com Linkedln:
        https://www.linkedin.com/in/dima-grechkin-a502501b6/ Git: https://github.com/unitedProgrammer
      </motion.p>
      <motion.p initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 5, delay: 6 }}>
        Professional skills: -Programming languages: Javascript, html/css, c++(basic), python(basic), swift(basic).
        -Development tools: GitHub, Bootstrap, NodeJS -Operating systems: MacOS, ArchLinux, Windows -Database systems:
        MySQL, MongoDB -Knowledges: OOP -Object modeling: Design Patterns, draw.io_, Blender -Version control system:
        Git Language skills: English - intermediate, German - A2 Experience April 2020 - up to now KG, web-developer Job
        responsibilities: building bootstrap 5 site, hosting, domain. Additional education: A-level FullStack JS July
        2020 - February 2021 Education: September 2018 - now Ukrainian Engineering Pedagogics Academy «Computer science»
        3 course Additional information: Hobbies: jogging (24km), making music, fashion shows,Vfx, open-source software
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, delay: 11 }}
        className="flex items-center justify-evenly gap-4"
      >
        {/* <div className="md:block hidden w-[15%]">
          <img src={GroguImage} alt="Baby Yoda" className="object-cover" />
        </div> */}

        <Link
          to="/episodes"
          className="px-4 py-2 mt-4 rounded text-custom-yellow bg-custom-white  hover:text-custom-black hover:bg-custom-yellow ring-1 ring-custom-yellow inline-flex items-center transform transition-all duration-300 hover:scale-95"
        >
          Begin your journey
        </Link>

        {/* <div className="md:block hidden w-[15%]">
          <img src={GroguImage} alt="Baby Yoda" className="object-cover transform scale-x-[-1]" />
        </div> */}
      </motion.div>
    </section>
  )
}

export default LandingPage
