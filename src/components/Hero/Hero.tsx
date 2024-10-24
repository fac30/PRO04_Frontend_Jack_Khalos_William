import Logo from "../Logo/Logo";
import Button from "../Button/Button";

function HeroSection() {
  return (
    <div className="h-screen mt-16 bg-zubiGreen flex flexcol justify-center content-center font-helonik text-white">
      <div className="hero-content flex flex-col items-center mt-44">
        <Logo className="w-28" />
        <h1 className="text-8xl text-center">zubi</h1>
        <p className="text-center mt-4 mb-16 text-2xl">bridge your skills</p>
        <Button
          onClick={() => console.log("hero button clicked")}
          label="get started"
          buttonType=""
        />
      </div>
    </div>
  );
}

export default HeroSection;
