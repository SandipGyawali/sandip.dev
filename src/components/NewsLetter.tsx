"use client";

interface NewsLetterProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function NewsLetter({
  title = "Subscribe to my newsletter",
  description = "A periodic update about my life, recent blog posts, how-tos, and discoveries.",
  buttonText = "Subscribe",
}: NewsLetterProps) {
  return (
    <section id="news-letter" className="pt-5 pb-16 relative">
      <div className="relative overflow-x-clip max-w-6xl mx-auto">
        <div className="rounded-2xl bg-primary p-14 md:p-[100px]">
          {/* Lines */}
          <div className="absolute left-0 right-0 top-[34px] z-10 h-px w-full bg-zinc-600 md:top-[48px]"></div>
          <div className="absolute bottom-0 right-[34px] top-0 z-10 h-full w-px bg-zinc-600 md:right-[48px]"></div>
          <div className="absolute bottom-[34px] left-0 right-0 z-10 h-px w-full bg-zinc-600 md:bottom-[48px]"></div>
          <div className="absolute bottom-0 left-[34px] top-0 z-10 h-full w-px bg-zinc-600 md:left-[48px]"></div>

          {/* Top Right Cross */}
          <div className="absolute right-[44.5px] top-[48px] z-20 hidden h-px w-2 bg-zinc-300 md:block"></div>
          <div className="absolute right-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-zinc-300 md:block"></div>
          {/* Top Left Cross */}
          <div className="absolute left-[44.5px] right-0 top-[48px] z-20 hidden h-px w-2 bg-zinc-300 md:block"></div>
          <div className="absolute left-[48px] right-0 top-[44.5px] z-20 hidden h-2 w-px bg-zinc-300 md:block"></div>
          {/* Bottom Left Cross */}
          <div className="absolute bottom-[48px] left-[44.5px] right-0 z-20 hidden h-px w-2 bg-zinc-300 md:block"></div>
          <div className="absolute bottom-[44.5px] left-[48px] right-0 z-20 hidden h-2 w-px bg-zinc-300 md:block"></div>
          {/* Bottom Right Cross */}
          <div className="absolute bottom-[48px] right-[44.5px] z-20 hidden h-px w-2 bg-zinc-300 md:block"></div>
          <div className="absolute bottom-[44.5px] right-[48px] z-20 hidden h-2 w-px bg-zinc-300 md:block"></div>

          <div className="z-50 mb-4 space-y-4">
            <form action="">Form</form>
          </div>
        </div>
      </div>
    </section>
  );
}
