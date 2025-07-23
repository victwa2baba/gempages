import chim from "./assets/images/chim.webp";
import chicken from "./assets/images/chicken.webp";
import realfood from "./assets/images/realfood.svg";
import petbowl from "./assets/images/petbowl.svg";
import petfood from "./assets/images/petfood.svg";
import vet from "./assets/images/vet.svg";
import shield from "./assets/images/shield.svg";
import visa from "./assets/images/visa.png";
import googlepay from "./assets/images/googlepay.png";
import paypal from "./assets/images/paypal.png";
import mastercard from "./assets/images/mastercard.png";
import applepay from "./assets/images/applepay.png";

export function HeroSection() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-3">
        <h3 className="col-1 grid justify-center pb-10 text-center text-[30px] font-semibold md:col-2">
          What makes us different makes them stronger
        </h3>
        <div className="col-1 grid grid-cols-[80px_1fr] content-center md:col-1">
          <img
            src={realfood}
            alt="real food"
            className="foods"
            aria-labelledby="real food"
          />
          <div className="grid grid-cols-1 content-baseline justify-items-start">
            <h6 className="text-[19px] font-semibold">Real Food</h6>
            <p className="details-text">
              Wholesome recipes for dogs with real meat and veggies.
            </p>
          </div>
        </div>
        <div className="col-1 row-span-2 row-end-12 grid md:col-2 md:row-end-4">
          <div className="relative grid">
            <img
              src={chicken}
              alt="chicken"
              className="chicken right rotate-180"
            />
            <img
              src={chim}
              alt="chinchin"
              className="chin left absolute rotate-180"
            />
            <div className="transla-x-[50] bg-primary absolute top-0 bottom-0 md:bottom-15 left-[50%] z-10 w-[2px] cursor-ew-resize"></div>
          </div>
        </div>
        <div className="col-1 grid grid-cols-[80px_1fr] content-center md:col-3">
          <img
            src={petfood}
            alt="real food"
            className="foods"
            aria-labelledby="real food"
          />
          <div className="grid grid-cols-1 content-baseline justify-items-start">
            <h6 className="text-[19px] font-semibold">Made Fresh</h6>
            <p className="details-text">
              We prioritize maintaining the integrity of whole foods and
              nutrition.
            </p>
          </div>
        </div>
        <div className="cols-1 grid grid-cols-[80px_1fr] content-center">
          <img
            src={petbowl}
            alt="real food"
            className="foods"
            aria-labelledby="real food"
          />
          <div className="grid grid-cols-1 content-baseline justify-items-start">
            <h6 className="text-[19px] font-semibold">Premium Ingredient</h6>
            <p className="details-text">
              Premium Ingredient Elevating pet care with unmatched safety and
              quality.
            </p>
          </div>
        </div>
        <div className="cols-1 grid grid-cols-[80px_1fr] content-center md:col-3">
          <img
            src={vet}
            alt="real food"
            className="foods"
            aria-labelledby="real food"
          />
          <div className="grid grid-cols-1 content-baseline justify-items-start">
            <h6 className="text-[19px] font-semibold">Vet Developed</h6>
            <p className="details-text">
              We raise the bar for dog nutrition, surpassing industry
              expectations.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-self-center">
        <h3 className="bg-primary rounded-[6px] cursor-pointer px-[40px] py-[12px] text-center text-white md:min-w-[462px]">
          Get your dog's healthy meal today!
        </h3>
        <div className="flex flex-col gap-y-5 py-[12px] lg:flex-row">
          <div className="flex flex-auto flex-row justify-center gap-2">
            <img src={shield} alt="shiled icon" />
            <p className="text-[13px]">30-day money back guarantee</p>
          </div>
          <div className="flex flex-row justify-center gap-2">
            <img src={paypal} alt="paypal" className="payment" />
            <img src={visa} alt="paypal" className="payment" />
            <img src={mastercard} alt="paypal" className="payment" />
            <img src={applepay} alt="paypal" className="payment" />
            <img src={googlepay} alt="paypal" className="payment" />
          </div>
        </div>
      </div>
    </section>
  );
}