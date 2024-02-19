import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import {
  FaEnvelope,
  FaFacebook,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { FooterMenu } from "../utils/siteData";

const Footer = () => {
  return (
    <footer className="pt-10 md:pt-20 pb-10 bg-black">
      <div className="container mx-auto px-5 text-white">
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-8 md:space-y-0 md:space-x-4">
          <div className="mr-10">
            <div className="flex justify-start items-center space-x-2">
              <h2 className="capitalize text-2xl">About Me</h2>
            </div>
            <p className="mt-4 leading-[32px]">
              Hi, we&rsquo;are Vertex Solution, a Tech agency developer from
              UAE. we are specialize in building high-quality, fully responsive,
              Web and mobile user-friendly websites and web applications using
              modern web tools & technologies.
            </p>
          </div>
          {/* Second Column */}
          <div>
            <h2 className="capitalize text-2xl">Reach To us</h2>
            <div className="flex flex-col gap-y-4 mt-4 md:mt-6">
              <Link
                href="mailto:vertexsolutions.x@gmail.com"
                className="flex items-center justify-start space-x-2 hover:text-secondary-color"
              >
                <FaEnvelope /> <span>vertexsolutions.x@gmail.com</span>
              </Link>
              <Link
                href="tel:+917889737464"
                className="flex items-center justify-start space-x-2 hover:text-secondary-color"
              >
                <FaPhone /> <span>+971545941639</span>
              </Link>
            </div>
          </div>
          {/* Third Column */}
          <div>
            <h2 className="capitalize text-2xl">Important Links</h2>
            <div className="flex flex-col gap-y-4 mt-4 md:mt-6">
              {FooterMenu.map((link, index: number) => {
                return (
                  <Link
                    key={index}
                    href={link.path}
                    className="flex items-center capitalize justify-start space-x-2 hover:text-secondary-color"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Fourth Column */}
          <div>
            <h2 className="capitalize text-2xl">Social Media</h2>
            <div className="flex gap-4 mt-4 md:mt-6 ">
              <Link
                href="https://www.facebook.com/vertexsolution/"
                target="_blank"
                className="flex items-center justify-start space-x-2"
                aria-labelledby="facebook"
              >
                <FaFacebook className="w-9 h-9" />
              </Link>
              <Link
                href="https://instagram.com/vertex Solution"
                target="_blank"
                className="flex items-center justify-start space-x-2"
                aria-labelledby="instagram"
              >
                <FaInstagram className="w-9 h-9" />
              </Link>
              <Link
                href="https://twitter.com/vertex solutiom"
                target="_blank"
                className="flex items-center justify-start space-x-2"
                aria-labelledby="twitter"
              >
                <BsTwitterX className="w-9 h-9" />
              </Link>
              <Link
                href="https://linkedin.com/in/vertex solution"
                target="_blank"
                className="flex items-center justify-start space-x-2"
                aria-labelledby="linkedin"
              >
                <FaLinkedin className="w-9 h-9" />
              </Link>
              <Link
                href="https://github.com/vertex solution"
                target="_blank"
                className="flex items-center justify-start space-x-2 "
                aria-labelledby="github"
              >
                <FaGithubSquare className="w-9 h-9" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <p>
            &copy; {new Date().getFullYear()} Vertex Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
