import { Heart, MessageCircle, Repeat2, Bookmark, MoreHorizontal, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { formatTimeAgo } from "@/lib/utils";


export default function PostCard({ post }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes_count || 0);

    const handleLike = (e) => {
        e.preventDefault();
        setLiked((prev) => !prev);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    const avatarLetter = post.username?.charAt(0).toUpperCase();

    return (
        <article className="group border-b border-gray-300 last:border-b-0 px-5 py-4 ">
            <div className="flex gap-3">

                {/* Left col: avatar + thread line */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                    <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center text-white font-bold text-sm tracking-tight select-none`}
                    >
                        {avatarLetter}
                    </div>
                </div>

                {/* Right col: content */}
                <div className="flex-1 min-w-0">

                    {/* Header row */}
                    <div className="flex items-center justify-between mb-0.5">
                        <div className="flex items-center gap-1.5 min-w-0">
                            <span className="font-semibold text-gray-900 truncate">
                                {post.username}
                            </span>
                            <span className="text-gray-400 shrink-0">
                                {formatTimeAgo(post.created_at)}
                            </span>
                        </div>
                        <button className="p-2 cursor-pointer rounded-full text-gray-600 opacity-90 hover:bg-gray-100 transition-all duration-150">
                            <MoreHorizontal size={18} />
                        </button>
                    </div>

                    {/* Post body */}
                    <Link
                        to={`/post/${post.post_id}`}
                        className="block leading-relaxed text-gray-700 whitespace-pre-wrap break-words mb-2.5 hover:text-gray-900 transition-colors no-underline"
                    >
                        {post.content}
                    </Link>

                    {/* Action bar */}
                    <div className="flex items-center -ml-2 mt-1">
                        {/* Like */}
                        <button
                            onClick={handleLike}
                            className={`flex items-center gap-1 p-2 rounded-full text-[13px] font-medium transition-all duration-150 active:scale-95 cursor-pointer ${liked
                                ? "text-rose-500 hover:bg-rose-50"
                                : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"}`}
                        >
                            <Heart
                                size={20}
                                fill={liked ? "currentColor" : "none"}
                                strokeWidth={liked ? 0 : 1.8}
                            />
                            {likeCount > 0 && <span>{likeCount}</span>}
                        </button>

                        {/* Comment */}
                        <Link to={`/post/${post.post_id}`} className="no-underline">
                            <button className="flex items-center gap-1 p-2 rounded-full text-[13px] font-medium text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-150 active:scale-95 cursor-pointer">
                                <MessageCircle size={18} strokeWidth={1.8} />
                                {post.replies_count > 0 && <span>{post.replies_count}</span>}
                            </button>
                        </Link>

                        {/* Repost */}
                        <button className="flex items-center gap-1 p-2 rounded-full text-[13px] font-medium text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-150 active:scale-95 cursor-pointer">
                            <Repeat2 size={18} strokeWidth={1.8} />
                        </button>

                    </div>

                </div>
            </div>
        </article>
    );
}