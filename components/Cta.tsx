import { Award, Leaf, Shield } from "lucide-react";
import { Button } from "./Button";
import { Section } from "./Section";

export const Cta = () => {
  return (
    <div className="bg-linear-to-br from-primary to-secondary">
      <Section>
        <div className="space-y-2">
          <h2 className="text-center text-white text-2xl sm:text-4xl font-semibold">
            Rejoignez Cette Aventure pour <br />
            Une Beauté Saine et Durable !
          </h2>
          <p className="text-center text-white">
            Restez frais, restez unique avec le déodorant révolutionnaire
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-max mx-auto text-center mt-6 space-y-4 lg:p-10 lg:space-y-6">
          <div>
            <h4 className="text-primary font-bold text-3xl lg:text-4xl">
              25,000 Ar
            </h4>
            <span>8 sachets / boite</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-center items-center gap-x-2 font-medium">
              <Award className="text-primary" strokeWidth={1} />
              <span className="lg:text-lg">Protection 21 jous</span>
            </div>
            <div className="flex justify-center items-center gap-x-2 font-medium">
              <Leaf className="text-primary" strokeWidth={1} />
              <span className="lg:text-lg">100% Naturel</span>
            </div>
            <div className="flex justify-center items-center gap-x-2 font-medium">
              <Shield className="text-primary" strokeWidth={1} />
              <span className="lg:text-lg">Fabriqué à Madagascar</span>
            </div>
          </div>
          <Button>Commander maintemant</Button>
        </div>
      </Section>
    </div>
  );
};
