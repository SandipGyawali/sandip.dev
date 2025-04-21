"use client";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";
import { useState, useEffect } from "react";
import { getGithubYears } from "@/utils/github-years";
import { Button } from "./ui/button";
import { inter } from "@/app/fonts/fonts";
import { Github } from "lucide-react";

function ContributionGraph() {
  const { theme, systemTheme } = useTheme();
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  );
  const [serverTheme, setServerTheme] = useState<"light" | "dark" | undefined>(
    undefined
  );

  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);

  const username = "SandipGyawali";
  const joinYear = Number(2020);
  const years = getGithubYears(joinYear);

  return (
    <section
      id="contribution-graph"
      className={`lg:max-w-6xl px-4 xl:px-0 mx-auto ${inter.className}`}
    >
      <div className="space-y-2">
        {/* <div className="flex flex-row gap-2 w-fit items-center inline-block rounded-lg bg-foreground text-background px-2.5 py-1.5 text-xs font-semibold">
          <Github className="size-4" />
          Contribution
        </div> */}
        <h2 className={`text-3xl font-bold tracking-tight mb-5 sm:text-5xl`}>
          Contribution Graph
        </h2>

        <p className="text-muted-foreground text-sm/relaxed">
          A summary of my coding activity on GitHub, showing how often I
          contribute to projects over time.
        </p>
      </div>
      <div className="mt-4 flex xl:flex-row flex-col gap-4">
        <div className="border p-5 lg:p-6 rounded-lg max-w-fit max-h-fit">
          <GitHubCalendar
            username={username}
            colorScheme={serverTheme}
            blockSize={13}
            year={calendarYear}
          />
        </div>

        <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
          {years.slice(0, 5).map((year) => (
            <Button
              size="default"
              variant={calendarYear == year ? "default" : "outline"}
              key={year}
              // currentYear={calendarYear ?? today}
              onClick={() =>
                setCalendarYear(year === calendarYear ? undefined : year)
              }
            >
              {year}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ContributionGraph };
