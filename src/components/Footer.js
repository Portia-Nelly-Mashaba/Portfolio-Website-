import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full py-6 gap-4 mdl:hidden">
        <a href="https://github.com/Portia-Nelly-Mashaba/" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center bg-hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/portia-mashaba-674a68131/" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center bg-hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
    </div>
  )
}

export default Footer;
