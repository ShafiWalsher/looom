import {
    MenuIcon,
} from "lucide-react";

import LooomLogo from "../assets/looom-logo.svg";
import { NAV_MENU_ITEMS } from "@/constants";

const NAV_ITEM_BASE =
    "px-4 py-3.5 rounded-lg transition-all duration-150 cursor-pointer group";

const NAV_ITEM_HOVER = "hover:bg-gray-200";

const ICON_BASE =
    "transition-colors duration-100";


const NAV_ICON_INACTIVE = "text-gray-400 group-hover:text-black";
const NAV_ICON_ACTIVE = "text-gray-800 group-hover:text-black";



const SidebarNav = () => {
    return (
        <nav className="hidden fixed left-0 top-0 bg-white h-full w-20 md:flex flex-col items-center justify-between pt-6 pb-8">
            <a href="/" className="cursor-pointer">
                <img src={LooomLogo} alt="logo" className="w-10 h-10 fill-black" />
            </a>
            <div className="flex flex-col gap-2">
                {NAV_MENU_ITEMS.map((menuItem, index) => {
                    const { Icon, active } = menuItem;
                    return (

                        <div
                            key={index}
                            className={`${NAV_ITEM_BASE} ${active ? "bg-gray-200" : NAV_ITEM_HOVER
                                }`}
                        >
                            <Icon
                                size={24}
                                className={`${ICON_BASE} ${active ? NAV_ICON_ACTIVE : NAV_ICON_INACTIVE
                                    }`}
                            />
                        </div>
                    )
                })}
            </div>
            <div className=" hover:bg-gray-200 px-4 py-2.5 rounded-lg transition-all duration-150 cursor-pointer group">
                <MenuIcon
                    className="text-gray-400 group-hover:text-black transition-colors duration-100"
                    size={20}
                />
            </div>
        </nav>
    )
}

export default SidebarNav