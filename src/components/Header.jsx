import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-360 h-[95px] px-9 mx-auto flex justify-between items-center">
      <div>
        <Link href="/">
          Order
          <span className="font-bold">Ease</span>
        </Link>
      </div>
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
      <div className="flex gap-2">
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
