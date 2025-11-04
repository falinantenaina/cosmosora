type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ id = "", className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`max-md:px-4 max-xl:px-10 max-2xl:px-16 py-10   lg:py-20 max-w-7xl mx-auto ${
        className || ""
      }`}
    >
      {children}
    </section>
  );
};
