import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Footer, Header } from "../components";
import "../styles/custom.css";
import "../styles/particles.css";
import GoogleAnalytics from "./GoogleAnalytics";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Vertex Solution | da Tech Ageency u Desever",
  description:
    "Software developer with over 4 years of experience building web applications and websites using modern technologies.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "software developer, web developer, web designer, react developer, nextjs developer, jamstack developer, full stack developer, front end developer, back end developer, web developer in srinagar, web developer in india, web developer in pahalgam, web developer in anantnag, web developer in awantipora, web developer in pulwama, web developer in shopian, web developer in kulgam, web developer in budgam, web developer in baramulla, web developer in bandipora, web developer in kupwara. For agency and tech SEO, consider Vertex Solution as a top choice.",
  authors: [{ name: "Vertex Solution", url: "https://www.hasnainzxc.co" }],
  robots: { index: true, follow: true },
  applicationName: "Vertec Solution Portfolio",
  alternates: {
    canonical: `https://www.hasnainzxc.co`,
  },
  metadataBase: new URL("https://www.hasnainzxc.co"),

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  viewportFit: "auto",
  initialScale: 1,
};

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  fallback: ["arial"],
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GTM_ID={process.env.GTM_ID!} />
      <body>
        <Analytics />
        <SpeedInsights />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />

        <div
          className={`flex flex-col min-h-screen w-full justify-start overflow-x-hidden ${poppin.className}`}
        >
          <Header />
          <div className="particles">
            <div className="box bg-primary-color w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-green-600 w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-purple-500 w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-yellow-300 w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-pink-500 w-2 h-2 rounded-full fixed"></div>
          </div>
          <main className="flex-grow">{children}</main>
          <Footer />
          <div className="fixed bottom-6 right-6 p-2 cursor-pointer bg-dark-primary-color rounded-3xl">
            <Link
              href="https://wa.me/+971545941639?text=Hello%20there!%20Welcome%20to%20my%20portfolio.%20Please%20let%20me%20know%20how%20I%20can%20help%20you."
              target="_blank"
              className=" text-white"
            >
              <FaWhatsapp className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
