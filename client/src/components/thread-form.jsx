import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageIcon, Smile, MapPin, List } from "lucide-react";

export default function ThreadForm() {
    return (
        <div className="bg-neutral-950 text-white rounded-b-2xl overflow-hidden border border-white/10">

            {/* User row */}
            <div className="px-5 pt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-200" />
                <div className="text-sm font-medium">user_name</div>
                <span className="text-gray-400 text-sm">Add a topic</span>
            </div>

            {/* Text area */}
            <div className="px-5 pt-3">
                <Textarea
                    placeholder="What’s new?"
                    className="bg-transparent border-none focus-visible:ring-0 text-base resize-none min-h-22.5"
                />
            </div>

            {/* Toolbar */}
            <div className="px-5 py-4 flex items-center justify-end border-t border-white/10">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-5">
                    Post
                </Button>
            </div>
        </div>
    );
}
