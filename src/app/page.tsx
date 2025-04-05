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

  return (
    !isLoading && <div>
      <main className="flex flex-col h-max items-center">
        {/* MAIN */}
          <div className="flex-1/2 flex flex-row">
            <div className="flex flex-col">

            </div>
            <div className="flex flex-col items-end gap-15">
              <Button type="dark" className="px-5 py-1" onClick={() => {}}>{portfolio.email}</Button>
              <Image src={portfolio.portrait.url} width={275} height={340} alt="portait image"/>
            </div>
          </div>
          <div className="flex-1/2">
            <p>LOREM IPSUM</p>
          </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* FOOTER */}
      </footer>
    </div>
  );
}
