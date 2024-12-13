// Next
import Image from "next/image"
// Media
import Screen from "media/home/screen1.png"

const Features = () => {
  return (
    <section>
      <div className="relative z-10 lg:pt-[140px] lg:pb-[100px] md:py-[80px] py-[50px]">
        <div className="container">
          <div className="text-center max-w-[700px] mx-auto xl:pb-[150px] lg:pb-[80px] pb-[40px]">
            <h2 className="text-[#191931] lg:text-[36px] md:text-[30px] text-[25px] leading-tight mb-3 font-extrabold">
              Features that makes{" "}
              <span className="inline-block bg-[url('../../public/clipPath/1.png')] bg-center bg-cover bg-no-repeat py-2 px-3">
                app different!
              </span>
            </h2>
            <p className="lg:text-[18px] md:text-base text-sm leading-normal font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="shadow-[18px_30px_58px_rgba(112,_124,_130,_0.2)] sm:py-[50px] py-[30px] rounded-[35px] lg:px-0 px-2">
            <div className="relative grid grid-cols-12 gap-5 items-end max-w-[1200px] mx-auto">
              <div className="lg:col-span-4 col-span-6">
                {[
                  [
                    "Bug free",
                    "Lorem ipsum dolor sit amet consectetur. Duis id viverra proin arcu ultrices aliquet tristique. Mi id fames sed pharetra nunc habitasse proin.",
                  ],
                  [
                    "Well Organized",
                    "Lorem ipsum dolor sit amet consectetur. Duis id viverra proin arcu ultrices aliquet tristique. Mi id fames sed pharetra nunc habitasse proin.",
                  ],
                  [
                    "Bug free",
                    "Lorem ipsum dolor sit amet consectetur. Duis id viverra proin arcu ultrices aliquet tristique. Mi id fames sed pharetra nunc habitasse proin.",
                  ],
                ].map(([title, desc], i) => (
                  <div key={i} className="text-end mb-4">
                    <span className="bg-secondary flex items-center justify-center w-[44px] h-[44px] ms-auto rounded-[12px] md:text-[22px] text-lg leading-tight font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="md:text-[22px] text-lg leading-tight font-bold text-black my-2">
                      {title}
                    </h3>
                    <p className="md:text-base text-xs font-normal leading-tight max-w-[379px] ms-auto">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-4 col-span-6 lg:block hidden">
                <Image
                  src={Screen}
                  alt="screen"
                  className="lg:absolute lg:top-0 lg:left-0 lg:right-0 xl:bottom-36 lg:bottom-24 xl:w-[343px] lg:w-[280px] lg:m-auto xl:h-[758px] lg:h-[680px]"
                />
              </div>
              <div className="lg:col-span-4 col-span-6">
                {[
                  [
                    "Bug free",
                    "Lorem ipsum dolor sit amet consectetur. Duis id viverra proin arcu ultrices aliquet tristique. Mi id fames sed pharetra nunc habitasse proin.",
                  ],
                  [
                    "Well Organized",
                    "Lorem ipsum dolor sit amet consectetur. Duis id viverra proin arcu ultrices aliquet tristique. Mi id fames sed pharetra nunc habitasse proin.",
                  ],
                  [
                    "Bug free",
                    "Lorem ipsum dolor sit amet consectetur. Duis id viverra proin arcu ultrices aliquet tristique. Mi id fames sed pharetra nunc habitasse proin.",
                  ],
                ].map(([title, desc], i) => (
                  <div key={i} className="text-start mb-4">
                    <span className="bg-secondary flex items-center justify-center w-[44px] h-[44px] rounded-[12px] md:text-[22px] text-lg leading-tight font-bold text-primary">
                      {String(i + 1 + 3).padStart(2, "0")}
                    </span>
                    <h3 className="md:text-[22px] text-lg leading-tight font-bold text-black my-2">
                      {title}
                    </h3>
                    <p className="md:text-base text-xs font-normal leading-tight  max-w-[379px]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-4 col-span-12 lg:hidden block">
                <Image
                  src={Screen}
                  alt="screen"
                  className="lg:absolute mx-auto lg:top-0 lg:left-0 lg:right-0 xl:bottom-36 lg:bottom-24 xl:w-[343px] lg:w-[280px] lg:m-auto xl:h-[758px] lg:h-[680px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
