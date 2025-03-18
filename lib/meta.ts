import { Metadata } from "next";

type MetadataParams = {
  params: Promise<{ slug: string }>;
  endpoint: string;
};

const fetchData = async <T>(slug: string, endpoint: string): Promise<T | null> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}/${slug}`);
  if (!res.ok) return null;
  return res.json();
};

export async function generateMetadata({ params, endpoint }: MetadataParams): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchData<any>(slug, endpoint);
  const { meta_title, meta_description } = data?.data || {};

  return {
    title: meta_title || `${endpoint} Details | Flyte Solutions Ltd.`,
    description: meta_description || `Get in touch with Flyte Solutions Ltd. for any inquiries or support.`,
    openGraph: {
      title: meta_title || `${endpoint} Details | Flyte Solutions Ltd.`,
      description: meta_description || `Get in touch with Flyte Solutions Ltd. for any inquiries or support.`,
    },
  };
}

export async function generateStaticParams(endpoint: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`);
  if (!res.ok) return [];

  const data = await res.json();
  return data?.data?.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

