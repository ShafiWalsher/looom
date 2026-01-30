import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ThreadForm() {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for posting goes here
    console.log("Posting:", content);
    setContent(""); // Clear form after submit
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-b-2xl overflow-hidden w-full max-w-[620px]"
    >
      <div className="flex gap-3 px-5 pt-4">
        {/* Left Column: Avatar & Thread Line */}
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-gray-400 shrink-0" />
          <div className="w-[2px] grow bg-black/10 my-2 rounded-full" />
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">user_name</span>
          </div>

          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What’s new?"
            className="bg-transparent border-none p-0 focus-visible:ring-0 leading-relaxed resize-none min-h-[80px] placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Toolbar / Footer */}
      <div className="px-5 py-3 flex items-center justify-end border-t border-black/10">
        <Button
          type="submit"
          disabled={!content.trim()}
          className="bg-black text-white hover:bg-gray-800 cursor-pointer disabled:opacity-50 rounded-full px-6 font-semibold text-sm transition-all"
        >
          Post
        </Button>
      </div>
    </form>
  );
}
