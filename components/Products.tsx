import { Droplet, Leaf, Shield } from "lucide-react";
import { Section } from "./Section";

type ProductCardProps = {
  image: React.ReactNode;
  title: string;
  desc: string;
};

const ProductCard = ({ image, title, desc }: ProductCardProps) => {
  return (
    <div className="bg-teal-50 hover:scale-105 transition-all duration-300 rounded-xl p-6 shadow-xl">
      <div className="space-y-2">
        <div className="bg-primary size-15 rounded-full flex items-center justify-center mx-auto">
          {image}
        </div>
        <h3 className="text-center text-lg font-semibold">{title}</h3>
        <p className="text-center">{desc}</p>
      </div>
    </div>
  );
};

const products = [
  {
    image: <Leaf className="text-white" />,
    title: "100% Naturel",
    desc: "Herbes naturelles soigneusement sélectionnées pour respecter votre peau et l'environnement",
  },
  {
    image: <Shield className="text-white" />,
    title: "Protection Extrême",
    desc: "21 jours de protection continue contre les odeurs et la transpiration excessive",
  },
  {
    image: <Droplet className="text-white" />,
    title: "Fraîcheur Pomelo",
    desc: "Un parfum frais et naturel qui vous accompagne toute la journée avec délicatesse",
  },
];

export const Products = () => {
  return (
    <Section id="caracteristics">
      <div className="text-center lg:space-y-4">
        <h2 className="text-black text-2xl lg:text-4xl font-semibold">
          Le Déodorant <span className="text-primary">Révolutionnaire</span>
        </h2>
        <p className="lg:max-w-sm mx-auto">
          Une formule unique qui allie efficacité et naturalité pour une
          protection extrême de 21 jours
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mt-6 lg:mt-16 2xl:gap-x-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            desc={product.desc}
          />
        ))}
      </div>
      <div></div>
    </Section>
  );
};
