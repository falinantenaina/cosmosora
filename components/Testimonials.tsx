import { Star } from "lucide-react";
import { Section } from "./Section";

const testimonials = [
  {
    text: "Un produit extraordinaire ! Je n'utilise plus que Cosmosora depuis 6 mois. La protection dure vraiment et c'est totalement naturel.",
  },
  {
    text: "Un produit extraordinaire ! Je n'utilise plus que Cosmosora depuis 6 mois. La protection dure vraiment et c'est totalement naturel",
  },
  {
    text: "Un produit extraordinaire ! Je n'utilise plus que Cosmosora depuis 6 mois. La protection dure vraiment et c'est totalement naturel.",
  },
];

export const Testimonials = () => {
  return (
    <div className="bg-teal-50">
      <Section id="testimonials">
        <div className="text-center lg:space-y-4">
          <h2 className="text-black text-2xl lg:text-4xl font-semibold">
            Ils Nous Font <span className="text-primary">Confiance</span>
          </h2>
          <p className="lg:max-w-sm mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              className="bg-white rounded-2xl shadow-xl p-6 space-y-4"
              key={index}
            >
              <div className="flex gap-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="text-star size-6" fill="#ffcc6f" />
                ))}
              </div>
              <p>
                &quot;Un produit extraordinaire ! Je n&apos;utilise plus que
                Cosmosora depuis 6 mois. La protection dure vraiment et
                c&apos;est totalement naturel.&quot;
              </p>
              <div className="flex gap-x-4">
                <div className="bg-teal-50 text-primary font-semibold size-10 rounded-full flex items-center justify-center">
                  C1
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">client Satisfait</h4>
                  <p>Antananarivo</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
