"use client"
import { PageContainer } from "@/components/PageContainer";
import Image from "next/image"
import Link from "next/link"
import {useEffect, useRef, useState} from "react"


export default function Home() {
    const myref = useRef<HTMLHeadingElement>(null)

    return (
        <PageContainer>
            <div className="column-container">
                <h1 ref={myref}>Willkommen im Restaurant</h1>
            </div>
        </PageContainer>
    )
}
