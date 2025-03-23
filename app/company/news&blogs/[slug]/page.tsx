import BlogDetails from "@/component/Blogs/BlogDetails";
import { Metadata } from "next";

// Define the expected type for the page props
type PageProps = {
  params: Promise<{ slug: string }>;
};

// dynamic meta data
const fetchBlogs = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`);
  if (!res.ok) return null;
  return res.json();
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlogs(slug);
  const { meta_title, meta_description } = blog?.data || {};

  return {
    title: meta_title || "Blog Details | Flyte Solutions Ltd.",
    description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    openGraph: {
      title: meta_title || "Blog Details | Flyte Solutions Ltd.",
      description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    },
  };
} 

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

  return (
    <div className=" container lg:mt-32">
      <BlogDetails params={slug} />
    </div>
  );
};

export default page;
