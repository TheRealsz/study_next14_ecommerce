"use client"

import { useCart } from "@/contexts/cart-context";
import { ShoppingBag } from "lucide-react";

export function CartWidget() {
    const { items } = useCart()
    const quantityItems = items.length

    return (
        <div className="flex items-center gap-2">
            <ShoppingBag className="size-4" />
            <span className="text-sm">Cart ({quantityItems})</span>
        </div>
    )
}