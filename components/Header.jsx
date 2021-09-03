import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
            <Link href="/">
                <span className="f-fancy brand">V</span>
            </Link>
            <div className="nav">
                <Link href="/">
                    <span className="link">Home</span>
                </Link>
                <Link href="/examples">
                    <span className="link">EXAMPLES</span>
                </Link>
            </div>
        </div>
    );
}
