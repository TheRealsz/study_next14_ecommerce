import { z } from "zod";
import { products } from "../data.json";

interface IGetProduct{
    params: {
        slug: string;
    }
}

export async function GET(_: Request, {params} : IGetProduct) {

    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    // parse joga diretamente um throw caso o valor não seja válido
    const slug = z.string().parse(params.slug);

    const product = products.find((product) => product.slug === slug);

    if (!product) {
        return Response.json({ message: "Product not found" }, { status: 400 });
    }

    return Response.json(product);
}