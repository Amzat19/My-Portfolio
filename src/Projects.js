import projects from "./projects.json"
import { ReactComponent as View } from "./assets/view.svg";

const Projects = () => {
  const projectCount = projects.length;
  return (
    <section id="projects" className="mt-8 mx-auto w-[80vw]">
      <div className="bg-[#FFFFFF] dark:bg-slate-800 rounded-xl">
        <h2 className="dark:text-[#FFFFFF] m-8 py-4 font-semibold">Projects {`(${projectCount})`}</h2>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3">
        {
          projects.map((projects, index) => {
            return (
              <article key={index} className="relative shadow-lg bg-[#FFFFFF] dark:bg-slate-800 p-8 my-4 rounded-xl">
                <img src={require(`${projects.img}`)} className="w-4/5 h-40 mx-auto rounded-xl mb-2" alt="projects demo" />
                <h2 className="text-[#333333] dark:text-[#FFFFFF] font-semibold text-xl mt-4">{projects.projectName}</h2>
                <p className="text-[#828282] dark:text-[#FFFFFF] mt-4 mb-16">{projects.description}</p>
                <a href={projects.link} className="absolute bottom-8 pt-8">
                  <button key={index} className='flex gap-2 border-2 border-gradient-mail border-transparent rounded-xl px-4 py-2 dark:darkmode-border-gradient-mail dark:text-[#FFFFFF]'>
                    <View className='mt-1 dark:fill' /> Live
                  </button>
                </a>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects;