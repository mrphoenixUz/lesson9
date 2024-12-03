import AvatarF from "./Avatar"
import BadgeF from "./Badge"
import SelectF from "./Select"
import SwitchF from "./Switch"
import TourF from "./Tour"
import { Tooltip } from 'antd';


const navLinks = [
    {
        name: <SelectF />,
    },
    {
        name: <SwitchF />,
    },
    {
        name: <AvatarF />,
    },
    {
        name: <BadgeF />,
    }
]

const Navbar = () => {
    return (
        <nav className='bg-primary'>
            <div className="relative flex justify-between items-center max-lg:py-4 container">
                <a href="#" className="text-3xl">
                    <Tooltip title="tooltip is working)">
                        <span>Phoenix</span>
                    </Tooltip>
                </a>
                <div className='flex items-center gap-10'>
                    <ul className='bottom-0 z-50 max-lg:fixed flex justify-between max-lg:justify-around items-center max-lg:bg-primary max-lg:py-5 max-lg:w-full text-white end-0 start-0'>
                        {navLinks.map(l => (
                            <li key={l.name} className='block mx-5 my-7 hover:underline'> {l.name} </li>
                        ))}
                    </ul>
                    <TourF />
                </div>
            </div>
        </nav>
    )
}

export default Navbar