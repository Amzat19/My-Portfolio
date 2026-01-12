const CoreSkills = () => {
  return (
    <article className="rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800">
      <h2 className="mb-4 text-lg font-bold uppercase text-[#4F4F4F] dark:text-white">
        Core Skills
      </h2>

      <div className="space-y-4 text-sm text-[#4F4F4F] dark:text-gray-200">
        <div>
          <p className="mb-2 font-semibold text-[#333333] dark:text-white">
            Frontend Frameworks
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "Vue", "Next.js", "Nuxt.js"].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium dark:bg-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-semibold text-[#333333] dark:text-white">
            Languages & State
          </p>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "Redux", "Vuex", "Pinia"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium dark:bg-slate-700"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <p className="mb-2 font-semibold text-[#333333] dark:text-white">
            Styling & UI
          </p>
          <div className="flex flex-wrap gap-2">
            {["TailwindCSS", "Styled Components", "Sass", "Bootstrap"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium dark:bg-slate-700"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <p className="mb-2 font-semibold text-[#333333] dark:text-white">
            Data & Backend Exposure
          </p>
          <div className="flex flex-wrap gap-2">
            {["GraphQL", "REST APIs", "Node.js", "Express.js"].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium dark:bg-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <div>
            <p className="mb-2 font-semibold text-[#333333] dark:text-white">
              Additional Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Performance Optimization",
                "CI/CD",
                "E2E and Unit Testing",
                "Cross Platform Email Development",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium dark:bg-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CoreSkills;
