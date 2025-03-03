import { Metadata } from "next";
import { PageHeroBanner } from "../../../components";
import React from "react";
import SinglePortfolio from "../../../components/Portfolio/SinglePortfolio";
import { Portfolio } from "../../../interfaces/portfolio";
import { OUR_PORTFOLIO } from "../../../utils/siteData";

export const metadata: Metadata = {
  title: "Our Portfolio | Vertex Splution Portfolio | Tech Agency",
  alternates: {
    canonical: `${process.env.APP_URL}/portfolio`,
  },
  openGraph: {
    type: "website",
    url: `${process.env.APP_URL}/portfolio`,
    title: "Our Portfolio | Vertex Splution Portfolio | Tech Agency",
    description:
      "Professional in web development, design, and digital marketing. Specializing in ReactJS, NextJS, Angular for impactful online solutions.",
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
  { url: `${process.env.APP_URL}/portfolio`, name: "Portfolio" },
];
const PortfolioPage = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="Our Portfolio" bc={breadcrumb} />
      <section className="pb-10 md:pb-32">
        <div className="container mx-auto px-5">
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-12">
            {OUR_PORTFOLIO.portfolios?.map((portfolio: Portfolio, index: number) => (
              <SinglePortfolio 
                key={portfolio.id || index} 
                portfolio={portfolio} 
                imageBig 
              />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PortfolioPage;