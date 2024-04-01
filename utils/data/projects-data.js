import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Meeting-scheduler App',
        description: "I have developed a dynamic Meeting Scheduler App, leveraging Next.js, Firebase, and React technologies to create a seamless platform for businesses to schedule and manage their meetings efficiently. With integrated features like profile creation, customizable meeting durations, and automated confirmation emails, the app simplifies the scheduling process for both users and clients, enhancing productivity and professional interactions.",
        tools: ['ReactJs', 'NextJs', 'Firebase', 'React-Email', 'Kinde-Auth', 'TailwindCSS', 'Shadcn/ui', 'Plunk'],
        role: 'Full-Stack Developer',
        code: 'https://github.com/AMANKUMARAKASH/Meeting-Scheduler',
        demo: 'https://meeting-scheduler-jet.vercel.app/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Home_service App',
        description: 'I have developed a dynamic Home-Service App using Next.js, Hygragh , and React technologies. This innovative platform simplifies the process of booking and managing home services for users and businesses. With features like profile creation, customizable service options, and automated notifications, the app enhances efficiency and ensures seamless interactions between service providers and customers, revolutionizing the home-service industry.',
        tools: ['NextJS', 'Tailwind CSS', "ReactJs", "Hygraph", "Descope", "Shadcn/ui"],
        role: 'Full Stack Developer',
        code: 'https://github.com/AMANKUMARAKASH/Home_service',
        demo: 'https://aman-home-service.netlify.app/',
        image: travel,
    },
    {
        id: 3,
        name: 'Sociopath',
        description: 'Engineered a feature-rich social platform encompassing user authentication, posting functionalities, liking posts, andexpanding social circles through adding friends. Implemented using ReactJS and supported by a NodeJS back-end withMongoDB',
        tools: ['React', 'Bootstrap',  'Express', , 'MongoDB', 'Moongoose', 'JavaScript', 'RestFull APIs', 'NodeJS', 'JWT'],
        role: 'Full Stack Developer',
        code: 'https://github.com/AMANKUMARAKASH/Sociopath-MERN',
        demo: 'https://github.com/AMANKUMARAKASH/Sociopath-MERN',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Blog-App',
        description: "Next.js Expertise: Developed fast, SEO-friendly web app with Next.js.Full-Stack Proficiency: Skilled in React, Node.js, and MongoDB for end-to-end functionality. Secure Authentication: Implemented GitHub login and admin privileges for user management",
        tools: ['NextJS', 'CSS', 'Redux', 'React', "MongoDB","Mongoose"],
        code: 'https://github.com/AMANKUMARAKASH/BlogApp',
        demo: 'https://blog-app-ten-theta.vercel.app/',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


