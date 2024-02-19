import { Metadata } from "next";
import {
  AboutSection,
  Banner,
  HeroBanner,
  ServicesBlock,
  WhyUsSection,
} from "../../components/HomeComponents";
import Portfolio from "../../components/Portfolio/Portfolio";
import SectionWithMargin from "../../components/SectionWithMargin";

export const metadata: Metadata = {
  title: "Home | Umar Bashir Portfolio | Software Developer",
  alternates: {
    canonical: `${process.env.APP_URL}`,
  },
  openGraph: {
    type: "website",
    url: "https://www.hasnainzxc.com",
    title: "Umar Bashir Portfolio",
    description:
      "Software developer with over 4 years of experience building web applications and websites using modern technologies.",
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

function addPersonJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Vertex Solutions Rather",
      url: "https:/vertexsolutions.x@gmail.com",
      // image: "https://www.umarbashir.com/images/your-image.jpg",
      sameAs: [
        "https://www.linkedin.com/in/vertexsolutions.x@gmail.com",
        "https://github.com/vertexsolutions.x@gmail.com",
        "https://twitter.com/vertexsolutions.x@gmail.com",
      ],
      jobTitle: "Software Developer",
      worksFor: {
        "@type": "Organization",
        name: "Self-Employed",
      },
      email: "mailto:vertexsolutions.x@gmail.com",
    }`,
  };
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addPersonJsonLd()}
        key="person-jsonld"
      />
      <HeroBanner />
      {/* <WhyUsSection /> */}
      <AboutSection />
      {/* <Banner />
      <ServicesBlock />
      <SectionWithMargin>
        <Portfolio />
      </SectionWithMargin> */}
    </>
  );
}
