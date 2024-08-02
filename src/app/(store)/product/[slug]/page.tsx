import { AddToCartButton } from "@/components/add-to-cart-button";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { Metadata } from "next";
import Image from "next/image";

interface IProductPage {
    params: {
        slug: string;
    }
}

async function getProduct(slug: string): Promise<Product> {
    const response = await api(`/products/${slug}`,
        {
            // Quero que a informaçao cacheada seja atualizada a cada 10 minutos
            next: {
                revalidate: 60 * 10
            }
        }
    );
    if (!response.ok) {
        console.error('Failed to fetch the product');
    }
    const product = await response.json();
    return product;
}

export async function generateMetadata({ params }: IProductPage): Promise<Metadata> {
    const product = await getProduct(params.slug);
    return {
        title: product.title,
        description: product.description,
        // openGraph: {
        //     images: [product.image]
        // }
    }
}

export async function generateStaticParams() {
    const response = await api("/products/featured")

    if (!response.ok) {
        console.error('Failed to fetch the featured products');
    }

    const featuredProducts: Product[] = await response.json()

    return featuredProducts.map(product => {
        return { slug: product.slug }
    })
}

export default async function ProductPage({ params }: IProductPage) {
    const product = await getProduct(params.slug);

    return (
        <div className="relative grid max-h-[860px] grid-cols-3">
            <div className="col-span-2 overflow-hidden">
                <Image
                    src={product.image}
                    width={920}
                    height={920}
                    quality={100}
                    alt={product.title}
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col justify-center px-12">
                <h1 className="text-3xl font-semibold leading-tight">{product.title}</h1>
                <p className="text-zinc-400 mt-2 leading-relaxed">{product.description}</p>
                <div className="flex items-center gap-3 mt-8">
                    <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
                        {
                            product.price.toLocaleString("pr-BR", {
                                style: "currency",
                                currency: "BRL"
                            })
                        }
                    </span>
                    <span className="text-sm text-zinc-400">Em 12x s/ juros de {''}
                        {
                            (product.price / 12).toLocaleString("pr-BR", {
                                style: "currency",
                                currency: "BRL"
                            })
                        }
                    </span>
                </div>
                <div className="mt-8 space-y-4">
                    <span className="block font-semibold">Tamanhos</span>
                    <div className="flex items-center gap-2">
                        <button className="w-14 h-9 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-opacity-80 transition-colors">P</button>
                        <button className="w-14 h-9 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-opacity-80 transition-colors">M</button>
                        <button className="w-14 h-9 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-opacity-80 transition-colors">G</button>
                        <button className="w-14 h-9 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-opacity-80 transition-colors">GG</button>
                    </div>
                </div>
                <AddToCartButton productId={product.id} />
            </div>
        </div>
    )
}