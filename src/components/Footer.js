import { ReactComponent as TwitterLogo } from "../assets/twitter.svg";
import { ReactComponent as GitHubLogo } from "../assets/github-logo.svg";
import { ReactComponent as LinkedinLogo } from "../assets/linkedin-logo.svg";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-slate-300 dark:border-slate-700">
      <div className="w-[80vw] mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identity */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-slate-900 dark:text-white">
            Amzat Sheriff
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Frontend Engineer · Product-focused, performance-driven
          </p>
        </div>

        {/* Social links */}
        <div className="flex gap-6 items-center">
          <a
            href="https://www.twitter.com/_Amzat_"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <TwitterLogo className="w-5 h-5 dark:fill" />
          </a>

          <a
            href="https://www.github.com/Amzat19"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <GitHubLogo className="w-5 h-5 dark:fill" />
          </a>

          <a
            href="https://www.linkedin.com/in/kunmi-amzat"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <LinkedinLogo className="w-5 h-5 dark:fill" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-500 dark:text-slate-500 text-center md:text-right">
          © {new Date().getFullYear()} Amzat Sheriff. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
