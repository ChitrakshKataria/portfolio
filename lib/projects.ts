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
        date: "Sep 25th - Oct 5",
        desc: "A collection/log of some basic neural networks / DeepLearning models i wrote in both PyTorch and pure Pyhton. The goal with this project is to understand the underlying math and concepts behing neural networks.",
        ghLink: "https://github.com/ChitrakshKataria/AI-Driven-vibecoding-dev-dashbord",
        slug: "devdash-script"
    },
    {
        title: "Personal Portfolio",
        company: "",
        date: "Aug 29 - Sep 3",
        desc: "This is a early build of my portfolio created in Next.Js. Most parts of the site are incomplete as of 3. sep. More functionality will be added!",
        ghLink: "https://github.com/ChitrakshKataria/portfolio",
        slug: "portfolio",
    },
    {
        title: "Samuel Monty Lewis' Blog",
        company: "",
        date: "Apr 21 - Apr 25",
        desc: "This is a blog page i created for my friend, the project uses a modern techstack.",
        ghLink: "https://github.com/samuelmontylewis/samuelmontylewis.com",
        slug:"samuelmontylewis-blog"
    },
    {
        title: "AI-Driven development dashboard",
        company: "",
        date: "May 3 - May 5",
        desc: "This is an AI-driven dashboard that runs in your terminal and makes it easy to code applications and webablications with the help of coding agents",
        ghLink: "https://github.com/ChitrakshKataria/AI-Driven-vibecoding-dev-dashbord",
        slug: "devdash-script"
    },
]






// As I don't have a database i will temporarily be using this as one.
// I am exporting a function that gives all the info about a project based on the drilled slug. 
export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug)
}
