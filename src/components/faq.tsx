"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import ShinyText from "./ui/shiny.text";
import { FeatureFive, FeatureOne, FeatureSeven } from "./ui/bento";
import { useCursorVariantStore } from "@/store/CursorVariantStore";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={cn(
        "group rounded-lg",
        "transition-all duration-200 ease-in-out bg-[#0d0d0d]",
        isOpen ? "" : "hover:bg-white/[0.02]"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between gap-4"
      >
        <h3
          className={cn(
            "text-base font-medium transition-colors duration-200 text-left",
            "text-white text-lg",
            isOpen && "text-white"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "p-0.5 rounded-full shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-gray-400 dark:text-gray-500"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-sm text-white/65 font-medium leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Faq02() {
  const { setCursorVariant } = useCursorVariantStore();

  const faqs: Omit<FAQItemProps, "index">[] = [
    {
      question: "What services do you provide?",
      answer:
        "I specialize in building fullstack software application in web and mobile technology.",
    },
    {
      question: "How do I start working with you?",
      answer:
        "It starts with a zoom call. We'll discuss your goals, vision, and how I can bring your ideas to life.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "From tech startups to creative agencies, I collaborate with a range of industries -- adapting designs and development to fit each brand's unique identity.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Pricing depends on the project scope. It varies based on your needs and complexity.",
    },
    {
      question: "How can I get started?",
      answer:
        "You can get started by signing up for a free trial. Once you've signed up, you'll have access to our platform's full range of features. You can also contact our support team for assistance.",
    },
    {
      question: "How can I get started?",
      answer:
        "You can get started by signing up for a free trial. Once you've signed up, you'll have access to our platform's full range of features. You can also contact our support team for assistance.",
    },
  ];

  return (
    <section className="py-16 w-full flex items-start justify-between bg-linear-to-b from-transparent via-gray-50/50 to-transparent dark:from-transparent dark:via-white/[0.02] dark:to-transparent">
      <div className="w-full space-y-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center w-fit gap-2"
        >
          <Sparkles className="text-[#b5b5b5a4] size-5" />
          <ShinyText text="FAQ'S" className="font-extrabold" speed={2.5} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 flex flex-col"
        >
          <h2 className="text-5xl text-white font-medium">
            Questions, <span className="text-[#9e9e9e]">Answers.</span>
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
          className="grid grid-cols-1 grid-rows-1 gap-3 sm:grid-cols-2 sm:grid-rows-2"
        >
          <FeatureSeven />
          <FeatureFive />
          <FeatureOne />
        </motion.div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq02;
