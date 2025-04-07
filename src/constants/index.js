import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  // weatherApp,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cloud Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DSA",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Education",
    company_name: "Academic Journey",
    iconBg: "#E6DEDD",

    points: [
      "B.Tech in Computer Science and Engineering - Madan Mohan Malviya University of Technology (2023 - 2027), CGPA: 8.16, Gorakhpur, Uttar Pradesh",
      "12th Grade - Sri Sai Inter College Lakhperabagh, Barabanki (2022), Percentage: 79%, Barabanki, Uttar Pradesh",
      "10th Grade - Sri Sai Inter College Lakhperabagh, Barabanki (2020), Percentage: 88%, Barabanki, Uttar Pradesh",
    ],
  },
  {
    title: "Web Development Intern (Virtual)",
    company_name: "CodSoft",
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Completed a virtual internship focused on front-end web development using HTML, CSS, and JavaScript.",
      "Built user-friendly and responsive websites with authentication and search functionality.",
      "Worked on project-based learning, applying clean coding practices and UI/UX principles.",
      "Collaborated and submitted projects remotely using version control and modern development tools.",
    ],
  },
  {
    title: "Next.js and React Projects(Personal Projects)",
    company_name: "Self-Learning",
    iconBg: "#E6DEDD",
    points: [
      "Created fully functional Personal PortFolio , Weather App, Pokemon App using Next.js and React.js, Tailwind CSS, and vanilla JavaScript.",
      "Implemented features like real-time streaming, advanced search filters, and responsive layouts.",
      "Built and deployed a personal portfolio to showcase projects and development skills.",
      "Focused on reusable components, performance optimization, and Git-based version control.",
    ],
  },
  {
    title: "Hackathon Participant",
    company_name: "IIT Jodhpur, IIT BHU, VNIT & others",
    iconBg: "#383E56",
    points: [
      "Participated in multiple national-level hackathons and coding competitions.",
      "Collaborated in teams to build innovative applications and solve real-world problems.",
      "Practiced rapid development, time-bound coding, and agile project pitching.",
      "Learned to work in high-pressure environments with focus on creativity and technical skills.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Working with Ravikant Bedi was an amazing experience. Their passion for web development and Dsa and clean code really shines through in every project.",
    name: "Dev Saxena",
    designation: "Collaborator",
    company: "TechBridge Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Ravikant Bedi brought our idea to life with such clarity and dedication. Their curiosity and constant drive to improve made all the difference.",
    name: "Anshika Awasthi",
    designation: "Product Designer",
    company: "Creative Minds Inc.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    testimonial:
      "From frontend to backend,Ravikant Bedi handled everything smoothly. Their ability to turn complex problems into simple, scalable solutions is impressive.",
    name: "Rohan Patel",
    designation: "CTO",
    company: "NextGen Apps",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];


// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];


const projects = [
  {
    name: "My Portfolio Web App",
    description:
      "A personal portfolio website to showcase my skills, projects, and experience. Built with responsive design and smooth UI for a clean presentation.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Replace with actual image import
    source_code_link: "https://github.com/RavikantBedi/My_PortFolio_Web_App",
  },
  {
    name: "Pokemon Web App",
    description:
      "A fun and interactive web app to explore Pokémon stats, sprites, and abilities using the Pokémon API. Built with modern TypeScript stack.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Replace with actual image import
    source_code_link: "https://github.com/RavikantBedi/Pokemon_Web_App",
  },
  {
    name: "My Weather App",
    description:
      "A weather forecasting app using live API data. It allows users to check the current weather, temperature, and conditions by city.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "openweatherapi",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    // image: weatherApp, // Replace with actual image import
    source_code_link: "https://github.com/RavikantBedi/My_Weather_App",
  },
  {
    name: "Gaming Web",
    description:
      "A JavaScript-based gaming interface exploring interactive UI and engaging gameplay mechanics, focusing on DOM manipulation and smooth animations.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Replace with actual image import
    source_code_link: "https://github.com/RavikantBedi/Gaming_WEB",
  },
];




export { services, technologies, experiences, testimonials, projects };
