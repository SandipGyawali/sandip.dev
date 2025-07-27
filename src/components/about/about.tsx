import GridCards from "@/shared/components/layout/grid-cards";
import ExperiencesCard from "../cards/about/experiences";
import FullAboutCard from "../cards/about/full-about";
import LinksGridCard from "@/components/links/links-grid";
import EducationCard from "../cards/about/education";

export default function About() {
  return (
    <div className="flex flex-col">
      <FullAboutCard />
      <GridCards className="pt-6">
        <ExperiencesCard className="col-span-3 md:col-span-2" />
        <LinksGridCard className="col-span-3 md:col-span-1" />
      </GridCards>
      <div className="my-2" />
      <EducationCard />
    </div>
  );
}
