import "server-only";

interface Projects {
    title: string;
    company: string;
    date: string;
    desc: string;
    ghLink: string;
    slug: string;
}

export const projects: Projects[] = [
    {
        title: "Machine/Deep Learning - Basics",
        company: "",
        date: "25th September 2026 - 5th October 2026",
        desc: "A collection/log of some basic neural networks / DeepLearning models i wrote in both PyTorch and pure Pyhton. The goal with this project is to understand the underlying math and concepts behing neural networks.",
        ghLink: "https://github.com/ChitrakshKataria/ML-DL-Basics",
        slug: "ml-dl-basics"
    },
    
    {
        title: "Personal Portfolio",
        company: "",
        date: "29th August 2026 - Ongoing...",
        desc: "This is a early build of my portfolio created in Next.Js. Most parts of the site are incomplete as of 3. sep. More functionality will be added!",
        ghLink: "https://github.com/ChitrakshKataria/portfolio",
        slug: "portfolio",
    },

    {
        title: "AI-Driven development dashboard",
        company: "",
        date: "3rd May 2026 - 5th May 2026",
        desc: "This is an AI-driven dashboard that runs in your terminal and makes it easy to code applications and webablications with the help of coding agents",
        ghLink: "https://github.com/ChitrakshKataria/AI-Driven-vibecoding-dev-dashbord",
        slug: "devdash-script"
    },

    {
        title: "Samuel Monty Lewis' Blog",
        company: "",
        date: "21st April 2026 - 25th April 2026",
        desc: "This is a blog page i created for my friend, the project uses a modern techstack.",
        ghLink: "https://github.com/samuelmontylewis/samuelmontylewis.com",
        slug:"samuelmontylewis-blog"
    },
        
    {
        title: "Simulation in Python",
        company: "",
        date: "21st April 2026 - 25th April 2026",
        desc: "A archive of all the simulations in python",
        ghLink: "https://github.com/ChitrakshKataria/Simulations-in-Python",
        slug:"simulation-in-python"
    },
]






// As I don't have a database i will temporarily be using this as one.
// I am exporting a function that gives all the info about a project based on the drilled slug. 
export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug)
}
