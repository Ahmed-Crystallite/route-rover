"use client"
import { useEffect, useState } from "react"
import { BestWay, Contact } from "@/components"
import termsData from "./data.json"
const Terms_Of_Services = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(termsData)
  }, [])
  return (
    <>
      <section>
        <div className="xl:pt-[180px] pt-[150px] pb-[100px] bg-primary">
          <div className="container">
            <h1 className="lg:text-[50px] md:text-[40px] text-[30px] leading-tight font-extrabold text-white text-center">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="py-[60px]">
          <div className="container">
            <div className="lg:mb-16 mb-10">
              <h2 className="2xl:text-[20px] text-[18px] leading-tight font-semibold text-black mb-3">
                {data[0]?.title}
              </h2>
              <p className="2xl:text-[16px] md:text-[15px] text-[14px] leading-normal font-normal text-text_color">
                {data[0]?.description}
              </p>
            </div>
            {data.slice(1).map((e, i) => (
              <div key={i}>
                <h3 className="2xl:text-[20px] text-[18px] leading-tight font-semibold text-black my-3">
                  {e.title}
                </h3>
                <p className="2xl:text-[16px] md:text-[15px] text-[14px] leading-normal font-normal text-text_color mb-3 last:mb-0">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BestWay />
      <Contact />
    </>
  )
}

export default Terms_Of_Services
