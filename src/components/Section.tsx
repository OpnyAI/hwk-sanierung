import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className ?? ""}`}>
      {children}
    </section>
  );
}
