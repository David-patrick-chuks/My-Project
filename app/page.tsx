import Image from "next/image";
import { GridBackgroundDemo } from "./components/GridBackground";
import DarkModeToggle from "./components/theme/ThemeBtn";
import { FloatingNavDemo } from "./components/Navbar";
import { ImagesSliderDemo } from "./components/HeroBackgroud";
import MovingWorks from "./components/BorderDesign";
import { InfiniteMovingCardsDemo } from "./components/testimonialcard";
import { MultiStepLoaderDemo } from "./components/MultiStepLoader";

export default function Home() {
  return (
    <div>
      {/* <ImagesSliderDemo /> */}
      <GridBackgroundDemo />
      {/* <GridBackgroundDemo /> */}
      <MovingWorks />
      <InfiniteMovingCardsDemo />
      {/* <MultiStepLoaderDemo /> */}
    </div>
  );
}
