import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "@/components/post-card";
import { getUserPosts, getUserProfile } from "@/services/profile.service";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Profile() {
    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadProfile = async () => {
        setLoading(true);
        try {
            setError("");
            const [profile, userPosts] = await Promise.all([
                getUserProfile(id),
                getUserPosts(id),
            ]);
            setUser(profile);
            setPosts(userPosts);
        } catch (err) {
            setError(err.message || "Failed to load profile");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProfile();
    }, [id]);

    if (loading)
        return (
            <div className="min-h-screen w-full flex items-center justify-center">
                <p className="text-gray-500 text-sm">Loading profile...</p>
            </div>
        );

    if (error)
        return (
            <div className="min-h-screen w-full flex flex-col items-center justify-center gap-3 text-center px-6">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-xl">⚠️</div>
                <p className="font-semibold text-gray-900 text-[15px] tracking-tight">Something went wrong</p>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">{error}</p>
                <button
                    onClick={loadProfile}
                    className="mt-2 px-5 py-2 rounded-full bg-gray-950 text-white text-sm font-semibold hover:bg-gray-700 transition-all duration-150"
                >
                    Try again
                </button>
            </div>
        );

    // Split posts for tab content
    const threads = posts.filter((p) => !p.parent_id);
    const replies = posts.filter((p) => !!p.parent_id);

    return (
        <div className="min-h-screen w-full flex flex-col items-center py-6 md:px-4">
            <h1 className="hidden md:inline-block text-[15px] font-medium mb-4 shrink-0">Profile</h1>

            <div className="w-full md:bg-white md:border md:border-black/10 md:rounded-3xl md:shadow-xs">
                <div className="px-6 pt-6 pb-5">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 min-w-0 pr-4">
                            <h2 className="md:text-[24px] text-[20px] tracking-tight text-gray-950 leading-tight font-bold capitalize">
                                {user.username}
                            </h2>
                            <p className="text-sm text-gray-400 mt-0.5">@{user.username}</p>
                        </div>
                        <div className="md:w-21 md:h-21 w-18 h-18 rounded-full bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center text-white font-bold text-lg md:text-xl">
                            {user.username?.[0]?.toUpperCase()}
                        </div>
                    </div>
                </div>


                {/* Tabs */}
                <Tabs defaultValue="threads" className="w-full">
                    <div className="border-b border-black/[0.06]">
                        <TabsList className="w-full bg-transparent h-auto p-0 rounded-none gap-0">
                            {["threads", "replies"].map((tab) => (
                                <TabsTrigger
                                    key={tab}
                                    value={tab}
                                    className="flex-1 py-3 font-medium capitalize rounded-none text-gray-400 bg-transparent shadow-none border-0 outline-none ring-0 border-b border-b-transparent data-[state=active]:text-gray-950 data-[state=active]:border-b-gray-950 data-[state=active]:bg-transparent data-[state=active]:!shadow-none transition-all duration-150"
                                >
                                    {tab}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {/* Threads tab */}
                    <TabsContent value="threads" className="mt-0">
                        {threads.length > 0 ? (
                            <div className="animate-[fadeIn_0.3s_ease]">
                                {threads.map((post, index) => (
                                    <div key={post.post_id}>
                                        <PostCard post={post} />
                                        {index < threads.length - 1 && (
                                            <div className="mx-5 border-t border-black/[0.06]" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center px-6 py-14 gap-2 text-center">
                                <p className="text-sm text-gray-400">No threads yet.</p>
                            </div>
                        )}
                    </TabsContent>

                    {/* Replies tab */}
                    <TabsContent value="replies" className="mt-0">
                        {replies.length > 0 ? (
                            <div className="animate-[fadeIn_0.3s_ease]">
                                {replies.map((post, index) => (
                                    <div key={post.post_id}>
                                        <PostCard post={post} isReply />
                                        {index < replies.length - 1 && (
                                            <div className="mx-5 border-t border-black/[0.06]" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center px-6 py-14 gap-2 text-center">
                                <p className="text-sm text-gray-400">No replies yet.</p>
                            </div>
                        )}
                    </TabsContent>


                </Tabs>
            </div>
        </div>
    );
}