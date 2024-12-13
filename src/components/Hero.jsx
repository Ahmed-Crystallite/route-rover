// Next
import Image from "next/image"
// Components
import { CTA } from "./index"
// Media
import HeroImage from "media/home/hero.png"
import HeroImage2 from "media/home/screen.png"

const Hero = () => {
  return (
    <section>
      <div className="relative z-10 bg-primary">
        <div className="container">
          <div className="xl:pt-[250px] md:pt-[200px] pt-[150px] lg:pb-[150px] md:pb-[80px] pb-[50px] relative z-10">
            <div className="lg:block hidden">
              <Image
                src={HeroImage}
                alt="hero"
                priority
                className="absolute bottom-0 right-0 2xl:w-[700px] xl:w-[550px] w-[500px] object-right-bottom object-cover h-auto m-auto"
              />
              <Image
                src={HeroImage2}
                alt="hero2"
                priority
                className="absolute 2xl:-bottom-24 -bottom-20 2xl:right-36 xl:right-28 right-[85px] object-center object-cover 2xl:w-[378px] w-[300px] h-auto m-auto"
              />
            </div>
            <div className="grid grid-cols-12 items-center">
              <div className="lg:col-span-7 col-span-12">
                <span className="font-mono text-secondary 2xl:text-[20px] md:text-[18px] text-[16px] leading-tight font-extrabold">
                  AMAZING FEATURES
                </span>
                <h1 className="font-sans text-white 2xl:text-[50px] xl:text-[45px] md:text-[40px] sm:text-[38px] text-[32px] my-2 leading-normal font-extrabold">
                  Navigating Safety in Every School Journey.
                </h1>
                <p className="font-mono text-white/80 2xl:text-[20px] md:text-[18px] text-[16px] leading-normal font-medium 2xl:max-w-[700px] max-w-[650px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-10 flex md:gap-x-4 gap-x-3">
                  <CTA />
                  <CTA
                    icon="apple"
                    text="Available on the"
                    text2="App Store"
                    csstext1="capitalize"
                  />
                </div>
              </div>
              <div className="lg:hidden block col-span-12">
                <Image
                  src={HeroImage2}
                  priority
                  alt="hero2"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
