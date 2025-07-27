import Image from "next/image";
import Link from "next/link";

function EducationItem({
  card,
  className,
  hideBottomBorder,
}: {
  card: any;
  className: string;
  hideBottomBorder?: boolean;
}) {
  return (
    <div
      key={card.title}
      className={
        "flex flex-col gap-2 " +
        (hideBottomBorder ? "" : "border-b border-neutral-500/10 pb-7") +
        " " +
        className
      }
    >
      <div className="flex flex-col gap1.5">
        <div className="flex flex-wrap 2.5xs:!flex-nowrap !flex-row items-start gap-4 underline-offset-2">
          <Image
            src={card.image}
            alt={card.title}
            width={200}
            height={200}
            className={
              "w-16 h-16 rounded-[18px]" +
              (card.hasBorder ? " border border-neutral-500/20" : "") +
              (!!card.path ? " hover:animate-scale cursor-pointer" : "") +
              " " +
              card.imageClassName
            }
          />

          <div className="flex flex-col">
            <div className="flex flex-wrap gap-0.5 align-baseline">
              <Link
                href={card.link ?? card.path}
                target={!!card.link ? "_blank" : undefined}
                className={
                  "text-lg font-semibold cursor-pointer hover:underline" +
                  (!!card.link ? " after:content-['__↗']" : "")
                }
              >
                {card.title}
              </Link>
            </div>
            <div className="text-base leading-relaxed">
              <span className="opacity-70 pr-2 text-sm font-medium">
                {card.description}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <p className="text-sm opacity-70">{card.time}</p>
              <span className="hidden sm:block text-neutral-400">•</span>
              <p className="text-sm font-medium opacity-70">{card.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationItem;
