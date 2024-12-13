"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Logo from "media/logo.svg"
import Link from "next/link"
const Header = () => {
  const [openIndex, setOpenIndex] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isIdle, setIsIdle] = useState(false)
  const timeoutIdRef = useRef(null)

  const handleScroll = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    if (window.scrollY > 50) {
      setIsSticky(true)
      setIsIdle(false)

      timeoutIdRef.current = setTimeout(() => {
        setIsIdle(true)
      }, 3000)
    } else {
      setIsSticky(false)
      setIsIdle(false)
    }
  }
  useEffect(() => {
    if (openIndex) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [openIndex])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])
  return (
    <header className={`z-50 bg-primary/85 fixed w-full h-max transition-all duration-300 ease-in-out ${isSticky ? 'fixed bg-primary/85 top-0 left-0 right-0 backdrop-blur-sm' : ''} ${isIdle ? '!-top-full' : ' '}`}>
      <div className="bg-transparent md:bg-opacity-40 py-5 relative z-10">
        <div className="container">
          <div className="grid grid-cols-12 items-center md:text-white text-black">
            <div className="xl:col-span-5 lg:col-span-4 col-span-3">
              <a href="/">
                <Image src={Logo} priority alt="logo" />
              </a>
            </div>
            <div className="xl:col-span-7 lg:col-span-8 col-span-9">
              <button
                className="md:hidden block w-10 ms-auto"
                onClick={() => setOpenIndex((prev) => !prev)}
              >
                <span
                  className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-white ${
                    !openIndex ? "rotate-0" : "-rotate-45 -mb-2 h-2"
                  }`}
                ></span>
                <span
                  className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-white my-2 ${
                    !openIndex ? "block" : "hidden"
                  }`}
                ></span>
                <span
                  className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-white ${
                    !openIndex ? "rotate-0" : "rotate-45 h-2"
                  }`}
                ></span>
              </button>
              <div
                className={`md:flex md:relative absolute ${
                  !openIndex ? "-translate-x-full" : "-translate-x-0"
                } md:translate-x-0 md:bg-transparent bg-secondary left-0 md:w-full sm:w-[75%] w-[85%] md:h-auto md:p-0 py-10 px-10 h-screen top-0 lg:gap-x-10 md:gap-x-5 md:items-center md:justify-end transition-all ease-in-out duration-500`}
              >
                {[
                  ["#", "Home"],
                  ["#about-us", "About"],
                  ["#features", "Features"],
                  ["#contact", "Contact us"],
                ].map(([link, text], i) => (
                  <Link
                    key={i}
                    href={link}
                    onClick={() => setOpenIndex(false)}
                    className="relative w-max block md:mb-0 mb-5 hover:md:text-secondary transition-all ease-in-out duration-500"
                  >
                    <span className="text-[18px] leading-tight font-semibold">
                      {text}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
