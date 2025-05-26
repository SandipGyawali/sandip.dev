"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import NotFoundData from "../../public/404.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function NotFound() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${isLoaded ? "opacity-100" : "opacity-0"} 
         transition-opacity duration-1000 ease-in-out flex flex-col items-center justify-center w-full h-screen`}
    >
      <div className="w-full max-w-lg xl:max-w-xl">
        <Lottie
          animationData={NotFoundData}
          loop={true}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <h2 className={`text-3xl font-bold tracking-tighter`}>
          Page Not Found!!!
        </h2>

        <p className="text-muted-foreground text-center text-sm/relaxed">
          We are sorry, but the page you requested was not found.
          <br /> Please check the URL or try again later.
        </p>
        <Button
          onClick={() => {
            window.history.back();
          }}
        >
          Return to Previous Tab
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
