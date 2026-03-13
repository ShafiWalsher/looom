import { useEffect, useState } from "react";
import { getActivity } from "@/services/activity.service";
import { Link } from "react-router-dom";

import { Heart, MessageCircle, UserPlus } from "lucide-react";
import { formatTimeAgo } from "@/lib/utils";

const BADGE = {
    like: { bg: "bg-red-50", icon: <Heart size={15} className="text-red-500" strokeWidth={2} /> },
    follow: { bg: "bg-green-50", icon: <UserPlus size={15} className="text-green-500" strokeWidth={2} /> },
    reply: { bg: "bg-blue-50", icon: <MessageCircle size={15} className="text-gray-500" strokeWidth={2} /> },
};

export default function Activity() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadActivity = async () => {
        setLoading(true);
        try {
            setError("");
            const data = await getActivity();
            setItems(data);
        } catch (err) {
            setError(err.message || "Failed to load activity");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { loadActivity(); }, []);

    return (
        <div className="min-h-screen w-full flex flex-col items-center py-6">
            <h1 className="hidden md:inline-block text-[15px] font-medium mb-4 shrink-0">
                Activity
            </h1>

            <div className="w-full md:bg-white md:border md:border-black/10 md:rounded-3xl md:shadow-xs">
                {loading && (
                    <p className="text-gray-500 text-center text-sm py-10">
                        Loading activity...
                    </p>
                )}

                {!loading && error && (
                    <div className="flex flex-col items-center justify-center px-6 py-16 gap-3 text-center">
                        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-xl">⚠️</div>
                        <p className="font-semibold text-gray-900 text-[15px] tracking-tight">Something went wrong</p>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">{error}</p>
                        <button
                            onClick={loadActivity}
                            className="mt-2 px-5 py-2 rounded-full bg-gray-950 text-white text-sm font-semibold hover:bg-gray-700 transition-all duration-150"
                        >
                            Try again
                        </button>
                    </div>
                )}

                {!loading && !error && !items.length && (
                    <div className="flex flex-col items-center justify-center px-6 py-16 gap-3 text-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">🔔</div>
                        <p className="font-semibold text-gray-900 text-[15px] tracking-tight">No activity yet</p>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            When someone likes, replies, or follows you, it'll show up here.
                        </p>
                    </div>
                )}

                {!loading && !error && items.length > 0 && (
                    <div className="animate-[fadeIn_0.3s_ease] divide-y divide-black/10">
                        {items.map((item, index) => {
                            const badge = BADGE[item.type];
                            return (
                                <div key={index} className="flex items-center gap-3.5 px-5 py-3.5">
                                    {/* Avatar */}
                                    <div className="w-9 h-9 min-w-[36px] rounded-full bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center text-white text-sm font-medium">
                                        {item.username?.[0]?.toUpperCase()}
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[14px] text-gray-900 leading-snug">
                                            <span className="font-medium">{item.username}</span>
                                            {item.type === "like" && " liked your post"}
                                            {item.type === "follow" && " followed you"}
                                            {item.type === "reply" && " replied to your thread"}
                                        </p>
                                        {item.created_at && (
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                {formatTimeAgo(item.created_at)}
                                            </p>
                                        )}
                                    </div>

                                    {/* Right action */}
                                    {item.type === "reply" ? (
                                        <Link
                                            to={`/post/${item.post_id}`}
                                            className={`text-xs text-gray-500 border border-black/10 rounded-full px-3 py-1 hover:border-black/20 transition-all whitespace-nowrap flex items-center gap-1.5 ${badge.bg}`}
                                        >
                                            {badge.icon} View
                                        </Link>
                                    ) : badge ? (
                                        <div className={`w-8 h-8 min-w-[32px] rounded-full ${badge.bg} flex items-center justify-center`}>
                                            {badge.icon}
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}