import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";

import LooomLogo from "./assets/looom-logo.svg";

function App() {
  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* 1. Left Sidebar */}
      <nav className="fixed left-0 top-0 flex h-full w-20 flex-col items-center justify-between pt-6 pb-10">
        <a href="/" className="cursor-pointer">
          <img src={LooomLogo} alt="logo" className="w-8 h-8 fill-black" />
        </a>
        <div className="flex flex-col gap-4">
          <div className="hover:bg-gray-200 px-4 py-2.5 rounded-lg transition-all duration-150 cursor-pointer group">
            <HomeIcon
              className="text-gray-400 group-hover:text-black transition-colors duration-100"
              size={24}
            />
          </div>

          <div className="hover:bg-gray-200 px-4 py-2.5 rounded-lg transition-all duration-150 cursor-pointer group">
            <SearchIcon
              className="text-gray-400 group-hover:text-black transition-colors duration-100"
              size={24}
            />
          </div>
          <div className="bg-gray-200 px-4 py-2.5 rounded-lg transition-all duration-150 cursor-pointer group">
            <PlusIcon
              className="text-gray-800 group-hover:text-black transition-colors duration-100"
              size={24}
            />
          </div>
          <div className="hover:bg-gray-200 px-4 py-2.5 rounded-lg transition-all duration-150 cursor-pointer group">
            <HeartIcon
              className="text-gray-400 group-hover:text-black transition-colors duration-100"
              size={24}
            />
          </div>
          <div className="hover:bg-gray-200 px-4 py-2.5 rounded-lg transition-all duration-150 cursor-pointer group">
            <UserIcon
              className="text-gray-400 group-hover:text-black transition-colors duration-100"
              size={24}
            />
          </div>
        </div>
        <div className="hover:bg-gray-200 px-4 py-2.5 rounded-lg transition-all duration-150 cursor-pointer group">
          <MenuIcon
            className="text-gray-400 group-hover:text-black transition-colors duration-100"
            size={20}
          />
        </div>
      </nav>

      {/* 2. Main Feed Container */}
      <main className="flex-1 ml-20 flex justify-center">
        <div className="w-full max-w-[620px] px-4">
          {/* Sticky Header */}
          <header className="sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-gray-50">
            <div className="flex justify-center gap-6 py-4 font-medium text-gray-500">
              <button className="text-black border-b-2 border-black pb-4">
                For you
              </button>
              <button className="pb-4">Following</button>
              <button className="pb-4 text-gray-400">Books</button>
            </div>
          </header>

          {/* Post Composer & Feed */}
          <div className="py-4">{/* Map through post components here */}</div>
        </div>
      </main>

      {/* Mobile Floating Action Button (Optional) */}
      <div className="fixed bottom-6 right-6">
        <div className="border border-gray-200 px-6 py-4 rounded-lg hover:shadow-sm cursor-pointer group">
          <PlusIcon
            className="text-gray-700 group-hover:text-black transition-colors duration-100"
            size={24}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
