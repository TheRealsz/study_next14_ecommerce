import { products } from "../data.json";

export async function GET() {
    // Para simular o loading
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    const featuredProducts = products.filter((product) => product.featured);
    return Response.json(featuredProducts);
}