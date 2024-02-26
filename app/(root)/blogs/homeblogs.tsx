import { Metadata } from "next";
import { PageHeroBanner, SectionTitle } from "../../../components";
import React from "react";
import { OUR_PORTFOLIO, BLOG_DATA } from "@/utils/siteData";

import Card from "../blogs/card";

const Blogs = () => {
  return (
    <div>
      <SectionTitle title={BLOG_DATA.title} isCentered={true} />;
      <div className="container mx-auto px-5">
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  mt-12 gap-12">
          {BLOG_DATA.blogs.map((blog) => (
            <Card data={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
