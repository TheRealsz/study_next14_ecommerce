import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
    const response = await api('/products/featured');
    if (!response.ok) {
        console.error('Failed to fetch featured products');
    }

    const products = await response.json();
    return products;
}

export default async function Home() {
    // Dando nome ao primeiro index, que será o produto com maior destaque
    const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

    return (
        <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
            <Link href={`/product/${highlightedProduct.slug}`} className="relative group col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline">
                <Image
                    src={highlightedProduct.image}
                    width={920}
                    height={920}
                    quality={100}
                    alt="Imagem do produto"
                    className="group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                    <span className="text-sm truncate">{highlightedProduct.title}</span>
                    <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold hover:bg-violet-700 transition-colors">
                        {
                            highlightedProduct.price.toLocaleString("pr-BR", {
                                style: "currency",
                                currency: "BRL"
                            })
                        }
                    </span>
                </div>
            </Link>
            {
                otherProducts.map((products) => (
                    <Link key={products.id} href={`/product/${products.slug}`} className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline">
                        <Image
                            src={products.image}
                            width={460}
                            height={460}
                            quality={100}
                            alt="Imagem do produto"
                            className="group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                            <span className="text-sm truncate">{products.title}</span>
                            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold hover:bg-violet-700 transition-colors">
                                {
                                    products.price.toLocaleString("pr-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })
                                }
                            </span>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}