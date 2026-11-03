import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-360 h-[95px] px-9 mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" aria-label="OrderEase home">
          <Image
            src="/images/icons/logo.svg"
            alt="OrderEase"
            width={143}
            height={32}
          />
        </Link>
      </div>

      {/* Links */}
      <nav>
        <ul className="flex gap-7 font-body text-muted">
          <li>
            <Link href="#">Payments</Link>
          </li>
          <li className="font-semibold">
            <Link href="#">Automation</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Company</Link>
          </li>
        </ul>
      </nav>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="w-21 h-11 font-body rounded-lg text-brand bg-brand-soft cursor-pointer">
          Log In
        </button>
        <button className="w-30.75 h-11 font-body rounded-lg text-white bg-brand cursor-pointer">
          Try for free
        </button>
      </div>
    </header>
  );
}
