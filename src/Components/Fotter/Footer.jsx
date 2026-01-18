import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MyContainer from "../MyContainer/MyContainer";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <MyContainer>
        <footer className="footer sm:footer-horizontal  text-base-content p-10">
          <nav>
            <h6 className="footer-title">About Me</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title underline">Social Contact</h6>
            <div className="grid grid-flow-col gap-4">
              <Link
                to="https://www.linkedin.com/in/sazzadkhan753/"
                target="_blank"
                title="Linkedin"
              >
                <FaLinkedin size={22} />
              </Link>
              <Link
                to="https://github.com/SazzadKhan45"
                target="_blank"
                title="Github"
              >
                <FaGithub size={22} />
              </Link>
              <Link
                to="https://www.youtube.com/@Softteachcoding"
                target="_blank"
                title="Youtube"
              >
                <FaYoutube size={22} />
              </Link>
            </div>
          </nav>
        </footer>
      </MyContainer>
    </div>
  );
};

export default Footer;
