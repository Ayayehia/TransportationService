import HeroSection from "./components/HeroSection";
import MobileNav from "./components/MobileNav";
import NavBar from "./components/NavBar";
import PictureTextBlock from "./components/PictureTextBlock";
import Service from "./components/Service";
import PictureTextBlockTwo from "./components/PictureTextBlockTwo";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="hidden lg:block">
        <NavBar />
      </div>
      <div className="lg:hidden ">
        <MobileNav />
      </div>
      <PictureTextBlock />
      <Service />
      <PictureTextBlockTwo
        image="/WhiteCarBack.png"
        altText="White Toyota car"
        title="PROFESSIONAL CHAUFFEUR"
        paragraph=" Renting a chauffeur driven car can give your journey an ultimate
        upgrade, whether you’re traveling for business or pleasure."
      />
      <PictureTextBlockTwo
        image="/premium.png"
        altText="White Toyota car"
        title="PREMIUM COMFORT"
        paragraph="  There is no expectation left unfulfilled. With unmatched
        interior, prestige and extraordinary amenities our
        premium black cars are equipped with a variety of
        available options. FLORIDA PREMIUM LIMO has luxurious
        leather interiors. Additional features include a CD
        Sound System, Flat Screen TV & DVD and tinted
        windows for privacy.
        Get a quote
        Book now"
        reverseimage
      />
    </main>
  );
}
