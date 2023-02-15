import { ReactComponent as TwitterLogo } from "../assets/twitter.svg";
import { ReactComponent as GitHubLogo } from "../assets/github-logo.svg";
import { ReactComponent as LinkedinLogo } from "../assets/linkedin-logo.svg";

const Footer = () => {
    return (
        <footer className='h-72 grid md:h-20 md:flex md:justify-between border-t dark:text-white'>
            <div className='grid m-auto gap-3 pt-2 md:flex md:gap-12 md:pt-5 md:pl-4'>
                <a href='https://www.twitter.com/_Amzat_'><TwitterLogo className='w-10 h-10  ml-10 dark:fill'/></a>
                <a href='https://www.github.com/Amzat19'><GitHubLogo className='w-10 h-10  ml-10 dark:fill'/></a>
                <a href='https://www.linkedin.com/in/kunmi-amzat'><LinkedinLogo className='w-10 h-10 ml-10 dark:fill'/></a>
                <p >+2348120060057</p>
            </div>
            <div className='justify-self-end m-auto'>
                <p className='text-xl pt-5 pr-4 text-center'>@Amzat Portfolio</p>
            </div>
        </footer>
    )
};

export default Footer;