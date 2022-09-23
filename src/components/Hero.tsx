import {FC} from 'react';

interface IHeroProps {
}

const Hero: FC<IHeroProps> = (props) => {
let style: { backgroundImage: string } = {
  backgroundImage: "url(/assets/hero-bg.jpg)",
};

  return (
    <div
      className="w-full bg-center bg-cover h-3/4"
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full ">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
            Build Your new <span className="text-blue-400 underline">Saas</span>
          </h1>
          <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Start project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
