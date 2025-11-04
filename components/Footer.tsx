import Link from "next/link";
import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="bg-[#1f2937]">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-around gap-y-4">
          <div className="text-primary font-bold text-2xl">COSMOSORA</div>
          <div>
            <h4 className="font-bold text-white">Produit</h4>
            <ul className="space-y-2 mt-2">
              <li>
                <Link
                  className="text-white/40 hover:text-white/70"
                  href={"#caracteristics"}
                >
                  Caractéristiques
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/40 hover:text-white/70"
                  href={"#benefits"}
                >
                  Avantages
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/40 hover:text-white/70"
                  href={"#testimonials"}
                >
                  Témoignages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">Entreprise</h4>
            <ul className="space-y-2 mt-2">
              <li>
                <Link className="text-white/40 hover:text-white/70" href={"#"}>
                  A propos
                </Link>
              </li>
              <li>
                <Link className="text-white/40 hover:text-white/70" href={"#"}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-white/40 hover:text-white/70" href={"#"}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </footer>
  );
};
