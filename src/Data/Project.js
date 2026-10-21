import Apple from "../Images/Apple.png"
import Sorting from "../Images/Sorting.png"
import Chat from "../Images/Chat.png"
const projects = [
    {
        id: 1,
        title: "Apple Space",
        category: "E-Commerce Website",
        description:
            "A modern Apple-inspired e-commerce website with product browsing, shopping cart functionality and a responsive UI.",
        tech: ["React", "Redux Toolkit", "Tailwind CSS"],
        image: Apple,
        github: "https://github.com/Akshay-Rawat/Apple-Space",
        demo: "https://apple-space.onrender.com/",
    },

    {
        id: 2,
        title: "Sorting Visualizer",
        category: "Algorithm Visualization",
        description:
            "An interactive sorting visualizer that animates array elements to demonstrate Bubble Sort, Selection Sort, Merge Sort, and Quick Sort. Explore sorting algorithms and understand how they work step by step.",
        tech: ["React", "JavaScript", "Tailwind CSS", "DSA"],
        image: Sorting,
        github: "https://github.com/Akshay-Rawat",
        demo: "https://a-sorting-visualizer-nldp.onrender.com/",
    },

    {
        id: 3,
        title: "P2P Chat Application",
        category: "Real-Time Communication",
        description:
            "A real-time messaging application built to explore instant communication and interactive user experiences.",
        tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
        image: Chat,
        github: "https://github.com/Akshay-Rawat",
        demo: "https://x-chat-csjv.onrender.com/",
    },
]

export default projects;