"use client"

import { Search } from "lucide-react";
// Versao do app router
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export default function SearchForm() {
    const router = useRouter()
    // Para pegar o valor da query da url
    const searchParams = useSearchParams()

    // Buscando o nome do parametro para adicionar no defaultValue do input
    const query = searchParams.get("q")

    function handleSearchProduct(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        // currentTarger traz quem disparou o formulario, trazendo todos os campos
        const searchProductFormData = new FormData(event.currentTarget);

        // Pegando o valor da query diretamente do FormData
        const queryProduct = searchProductFormData.get("q") as string;

        if (!queryProduct) {
            return null
        }

        router.push(`/search?q=${queryProduct}`)
    }

    return (
        <form onSubmit={handleSearchProduct} className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
            <Search className="size-5 text-zinc-500" />

            <input type="text" defaultValue={query ?? ""} name="q" className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500" placeholder="Buscar produtos..." required />
        </form>
    )
}
