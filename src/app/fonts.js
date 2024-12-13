// Next
import { Poppins, Manrope } from "next/font/google"

const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  fallback: ["system-ui", "arial"],
})

const fontMono = Manrope({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  fallback: ["system-ui", "arial"],
})

export { fontSans, fontMono }
