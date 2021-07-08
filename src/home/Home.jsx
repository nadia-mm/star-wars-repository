import { HOME_IMAGE_URL } from '../Constant';
import './home.scss';

export const Home = () => {
  return (
    <div className="content__home">
      <h1>Home</h1>
      <div className="content__text_img">
        <p>
          Hello, <br />
          Please search infomation about the Star Wars charaters, planets or
          starships
        </p>
        <img src={HOME_IMAGE_URL} alt="I__am_your_father_picture"/>
      </div>
    </div>
  );
};
