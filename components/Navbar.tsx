import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
      <Link href='/'>
        Home
      </Link>
    </nav>
  );
}
