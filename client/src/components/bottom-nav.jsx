import { NAV_MENU_ITEMS } from "@/constants";


const NAV_ITEM_BASE =
    "px-3.5 py-3 rounded-lg transition-all duration-150 cursor-pointer group";

const NAV_ITEM_HOVER = "hover:bg-gray-200";

const ICON_BASE =
    "transition-colors duration-100";


const NAV_ICON_INACTIVE = "text-gray-400 group-hover:text-black";
const NAV_ICON_ACTIVE = "text-gray-800 group-hover:text-black";


const BottomNav = () => {
    return (
        <nav className="md:hidden fixed z-50 bottom-0 w-full flex gap-2 items-cente justify-between py-2.5 px-2 bg-white backdrop-blur-xl border-t border-black/10">
            {NAV_MENU_ITEMS.map((menuItem, index) => {
                const { Icon, active } = menuItem;
                return (
                    <div
                        key={index}
                        className={`${NAV_ITEM_BASE} ${active ? "bg-gray-200" : NAV_ITEM_HOVER
                            }`}
                    >
                        <Icon
                            size={22}
                            className={`${ICON_BASE} ${active ? NAV_ICON_ACTIVE : NAV_ICON_INACTIVE
                                }`}
                        />
                    </div>
                )
            })}
        </nav>
    )
}

export default BottomNav