import { cn } from "@/lib/utils";
import { GitBranch } from "lucide-react";

function Footer({ className }: { className: string }) {
  return (
    <footer className={cn(``, className)}>
      {/* left orientation for the vertical left side  */}
      <div className="">
        <ul>
          <GitBranch />
          Github
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
