import {GoMarkGithub} from "react-icons/go";
import {FaInstagram, FaLinkedinIn, FaMediumM, FaTwitter} from "react-icons/fa";
import {IconType} from "react-icons";

interface SocialLinks {
    name: string;
    url: string;
    icon: IconType;
}

export const socials: SocialLinks[] = [
    {
        name: "Github",
        url: "https://github.com/EdgarsBalodis",
        icon: GoMarkGithub
    },
    {
        name: "Twitter",
        url: "https://twitter.com/edgarbalodis",
        icon: FaTwitter
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/edgars-balodis/",
        icon: FaLinkedinIn,
    },
    {
        name: "Instagram",
        url: "",
        icon: FaInstagram,
    },
    {
        name: "Medium",
        url: "https://medium.com/@edgarsbalodis",
        icon: FaMediumM,
    },
];
