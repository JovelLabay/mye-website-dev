import client from "../apollo/client";
import { GetAllBlogsAndNews, GetHomePage } from "../graphql/query";
import GET_BLOGS_AND_NEWS from "../graphql/queryBlogsNews";
import GET_PRODUCT_SERVICE from "../graphql/queryProductsServices";

async function getBlogsNews() {
  const blocks = await client.query({
    query: GetAllBlogsAndNews,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    } as any,
  });

  await client.cache.reset();

  return blocks.data;
}

async function getBlocks() {
  const blocks = await client.query({
    query: GetHomePage,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    } as any,
  });

  await client.cache.reset();

  return blocks.data;
}

async function getBlocksBlogNews() {
  const id = process.env.BLOGS_AND_NEWS_PAGE_ID;

  const blocks = await client.query({
    query: GET_BLOGS_AND_NEWS,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    } as any,
    variables: { id },
  });

  await client.cache.reset();

  return blocks.data;
}

async function getBlocksProductsServices() {
  const id = process.env.PRODUCT_SERVICE_PAGE_ID;

  const blocks = await client.query({
    query: GET_PRODUCT_SERVICE,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    } as any,
    variables: { id },
  });

  await client.cache.reset();

  return blocks.data;
}

export {
  getBlogsNews,
  getBlocks,
  getBlocksBlogNews,
  getBlocksProductsServices,
};
