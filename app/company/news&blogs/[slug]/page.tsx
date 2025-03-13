import { blogData } from "@/api/Dummy";
import BlogDetails from "@/component/Blogs/BlogDetails";
import CommingSoon from "@/component/Common/CommingSoon";

// Define the expected type for the page props
type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate static params for pre-rendering
// export function generateStaticParams() {
//   return blogData.cards.map((blog) => ({
//     slug: blog.titleName,
//   }));
// }
// Generate static paths for all case studies
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog-paginate`);
  if (!res.ok) return [];

  const blogs = await res.json();
  return blogs.data.map((blog: { slug: string }) => ({
    slug: blog.slug,
  }));
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const singleBlogData = blogData.cards.find((data) => data.titleName === slug);

  if (singleBlogData) {
    return (
      <div>
        <p>Blog not found</p>
        <CommingSoon />
      </div>
    );
  }

  return (
    <div className=" container lg:mt-32">
      {/* <BlogDetails blog={singleBlogData} /> */}
      <BlogDetails params={slug} />
    </div>
  );
};

export default page;
