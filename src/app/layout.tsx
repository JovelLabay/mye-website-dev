import "./styles/globals.css";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

// LAYOUTS
import Navigation from "@/navpage";
import Footer from "@/footerpage";

// LIBRARIES
import client from "@/lib/apollo/client";
import { GetAllPages } from "@/lib/graphql/query";

async function getAllPages() {
  const pages = await client.query({
    query: GetAllPages,
  });

  await client.cache.reset();

  return pages.data.pages.nodes;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}) {
  const data = await getAllPages();

  return (
    <html lang="en">
      <body>
        <Navigation data={data} slug={params.slug} />
        <main className="main-contents">{children}</main>
        <Footer data={data} />
      </body>
    </html>
  );
}
