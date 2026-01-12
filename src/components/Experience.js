import scai from "../assets/scai.jpg";
import hng from "../assets/hng.png";
import pentria from "../assets/pentria.jpg";
import pharmalink from "../assets/all-of-health-logo.png";
import blucera from "../assets/blucera.png";
import thegigs from "../assets/thegigs.svg";
import CoreSkills from "./CoreSkills";

const Experience = () => {
  return (
    <section className="mx-auto mt-12 w-[80vw] grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* EXPERIENCE */}
      <div className="lg:col-span-2">
        <article className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md">
          <h2 className="uppercase font-bold text-slate-700 dark:text-white mb-6">
            Experience
          </h2>

          {/* TheGigs */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <img
              src={thegigs}
              alt="TheGigs"
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                March 2025 – Present
              </p>
              <p className="font-semibold text-slate-800 dark:text-white">
                Frontend Engineer · TheGigs
              </p>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Frontend engineer on a multi-surface digital marketplace. Owned
                real-time notifications and messaging, improved frontend
                performance through lazy loading and code-splitting, and
                collaborated closely with backend teams on secure API-driven
                features.
              </p>
            </div>
          </div>

          {/* BluCera */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <img
              src={blucera}
              alt="BluCera"
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                October 2023 – February 2025
              </p>
              <p className="font-semibold text-slate-800 dark:text-white">
                Frontend Engineer · Blucera
              </p>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Built and maintained complex user and admin dashboards for
                business tools and marketplace features. Focused on performance
                optimization, frontend standards, and close collaboration with
                designers and backend engineers to support a stable MVP launch.
              </p>
            </div>
          </div>

          {/* AllOfHealth */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <img
              src={pharmalink}
              alt="AllOfHealth"
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                April 2023 – October 2024
              </p>
              <p className="font-semibold text-slate-800 dark:text-white">
                Frontend Engineer · AllOfHealth
              </p>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Developed frontend systems for a multi-role healthcare platform.
                Worked with healthcare professionals to design data-heavy
                interfaces, improve data flow, and support secure user
                interactions.
              </p>
            </div>
          </div>

          {/* Early Career (compressed) */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Earlier Experience
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <img
                src={pentria}
                alt="AllOfHealth"
                className="w-16 h-16 object-contain"
              />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  January 2023 – March 2023
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  Frontend Developer · Pentria
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Developed dynamic event booking interfaces with reusable React
                  components. Collaborated with UX designers to enhance user
                  experience, improved CSS organization with Sass, and
                  accelerated feature rollout.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <img
                src={hng}
                alt="AllOfHealth"
                className="w-16 h-16 object-contain"
              />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  October 2022 – December 2022
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  Frontend Developer Intern · HNG
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Built pixel-perfect UIs with React and TypeScript for a social
                  scheduling platform. Introduced reusable components, improved
                  team productivity, and participated in code reviews.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <img
                src={scai}
                alt="AllOfHealth"
                className="w-16 h-16 object-contain"
              />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  August 2022 – October 2022
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  FullStack Developer · Smart Finance
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Developed a full-stack web application in a small team.
                  Designed efficient MongoDB schemas, built React prototypes,
                  and collaborated on backend API integration.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* SKILLS */}
      <div>
        <CoreSkills />
      </div>
    </section>
  );
};

export default Experience;
