import gaming from "../assets/gaming.jpg"
import biking from "../assets/biking.jpg"
import reading from "../assets/reading.jpg"
import scai from "../assets/scai.jpg"
import hng from "../assets/hng.png"

const Experience = () => {
    return (
        <section className="mt-8 mx-auto w-[80vw]  sm:flex sm:gap-4">
        <div className="flex gap-4 sm:grid sm:w-[35vw]">
          <article className="bg-[#FFFFFF] dark:bg-slate-800 rounded-xl p-8 w-2/4 h-max shadow-lg sm:w-full">
            <h2 className="text-[#4F4F4F] dark:text-[#FFFFFF] font-bold text-lg uppercase mb-2">Front end Skills</h2>
            <ul className="text-[#4F4F4F] dark:text-[#FFFFFF] font-semibold text-sm">
              <li>React</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>Redux</li>
              <li>GraphQL</li>
              <li>NodeJS</li>
            </ul>
          </article>
          <article className="bg-[#FFFFFF] dark:bg-slate-800 rounded-xl p-8 w-2/4 shadow-lg sm:w-full">
            <h2 className="text-[#4F4F4F] dark:text-[#FFFFFF] font-bold text-lg uppercase">Hobbies</h2>
            <div className="mt-4">
              <img src={gaming} alt="A Gamer with a gaming pad" className="rounded-md w-full"/>
              <h3 className="text-[#333333] dark:text-[#FFFFFF] font-semibold my-2">Gaming</h3>
            </div>
            <div className="mt-4">
              <img src={biking} alt="A Gamer with a gaming pad" className="rounded-md w-full"/>
              <h3 className="text-[#333333] dark:text-[#FFFFFF] font-semibold my-2">Biking</h3>
            </div>
            <div className="mt-4">
              <img src={reading} alt="A Gamer with a gaming pad" className="rounded-md w-full"/>
              <h3 className="text-[#333333] dark:text-[#FFFFFF] font-semibold my-2">Reading</h3>
            </div>
          </article>
        </div>
        <div className="sm:w-[50vw] sm:self-start ">
          <article className="bg-[#FFFFFF] dark:bg-slate-800 rounded-xl p-8 mt-8 shadow-lg sm:mt-0">
            <h2 className="text-[#4F4F4F] dark:text-[#FFFFFF] uppercase font-bold">Experiences</h2>
            <div className="flex gap-4 mt-4">
              <img src={hng} alt="hng internship logo" className="w-2/6 h-4/5"/>
              <div className="self-center">
                <p className="text-[#828282] dark:text-[#FFFFFF] text-sm mb-2">Oct 2022 - Dec 2022</p>
                <p className="text-[#333333] dark:text-[#FFFFFF] font-semibold mb-2">FrontEnd Developer Intern</p>
              </div>
            </div>
            <p className="text-[#828282] dark:text-[#FFFFFF] my-4">Worked with a team to build an application from scratch and push out an MVP.</p>
            <div className="flex gap-4">
              <img src={scai} alt="Smart Finance Logo" className="w-2/5 h-4/5"/>
              <div className="self-center">
                <p className="text-[#828282] dark:text-[#FFFFFF] text-sm mb-2">Aug 2022 - Oct 2022</p>
                <p className="text-[#333333] dark:text-[#FFFFFF] font-semibold mb-2">FullStack Developer</p>
              </div>
            </div>
            <p className="text-[#828282] dark:text-[#FFFFFF] mt-4">Worked in a team of 3 engineers building a full stack cloud ready web application. Contributed to the development of the backend and collaborated on the frontend.</p>
          </article>
        </div>
      </section>
    )
}

export default Experience;