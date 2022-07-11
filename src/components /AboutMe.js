import { ReactComponent as MailLogo } from "../assets/mail-logo.svg";
import { ReactComponent as LinkedInLogo } from "../assets/linkedin-logo.svg";
import { ReactComponent as GithubLogo } from "../assets/github-logo.svg";

const AboutMe = () => {
    return (
        <section id='contact' className='h-max mt-20 dark:text-white'>
            <div className='m-auto w-[80vw] mb-20'>
                <p className='font-medium mb-4 text-lg'>Hey I'm</p>
                <p className='bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text text-transparent text-[80px] font-Bangers'>Amzat Sheriff</p>
                <p className='font-medium'>I'm a software engineer/frontend developer based in Lagos, Nigeria and also an engineering student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects.</p>
            </div>
            <div className='m-auto w-[80vw] flex flex-wrap gap-7 mb-12'>
                <a href='mailto:kunmiamzat1@gmail.com'>
                    <button className='flex rounded-sm border-2 h-12 px-6 py-3 gap-1 border-gradient-mail border-solid border-transparent dark:darkmode-border-gradient-mail'>
                        <MailLogo className="dark:fill"/> Send me an Email
                    </button>
                </a>
                <a href='https://www.linkedin.com/in/kunmi-amzat'>
                    <button className='flex rounded-sm border-2 h-12 px-6 py-3 gap-1 border-gradient-linkedin border-solid border-transparent dark:darkmode-border-gradient-linkedin'>
                        <LinkedInLogo className="dark:fill"/> LinkedIn
                    </button>
                </a>
                <a href='https://github.com/Amzat19'>
                    <button className='flex rounded-sm border-2 h-12 px-6 py-3 gap-1 border-gradient-github border-solid border-transparent dark:darkmode-border-gradient-github'>
                        <GithubLogo className="dark:fill"/> GitHub
                    </button>
                </a>
            </div>
        </section>
    )
}

export default AboutMe;