import Image from "next/image";
import { Button } from "./Button";
import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <div className="relative bg-linear-to-br from-primary to-secondary min-h-max text-white overflow-hidden ">
      <Navbar />
      <div className="absolute inset-0">
        <Image
          src={"/hero-desktop.webp"}
          alt="Hero background"
          width={8736}
          height={4896}
          className="min-h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto max-md:px-4 max-xl:px-10 max-2xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-screen max-md:mt-20">
          <div className="space-y-6 2xl:space-y-8  flex justify-center flex-col">
            <h2 className="text-4xl font-semibold lg:text-5xl xl:text-6xl 2xl:text-7xl">
              The art of Nature
              <br />
              <span className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-primary">
                Cleverly Mastered
              </span>
            </h2>
            <p className="xl:text-xl">
              Sublimez votre éclat tout en prenant soin de votre bien-être et de
              l&apos;environnement, et découvrez l&apos;alliance parfaite entre
              innovation, soin authentique et respect de la nature.
            </p>
            <div className="space-x-4">
              <Button>Commander Maintenant</Button>
              <Button variant="outline">En savoir Plus</Button>
            </div>
          </div>
          <Image
            src={"/hero-img.webp"}
            alt="Hero"
            width={457}
            height={546}
            className="object-fit max-md:mx-auto h-full items-end justify-self-end"
          />
        </div>
      </div>
    </div>
  );
};
