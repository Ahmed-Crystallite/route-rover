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

const OurApp = () => {
  return (
    <section>
      <div className="relative z-10 py-[100px]">
        <div className="container">
          <Tabs defaultValue="guardian">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-[36px] leading-tight font-extrabold mb-3 text-black">
                  App Screenshots Know Properly
                </h2>
                <p className="text-lg leading-tight font-normal">
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
                emblaWrapper="flex"
                align="center"
                arrowsCss="!justify-center mt-16"
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
                  <div key={i} className="grow-0 shrink-0 basis-[20%] mx-5">
                    <Image src={e} alt="screenshots" className="mx-auto" />
                  </div>
                ))}
              </AutoPlaySlider>
            </TabsContent>
            <TabsContent value="driver">
              <AutoPlaySlider
                emblaWrapper="flex"
                align="center"
                arrowsCss="!justify-center"
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
                  <div key={i} className="grow-0 shrink-0 basis-[20%] mx-5">
                    <Image src={e} alt="screenshots" className="mx-auto" />
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
