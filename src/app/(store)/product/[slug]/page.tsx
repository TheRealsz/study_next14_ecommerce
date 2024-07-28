import Image from "next/image";

export default function ProductPage() {
    return (
        <div className="relative grid max-h-[860px] grid-cols-3">
            <div className="col-span-2 overflow-hidden">
                <Image
                    src="/moletom-never-stop-learning.png"
                    width={920}
                    height={920}
                    quality={100}
                    alt="Moletom Never Stop Learning"
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col justify-center px-12">
                <h1 className="text-3xl font-semibold leading-tight">Moletom Never Stop Learning</h1>
                <p className="text-zinc-400 mt-2 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo vel architecto optio consectetur dicta ipsum nemo, officiis reprehenderit sint id harum voluptate reiciendis facilis dolorem ab eos? Nesciunt, illum.</p>
                <div className="flex items-center gap-3 mt-8">
                    <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">R$129</span>
                    <span className="text-sm text-zinc-400">Em 12x s/ juros de R$10,75</span>
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
                <button type="button" className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white hover:bg-opacity-80 transition-colors">
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    )
}