// Next
import Image from "next/image"
// Components
import {
  AutoPlaySlider,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./index"
// Media
import ScreenShot1 from "media/screenshots/guardian/1.png"
import ScreenShot2 from "media/screenshots/guardian/2.png"
import ScreenShot3 from "media/screenshots/guardian/3.png"
import ScreenShot4 from "media/screenshots/guardian/4.png"
import ScreenShot5 from "media/screenshots/guardian/5.png"
import ScreenShot6 from "media/screenshots/guardian/6.png"
import ScreenShot7 from "media/screenshots/guardian/7.png"
import ScreenShot8 from "media/screenshots/driver/1.png"
import ScreenShot9 from "media/screenshots/driver/2.png"
import ScreenShot10 from "media/screenshots/driver/3.png"
import ScreenShot11 from "media/screenshots/driver/4.png"
import ScreenShot12 from "media/screenshots/driver/5.png"
import ScreenShot13 from "media/screenshots/driver/6.png"
import ScreenShot14 from "media/screenshots/driver/7.png"

const OurApp = () => {
  return (
    <section>
      <div className="__ourApp relative z-10 lg:py-[100px] md:py-[80px] py-[60px]">
        <div className="container">
          <Tabs defaultValue="guardian">
            <div className="flex flex-wrap gap-y-10 items-center justify-between mb-10">
              <div>
                <h2 className="lg:text-[36px] md:text-[30px] text-[22px] leading-tight font-extrabold mb-3 text-black">
                  App Screenshots Know Properly
                </h2>
                <p className="lg:text-lg md:text-base text-sm leading-tight font-normal 2xl:max-w-full max-w-[600px]">
                  Lorem ipsum dolor sit amet consectetur. Libero id in maecenas
                  duis eget vulputate enim ut.
                </p>
              </div>
              <TabsList>
                <TabsTrigger value="guardian">Guardian</TabsTrigger>
                <TabsTrigger value="driver">Driver</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="guardian">
              <AutoPlaySlider
                emblaWrapper="flex items-center"
                align="center"
                arrowsCss="!justify-center mt-16"
                screen={true}
              >
                {[
                  ScreenShot1,
                  ScreenShot2,
                  ScreenShot3,
                  ScreenShot4,
                  ScreenShot5,
                  ScreenShot6,
                  ScreenShot7,
                ].map((e, i) => (
                  <div
                    key={i}
                    className="grow-0 shrink-0 lg:basis-[20%] md:basis-[33.33%] sm:basis-[50%] basis-full mx-3"
                  >
                    <Image
                      src={e}
                      alt="screenshots"
                      className="m-auto sm:w-max sm:h-max w-[50%] h-[50%]"
                    />
                  </div>
                ))}
              </AutoPlaySlider>
            </TabsContent>
            <TabsContent value="driver">
              <AutoPlaySlider
                emblaWrapper="flex items-center"
                align="center"
                arrowsCss="!justify-center mt-16"
                screen={true}
              >
                {[
                  ScreenShot8,
                  ScreenShot9,
                  ScreenShot10,
                  ScreenShot11,
                  ScreenShot12,
                  ScreenShot13,
                  ScreenShot14,
                ].map((e, i) => (
                  <div
                    key={i}
                    className="grow-0 shrink-0 lg:basis-[20%] md:basis-[33.33%] sm:basis-[50%] basis-full mx-3"
                  >
                    <Image
                      src={e}
                      alt="screenshots"
                      className="m-auto sm:w-max sm:h-max w-[50%] h-[50%]"
                    />
                  </div>
                ))}
              </AutoPlaySlider>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default OurApp