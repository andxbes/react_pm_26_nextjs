const { default: Link } = require("next/link");

export default function Header(params) {
    return (
        <header>
            <Link href="/"><img src="/logo.webp" alt="A server surrounded by magic sparkles." /></Link>
        </header>
    );
};


