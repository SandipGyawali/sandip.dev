import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ToolboxCard({ url, name }: { url: string; name: string }) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <div className="group active:scale-95 p-2.5 border rounded-xl hover:-translate-y-1.5 transition-all ease-linear duration-100 inline-block text-centers">
            <div className="transition-all duration-200 group-hover:border-red-500">
              <img src={url} alt="." className="h-10 w-10" />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="font-semibold">{name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { ToolboxCard };
