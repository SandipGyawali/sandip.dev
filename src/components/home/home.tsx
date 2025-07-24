"use client";
import GridCards from "@/shared/components/layout/grid-cards";
import PreviewAppsList from "@/components/apps/preview-list";
import PreviewAboutCard from "@/components/about/preview-about";
import LinksGridCard from "@/components/links/links-grid";

export default function Home() {
  return (
    <div className="flex flex-col">
      <GridCards title="About">
        <PreviewAboutCard className="col-span-3 md:col-span-2" />
        <LinksGridCard className="col-span-3 md:col-span-1" />
      </GridCards>
      <GridCards className="!grid-cols-1" title="Work">
        <PreviewAppsList />
      </GridCards>
    </div>
  );
}
