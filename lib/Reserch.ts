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
    ssrn: string
    slug: string
}

export const research: Reserch[] = [
    {
        title: "SYMMET - Symmetry-Aware Machine Learning",
        company: "",
        date: "14 October 2026 - 21 October 2026",
        desc: "Can geometric knowledge improve neural network sample efficiency?",
        ghLink: "https://github.com/ChitrakshKataria/SYMMET",
        scolarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gISb05YAAAAJ&citation_for_view=gISb05YAAAAJ:u5HHmVD_uO8C",
        arXiv: "",
        ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7650698",
        slug: "SYMMET",
    },
]