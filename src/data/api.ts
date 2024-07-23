import { env } from "@/env";

export async function api(path: string, init?: RequestInit) {
    const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
    
    // Prefixo da API pois o baseURL não aceita path
    const apiPrefix = "/api"
    const pathConcatedWithApi = `${apiPrefix}${path}`

    // Criando uma nova URL com o path
    const url = new URL(pathConcatedWithApi, baseUrl)
    return fetch(url.href, init)
}