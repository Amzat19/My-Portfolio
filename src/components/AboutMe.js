import Amzat from "../assets/Amzat.jpg"
import phonelogo from "../assets/phone-call.png"
import phonelogowhite from "../assets/phonelogowhite.webp"
import { ReactComponent as Mail } from "../assets/mail-logo.svg"
import { ReactComponent as LinkedInLogo } from "../assets/linkedin-logo.svg";
import { ReactComponent as GithubLogo } from "../assets/github-logo.svg";

const AboutMe = ({ theme }) => {
  return (
    <article id="contact" className="mx-auto pb-6 bg-[#FFFFFF] dark:bg-slate-800 rounded-xl shadow-lg md:flex md:justify-between w-[80vw] dark:text-[#FFFFFF]">
      <div className="md:h-full h-[400px] pt-8">
        <img src={Amzat} alt="Amzat Sheriff" className="mx-auto w-4/5 h-[90%] md:w-40 md:h-4/5 md:m-8 rounded-xl" />
      </div>
      <div className="h-4/5 w-3/5 mx-8 mt-8 lg:w-4/5">
        <div className="grid gap-4 md:flex md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#4F4F4F] dark:text-[#FFFFFF]">Amzat Sheriff</h2>
            <p className="text-[#828282] dark:text-[#FFFFFF]">Front-end Developer</p>
          </div>
          <div>
            <span className="flex gap-2 mb-1">
              <Mail className="dark:fill" />
              <p className="text-[#4F4F4F] dark:text-[#FFFFFF]">kunmiamzat1@gmail.com</p>
            </span>
            <span className="flex gap-2">
              {theme === "light" ? <img src={phonelogo} alt="phone logo" className="w-6 h-6" /> : <img src={phonelogowhite} alt="phone logo" className="w-6 h-6" />}
              <p className="text-[#4F4F4F] dark:text-[#FFFFFF]">+2348120060057</p>
            </span>
          </div>
        </div>
        <div className="my-6 w-[50vw]">
          <p className="text-[#828282] dark:text-[#FFFFFF]">
            Passionate Frontend developer with a proven track record of creating stunning and responsive web experiences. I have honed my skills in HTML, CSS, JavaScript, and various frontend frameworks, including React and Vue. I excel at collaborating with cross-functional teams to deliver innovative solutions that delight users and drive business growth. Whether it's building from scratch or revamping existing projects, I am always eager to take on new challenges and bring my creativity to the table. Let's work together to create something amazing!
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-around md:gap-0">
          <a href='mailto:kunmiamzat1@gmail.com'>
            <button className='flex rounded-sm border-2 h-12 px-6 py-3 gap-1 border-gradient-mail border-solid border-transparent dark:darkmode-border-gradient-mail'>
              <Mail className="dark:fill" /> Mail
            </button>
          </a>
          <a href='https://www.linkedin.com/in/kunmi-amzat'>
            <button className='flex rounded-sm border-2 h-12 px-6 py-3 gap-1 border-gradient-linkedin border-solid border-transparent dark:darkmode-border-gradient-linkedin'>
              <LinkedInLogo className="dark:fill" /> LinkedIn
            </button>
          </a>
          <a href='https://github.com/Amzat19'>
            <button className='flex rounded-sm border-2 h-12 px-4 py-3 gap-1 border-gradient-github border-solid border-transparent dark:darkmode-border-gradient-github'>
              <GithubLogo className="dark:fill" /> GitHub
            </button>
          </a>
        </div>
      </div>
    </article>
  )
}

export default AboutMe;