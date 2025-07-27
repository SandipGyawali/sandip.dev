import { FileText } from "lucide-react";
import Link from "next/link";

export default function ResumeButton() {
  return (
    <Link target="_blank" href="/files/resume.pdf">
      <button className="border-3 flex items-center gap-2 py-1.5 px-5 rounded-full font-medium text-base border border-neutral-600/40 hover:bg-neutral-500/10 hover:animate-scale">
        <FileText className="size-4" />
        Resume
      </button>
    </Link>
  );
}
