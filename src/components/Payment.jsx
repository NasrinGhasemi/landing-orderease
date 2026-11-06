import Image from "next/image";

export default function Payment() {
  const features = [
    {
      icon: "/images/Figma/Vector1.png",
      text: "99.99% platform uptime",
    },
    {
      icon: "/images/Figma/Vector2.png",
      text: "PCI-1 & GDPR-compliant",
    },
    {
      icon: "/images/Figma/Vector3.png",
      text: "Global coverage",
    },
  ];

  return (
    <section className="max-w-360 mx-auto px-9 mt-32">
      <div className="flex justify-between items-center">
        {/*  متن */}
        <div className="w-137">
          <h2 className="font-sans font-semibold text-[48px] text-ink">
            Your fully agnostic payment infrastructure
          </h2>
          <p className="font-body mt-[25px] text-muted text-xl">
            Integrate Primer once to boost your payment success forever. Create
            your own payment experience, then track and manage everything
            seamlessly across your payment processors.
          </p>
          <div className="mt-[25px] space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image src={feature.icon} alt="" width={22} height={22} />
                <span className="text-ink text-base font-body">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/*  عکس */}
        <div className="relative w-[555px] h-126">
          <Image
            src="/images/Figma/Frame46.svg"
            alt=""
            width={140}
            height={138}
            className="absolute top-0 left-0"
          />
          <Image
            src="/images/Figma/Image-Section1.png"
            alt="Customer paying with phone at a card reader"
            width={457}
            height={436}
            className="absolute top-10 left-[26px] rounded-[20px]"
          />
          <Image
            src="/images/Figma/Illustrations-Section1.svg"
            alt=""
            width={305}
            height={147}
            className="absolute top-[357px] left-[250px]"
          />
        </div>
      </div>
    </section>
  );
}
