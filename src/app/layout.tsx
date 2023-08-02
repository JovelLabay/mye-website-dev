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
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    } as any,
  });

  await client.cache.reset();

  return pages.data.pages.nodes;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getAllPages();

  return (
    <html lang="en">
      <body>
        <Navigation data={data} />
        <main className="main-contents">{children}</main>
        <Footer data={data} />
      </body>
    </html>
  );
}
