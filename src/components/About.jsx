// Next
import Image from "next/image"

// Media
import SideImage from "media/home/about/sideImage.png"

// Components
import { CTA } from "./index"

const About = () => {
  return (
    <section>
      <div className="relative z-10 bg-[#EEF1F8] bg-opacity-40 md:py-[60px] py-[50px]">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 flex flex-wrap flex-col-reverse items-center gap-10">
            <div className="">
              <Image src={SideImage} alt="screen" className="mx-auto" />
            </div>
            <div className="max-w-[600px]">
              <h2 className="xl:text-[56px] lg:text-[50px] md:text-[40px] text-[35px] lg:max-w-[500px] leading-tight font-extrabold text-black mb-2">
                About Route Rover
              </h2>
              <span className="block font-mono xl:text-base text-sm leading-normal font-bold text-primary mb-3">
                Lorem ipsum dolor sit amet consectetur. Duis id viverra proin
                arcu ultrices aliquet tristique. Mi id fames sed pharetra nunc
                habitasse proin.
              </span>
              <p className="xl:text-base text-sm tracking-wide font-normal leading-normal mb-3">
                Lorem ipsum dolor sit amet consectetur. Sit dolor fames neque
                pellentesque consequat volutpat nulla eu sed. Ac enim id quisque
                vulputate. Dictum est fermentum leo orci suspendisse. Sed
                pretium tristique odio mi augue mauris tellus. Metus ac
                tincidunt nec diam eleifend. Elit maecenas id egestas cras. Ut
                eu aliquet enim sodales odio. Donec eros pulvinar quis lacus.
              </p>
              <p className="xl:text-base text-sm tracking-wide font-normal leading-normal mb-3">
                Ac id risus dictum nam lacus proin et quis egestas. Arcu ac
                blandit suspendisse mauris ultrices amet massa. Nulla aliquam
                vulputate orci justo. Auctor tellus purus tincidunt tristique
                tempor. Non dictum in posuere pretium rhoncus vulputate.
                Adipiscing hendrerit quam facilisi diam elementum aliquam amet.
                Vulputate sit eget viverra tincidunt velit integer morbi proin
                id.
              </p>
              <p className="xl:text-base text-sm tracking-wide font-normal leading-normal mb-3">
                Ac amet purus arcu arcu massa tristique scelerisque commodo
                molestie.
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
