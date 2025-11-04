import { Check } from "lucide-react";

const benefits = [
  {
    title: "N'obstrue pas les pores",
    text: "Laisse votre peau respirer naturellement",
  },
  {
    title: "Économique",
    text: "8 sachets par boîte pour une utilisation prolongée",
  },
  {
    title: "Transpiration minimale",
    text: "Contrôle efficace de la transpiration",
  },
  {
    title: "Durable",
    text: "Protection jusqu'à 21 jours consécutifs",
  },
];

export const BenefitsTab = () => {
  return (
    <div className="space-y-6">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex gap-x-4">
          <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white">
            <Check className="size-4" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-2">{benefit.title}</h4>
            <p>{benefit.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
