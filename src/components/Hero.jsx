import Image from "next/image";

const reviews = [
  { icon: "P", rating: "4.8/5 Rating" },
  { icon: "»", rating: "4.5/5 Rating" },
  { icon: "G", rating: "4.8/5 Rating" },
  { icon: "➤", rating: "4.6/5 Rating" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-360 px-9 pt-8">
      <div className="flex flex-col h-[759px] items-center rounded-2xl bg-brand-tint pt-15">
        {/* متن ها */}
        <p className="max-w-150 text-center font-body text-xl text-muted">
          Simplify Your E-commerce Business with OrderEase
        </p>
        <h1 className="max-w-[771px] text-center mt-20 leading-21 font-sans text-[64px] font-bold text-muted">
          Why use multiple apps when you can use just one? OrderEase has
        </h1>
        {/* دکمه ها */}
        <div className="flex gap-4 mt-15">
          <button
            type="button"
            className="w-46 h-11 rounded-2xl bg-brand text-white cursor-pointer"
          >
            Try for free
          </button>
          <button
            type="button"
            className="w-46 h-11 rounded-2xl bg-brand-soft text-brand cursor-pointer"
          >
            See what&apos;s new
          </button>
        </div>
        {/* crumbs */}
        <div className="mt-6 flex gap-5 text-sm text-ink">
          <p>Trusted by 16,160 businesses</p>
          <p>2,734 Proposals signed</p>
        </div>
        {/* video */}
        <div className="relative z-10 mt-6 -mb-79 w-273 p-2.5 rounded-[20px] bg-white">
          <Image
            src="/images/Figma/Videos-Hero.png"
            alt="Person working with a laptop and calculator"
            loading="eager"
            width={1072}
            height={540}
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-100 flex justify-center gap-15">
        {reviews.map((item) => (
          <div
            key={item.rating + item.icon}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-accent">★★★★★</span>
            <span className="text-xs text-ink">{item.rating}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
