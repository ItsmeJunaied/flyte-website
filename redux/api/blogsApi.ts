import { baseApi } from "./baseApi";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get signle blog
    getSingleBlog: builder.query({
      query: (slug) => `blog/${slug}`,
      providesTags: ["Blogs"],
    }),

    // get all blogs
    getAllBlogs: builder.query({
      query: () => ({
        url: "blog-paginate",
      }),
      providesTags: ["Blogs"],
    }),

    // get blog trending
    getBlogTrending: builder.query({
      query: () => "blog-trending",
      providesTags: ["Blogs"],
    }),
  }),
});

export const { useGetSingleBlogQuery, useGetAllBlogsQuery, useGetBlogTrendingQuery } = blogsApi;
