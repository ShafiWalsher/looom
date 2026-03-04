import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getThread } from "@/services/posts.service";
import PostCard from "@/components/post-card";
import ReplyForm from "@/components/reply-form";

export default function Thread() {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [replies, setReplies] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const loadThread = async () => {
        try {
            const data = await getThread(id);
            setPost(data.post);
            setReplies(data.replies);
        } catch (err) {
            setError(err.message || "Failed to load thread");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadThread();
    }, [id]);

    const addReply = (reply) => {
        setReplies((prev) => [...prev, reply]);
    };

    if (loading) return <p className="p-6 text-center">Loading thread...</p>;
    if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

    return (
        <div className="max-w-2xl mx-auto">

            {/* main post */}
            <PostCard post={post} />

            {/* reply form */}
            <ReplyForm parentId={id} onReply={addReply} />

            {/* replies */}
            <div>
                {replies.map((reply) => (
                    <PostCard key={reply.post_id} post={reply} />
                ))}
            </div>

        </div>
    );
}