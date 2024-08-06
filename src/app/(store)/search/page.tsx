import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface ISearch {
    searchParams: {
        q: string;
    }
}


async function getSearchProducts(query: string): Promise<Product[]> {
    const response = await api(`/products/search?q=${query}`);
    if (!response.ok) {
        console.error('Failed to fetch featured products');
    }
    const products = await response.json();
    return products;
}


export default async function Search({ searchParams }: ISearch) {
    const { q: query } = searchParams;

    if (!query) {
        redirect("/");
    }

    const products = await getSearchProducts(query);
    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">Resultados para: <span className="font-semibold">{query}</span>
            </p>
            <div className="grid grid-cols-3 gap-6">
                {
                    products.map((product) => (
                        <Link key={product.id} href={`/product/${product.slug}`} className="relative group rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline">
                            <Image
                                src={product.image}
                                width={460}
                                height={460}
                                quality={100}
                                alt="Imagem do produto"
                                className="group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                                <span className="text-sm truncate">{product.title}</span>
                                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold hover:bg-violet-700 transition-colors">
                                    {
                                        product.price.toLocaleString("pr-BR", {
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
        </div>
    );
}