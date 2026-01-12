import { ReactComponent as View } from "./assets/view.svg";
import allofhealth from "./assets/allofhealth.png";
import thegigs from "./assets/thegigs-project.png";
import blucera from "./assets/blucera-project.png";
import pentriaWeb from "./assets/pentria-web.jpg";
import productFeedback from "./assets/product-feedback.png";
import devJobs from "./assets/devjobs.jpg";
import taskmgmt from "./assets/task-mgmt.png";

const mainProducts = [
  {
    img: thegigs,
    name: "TheGigs",
    description:
      "A multi-surface digital marketplace connecting creatives, services, and spaces. Implemented real-time notifications, messaging, and performance optimizations for a smooth user experience.",
    link: "https://thegigs.co",
  },
  {
    img: blucera,
    name: "Blucera",
    description:
      "Business platform with user and admin dashboards, marketplace, and advanced business tools. Focused on responsive design, performance, and seamless collaboration.",
    link: "https://blucera.com",
  },
  {
    img: allofhealth,
    name: "AllOfHealth",
    description:
      "Healthcare platform supporting patients, doctors, and admins. Built multi-role dashboards, integrated GraphQL for optimized data fetching, and ensured secure user interactions.",
    link: "https://allofhealth.africa",
  },
];

const projects = [
  {
    img: pentriaWeb,
    name: "Event Booking Application - Pentria",
    description:
      "Simplifies event management and ticketing with real-time updates. Users can browse, book, and organizers can manage events and track registrations.",
    link: "https://pentria-app.vercel.app/",
  },
  {
    img: productFeedback,
    name: "Product Feedback Platform",
    description:
      "Allows users to submit feedback, report bugs, and track roadmap suggestions. Provides insights into product usage and improvement areas.",
    link: "https://product-app19.netlify.app/",
  },
  {
    img: devJobs,
    name: "Developer Jobs",
    description:
      "Central hub for developers to explore and apply for jobs. Features filtering, search, and a clean interface for job discovery.",
    link: "https://devjobsv-1.netlify.app/",
  },
  {
    img: taskmgmt,
    name: "Task Management Application",
    description:
      "This is a simulation of a task management website designed to help individuals, teams, and organizations effectively organize, track, prioritize, and collaborate on various tasks, projects, and activities. It serves as a digital hub where users can create, manage, and monitor tasks and projects.",
    link: "https://task-mgmt1.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-12 mx-auto w-[80vw]">
      {/* MAIN PRODUCTS */}
      <h2 className="text-2xl font-bold dark:text-white mb-6">Main Products</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {mainProducts.map((product, idx) => (
          <article
            key={idx}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-fit"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold dark:text-white mb-2">
              {product.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
              {product.description}
            </p>
            <a
              href={product.link}
              target="_blank"
              rel="noreferrer"
              className="mb-6"
            >
              <button className="flex items-center gap-2 border-2 border-gradient-mail border-transparent rounded-xl px-4 py-2 dark:darkmode-border-gradient-mail dark:text-white">
                <View className="dark:fill" /> Live
              </button>
            </a>
          </article>
        ))}
      </div>

      {/* PROJECTS / CASE STUDIES */}
      <h2 className="text-2xl font-bold dark:text-white mb-6">
        Projects / Case Studies
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold dark:text-white mb-2">
              {project.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mb-6"
            >
              <button className="flex items-center gap-2 border-2 border-gradient-mail border-transparent rounded-xl px-4 py-2 dark:darkmode-border-gradient-mail dark:text-white">
                <View className="dark:fill" /> Live
              </button>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
