import Header from "@/components/header";
import { CartProvider } from "@/contexts/cart-context";


export default function StoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CartProvider>
            <div className="mx-auto grid min-h-dvh w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
                <Header />
                {children}
            </div>
        </CartProvider>
    );
}
