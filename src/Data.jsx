import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import carouse1 from "./assets/go one.jpg"
import carouse2 from "./assets/go two.jpg"
import carouse3 from "./assets/go three.jpg"
import carouse4 from "./assets/go four.jpg"
import carouse5 from "./assets/go five.jpg"
import carouse6 from "./assets/11.png"
import carouse7 from "./assets/7.png"
import carouse8 from "./assets/9.png"

import logo1 from "./assets/1.png"
import logo2 from "./assets/2.jpeg"
import logo3 from "./assets/3.jpg"
import logo4 from "./assets/4.png"
import logo5 from "./assets/6.jpg"
import logo6 from "./assets/8.png"

export const navLinks = [
    {
        id: 1,
        href: 'home',
        link: 'Home',
    },
    {
        id: 2,
        href: "about",
        link: "About",
    },
    {
        id: 3,
        href: 'courses',
        link: 'Coures'
    },
    {
        id: 4,
        href: 'teacher',
        link: 'Teacher',
    },
    {
        id: 5,
        href: 'contact',
        link: 'Contact'
    },
];

export const categories = [
    {
        id: 1,
        icon: <FiPenTool />,
        category: "Design",
    },
    {
        id: 2,
        icon: <FaLaptopCode />,
        category: "Development",
    },
    {
        id: 3,
        icon: <BsBarChartLine />,
        category: "Business",
    },
    {
        id: 4,
        icon: <MdOutlineScience />,
        category: 'Science',
    },
];

export const courses = [
    {
        id: 1,
        image: carouse1,
        category: "Web design",
        title: "The complete web design course",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 2,
        image: carouse2,
        category: "Web development",
        title: "Fullstack web development course",
        rating: 4.8,
        participants: 700,
        price: 125,
    },
    {
        id: 3,
        image: carouse3,
        category: "Web Development",
        title: "Python beginner to advanced course",
        rating: 4.9,
        participants: 300,
        price: 99,
    },
    {
        id: 4,
        image: carouse4,
        category: "web design",
        title: "UI/UX desgin Crazy course",
        rating: 5.0,
        participants: 600,
        price: 85,
    },
    {
        id: 5,
        imaage: carouse5,
        category: "AI development",
        title: "AI development with python",
        rating: 4.1,
        participants: 500,
        price: 105,
    },
    {
        id: 6,
        image: carouse6,
        category: "Web design",
        title: "The complete web design course",
        rating: 4.9,
        participants: 500,
        price: 201
    },
    {
        id: 7,
        image: carouse7,
        category: "Web design",
        title: "The complete web design course",
        rating: 4.9,
        participants: 500,
        price: 201
    },
    {
        id: 8,
        image: carouse8,
        category: "Web design",
        title: "The complete web design course",
        rating: 4.9,
        participants: 500,
        price: 201
    },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
    {
        id: 1,
        title: "What is skillex?",
    },
    {
        id: 2,
        title: "What can i learn from skillex",
    },
    {
        id: 3,
        title: "Can i teach on skillex",
    },
    {
        id: 4,
        title: "what is included in my skillex membership",
    },
]