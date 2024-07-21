import { env } from "@/env";

export async function api(path: string, init?: RequestInit) {
    const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
    // Criando uma nova URL com o path
    const url = new URL(path, baseUrl)

    return fetch(url, init)
}