import CommandLineBody from "./body";
import CommandLineHeader from "./header";

function CommandLine() {
  return (
    <div className="w-full lg:w-[60vw]">
      <CommandLineHeader />
      <CommandLineBody />
    </div>
  );
}

export default CommandLine;
