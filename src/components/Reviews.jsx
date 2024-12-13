// Next
import Image from "next/image"
// Media
import Avater from "media/home/avater.png"
import SemiCol from "media/home/semiCol.png"
import Stars from "media/home/stars.svg"
// Components
import { ProgressBar } from "./index"


const Reviews = () => {
  return (
    <section>
      <div className="relative z-10 pt-[40px] lg:pb-[100px] md:pb-[80px] pb-[40px]">
        <div className="container">
          <div className="text-center max-w-[700px] mx-auto pb-[60px]">
            <h2 className="text-[#191931] lg:text-[36px] md:text-[30px] text-[25px] leading-tight mb-3 font-extrabold">
              Our{" "}
              <span className="inline-block bg-[url('../../public/clipPath/1.png')] bg-center bg-cover bg-no-repeat py-1 px-3">
                customers
              </span>
              loves what we do
            </h2>
            <p className="lg:text-[18px] md:text-base text-sm leading-normal font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <ProgressBar
              emblaWrapper="flex"
              arrowsCss="relative xl:top-[-220px] z-10 items-center"
            >
              {[
                "Ruben Franci",
                "Ruben Franci",
                "Ruben Franci",
                "Ruben Franci",
                "Ruben Franci",
                "Ruben Franci",
              ].map((e, i) => (
                <div
                  key={i}
                  className="relative z-10 grow-0 shrink-0 basis-full text-center"
                >
                  <span className="block bg-secondary/10 absolute inset-[80px_0_0_0] -z-10 xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-[70%] mx-auto h-full"></span>
                  <Image src={Avater} alt="avater" className="mx-auto" />
                  <Image src={SemiCol} alt="icon" className="mx-auto my-4" />
                  <p className="text-text_color lg:text-[16px] text-[14px] leading-normal font-medium max-w-[800px] mx-auto">
                  Lorem ipsum dolor sit amet consectetur. Sed a nulla eget arcu urna nec magnis. Neque suscipit tincidunt purus nullam interdum sed adipiscing vitae. Lobortis eu lacinia adipiscing orci ut.
                  </p>
                  <div className="text-center  my-10">
                    <h4 className="text-black text-[22px] leading-tight font-semibold mb-2">
                      {e}
                    </h4>
                    <Image src={Stars} alt="icon" className="mx-auto" />
                  </div>
                </div>
              ))}
            </ProgressBar>
        </div>
      </div>
    </section>
  )
}

export default Reviews
