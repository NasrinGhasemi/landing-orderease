import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Payment from "@/components/Payment";
import TopBanner from "@/components/TOpBanner";

export default function page() {
  return (
    <div>
      <TopBanner />
      <Header />
      <Hero />
      <Payment />
    </div>
  );
}
