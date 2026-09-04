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
        title: "Personal Portfolio",
        company: "",
        date: "Aug 29 - Sep 3",
        desc: "This is a early build of my portfolio created in NextJS. Most parts of the site are incomplete as of 3. sep. More functionality will be added!",
        ghLink: "https://github.com/ChitrakshKataria/portfolio",
        slug: "portfolio",
    },
]






// As i dont have a databse i will temporarily be using this will as one.
// I am exporting a function that gives all the info about a project based on the drilled slug. 
export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug)
}