import { Droplet, Leaf, Shield } from "lucide-react";

const ingredients = [
  {
    image: <Leaf />,
    title: "Herbes Naturelles",
  },
  {
    image: <Droplet />,
    title: "Extrait de Pomelo",
  },
  {
    image: <Shield />,
    title: "Actifs Protecteurs",
  },
];

export const IngedrientsTab = () => {
  return (
    <div className="space-y-4">
      <p>
        Notre formule unique combine des ingrédients naturels soigneusement
        sélectionnés :
      </p>
      <div className="space-y-4">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="bg-teal-50 p-4 rounded-xl space-y-2">
            <div className="text-primary font-bold">{ingredient.image}</div>
            <h4 className="font-bold">{ingredient.title}</h4>
          </div>
        ))}
      </div>
      <p className="font-semibold">
        Sans aluminium, sans parabènes, sans produits chimiques agressifs.
      </p>
    </div>
  );
};
