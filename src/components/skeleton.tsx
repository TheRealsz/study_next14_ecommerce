import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// Dizendo que ele pode receber todas as props que uma div poderia receber e desestruturando-o
export function Skeleton({className, ...props}: ComponentProps<"div">) {
    return (
        <div className={twMerge("bg-zinc-50/10 animate-pulse rounded-md", className)} {...props} />
    )
}