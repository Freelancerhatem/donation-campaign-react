import { Link, NavLink } from "react-router-dom";
import Logo from '../../../assets/image/Logo.png'

const Nav = () => {
    return (
        <div>
            <div className="flex justify-between px-20 py-5 items-center ">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <ul className="menu menu-horizontal  gap-3">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? " border-b-2 border-[#FF444A] pb-1 text-[#FF444A] " : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/donates"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? " border-b-2 border-[#FF444A] pb-1 text-[#FF444A] " : ""
                        }
                    >
                        Donation
                    </NavLink>
                    {/* <NavLink
                        to="/details"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? " border-b-2 border-[#FF444A] pb-1 text-[#FF444A] " : ""
                        }
                    >
                        Donation Details
                    </NavLink> */}
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? " border-b-2 border-[#FF444A] pb-1 text-[#FF444A] " : ""
                        }
                    >
                        Statistics
                    </NavLink>                    
                </ul>
            </div>
        </div>
    );
};

export default Nav;