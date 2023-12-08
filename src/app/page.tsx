"use client"
import { PageContainer } from "@/components/PageContainer";
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function Home() {
    console.log("RE-RENDER")
    /* verwendung als "onMounted"-Callback */
    useEffect(() => {
        console.log("EFFECT")
        const elem = document.querySelector(".c1") as HTMLElement
        elem.style.color = "RED"
        return () => {
        }
    })

    return (
        <PageContainer>
            <div className="column-container">
                <h1 className="c1">Willkommen im Restaurant</h1>
            </div>
        </PageContainer>
    )
}
