import CaseDetailsOverview from "@/component/CaseStudies/CaseDetailsOverview";
import ReadyToTransform from "@/component/CaseStudies/ReadyToTransform";
import Contact from "@/component/Contact/Contact";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const fetchCaseStudy = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/case-studies/${slug}`);
  if (!res.ok) return null;
  return res.json();
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await fetchCaseStudy(slug);
  const { meta_title, meta_description } = caseStudy?.data || {};

  return {
    title: meta_title || "Case Studies Details | Flyte Solutions Ltd.",
    description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    openGraph: {
      title: meta_title || "Case Studies Details | Flyte Solutions Ltd.",
      description: meta_description || "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const allSlugs: string[] = [];

  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/case-studies?page=${page}`);
    if (!res.ok) break;

    const json = await res.json();
    const caseStudies = json?.data?.data || [];

    allSlugs.push(...caseStudies.map((item: { slug: string }) => item.slug));

    const currentPage = json?.data?.current_page || page;
    const perPage = json?.data?.per_page || 10;
    const total = json?.data?.total || 0;
    const totalPages = Math.ceil(total / perPage);

    hasMore = currentPage < totalPages;
    page++;
  }

  const uniqueSlugs = Array.from(new Set(allSlugs));

  return uniqueSlugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div>
      <CaseDetailsOverview params={slug} />
      <ReadyToTransform />
      <Contact />
    </div>
  );
}
