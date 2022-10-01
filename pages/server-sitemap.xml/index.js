import { getServerSideSitemap } from "next-sitemap";
import prisma from "../../lib/prisma";

export const getServerSideProps = async (ctx) => {
    const reviews = await prisma.review.findMany();
    const newsSitemaps = reviews.map((item) => ({
        loc: `https://www.serverhostingreviews.com/reviews/${item.title.replaceAll(" ","-").toLowerCase()}`,
        lastmod: new Date().toISOString(),
    }));

    const fields = [...newsSitemaps];

    return getServerSideSitemap(ctx, fields);
};

export default function Site() {}