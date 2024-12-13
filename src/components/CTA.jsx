export default function CTA({
  text = "Get It On",
  text2 = "Google Play",
  link = "javascript:;",
  icon = "google",
  css = "bg-white",
  csstext1,
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a href='${link}' class='inline-flex border-2 border-[#A7A9AC] items-center text-sm md:text-base leading-none w-max px-3 md:px-0 md:w-[210px] h-[65px] rounded-[7px] ${css} justify-center gap-2 transition-all duration-300 hover:-translate-y-1'>
                    ${
                      icon === "apple"
                        ? `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/apple.png" width="35" height="43" />`
                        : ``
                    }
                    ${
                      icon === "google"
                        ? `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/google.png" width="39" height="43" />`
                        : ``
                    }
                    <div>
                    <span class="block text-[#9C9FA2] md:text-base text-sm leading-tight uppercase ${csstext1}">${text}</span>
                    <span class="block text-[#000] md:text-[22px] text-base font-bold font-mono leading-tight">${text2}</span>
                    </div>
                </a>`,
      }}
    />
  )
}
