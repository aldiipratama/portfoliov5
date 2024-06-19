import { ReactElement } from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiVite, SiTailwindcss, SiPhp, SiJavascript, SiTypescript, SiCodeigniter, SiAstro, SiExpress, SiJquery, SiMysql, SiSupabase, SiFlutter, SiDart, SiChakraui, SiShadcnui, SiAdobepremierepro } from "react-icons/si"
import { FaHtml5, FaCss3Alt, FaLaravel, FaNodeJs, FaBootstrap, FaGitAlt, FaPython, FaFigma, FaJava } from "react-icons/fa"
import { GiTurtle } from "react-icons/gi"

interface navList {
  label: string
  link: string
}

export const navbarList: navList[] = [
  {
    label: "Home",
    link: "home"
  },
  {
    label: "Projects",
    link: "projects"
  },
  {
    label: "Skills",
    link: "skills"
  },
  {
    label: "About",
    link: "about"
  },
  {
    label: "Contact",
    link: "contact"
  },
]

interface skills {
  title: string
  icon: ReactElement
  link: string
}

export const skillItems: skills[] = [
  {
    title: 'HTML',
    icon: <FaHtml5 size={50} />,
    link: 'https://id.wikipedia.org/wiki/HTML'
  },
  {
    title: 'CSS',
    icon: <FaCss3Alt size={50} />,
    link: 'https://en.wikipedia.org/wiki/CSS'
  },
  {
    title: 'Typescript',
    icon: <SiTypescript size={50} />,
    link: 'https://www.typescriptlang.org/'
  },
  {
    title: 'React',
    icon: <FaReact size={50} />,
    link: 'https://react.dev'
  },
  {
    title: 'NextJS',
    icon: <SiNextdotjs size={50} />,
    link: 'https://nextjs.org'
  },
  {
    title: 'NodeJS',
    icon: <FaNodeJs size={50} />,
    link: 'https://nodejs.org/'
  },
  {
    title: 'Jquery',
    icon: <SiJquery size={50} />,
    link: 'https://jquery.com/'
  },
  {
    title: 'TailwindCSS',
    icon: <SiTailwindcss size={50} />,
    link: 'https://tailwindcss.com'
  },
  {
    title: 'Javascript',
    icon: <SiJavascript size={50} />,
    link: 'https://www.javascript.com/'
  },
  {
    title: 'ViteJS',
    icon: <SiVite size={50} />,
    link: 'https://vitejs.dev'
  },
  {
    title: 'Java',
    icon: <FaJava size={50} />,
    link: 'https://www.java.com/'
  },
  {
    title: 'PHP',
    icon: <SiPhp size={50} />,
    link: 'https://www.php.net/'
  },
  {
    title: 'CodeIgniter',
    icon: <SiCodeigniter size={50} />,
    link: 'https://www.codeigniter.com/'
  },
  {
    title: 'Laravel',
    icon: <FaLaravel size={50} />,
    link: 'https://laravel.com/'
  },
  {
    title: 'AstroJS',
    icon: <SiAstro size={50} />,
    link: 'https://astro.build/'
  },
  {
    title: 'ExpressJS',
    icon: <SiExpress size={50} />,
    link: 'https://expressjs.com/'
  },
  {
    title: 'MySql',
    icon: <SiMysql size={50} />,
    link: 'https://www.mysql.com/'
  },
  {
    title: 'Supabase',
    icon: <SiSupabase size={50} />,
    link: 'https://supabase.com/'
  },
  {
    title: 'Chakra-UI',
    icon: <SiChakraui size={50} />,
    link: 'https://supabase.com/'
  },
  {
    title: 'Bootstrap',
    icon: <FaBootstrap size={50} />,
    link: 'https://chakra-ui.com/'
  },
  {
    title: 'Shadcn-UI',
    icon: <SiShadcnui size={50} />,
    link: 'https://ui.shadcn.com/'
  },
  {
    title: 'Git',
    icon: <FaGitAlt size={50} />,
    link: 'https://git-scm.com/'
  },
  {
    title: 'Bootstrap',
    icon: <FaBootstrap size={50} />,
    link: 'https://getbootstrap.com/'
  },
  {
    title: 'Python',
    icon: <FaPython size={50} />,
    link: 'https://www.python.org/downloads/'
  },
  {
    title: 'Turtle',
    icon: <GiTurtle size={50} />,
    link: 'https://docs.python.org/3/library/turtle.html/'
  },
  {
    title: 'Bootstrap',
    icon: <FaBootstrap size={50} />,
    link: 'https://getbootstrap.com/'
  },
  {
    title: 'Dart',
    icon: <SiDart size={50} />,
    link: 'https://dart.dev/'
  },
  {
    title: 'Flutter',
    icon: <SiFlutter size={50} />,
    link: 'https://flutter.dev/'
  },
  {
    title: 'Figma',
    icon: <FaFigma size={50} />,
    link: 'https://www.figma.com/'
  },
  {
    title: 'PremierePro',
    icon: <SiAdobepremierepro size={50} />,
    link: 'https://www.adobe.com/id_id/products/premiere/free-trial-download.html'
  },
]

interface projects {
  title: string
  link: string
  thumbnail: string
}

export const projectItems: projects[] = [
  {
    title: "PPTQ-AM",
    link: "https://pptqam.ponpes.id",
    thumbnail: "/project1.png",
  },
  {
    title: "First Portfolio",
    link: "https://github.com/aldiipratama",
    thumbnail: "/project2.png",
  },
  {
    title: "Tiktok Clone Web",
    link: "https://tiktok-cloning.netlify.app/",
    thumbnail: "/project3.png",
  },
  {
    title: "Heart App",
    link: "",
    thumbnail: "https://placeholder.com/350x50?text=PhotoNotFound",
  },
  {
    title: "Web Undangan",
    link: "https://undangan-trah.netlify.app/",
    thumbnail: "/project4.png",
  },
  {
    title: "Second Portfolio",
    thumbnail: "/project5.png",
    link: "https://aldipratama-portfoliov2.vercel.app",
  },
  {
    title: "Third Portfolio",
    thumbnail: "/project6.png",
    link: "https://aldipratama-portfoliov3.vercel.app",
  },
  {
    title: "Fourth portfolio",
    thumbnail: "/project7.png",
    link: "https://aldipratama.vercel.app",
  },
  {
    title: 'dyyAI',
    thumbnail: '/project8.png',
    link: 'https://ai-dyy.netlify.app',
  }
]