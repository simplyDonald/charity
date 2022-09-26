
import {FC} from 'react';
import Hero from './Hero';
import Section1 from "./Section1";
import Section2 from "./Section2";
import SectionA from "./SectionA";


interface IHomeProps {
}

const Home: FC<IHomeProps> = (props) => {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <SectionA />

      <div className=" h-52 bg-[#d8d8d8] relative text-black">
        hello world
        <div className="custom-shape-divider-bottom-1663900606">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;
