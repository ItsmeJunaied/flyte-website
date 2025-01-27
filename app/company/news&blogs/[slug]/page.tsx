// app/news-and-blogs/[slug]/page.tsx
import CommingSoon from "@/component/Common/CommingSoon";
import { GetStaticPropsContext } from "next";

interface BlogDetailsPageProps {
  params: {
    slug: string;
  };
}

// This will define which dynamic routes to statically generate
export async function generateStaticParams() {
  // Here, you should fetch the list of slugs from your data source (e.g., database, API, etc.)
  const blogSlugs = ["hello", "nextjs-guide"]; // Example static slugs

  return blogSlugs.map((slug) => ({
    slug: slug,
  }));
}

const BlogDetailsPage: React.FC<BlogDetailsPageProps> = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <CommingSoon />
    </div>
  );
};

export default BlogDetailsPage;
