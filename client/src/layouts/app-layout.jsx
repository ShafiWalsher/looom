import { Outlet } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import BottomNav from "@/components/bottom-nav"
import Header from "@/components/header"
import SidebarNav from "@/components/sidebar-nav"

const AppLayout = () => {
    return (
        <div className="app">
            <SidebarNav />
            <div className="main">
                <Header />
                <div className="w-full md:max-w-4xl mx-auto ">
                    <Outlet />
                </div>
            </div>
            {/* Floating Action Button (Optional) */}
            <div className="hidden md:inline-flex fixed bottom-8 right-8">
                <div className="bg-white border border-gray-300 px-6 py-4 rounded-lg hover:shadow-sm cursor-pointer group">
                    <PlusIcon
                        className="text-gray-700 group-hover:text-black transition-colors duration-100"
                        size={24}
                    />
                </div>
            </div>
            <BottomNav />
        </div>
    )
}

export default AppLayout