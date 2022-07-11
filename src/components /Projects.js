import projectsData from "../projects.json";
import { ReactComponent as View } from "../assets/view.svg";

const Projects = () => {
    return (
        <section id="projects" className='border-t-2 mt-12 w-[80vw] m-auto mb-12 dark:text-white'>
            <h1 className='mt-4 font-medium text-2xl mb-12'>My Projects</h1>
            <div className='flex flex-wrap gap-12 w-'>
            {
                projectsData && projectsData.map((projects, index) => {
                    return (
                        <article key={index} className='shadow-xl w-fit'>
                            <div>
                                <figure className='w-fit'>
                                    <img src={require('../assets' + projects.img)} alt="E-commerce Product Page Snapshot" className='w-80 md:w-96 h-52 shadow-md'/>
                                </figure>
                                <h2 className='font-medium uppercase mt-8 text-lg w-[312px] md:w-[376px] ml-2'>{projects.projectName}</h2>
                                <p className='my-6 w-[312px] md:w-[376px] ml-2'>{projects.description}</p>
                                <div className='w-[312px] md:w-[376px] pb-6 ml-2'>
                                    {
                                        projects.tags.map((tag, index) => {
                                            return (
                                                <span key={index} className='text-[#33D2FF]'>{tag}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="pl-2 mb-0">
                                <a href={projects.link}>
                                    <button key={index} className='flex gap-2 border-2 border-gradient-mail border-transparent rounded-md px-4 py-2 text-lg dark:darkmode-border-gradient-mail'>
                                        <View className='mt-1 dark:fill'/> View live site
                                    </button>
                                </a>
                            </div>
                        </article>  
                    )
                })
            }
            </div>
        </section>
    )
};

export default Projects;