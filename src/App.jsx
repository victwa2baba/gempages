import { useState } from "react";
import "./App.css";
import { HeroSection } from "./hero";
import dog1 from "./assets/images/dog1.webp";
import launch from "./assets/images/lunch-time.gif";
import grains from "./assets/images/grains.webp";



function Section1() {
  return (
    <div className="bg-light-gray dark:bg-neutral-900 min-w-full justify-items-center">
      <div className="container my-5 mt-20 grid grid-cols-1 justify-center gap-20 px-3 py-5 lg:grid-cols-2 lg:gap-[30px] lg:py-16">
        <div className="grid py-5">
          <div className="grid">
            <h3 className="text-[20px] font-semibold lg:text-[30px]">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h3>
            <p>
              Invest in your dog's future with our scientifically formulated
              superfood-powered supplements. Give them the nutrition they
              deserve and watch them thrive with vitality, energy, and the joy
              of a longer, healthier life.
            </p>
          </div>
          <div className="grid py-10">
            <h3 className="font-semi-bold lg:text-[19px]">Key points</h3>
            <div className="grid grid-cols-[100px_1fr]">
              <h3 className="font-semi-bold text-primary text-[20px] lg:text-[30px]">
                97%
              </h3>
              <p>
                Dogs choose our dog food over leading brands because of its real
                functional ingredients and delicious flavor.
              </p>
            </div>
            <div className="grid grid-cols-[100px_1fr]">
              <h3 className="font-semi-bold text-primary text-[20px] lg:text-[30px]">
                84%
              </h3>
              <p>
                Our dog food provides superior nutrition and a patented
                probiotic for optimal nutrient absorption.
              </p>
            </div>
            <div className="grid grid-cols-[100px_1fr]">
              <h3 className="font-semi-bold text-primary text-[20px] lg:text-[30px]">
                92%
              </h3>
              <p>
                Our dog food's high protein and fat digestibility contribute to
                ideal stool quality.
              </p>
            </div>
          </div>
          <h3 className="bg-primary p-[12px] text-center text-white">
            Give your furry friend the gift of wholesome nutrition
          </h3>
        </div>
        <img src={dog1} alt="" className="dog1" />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-30">
        <div className="grid">
          <img
            src={launch}
            alt=""
            className="min-w-full rounded-[10px] lg:min-w-[570px]"
          />
        </div>
        <div className="grid gap-[16px] self-center">
          <h3 className="text-[20px] font-semibold lg:text-[30px]">
            Improve overall gastrointestinal health for better nutrient
            absorption
          </h3>
          <p>
            Through rigorous scientific studies and consultations with
            veterinarians, we have created a breakthrough formula exclusively
            tailored to combat the health challenges prevalent in dogs. A
            staggering 91% of our customers have reported significant
            improvements in their dogs' health after incorporating our product
            into their diet.
          </p>
        </div>
      </div>
    </div>
  );
}
function Section3() {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="grid gap-[16px] self-center">
          <h3 className="text-[20px] font-semibold lg:text-[30px]">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive
            health
          </h3>
          <p>
            Our dog food formula contains carefully selected prebiotics that
            work in harmony with the gut microbiota, providing the necessary
            nutrients for the growth and maintenance of beneficial bacteria,
            ultimately supporting digestive health.
          </p>
        </div>
        <div className="grid">
          <img
            src={grains}
            alt=""
            className="rounded-[10px] lg:min-w-[570px]"
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="d-grid justify-items-center">
        <HeroSection />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
}

export default App;
