import { title } from "process";
import "server-only";

interface Experiments {
    title: string;
    date: string;
    desc: string;
    ghLink: string;
    liveDemo: string;
}

export const experiments: Experiments[] = [
    {
        title: "Hello-World-PyTorch",
        date: "8th - October 2026",
        desc: "JUST SOMETHING FOR NOW",
        ghLink: "https://github.com/ChitrakshKataria/ML-DL-Basics/tree/main/HelloWorld-PyTorch",
        liveDemo: "just-something.com"

    },
]