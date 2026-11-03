import Image from "next/image";

export default function TopBanner() {
  return (
    <section className="h-[42px] bg-brand">
      <div className="relative h-full max-w-360 flex mx-auto justify-center items-center">
        <p className="font-body text-white">
          Unlimited apps and integrations | explore connections →
        </p>
        <button
          aria-label="Close"
          className="absolute right-9 top-1/2 -translate-y-1/2"
        >
          <Image src="/images/icons/close.png" alt="" width={16} height={16} />
        </button>
      </div>
    </section>
  );
}
