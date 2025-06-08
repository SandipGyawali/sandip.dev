import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import ImageCard from "./ui/image-card";
import { motion } from "framer-motion";
import ShinyText from "./ui/shiny.text";

// #region placeholder
function BoldCopy({
  text = "animata",
  className,
  textClassName,
  backgroundTextClassName,
}: {
  text: string;
  className?: string;
  textClassName?: string;
  backgroundTextClassName?: string;
}) {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center bg-background px-2 py-2 md:px-6 md:py-4",
        className
      )}
    >
      <div
        className={cn(
          "text-4xl font-black uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-8xl",
          backgroundTextClassName
        )}
      >
        {text}
      </div>
      <div
        className={cn(
          "text-md absolute font-black uppercase text-foreground transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-8xl",
          textClassName
        )}
      >
        {text}
      </div>
    </div>
  );
}

function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}

function FeatureOne() {
  return (
    <BentoCard className="flex flex-col bg-[#121212] bg-white h-[500px]">
      <></>
      {/* <div className="font-bold text-yellow-700">Highly rated</div>
      <div className="mt-auto flex justify-end">
        <div className="text-4xl font-black text-black/60 md:text-7xl">
          <Ticker value="4.8" className="text-white" />
        </div>{" "}
        <sup className="text-xl text-white">★</sup>
      </div> */}
    </BentoCard>
  );
}

function FeatureTwo() {
  return (
    <BentoCard className="relative flex flex-col overflow-visible bg-[#121212] sm:col-span-2">
      <ImageCard image="/dashboard.png" />
    </BentoCard>
  );
}

function FeatureThree() {
  return (
    <BentoCard className="flex flex-col bg-[#121212]">
      <ImageCard
        image="/wordle_clone.webp"
        title="Wordle (Clone)"
        subtitle="React Native Wordle Project built for learning react native."
        badge={{
          text: "Project",
          variant: "orange",
        }}
      />
    </BentoCard>
  );
}

function FeatureFour() {
  return (
    <BentoCard className="flex items-center gap-4 bg-[#121212] sm:col-span-2 md:flex-row-reverse">
      <ImageCard image="/changmi.png"></ImageCard>

      {/* <div className="text-2xl font-black text-lime-800">
        Generate progress report
      </div>
      <div className="relative max-h-32 flex-shrink-0 overflow-hidden">
        <Report className="w-40 overflow-hidden border-none shadow-none hover:shadow-none" />
      </div> */}
    </BentoCard>
  );
}

function FeatureFive() {
  return (
    <BentoCard className="flex flex-col items-center justify-center bg-[#121212] sm:col-span-2">
      <ImageCard image="/sama.png" />
    </BentoCard>
  );
}

function FeatureSix() {
  return (
    <BentoCard className="bg-[#121212]">
      <ImageCard image="/filterify.png" />
    </BentoCard>
  );
}

function FeatureSeven() {
  return (
    <BentoCard className="bg-white flex flex-col gap-2 border border-white/20">
      <></>
      {/* <div className="w-full -rotate-1 rounded-full border-rose-400 bg-rose-400 py-2 text-center font-semibold text-white md:-rotate-3">
        Javascript
      </div>
      <div className="w-full rotate-1 rounded-full border-rose-400 bg-rose-400 py-2 text-center font-semibold text-white md:rotate-3">
        ReactJS
      </div>
      <div className="w-full rounded-full border-rose-400 bg-rose-400 py-2 text-center font-semibold text-white">
        NextJS
      </div> */}
    </BentoCard>
  );
}

function FeatureEight() {
  return (
    <BentoCard className="relative flex flex-col bg-[#121212] sm:col-span-2">
      <ImageCard image="/loyalty.png" />
    </BentoCard>
  );
}

// #endregion

export default function BentoMain() {
  return (
    <div className="storybook-fix w-full my-16">
      <div className="space-y-7 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center w-fit gap-2"
        >
          <Sparkles className="text-[#b5b5b5a4] size-5" />
          <ShinyText
            text="Recent Works."
            className="font-extrabold"
            speed={2.5}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 flex flex-col"
        >
          <h2 className="text-5xl text-[#e3ddda] font-bold">
            What I’ve Been, <span className="text-[#9e9e9e]">Working On. </span>
          </h2>
          <span className="text-[#949494] font-medium">
            A showcase of recent collaborations, side projects, and creative
            experiments
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 sm:grid-rows-3">
          <FeatureOne />
          <FeatureTwo />
          <FeatureThree />
          <FeatureFour />
          <FeatureFive />
          <FeatureSix />
          <FeatureSeven />
          <FeatureEight />
        </div>
      </div>
    </div>
  );
}
