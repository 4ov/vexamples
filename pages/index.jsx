import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="index">
            <section className="section index--section">
                <div className="flex x-center">
                    <img height="200" src="/v-logo.png" alt="" />
                </div>
                <div className="flex x-center y-center v-down">
                    <span className="big bold f-mono align-center">
                        <br />
                        Learn v by example <br />
                        <br />
                    </span>
                    <Link href="/examples">
                        <button className="button size-m">Let{"'"}s go</button>
                    </Link>
                </div>
                <div className="flex x-center y-center index--social-links">
                    <a href="https://github.com/4ov/vexamples">
                        <img src="/github.svg" alt="" />
                    </a>
                </div>
            </section>
        </div>
    );
}
