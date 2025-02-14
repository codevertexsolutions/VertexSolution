import { Metadata } from "next";
import { PageHeroBanner } from "../../../components";
import React from "react";
import { BLOG_DATA } from "@/utils/siteData";
import Card from "../blogs/card";

export const metadata: Metadata = {
  title: "Blogs |Vertex Solutions Portfolio | Software Developer",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    type: "website",
    url: "/blogs",
    title: "Blogs | Vertex Solutions Portfolio | Software Developer",
    description:
      " I write blogs on a wide range of topics including web design, development and digital marketing.",
    images: [
      {
        url: "/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Vertex Solutions Portfolio",
      },
    ],
    siteName: "Vertex Solutions Portfolio",
  },
};

const breadcrumb = [
  { url: "/", name: "Home" },
  { url: "/blogs", name: "Blogs" },
];

const Blogs = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="Our Blogs" bc={breadcrumb} />
      <section className="pb-10 md:pb-32">
        <div className="container mx-auto px-5">
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-12">
            {BLOG_DATA.blogs.map((blog) => (
              <Card data={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blogs;
