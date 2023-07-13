import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";
import HomeList from "./section/HomeList";
import OtherDesign from "./section/OtherDesign";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Slider />
      <HomeList />
      <OtherDesign />
      <Footer />
    </div>
  );
}
