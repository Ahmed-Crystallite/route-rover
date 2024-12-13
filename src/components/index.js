import dynamic from "next/dynamic"

const Header = dynamic(() => import("./Header"))
const Hero = dynamic(() => import("./Hero"))
import CTA from "./CTA"
const Features = dynamic(() => import("./Features"))
const About = dynamic(() => import("./About"))
const OurApp = dynamic(() => import("./OurApp"))
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs"
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./Slider/SliderArrows"
const AutoPlaySlider = dynamic(() => import("./Slider/Autoplay"))
const ProgressBar = dynamic(() => import("./Slider/ProgressBar"))
const Reviews = dynamic(() => import("./Reviews"))
const BestWay = dynamic(() => import("./BestWay"))
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "./ui/Form"

import { Input } from "./ui/Input"

import { Textarea } from "./ui/Textarea"

const Contact = dynamic(() => import("./Contact"))
const FrontEndForm = dynamic(() => import("./FrontEndForm"))
const Footer = dynamic(() => import("./Footer"))
export {
  Header,
  Hero,
  CTA,
  Features,
  About,
  OurApp,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  NextButton,
  PrevButton,
  usePrevNextButtons,
  AutoPlaySlider,
  Reviews,
  ProgressBar,
  BestWay,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
  Input,
  Textarea,
  Contact,
  FrontEndForm,
  Footer
}
