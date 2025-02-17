import { UiButton } from "../UiButton/Button";
import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero-section">
        <h1 className="hero__title">Next generation digital banking</h1>
        <p className="hero__description">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <UiButton />
      </section>
      <section className="hero__img__container">
        <img src="bg-intro-desktop.svg" alt="image" className="hero__image" />
        <img src="image-mockups.png" alt="mockups" className="hero__mockups" />
      </section>
    </div>
  );
};
