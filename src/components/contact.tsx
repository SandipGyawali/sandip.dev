import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ShinyText from "./ui/shiny.text";
import { BentoCard } from "./ui/bento";
import { useCursorVariantStore } from "@/store/CursorVariantStore";
import Input_01 from "./ui/input";
import StyledButton from "./ui/StyledButton";
import Textarea_01 from "./ui/textarea";

function Contact() {
  const { setCursorVariant } = useCursorVariantStore();

  return (
    <section className="py-16 w-full grid grid-cols-2 gap-8 ">
      <div className="w-full space-y-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center w-fit gap-2"
        >
          <Sparkles className="text-[#b5b5b5a4] size-5" />
          <ShinyText
            text="Let's Connect"
            className="font-extrabold"
            speed={2.5}
          />
        </motion.div>

        <div className="mb-8 w-fit text-center border border-[#27272a] rounded-full px-4 flex items-center gap-3 py-2">
          <span className="relative flex size-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-white"></span>
          </span>
          <p className="text-white">Available For Work</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 text-[#e3ddda] flex flex-col"
        >
          <h2 className="text-5xl font-bol">
            Let&apos;s Collaborate, <br />
            <span className="text-[#9e9e9e]">and Begin the work.</span>
          </h2>
          <span className="text-[#949494] font-medium">
            Get quick answers to your questions.
          </span>
        </motion.div>

        <motion.div
          onMouseEnter={() => {
            setCursorVariant("text");
          }}
          onMouseLeave={() => {
            setCursorVariant("default");
          }}
          className="grid grid-cols-1 grid-rows-1 gap-3"
        >
          <BentoCard className="border border-[#27272a] col-span-full lg:row-span-3 overflow-hidden relative">
            <div className="h-full grid sm:grid-cols-2">
              <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                <div className="relative aspect-square rounded-full size-12 flex border bg-white/5 border-white/10 before:absolute before:-inset-2 before:border before:border-white/5 before:bg-white/5 before:rounded-full">
                  <svg
                    className="size-6 m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        stroke="white"
                        d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm-4.562 7.902a3 3 0 1 0 3 5.195a3 3 0 0 0-3-5.196zm15.124 0a2.999 2.999 0 1 1-2.998 5.194a2.999 2.999 0 0 1 2.998-5.194z"
                      />
                      <path
                        fill="white"
                        fill-rule="evenodd"
                        d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143a8.507 8.507 0 0 0-5.031 4.766a8.5 8.5 0 0 0-.502 4.817a3 3 0 0 1 .902-.723a7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717a2.998 2.998 0 0 1 .902.723a8.5 8.5 0 0 0-5.533-9.583a3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42a7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355a8.5 8.5 0 0 0 11.066 0"
                        clipRule="evenodd"
                      />
                    </g>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg text-white font-medium transition">
                    Get in Touch
                  </h2>
                  <p className="text-[#9e9e9e]">
                    Whether you have a question, a project idea, or just want to
                    say hi — my inbox is always open.
                  </p>
                </div>
              </div>
              <div className="mt-6 relative sm:-mr-[--card-padding] sm:-my-[--card-padding] before:absolute before:w-[2px] before:inset-0 before:mx-auto before:bg-white/[0.2]">
                <div className="relative space-y-6 py-6 flex flex-col justify-center h-full">
                  <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                    <span className="h-fit text-white text-xs block px-2 py-1 shadow-sm rounded-full border border-white/[0.2]">
                      Likeur
                    </span>
                    <div className="size-7 ring-4 ring-[--ui-bg]">
                      <img
                        className="rounded-full size-full"
                        src="https://avatars.githubusercontent.com/u/102558960?v=4"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-[calc(50%-1rem)] relative">
                    <div className="size-8 ring-4 ring-[--ui-bg]">
                      <img
                        className="rounded-full size-full"
                        src="https://avatars.githubusercontent.com/u/47919550?v=4"
                        alt=""
                      />
                    </div>
                    <span className="h-fit text-xs text-white block px-2 py-1 shadow-sm rounded-full border border-white/[0.2]">
                      M. Irung
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                    <span className="h-fit text-xs text-white block px-2 py-1 shadow-sm rounded-full border border-white/[0.2]">
                      B. Ng
                    </span>
                    <div className="size-7 ring-4 ring-[--ui-bg]">
                      <img
                        className="rounded-full size-full"
                        src="https://avatars.githubusercontent.com/u/31113941?v=4"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </div>

      <div className="bg-[#0d0d0d] rounded-3xl p-4">
        <form action="" className="w-full space-y-7 px-3 py-5">
          <Input_01
            className="text-base rounded-lg"
            label="Name"
            labelClassName="text-lg"
            placeholder="Type your username..."
          />

          <Input_01
            className="text-base rounded-lg"
            labelClassName="text-lg"
            label="Email"
            placeholder="Type your email..."
          />

          <Textarea_01 label="Message" rows={5} />

          <div className="pt-5">
            <StyledButton
              label="Submit"
              onClick={() => {
                console.log("hello");
              }}
              type="button"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
