// Transforma o HTML em uma imagem para ser usada no OpenGraph
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { env } from '@/env'
import { ImageResponse } from 'next/og'
import colors from "tailwindcss/colors"

// Route segment config
export const runtime = 'edge'

// Texto alternativo da imagem
export const alt = 'About Acme'

// Tamanho da imagem
export const size = {
    width: 1200,
    height: 630,
}

// Gera uma image PNG
export const contentType = 'image/png'

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


// Image generation
export default async function OgImage({ params }: { params: { slug: string } }) {

    const product = await getProduct(params.slug);

    const productImageURL = new URL(product.image, env.APP_URL).toString();

    // Converte o HTML em uma imagem
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: colors.zinc[950],
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <img
                    src={productImageURL}
                    alt={product.title}
                    style={{ width: '100%' }}
                />
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}