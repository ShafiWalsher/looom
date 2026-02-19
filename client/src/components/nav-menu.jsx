import { NAV_MENU_ITEMS } from "@/constants";
import NavItem from "./nav-item";


export default function NavMenu({ iconSize = 22, onCreateClick }) {
    return (
        <>
            {NAV_MENU_ITEMS.map((menuItem, index) => {
                const { Icon, active, isCreate } = menuItem;

                return (
                    <div
                        key={index}
                        className={`${active && 'bg-gray-200 hover:bg-gray-200'} group hover:bg-gray-200 rounded-lg px-3.5 py-2 md:px-5 md:py-3 transition-colors duration-100 cursor-pointer w-full md:w-fit flex justify-center items-center`}
                        onClick={isCreate ? onCreateClick : undefined}>
                        <NavItem Icon={Icon} active={active} size={iconSize} />
                    </div>
                );
            })}
        </>
    );
}
