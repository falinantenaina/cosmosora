const usages = [
  {
    title: "Préparation",
    desc: "Nettoyez et séchez bien la zone à traiter",
  },
  {
    title: "Application",
    desc: "Appliquez le contenu d'un sachet uniformément",
  },
  {
    title: "Protection",
    desc: "Profitez de 21 jours de fraîcheur et protection",
  },
];

export const UsageTab = () => {
  return (
    <div className="space-y-6">
      {usages.map((usage, index) => (
        <div key={index} className="flex gap-x-4">
          <div className="size-8 bg-primary rounded-full text-white flex items-center justify-center">
            {index + 1}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-2">{usage.title}</h4>
            <p>{usage.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
