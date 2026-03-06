import { useState } from "react";
import { toggleFollow } from "@/services/social.service";
import { isAuthenticated } from "@/services/auth.service";

export default function FollowButton({ user }) {
    const [following, setFollowing] = useState(user.following);

    const handleFollow = async () => {
        if (!isAuthenticated()) {
            window.location.href = "/login";
            return;
        }

        const next = !following;

        setFollowing(next);

        try {
            await toggleFollow(
                user.user_id,
                next ? "follow" : "unfollow"
            );
        } catch {
            setFollowing(!next);
        }
    };

    return (
        <button
            onClick={handleFollow}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition
      ${following
                    ? "bg-gray-200 text-gray-800"
                    : "bg-black text-white"
                }`}
        >
            {following ? "Following" : "Follow"}
        </button>
    );
}