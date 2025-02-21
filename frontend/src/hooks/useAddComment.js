import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useAddComment = () => {
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthContext();

  const addComment = async ({ text, videoId }) => {
    try {
      const data = await fetch(
        `/api/v1/comment/${videoId}`,
        {
          method: "POST",
          headers: { "content-type": "application/json"},
          body: JSON.stringify( {text} ),
        }
      );
      const comment = await data.json();
      console.log(comment)
      if (!comment) {
        throw new Error(comment.error);
      }
      console.log("comment added")
      toast.success("Comment Added")
    } catch (error) {
      console.log(error.message);
      toast.error("error while adding comment")
    } finally {
      setLoading(false);
    }
  };
  return {loading,addComment}
};

export { useAddComment };
