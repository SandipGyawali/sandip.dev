import EducationItem from "@/components/apps/education-item";
import CardTitle from "@/shared/components/titles/card-title";
import CardStyle from "@/styles/card";
import { Book } from "lucide-react";
import { educationList } from "@/components/apps/data/education";

function EducationCard({ className }: { className?: string }) {
  const list = [...educationList];

  return (
    <div className={CardStyle + className}>
      <CardTitle title="EDUCATION" icon={<Book className="size-5" />} />
      <div className="h-5" />
      <div className="grid grid-cols-1 w-full gap-2 mt-3">
        {list.map((card) => (
          <EducationItem card={card} className="" key={card.title} />
        ))}
      </div>
    </div>
  );
}

export default EducationCard;
