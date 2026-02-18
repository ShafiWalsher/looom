import { Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
    return (
        <div className="border-b border-black/10 px-5 py-4">
            <div className="flex gap-3">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold shrink-0">
                    {post.username?.charAt(0).toUpperCase()}
                </div>

                <div className="flex-1">
                    {/* Username */}
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{post.username}</span>
                    </div>

                    {/* Content */}
                    <Link to={`/post/${post.post_id}`}>
                        <p className="mt-1 text-sm leading-relaxed whitespace-pre-wrap">
                            {post.content}
                        </p>
                    </Link>

                    {/* Actions */}
                    <div className="flex gap-6 mt-3 text-gray-500">
                        <div className="flex items-center gap-1">
                            <Heart size={16} />
                            <span className="text-xs">{post.likes_count}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <MessageCircle size={16} />
                            <span className="text-xs">{post.replies_count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
