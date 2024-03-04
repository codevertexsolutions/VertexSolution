import React, { useState } from "react";
import { SectionTitle } from "../../../components";
import { BLOG_DATA } from "@/utils/siteData";
import { useClient } from "use-client"; // Import useClient from the appropriate package/library

import Card from "../blogs/card";

const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Initial number of blogs to display

  const loadMore = () => {
    setVisibleBlogs((prevVisible) => prevVisible + 3); // Increase by 3 when "Load More" is clicked
  };

  return (
    <div>
      <SectionTitle title={BLOG_DATA.title} isCentered={true} />
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-12">
          {BLOG_DATA.blogs.slice(0, visibleBlogs).map((blog) => (
            <Card data={blog} key={blog.id} />
          ))}
        </div>
        {visibleBlogs < BLOG_DATA.blogs.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
