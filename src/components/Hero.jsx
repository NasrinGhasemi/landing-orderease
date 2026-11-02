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
        <h1 className="max-w-205 text-center font-sans text-[64px] font-bold text-muted">
          Why use multiple apps when you can use just one? OrderEase has
        </h1>
        {/* دکمه ها */}
        <div className="flex gap-4 mt-15">
          <button className="w-46 h-11 rounded-2xl bg-brand text-white">
            Try for free
          </button>
          <button className="w-46 h-11 rounded-2xl bg-brand-soft text-brand">
            See what&apos;s new
          </button>
        </div>
        {/* crumbs */}
        <div className="mt-6 flex gap-5 text-sm text-ink">
          <p>Trusted by 16,160 businesses</p>
          <p>2,734 Proposals signed</p>
        </div>
        {/* video */}
        <div className="relative z-10 mt-6 -mb-79 w-273 rounded-[20px] bg-white p-2.5">
          <div className="h-135 w-268 rounded-[20px] bg-gray-200" />
        </div>
      </div>
      <div className="mt-89 flex justify-center gap-15">
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
