import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "@/components/post-card";
import { getUserPosts, getUserProfile } from "@/services/profile.service";
import FollowButton from "@/components/follow-button";

export default function Profile() {
    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const loadProfile = async () => {
        const profile = await getUserProfile(id);
        const userPosts = await getUserPosts(id);

        setUser(profile);
        setPosts(userPosts);
    };

    useEffect(() => {
        loadProfile();
    }, [id]);

    if (!user) return <p className="p-6 text-center">Loading profile...</p>;

    return (
        <div className="max-w-2xl mx-auto">

            {/* Profile Header */}
            <div className="border-b border-gray-100 px-5 py-6 flex items-center justify-between">

                <div>
                    <h2 className="font-semibold text-lg">{user.username}</h2>
                    <p className="text-sm text-gray-500">
                        {user.followers_count} followers
                    </p>
                </div>

                <FollowButton user={user} />
            </div>

            {/* User posts */}
            {posts.map((post) => (
                <PostCard key={post.post_id} post={post} />
            ))}
        </div>
    );
}