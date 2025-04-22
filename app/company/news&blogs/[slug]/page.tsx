import BlogDetails from "@/component/Blogs/BlogDetails";
import FavoriteBlogs from "@/component/Blogs/FavoriteBlogs";
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
  const { meta_title, meta_description, meta_image } = blog?.data || {};

  const domain = "https://fsl.flytesolutions.com";
  const fullUrl = `${domain}/blogs/${slug}`; // adjust if your blog URL is different

  return {
    title: meta_title || "Blog Details | Flyte Solutions Ltd.",
    description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    openGraph: {
      title: meta_title || "Blog Details | Flyte Solutions Ltd.",
      description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
      url: fullUrl,
      images: [
        {
          url: meta_image || `${domain}/default-og-image.jpg`, // fallback image if none provided
          width: 1200,
          height: 630,
          alt: meta_title || "Flyte Solutions Blog",
        },
      ],
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
    <div className="container mt-5 lg:mt-32">
      <BlogDetails params={slug} />
      <FavoriteBlogs/>
    </div>
  );
};

export default page;
