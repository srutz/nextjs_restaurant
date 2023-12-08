
"use client"

import { FaCartArrowDown } from "react-icons/fa"
import classes from "./CartIcon.module.css"
import { useCart } from "./CartProvider"
import { useRouter } from "next/navigation"
import { useWindowSize } from "./WindowSize"

export default function CartIcon() {

    const size = useWindowSize()
    const cart = useCart()
    const router = useRouter()

    const onClick = () => {
        router.push("/cart")
    }

    console.log("windowsize=" + size)

    return (
        <div className={classes.carticon} onClick={onClick}>
            <FaCartArrowDown size={30}/>
            <div className={classes["carticon-overlay"]}>{cart.getTotalItemCount()}</div>
        </div>
    )

}