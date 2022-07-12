import logo from "../assets/portfolio-logo.jpg";
import { ReactComponent as Mode} from "../assets/mode-switch-logo.svg";
import { ReactComponent as Menu} from "../assets/hamburger.svg";
import { ReactComponent as Close } from "../assets/close-button.svg";
import { useState } from "react";

const NavBar = ({ navState, toggleNav, scrollToSection, handleSwitchTheme }) => {
  return (
    <div className={navState ? 'bg-[rgba(0,0,0,0.8)] w-[100vw] h-[100vh] top-0 left-0 fixed' : 'left-[100%] hidden'}>
      <nav className="w-[50vw] h-[100vh] bg-white relative dark:bg-slate-900">
      <span className="bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text text-transparent text-[80px] px-2 font-Bangers">AS</span>
        <Close className="top-[20px] right-[20px] h-[20px] w-[20px] absolute close dark:darkmodeclose" onClick={toggleNav}/>
        <ul className="pl-4 pt-4 font-medium">
          <li className="w-[70px] mb-3 lightmodeborder dark:darkmodeborder" onClick={(e) => {scrollToSection(e, "/#projects"); toggleNav();}}>Projects</li>
          <li className="w-[70px] mb-3 lightmodeborder dark:darkmodeborder"><a href="https://drive.google.com/file/d/13s_O__a8DIqxdtVq67sybbamZgTJgrwb/view?usp=sharing">Resume</a></li>
          <li className="w-[70px] mb-3 lightmodeborder dark:darkmodeborder" onClick={(e) => {scrollToSection(e, "/#contact"); toggleNav();}}>Contact</li>
          <li className="w-[30px] lightmodeborder dark:darkmodeborder">
            <Mode onClick={handleSwitchTheme} className='dark:fill'/>
          </li>
        </ul>
      </nav>
    </div>

  )
}

const Header = ({ handleSwitchTheme }) => {
  const scrollToSection = (e, sectionid) => {
    e.preventDefault();
    window.location.replace(sectionid);
  }

  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    setNavState(!navState);
  }

    return (
      <>
        <header className='w-[80vw] m-auto h-20 dark:text-white'>
          <nav className='flex w-[80vw] justify-between h-28'>
            <div className="w-32">
              <span className="bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text text-transparent text-[80px] px-2 font-Bangers">AS</span>
            </div>
            <div className="">
              <Menu className="md:hidden mt-12 dark:darkmodeclose" onClick={toggleNav}/>
              <NavBar navState={navState} toggleNav={toggleNav} scrollToSection={scrollToSection} handleSwitchTheme={handleSwitchTheme}/>
              <ul className='md:flex gap-4 pt-6 font-medium hidden '>
                <li className="lightmodeborder dark:darkmodeborder" onClick={(e) => scrollToSection(e, "/#projects")}>Projects</li>
                <li className="lightmodeborder dark:darkmodeborder" ><a href="https://drive.google.com/file/d/13s_O__a8DIqxdtVq67sybbamZgTJgrwb/view?usp=sharing">Resume</a></li>
                <li className="lightmodeborder dark:darkmodeborder" onClick={(e) => scrollToSection(e, "/#contact")}>Contact</li>
                <li className="lightmodeborder dark:darkmodeborder">
                  <Mode onClick={handleSwitchTheme} className='dark:fill'/>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    )
};

export default Header;