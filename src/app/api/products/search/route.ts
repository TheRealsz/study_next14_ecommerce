import { z } from "zod";
import { products } from "../data.json";
import { NextRequest } from "next/server";

interface IGetProduct{
    params: {
        slug: string;
    }
}

// NextRequest é a interface da FetchAPI de Request extendida.
export async function GET(request: NextRequest) {

    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    // Com o NextRequest, podemos pegar o searchParams a partir da url
    const { searchParams } = request.nextUrl

    // o "q" virá de "products/search?q=moletom"
    const query = z.string().parse(searchParams.get('q'))

    // Verificando se o titulo do produto inclui a busca do usuario
    const product = products.filter((product) => product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

    if (!product) {
        return Response.json({ message: "Product not found" }, { status: 400 });
    }

    return Response.json(Array.isArray(product) ? product : [product]);
}