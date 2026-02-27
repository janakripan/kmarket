import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import hillCity from "./assets/home/about logos/hillCity.png";
import chocoMajlis from "./assets/home/about logos/chocoMajlis.png";
import kmartGroup from "./assets/home/about logos/kmartGroup.png";
import kmartStores from "./assets/home/about logos/kmartSupermarket.png";
import hillBake from "./assets/home/about logos/hillBake.png";

import retailSector from './assets/home/blog images/retailSector.jpg'
import foodNproduction from './assets/home/blog images/food&production.jpg'
import distribution from './assets/home/blog images/distribution.jpg'

export const headerLinks = [
  {
    title: "Home",
    scrollTo: "hero",
  },
  {
    title: "About Us",
    scrollTo: "about",
  },
  {
    title: "Blog",
    scrollTo: "blog",
  },
  {
    title: "Help",
    scrollTo: "help",
  },
];

export const socialLinks = [
  {
    title: "Facebook",
    link: "#",
    icon: FaFacebookF,
  },
  {
    title: "Twitter",
    link: "#",
    icon: FaXTwitter,
  },
  {
    title: "Instagram",
    link: "#",
    icon: FaInstagram,
  },
  {
    title: "LinkedIn",
    link: "#",
    icon: FaLinkedinIn,
  },
];

export const branchesLogo = [hillCity,chocoMajlis,kmartGroup,kmartStores,hillBake];

export const blogData = [
  {
    title:"Retail Sector",
    image:retailSector,
  },
  {
    title:"Food & Production",
    image:foodNproduction,
  },
  {
    title:"Distribution",
    image:distribution,
  },
]
