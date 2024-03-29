import { Metadata } from "next";
import { PageHeroBanner } from "../../../components";
import React from "react";
import ServicesBlock from "./components/services-block";

export const metadata: Metadata = {
  title: "Services | Vertex Solutions Portfolio | Tech Agency",
  alternates: {
    canonical: `${process.env.APP_URL}/services`,
  },
  openGraph: {
    type: "website",
    url: `${process.env.APP_URL}/services`,
    title: "Services | Vertex Solutions Portfolio | Tech Agency",
    description:
      "Web design, development, and digital marketing expert. Specializing in NextJS, Angular. Improve your online presence to reach new customers.",
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
  { url: `${process.env.APP_URL}`, name: "Home" },
  { url: `${process.env.APP_URL}/services`, name: "Services" },
];

const ServicesPage = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="Services" bc={breadcrumb} />
      <section className="pb-10 md:pb-32">
        <div className="container px-5 mx-auto  h-full">
          <ServicesBlock />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ServicesPage;
