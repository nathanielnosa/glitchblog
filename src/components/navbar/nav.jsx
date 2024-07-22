import { FaHome, FaPlusCircle, FaQuestion } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { RiBloggerFill } from "react-icons/ri";

const nav = [
  {
    id: 1,
    title: 'HOME',
    link: '/',
    icons: <FaHome />
  },
  {
    id: 2,
    title: 'ABOUT',
    link: '/about',
    icons: <FaQuestion />
  },
  {
    id: 3,
    title: 'CONTACT',
    link: '/contact',
    icons: <GrContact />
  },
  {
    id: 4,
    title: 'BLOGS',
    link: '/blogs',
    icons: <RiBloggerFill />
  },
  {
    id: 5,
    title: 'Create',
    link: '/create',
    icons: <FaPlusCircle />
  },
]

export default nav