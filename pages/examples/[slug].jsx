import { useRouter } from "next/router";
import { getPage, getPaths } from "../../lib/examples";

import Head from "next/head";
import Link from "next/link";
import { slugToTitle } from "../../lib/strings";
import { useEffect } from "react";

import GistEmbed from 'react-gist-embed'

import arrowIcon from "../../assets/arrow.svg";

export default function ExampleSlug(props) {
    console.log(props.data);
    const router = useRouter();
    const currIndex = props.slugs.indexOf(props.slug);
    useEffect(() => {
        window.addEventListener("keyup", (ev) => {
            if (ev.key == "ArrowRight" && currIndex != props.slugs.length - 1) {
                router.replace(props.slugs[currIndex + 1]);
            } else if (ev.key == "ArrowLeft" && currIndex != 0) {
                router.replace(props.slugs[currIndex - 1]);
            }
        });
    });
    return (
        <div className="example-shell section">
            <Head>
                <title>{props?.data?.title}</title>
            </Head>
            <div
                className="markdown-body"
                dangerouslySetInnerHTML={{
                    __html: props.content,
                }}
            ></div>
            {
                props.data.gist && <div>
               {
                   <GistEmbed gistId={"x"} />
               }
            </div>
            }
            <div className="example-nav">
                <div className="left">
                    {currIndex != 0 && (
                        <Link href={props.slugs[currIndex - 1]}>
                            <button className="button">
                                <img
                                    src={arrowIcon.src}
                                    alt="arrow"
                                    className="l arrow"
                                />
                                {slugToTitle(props.slugs[currIndex - 1])}
                            </button>
                        </Link>
                    )}
                </div>
                <div className="right">
                    {currIndex != props.slugs.length - 1 && (
                        <Link href={props.slugs[currIndex + 1]}>
                            <button className="button">
                                {slugToTitle(props.slugs[currIndex + 1])}
                                <img
                                    src={arrowIcon.src}
                                    alt="arrow"
                                    className="r arrow"
                                />
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps(ctx) {
    const slug = ctx.params.slug;
    const { content, data } = await getPage(slug);
    const slugs = getPaths();
    return {
        props: {
            content,
            data,
            slugs,
            slug,
        },
    };
}

export function getStaticPaths() {
    return {
        paths: getPaths().map((p) => ({ params: { slug: p } })),
        fallback: true,
    };
}
