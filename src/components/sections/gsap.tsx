import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Gsap() {

    gsap.registerPlugin(ScrollTrigger);

    const containerRef = useRef<HTMLElement>(null);
    const imgBoxRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        gsap.to(imgBoxRef, {
            scrollTrigger: {
                trigger: ".box",
                start: "bottom center",
                end: "+=1600",
                scrub: true,
                pin: "img",
                markers: true,
            },
            yPercent: ""
        })

        gsap.to("#img", {
            scrollTrigger: {
                trigger: "#img",
                start: "bottom center",
                end: "+=2000",
                scrub: true,
            },
            scale: 5,
            translateY: "-50%",
        })
    }, { scope: containerRef })


    return (
        <section className="relative overflow-hidden" ref={containerRef}>
            <div className="box" ref={imgBoxRef}>
            </div>
            <Image id="img" className="m-auto" src="https://placehold.co/600x400/webp" alt="" height={400} width={600} />
        </section>
    )
}