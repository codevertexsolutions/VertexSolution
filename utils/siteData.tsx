import {
  MdDashboard,
  MdOutlineHeadsetMic,
  MdOutlinePostAdd,
} from "react-icons/md";
import { CgFileDocument, CgToolbox } from "react-icons/cg";
import { BiCustomize, BiEnvelope } from "react-icons/bi";

import {
  FaCog,
  FaDesktop,
  FaLaptopCode,
  FaMobile,
  FaShoppingCart,
  FaWhatsapp,
  FaWordpress,
} from "react-icons/fa";
import { Portfolios } from "../interfaces/portfolio";

export const NAV_MENU = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "about",
    path: "/about",
  },
  {
    label: "services",
    path: "/services",
  },
  {
    label: "portfolio",
    path: "/portfolio",
  },

  {
    label: "blog",
    path: "/blogs",
  },
  {
    label: "contact",
    path: "/contact",
  },
];

export const FooterMenu = [
  {
    label: "privacy policy",
    path: "/privacy-policy",
  },
  {
    label: "terms and conditions",
    path: "/terms-and-conditions",
  },
];

export const SIDEBAR_ADMIN_MENU = [
  {
    icon: <MdDashboard />,
    label: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: <CgFileDocument />,
    label: "All Categories",
    path: "/admin/categories",
  },
  {
    icon: <MdOutlinePostAdd />,
    label: "Add Category",
    path: "/admin/categories/new",
  },
  {
    icon: <CgFileDocument />,
    label: "All Posts",
    path: "/admin/posts",
  },
  {
    icon: <MdOutlinePostAdd />,
    label: "Add Post",
    path: "/admin/posts/new",
  },
];

export const WHY_CHOOSE_US = {
  title: "Why Us?",
  cardsArr: [
    {
      icon: (
        <CgToolbox className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Expertise",
      desc: "we have years of experience in web development and design, and I am committed to delivering high-quality work.",
    },
    {
      icon: (
        <BiCustomize className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Customization",
      desc: "we provide custom web development and design services tailored to your specific needs and requirements.",
    },
    {
      icon: (
        <MdOutlineHeadsetMic className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Customer Support",
      desc: "we are  dedicated to providing excellent customer support and ensuring that you are satisfied with the final product.",
    },
  ],
};

// Let rewrite the below data as my portfolio services

export const OurServices = {
  title: "What We Do?",
  cardsArr: [
    {
      icon: (
        <FaDesktop className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "UI/UX Design",
      desc: "We provide professional UI/UX design services that focus on creating custom designs, e-commerce solutions, and responsive web design.",
    },
    {
      icon: (
        <FaLaptopCode className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Website Development",
      desc: "We offer professional website development services that cater to your needs for a robust online presence.",
    },
    {
      icon: (
        <FaWordpress className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "WordPress Development",
      desc: "We specialize in WordPress development services that are tailored to your specific business needs.",
    },
    {
      icon: (
        <FaShoppingCart className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "E-Commerce Development",
      desc: "We provide e-commerce development services that focus on creating custom e-commerce solutions for your business.",
    },
    {
      icon: (
        <FaMobile className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "PWA Development",
      desc: "Weoffer professional PWA development which is a web application that uses modern web capabilities to deliver an app-like experience to users.",
    },
    {
      icon: (
        <FaCog className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Custom CMS Development",
      desc: "We provide custom CMS development services that cater to your specific business needs.",
    },
  ],
};

export const CONTACT_CARD = [
  {
    icon: (
      <MdOutlineHeadsetMic className="h-10 w-10 text-secondary-color group-hover:text-white" />
    ),
    title: "Contact With Phone Number",
    options: [
      {
        path: "tel:+971 545941639",
        label: "+971 545941639",
      },
    ],
  },
  {
    icon: (
      <BiEnvelope className="h-10 w-10 text-secondary-color group-hover:text-white" />
    ),
    title: "Contact With Email",
    options: [
      {
        path: "mailto:vertexsolutions.x@gmail.com",
        label: "vertexsolutions.x@gmail.com",
      },
    ],
  },
  {
    icon: (
      <FaWhatsapp className="h-10 w-10 text-secondary-color group-hover:text-white" />
    ),
    title: "Contact With WhatsApp",
    options: [
      {
        path: "https://wa.link/nv91dx",
        label: "+971 545941639",
      },
    ],
  },
];

export const BLOG_DATA = {
  title: "Our Blog's",
  blogs: [
    {
      id: 1,
      title: "ChatGPT 4: A Quantum Leap in AI Conversations",
      cover:
        "https://miro.medium.com/v2/resize:fit:822/1*r4dOZJwvOfjk-QG570D2fQ.png",
      link: "https://hasnainzxc.medium.com/sustainable-future-with-defi-60d9666e1c3f",
      category: "Tech",
      date: "April 25, 2023",
    },
    {
      id: 2,
      title: "Sustainable Future With DeFi",
      cover:
        "https://miro.medium.com/v2/resize:fit:810/1*scwveGAZXhJG-izlq3oSxA.png",
      link: "https://hasnainzxc.medium.com/sustainable-future-with-defi-60d9666e1c3f",
      category: "DeFi / Tech",
      date: "October 20, 2023",
    },
    {
      id: 3,
      title:
        "Dark Patterns: How You Are Being Deceived Through Manipulative Design Techniques",
      link: "https://hasnainzxc.medium.com/sustainable-future-with-defi-60d9666e1c3f",
      cover:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ozblnkT_nhMLBM8oT9jcrQ.jpeg",
      category: "Security / Tech",
      date: "Monday, March 22, 2021",
    },
    {
      id: 4,
      title: "Everything You Need to Know About Hardware Security Keys",
      cover:
        "https://miro.medium.com/v2/resize:fit:1200/0*twsSb-eDNsW7Iq04.jpg",
      link: "https://medium.com/@hasnainzxc/everything-you-need-to-know-about-hardware-security-keys-8fcae0279c09",
      category: "Security / Tech",
      date: "Unknown",
    },
    {
      id: 5,
      title: "Everything You Need to Know About Blockchain Technology",
      cover:
        "https://miro.medium.com/v2/resize:fit:1200/0*byJVaKv6UyxqWeXU.png",
      link: "https://hasnainzxc.medium.com/everything-you-need-to-know-about-blockchain-technology-c0022b6142c3",
      category: "DeFi / Tech",
      date: "Tuesday, April 20, 2021",
    },
    {
      id: 6,
      title: "What is Checkm8? Did Axi0mX Really Checkmated Apple?",
      cover:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*wUnxaa8b93pTJSwJ.jpg",
      link: "https://hasnainzxc.medium.com/what-is-checkm8-did-axi0mx-really-checkmated-apple-18a6e1c149fc",
      category: "Security / Tech",
      date: "Friday, April 2, 2021",
    },
  ],
};

export const OUR_PORTFOLIO: Portfolios = {
  title: "our Portfolio",
  porfolios: [
    {
      title: "Web Design & Development",
      url: "https://www.sajidjaved.co/projects/darkblock",
      image:
        "https://www.sajidjaved.co/_next/image?url=%2Fstatic%2Fprojects%2Fdarkblock%2Fbanner.png&w=3840&q=75",
    },
    {
      title: "Web development / E-Commerce",
      url: "https://www.sajidjaved.co/projects/shopsy",
      image:
        "https://www.sajidjaved.co/_next/image?url=%2Fstatic%2Fprojects%2Fshopsy%2Fbanner.png&w=3840&q=75",
    },
    {
      title: "E-Commerce / Web Development",
      url: "https://www.sajidjaved.co/projects/dadsagree",
      image:
        "https://www.sajidjaved.co/_next/image?url=%2Fstatic%2Fprojects%2Fdadsagree%2Fbanner.png&w=1920&q=75",
    },
    {
      title: "E-Commerce / Web Development",
      url: "https://www.sajidjaved.co/projects/dadsagree",
      image:
        "https://www.sajidjaved.co/_next/image?url=%2Fstatic%2Fprojects%2Fdadsagree%2Fbanner.png&w=1920&q=75",
    },
    {
      title: "E-Commerce / Web Development",
      url: "https://www.sajidjaved.co/projects/dadsagree",
      image:
        "https://www.sajidjaved.co/_next/image?url=%2Fstatic%2Fprojects%2Fdadsagree%2Fbanner.png&w=1920&q=75",
    },
  ],
};
