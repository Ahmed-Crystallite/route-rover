// Next
import Image from "next/image"
// Media
import DoubleScreens from "media/home/screens.png"
// Components
import { CTA } from "./index"

const BestWay = () => {
  return (
    <section>
      <div className="relative z-20 lg:pt-[80px] md:pt-[60px] pt-[50px] sm:pb-0 pb-[50px] sm:!bg-[linear-gradient(87deg,_rgba(59,253,131,0)_0%,_rgba(252,250,71,0)_100%)] bg-[linear-gradient(87deg,_rgba(59,253,131,1)_0%,_rgba(252,250,71,1)_100%)]">
        <div className="container">
          <div className="relative z-10 sm:px-5 sm:pt-10 sm:py-0">
            <span className="sm:absolute sm:-z-10 sm:inset-0 sm:block hidden sm:bg-[linear-gradient(87deg,_rgba(59,253,131,1)_0%,_rgba(252,250,71,1)_100%)] lg:h-[87%] sm:h-full sm:mt-auto sm:w-full sm:rounded-[30px]"></span>
            <div className="lg:grid flex flex-wrap flex-col-reverse gap-y-8 lg:grid-cols-2 items-center gap-x-5">
              <div className="max-w-[550px] sm:block hidden mx-auto">
                <Image
                  src={DoubleScreens}
                  alt="double_screens"
                  className="mx-auto"
                />
              </div>
              <div className="lg:pt-[60px] max-w-[600px]">
                <h2 className="2xl:text-[45px] xl:text-[40px] lg:text-[35px] sm:text-[30px] text-[25px] leading-tight text-primary mb-3 font-bold">
                  Best way to manage your customers.
                </h2>
                <p className="md:text-[16px] text-[14px] leading-normal text-primary font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-8 flex md:gap-x-4 gap-x-3">
                  <CTA />
                  <CTA
                    icon="apple"
                    text="Available on the"
                    text2="App Store"
                    csstext1="capitalize"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestWay
