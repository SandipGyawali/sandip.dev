"use client";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";
import { useState, useEffect } from "react";
import { getGithubYears } from "@/utils/github-years";
import { Button } from "./ui/button";

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

  const today = new Date().getFullYear();
  const username = "Sandip Gyawali";
  const joinYear = Number(2020);
  const years = getGithubYears(joinYear);

  return (
    <section
      id="contribution-graph"
      className="lg:max-w-6xl px-4 xl:px-0 mx-auto"
    >
      <h3 className="text-2xl font-bold tracking-tight mb-5">
        Contribution Graph
      </h3>
      <div className="flex xl:flex-row flex-col gap-4">
        <div className="border p-5 lg:p-6 rounded-lg max-w-fit max-h-fit">
          <GitHubCalendar
            username="SandipGyawali"
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
