import { BiDevices } from "react-icons/bi";
import CardButton from "@/shared/components/buttons/card-button";
import CardTitle from "@/shared/components/titles/card-title";
import cardStyle from "@/styles/card";
import Link from "next/link";
import AppItem from "./app-item";
import { mobileApps } from "./data/mobile-apps";
import { webApps } from "./data/web-apps";

function PreviewAppsList() {
  const filteredApps = [...webApps, ...mobileApps];

  return (
    <div className={cardStyle}>
      <CardTitle icon={<BiDevices />} title="FEATURED" />
      <div className="h-8" />
      <div className="flex flex-wrap content-center gap-7">
        {[...filteredApps.slice(0, 2)].map((card) => (
          <AppItem key={card.title} card={card} />
        ))}
      </div>
      <div className="h-5" />
      <div className="w-full">
        <Link href="/work">
          <CardButton
            title="VIEW ALL"
            className="hover:animate-scale float-right px-7"
          />
        </Link>
      </div>
    </div>
  );
}

export default PreviewAppsList;
