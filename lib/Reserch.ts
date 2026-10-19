import { title } from "process";
import "server-only";

interface Reserch{
    title: string
    company: string
    date: string
    desc: string
    ghLink: string
    scolarLink: string
    arXiv: string
    slug: string
}

export const research: Reserch[] = [
    {
        title: "SYMMET - Symmetry-Aware Machine Learning",
        company: "",
        date: "16 October 2026 - 21 October 2026",
        desc: "Can geometric knowledge improve neural network sample efficiency?",
        ghLink: "https://github.com/ChitrakshKataria/SYMMET",
        scolarLink: "",
        arXiv: "",
        slug: "SYMMET",
    },
]