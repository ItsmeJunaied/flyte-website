import { blogData } from "@/api/Dummy";
import BlogDetails from "@/component/Blogs/BlogDetails";
import CommingSoon from "@/component/Common/CommingSoon";

// Define the expected type for the page props
type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate static params for pre-rendering
export function generateStaticParams() {
  return blogData.cards.map((blog) => ({
    slug: blog.titleName,
  }));
}

const BlogDetailsPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const singleBlogData = blogData.cards.find((data) => data.titleName === slug);

  if (!singleBlogData) {
    return (
      <div>
        <p>Blog not found</p>
        <CommingSoon />
      </div>
    );
  }

  return (
    <div className=" container lg:mt-32">
      <BlogDetails blog={singleBlogData} />
    </div>
  );
};

export default BlogDetailsPage;
