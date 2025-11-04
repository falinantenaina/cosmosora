import { Facebook, Instagram, Phone } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

const contacts = [
  {
    icon: <Facebook fill="#4267B2" color="#4267B2" />,
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61572435260125",
    title: "Cosmosora MLG",
  },
  {
    icon: <Phone fill="#25D366" color="#25D366" />,
    name: "WhatsApp",
    href: "https://wa.me/261389486084",
    title: "+261 38 94 860 84",
  },
  {
    icon: <Instagram color="#E1306C" />,
    name: "Instagram",
    href: "https://www.instagram.com/cosmosora.mlg",
    title: "@cosmosora.mlg",
  },
];

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="text-center lg:space-y-4">
        <h2 className="text-black text-2xl lg:text-4xl font-semibold">
          Contactez-<span className="text-primary">Nous</span>
        </h2>
        <p className="lg:max-w-sm mx-auto">
          Nous sommes là pour répondre à toutes vos questions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mt-6 lg:mt-16 2xl:gap-x-8">
          {contacts.map((contact, index) => (
            <Link
              href={contact.href}
              target="_blank"
              key={index}
              className="bg-white hover:scale-105 transition-all duration-300 rounded-xl p-6 shadow-xl flex flex-col gap-y-2 items-center"
            >
              <div
                className={`size-14 rounded-full flex items-center justify-center ${
                  contact.name === "Facebook"
                    ? "bg-[#4267B2]/50"
                    : contact.name === "WhatsApp"
                    ? "bg-[#25D366]/50"
                    : "bg-[#E1306C]/50"
                }`}
              >
                {contact.icon}
              </div>
              <h4 className="text-center text-lg font-semibold">
                {contact.name}
              </h4>
              <p>{contact.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};
