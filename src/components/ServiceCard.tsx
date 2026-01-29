import Image from "next/image";

type ServiceCardProps = {
  title: string;
  text: string[];
  imageSrc: string;
  imageAlt: string;
};

export default function ServiceCard({ title, text, imageSrc, imageAlt }: ServiceCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <div className="mt-3 space-y-4">
          {text.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
