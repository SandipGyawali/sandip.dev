import { shortAbout } from "@/constants/strings";
import CardButton from "@/shared/components/buttons/card-button";
import cardStyle from "@/styles/card";
import { scrollToTop } from "@/utils/window";
import Link from "next/link";

export default function PreviewAboutCard({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cardStyle + className}>
      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-grow">
          <p className="text-xl font-semibold mt-4">Hi, I{"'"}m Sandip 👋</p>
        </div>
        {/* <div className="px-3 py-2 dark:bg-slate-500/20 rounded-full">
          <Image
            className="hidden 2xs:block rounded-full"
            src="/sandip.jpeg"
            alt={author}
            width={50}
            height={50}
          />
        </div> */}
      </div>
      <span className="text-base font-normal opacity-70 leading-relaxed mt-3 mb-6">
        {shortAbout}
      </span>
      <Link
        onClick={() => {
          scrollToTop();
        }}
        href="/about"
        className="hover:animate-scale"
      >
        <CardButton title="LEARN MORE" />
      </Link>
    </div>
  );
}
