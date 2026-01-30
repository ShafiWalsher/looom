import { Outlet } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import BottomNav from "@/components/bottom-nav";
import Header from "@/components/header";
import SidebarNav from "@/components/sidebar-nav";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ThreadForm from "@/components/thread-form";
import { useCreateThread } from "@/hooks/use-create-thread";

const AppLayout = () => {
  const thread = useCreateThread();

  return (
    <div className="app">
      <main>
        <SidebarNav onCreateClick={thread.openDialog} />
        <Header />
        <div className="w-full md:max-w-4xl mx-auto ">
          <Outlet />
        </div>
        <BottomNav onCreateClick={thread.openDialog} />

        <Dialog open={thread.open} onOpenChange={thread.setOpen}>
          <DialogContent
            className="sm:max-w-lg p-0 bg-transparent border-none shadow-none gap-0"
            showCloseButton={false}
          >
            <DialogHeader className="px-5 py-4 border-b border-black/10 bg-white rounded-t-2xl">
              <div className="flex items-center justify-between w-full">
                <button
                  onClick={thread.closeDialog}
                  className="text-sm text-gray-800 hover:text-black cursor-pointer"
                >
                  Cancel
                </button>
                <DialogTitle className="text-sm font-bold">
                  New thread
                </DialogTitle>
                <DialogDescription className="sr-only">
                  New thread form
                </DialogDescription>
                <div className="w-12" />
              </div>
            </DialogHeader>

            <ThreadForm />
          </DialogContent>
        </Dialog>
      </main>
      {/* Floating Action Button (Optional) */}
      <div className="hidden md:inline-flex fixed bottom-8 right-8">
        <button
          onClick={thread.openDialog}
          className="bg-white border border-gray-400 px-6 py-4 rounded-lg hover:shadow-md cursor-pointer group transition-all duration-150"
        >
          <PlusIcon
            className="text-gray-700 group-hover:text-black transition-colors duration-100"
            size={24}
          />
        </button>
      </div>
    </div>
  );
};

export default AppLayout;
