import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Benefits />
      <Testimonials />
      <Cta />
      <Contact />
      <Footer />
    </>
  );
}
