import { db } from "@/server";
import { productVariants } from "@/server/schema";
import { eq } from "drizzle-orm";
import ProductType from "../product-type";
import { Separator } from "@radix-ui/react-dropdown-menu";
import ProductShowcase from "@/components/articles/product-showcase";

export async function generateStaticParams() {
  /* data autocached by next js from home page */
  const data = await db.query.productVariants.findMany({
    with: {
      variantImages: true,
      variantTags: true,
      product: true,
    },
    orderBy: (productVariants, { desc }) => [desc(productVariants.id)],
  });

  if (data) {
    const slugID = data.map((variant) => ({ slug: variant.id.toString() }));
    return slugID;
  }
  return [];
}

export default async function Page(params: { params: { slug: string } }) {
  const variant = await db.query.productVariants.findFirst({
    where: eq(productVariants.id, Number(params.params.slug)),
    with: {
      product: {
        with: {
          reviews: true,
          productVariants: {
            with: { variantImages: true, variantTags: true },
          },
        },
      },
    },
  });

  if (variant) {
    return (
      <main>
        <section className="flex flex-col gap-8 lg:gap-16 p-6">
          <h2 className="text-4xl font-extrabold mb-8 text-center">
            {variant?.product.title}
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="flex-1">
              <ProductShowcase
                variants={variant.product.productVariants}
                
              />
            </div>
            <div className="flex gap-4 flex-col flex-1">
              <div>
                <ProductType variants={variant.product.productVariants} />
              </div>

              <Separator className="my-4" />

          
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: variant.product.description }}
              ></div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
