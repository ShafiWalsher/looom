import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { logoutUser } from "@/services/auth.service";
import { MenuIcon, LogOut } from "lucide-react";

const UserMenu = ({ size = 24, className = "", align = "start" }) => {
    const handleLogout = () => {
        logoutUser();
        window.location.href = "/";
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button className={`outline-none ${className} cursor-pointer`}>
                    <MenuIcon size={size} />
                </button>
            </PopoverTrigger>
            <PopoverContent align={align} className="w-48 p-2">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                    <LogOut size={16} />
                    Logout
                </button>
            </PopoverContent>
        </Popover>
    );
};

export default UserMenu;