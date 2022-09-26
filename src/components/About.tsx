import {FC} from 'react';

interface IAboutProps {
}

const About: FC<IAboutProps> = (props) => {
  return (
    <div className="text-black bg-orange-600 h-screen">
      About me
    </div>
  );
};

export default About;
