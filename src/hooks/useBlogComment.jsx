import { getBlogComments } from "@/services/commentService";
import { useQuery } from "@tanstack/react-query";

const useBlogComment = ({ blogId, step, pageSize }) => {
  return useQuery({
    queryKey: ["blogComment", { blogId, step, pageSize }],
    queryFn: getBlogComments,
  });
};

export default useBlogComment;
