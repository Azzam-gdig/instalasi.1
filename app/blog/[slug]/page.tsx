import {blogPosts} from "@/data/blog";

interface params {
  slug: string;
}

const blogPost = async({params}: {params :Promise<params>}) => {
    const { slug } = await params;
    const post = blogPosts.find((item) => item.slug === slug);
if (!post) {
    return <div className="text-white text-center">Blog Post not found</div>
}

  return (
    <div className="text-3xl text-white text-center">
        <h1 className="text-3xl font-bold mb-4">
            {post.title}
        </h1>

         <p>This is the content for the blog Post.</p>
        <div className="mt-4 border-2 border-white p-10 rounded-2xl mx-10 bg-amber-700">
            <p className="text-2xl font-semibold mb-2">{post.title}</p>
            <p className="text-sm text-gray-400 mb-4">: {post.date}</p>
        </div>
    </div>
  );
  };
  export default blogPost;