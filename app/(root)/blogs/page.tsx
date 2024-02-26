import { Metadata } from "next";
import { PageHeroBanner } from "../../../components";
import React from "react";
import { blogdata } from "@/utils/siteData";
import SinglePortfolio from "../../../components/Portfolio/SinglePortfolio";
import { Portfolio } from "../../../interfaces/portfolio";
import { OUR_PORTFOLIO } from "../../../utils/siteData";
import Card from "../blogs/card";

export const metadata: Metadata = {
  title: "Blogs |Vertex Solutions Portfolio | Software Developer",
  alternates: {
    canonical: `${process.env.APP_URL}/blogs`,
  },
  openGraph: {
    type: "website",
    url: `${process.env.APP_URL}/blogs`,
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
  { url: process.env.APP_URL, name: "Home" },
  { url: `${process.env.APP_URL}/blogs`, name: "Blogs" },
];

const BlogPage = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="My Blogs" bc={breadcrumb} />
      <section className="pb-10 md:pb-32">
        <div className="container mx-auto px-5">
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-12">
            {blogdata.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BlogPage;
