// Next
import Image from "next/image"
import Link from "next/link"
// Media
import Logo from "media/footerLogo.svg"

const Footer = () => {
  return (
    <footer>
      <div className="relative z-10 bg-primary">
        <div className="container">
          <div className="py-[40px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5">
            <div className="py-[30px]">
              <Image src={Logo} priority alt="footer_logo" />
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-5">
              <div>
                <h4 className="text-secondary text-[15px] leading-tight font-bold mb-4">
                  Quick Link
                </h4>
                <ul>
                  {[
                    ["#home", "Home"],
                    ["#about", "About"],
                    ["#features", "Features"],
                    ["#contact", "Contact"],
                  ].map(([link, text], i) => (
                    <li
                      key={i}
                      className="text-[15px] text-white leading-tight font-medium mb-3"
                    >
                      <a href={link}>{text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:ms-auto">
                <h4 className="text-secondary text-[15px] leading-tight font-bold mb-4">
                  Social Media
                </h4>
                <ul>
                  {[
                    ["#", "Facebook"],
                    ["#", "Instagram"],
                    ["#", "LinkedIn"],
                    ["#", "Twitter"],
                  ].map(([link, text], i) => (
                    <li
                      key={i}
                      className="text-[15px] text-white leading-tight font-medium mb-3"
                    >
                      <a href={link}>{text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:ms-auto">
              <h4 className="text-secondary text-[15px] leading-tight font-bold mb-4">
                Contact Us
              </h4>
              <ul>
                {[
                  ["tel:+12345546 656", "Phone: +1 2345 546 656"],
                  ["mailto:routerover@gmail.com", "Emai: routerover@gmail.com"],
                  [
                    "https://www.google.com/maps",
                    "Address: 2486 Hidden Valley Road",
                  ],
                ].map(([link, text], i) => (
                  <li
                    key={i}
                    className="text-[15px] text-white leading-tight font-medium mb-3"
                  >
                    <a href={link}>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span className="block h-px bg-[#B6BFC4] bg-opacity-40 w-full"></span>
          <div className="flex flex-wrap items-center md:justify-between justify-center gap-y-5 py-5">
            <ul className="flex items-center justify-between gap-x-5">
              <li className="block text-base font-medium text-white leading-tight">
                <Link href="/">Terms of Service</Link>
              </li>
              <li className="block text-base font-medium text-white leading-tight">
                <span className="block">|</span>
              </li>
              <li className="block text-base font-medium text-white leading-tight">
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
            <span className="block text-white/50 text-base font-medium leading-tight">© All Rights Reserved 2024 -  Route Rover</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
