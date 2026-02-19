import { Heart, MessageCircle, Repeat2, Bookmark, MoreHorizontal, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AVATAR_GRADIENTS = [
    "from-rose-400 to-pink-600",
    "from-violet-400 to-purple-600",
    "from-blue-400 to-cyan-500",
    "from-emerald-400 to-teal-600",
    "from-amber-400 to-orange-500",
];

export default function PostCard({ post }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes_count || 0);
    const [bookmarked, setBookmarked] = useState(false);

    const handleLike = (e) => {
        e.preventDefault();
        setLiked((prev) => !prev);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    const avatarLetter = post.username?.charAt(0).toUpperCase();
    const gradient =
        AVATAR_GRADIENTS[post.username?.charCodeAt(0) % AVATAR_GRADIENTS.length || 0];

    return (
        <article className="group border-b border-gray-100 px-5 py-4 bg-white hover:bg-gray-50 transition-colors duration-150 cursor-default">
            <div className="flex gap-3">

                {/* Left col: avatar + thread line */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                    <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm tracking-tight select-none`}
                    >
                        {avatarLetter}
                    </div>
                    <div className="w-0.5 flex-1 min-h-4 rounded-full bg-gradient-to-b from-gray-200 to-transparent" />
                </div>

                {/* Right col: content */}
                <div className="flex-1 min-w-0">

                    {/* Header row */}
                    <div className="flex items-center justify-between mb-0.5">
                        <div className="flex items-center gap-1.5 min-w-0">
                            <span className="font-semibold text-sm text-gray-900 truncate">
                                {post.username}
                            </span>
                            {post.verified && (
                                <BadgeCheck className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                            )}
                            <span className="text-xs text-gray-400 shrink-0">
                                {post.created_at || "2h"}
                            </span>
                        </div>
                        <button className="p-1 rounded-full text-gray-300 opacity-0 group-hover:opacity-100 hover:bg-gray-100 hover:text-gray-500 transition-all duration-150 ml-2 shrink-0">
                            <MoreHorizontal size={15} />
                        </button>
                    </div>

                    {/* Post body */}
                    <Link
                        to={`/post/${post.post_id}`}
                        className="block text-sm leading-relaxed text-gray-700 whitespace-pre-wrap break-words mb-2.5 hover:text-gray-900 transition-colors no-underline"
                    >
                        {post.content}
                    </Link>

                    {/* Optional image */}
                    {post.image_url && (
                        <div className="rounded-xl overflow-hidden border border-gray-100 mb-2.5">
                            <img
                                src={post.image_url}
                                alt="Post media"
                                className="w-full object-cover max-h-72 block"
                            />
                        </div>
                    )}

                    {/* Action bar */}
                    <div className="flex items-center -ml-2 mt-0.5">
                        {/* Like */}
                        <button
                            onClick={handleLike}
                            className={`flex items-center gap-1 px-2 py-1.5 rounded-full text-xs font-medium transition-all duration-150 active:scale-95
                ${liked
                                    ? "text-rose-500 hover:bg-rose-50"
                                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"}`}
                        >
                            <Heart
                                size={15}
                                fill={liked ? "currentColor" : "none"}
                                strokeWidth={liked ? 0 : 1.8}
                            />
                            {likeCount > 0 && <span>{likeCount}</span>}
                        </button>

                        {/* Comment */}
                        <Link to={`/post/${post.post_id}`} className="no-underline">
                            <button className="flex items-center gap-1 px-2 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-150 active:scale-95">
                                <MessageCircle size={15} strokeWidth={1.8} />
                                {post.replies_count > 0 && <span>{post.replies_count}</span>}
                            </button>
                        </Link>

                        {/* Repost */}
                        <button className="flex items-center gap-1 px-2 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-150 active:scale-95">
                            <Repeat2 size={16} strokeWidth={1.8} />
                        </button>

                        <div className="flex-1" />

                        {/* Bookmark */}
                        <button
                            onClick={() => setBookmarked((p) => !p)}
                            className={`flex items-center px-2 py-1.5 rounded-full text-xs transition-all duration-150 active:scale-95
                ${bookmarked
                                    ? "text-sky-500 hover:bg-sky-50"
                                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"}`}
                        >
                            <Bookmark
                                size={14}
                                fill={bookmarked ? "currentColor" : "none"}
                                strokeWidth={bookmarked ? 0 : 1.8}
                            />
                        </button>
                    </div>

                </div>
            </div>
        </article>
    );
}