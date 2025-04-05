'use client';

import Button from "@/components/Button";
import getPortfolio from "@/helpers/api";
import { portfolioType } from "@/helpers/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const emptyPortfolio = {
  buttons: [""],
  email: "",
  heading: "",
  postHeading: "",
  preHeading: "",
  portrait: {
    fileName: "",
    id: "",
    url: ""
  },
  photos: [{
    fileName: "",
    id: "",
    url: ""
  }],
  videos: [{
    fileName: "",
    id: "",
    url: ""
  }]
}

export default function Home() {
  const [portfolio, setPortfolio] = useState<portfolioType>(emptyPortfolio)
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setIsloading(true)
      const response = await getPortfolio()
      // TODO: promise logic
      setPortfolio(response.data.portfolio)
      setIsloading(false)
    }
    
    getData()
  }, [])

  const scrollintoViewHandler = (target: string) => {
    const element = document.getElementById(`${target}-section`);
    element!.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    !isLoading && <div>
      <main className="min-h-[100vh] px-20">
        {/* MAIN */}
        <div id="contact-section" className="flex flex-col items-center min-h-[100vh]">
          <div className="flex-1/2 max-h-[50vh] flex flex-row justify-between w-full py-10">
            <div className="flex flex-col flex-2/3 gap-1 text-center justify-center">
              <h3 className="text-lg mb-1">{portfolio.preHeading}</h3>
              <div className="border-2 border-light-primary px-4 py-2 mx-4">
                <h2 className="text-2xl">{portfolio.heading}</h2>
              </div>
              <h4 className="text-base">{portfolio.postHeading}</h4>
            </div>
            <div className="flex flex-col flex-1/3 items-end gap-15">
              <Button type="light" className="px-5 py-1 text-lg" 
              onClick={() => {}}>{portfolio.email}</Button>
              <Image className="max-w-[275px]" src={portfolio.portrait.url} 
              priority width={275} height={340} alt="portait image"/>
            </div>
          </div>
          <div className="h-full flex-1/2 grid grid-cols-2 items-center gap-10">
            {portfolio.buttons.map((button, index) =>
               <Button key={index} type={index % 2 ? 'light' : 'dark'} 
               className="px-6 py-1 text-lg" onClick={() => {}}>{button}</Button>)}
          </div>
          <div className="z-90 absolute bottom-0 flex flex-col gap-2 items-center mb-2 font-gothic cursor-pointer"
           onClick={() => scrollintoViewHandler("works")}>
            <p className="text-2xl">works</p>
            <p className="rotate-90 text-2xl -mr-1">&gt;</p>
          </div>
        </div>
          <div id="works-section" className="relative min-h-[1024px] flex flex-col items-center">
            <div className="z-99 absolute top-0 flex flex-col gap-2 items-center mb-2 font-gothic cursor-pointer"
             onClick={() => scrollintoViewHandler("contact")}>
              <p className="-rotate-90 text-2xl -ml-2">&gt;</p>
              <p className="text-2xl">contact</p>
            </div>

          </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* FOOTER */}
      </footer>
    </div>
  );
}
