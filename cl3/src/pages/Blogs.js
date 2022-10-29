import dog1 from './images/dog1.png';
import dog2 from './images/dog2.png';
import dog3 from './images/dog3.png';
import dog4 from './images/dog4.png';
import dog5 from './images/dog5.png';
import dog6 from './images/dog6.png';
import dog7 from './images/dog7.png';
import dog8 from './images/dog8.png';
import dog9 from './images/dog9.png';
import dog10 from './images/dog10.png';

const Blogs = () => {
  return (
      <>
        <h1>Pictures of Dogs</h1>
        
        <div class="masonry">
          <div class="item">
            <img src={dog1}/>
          </div>
          <div class="item">
            <img src={dog2}/>
          </div>
          <div class="item">
            <img src={dog3}/>
          </div>
          <div class="item">
            <img src={dog4}/>
          </div>
          <div class="item">
            <img src={dog5}/>
          </div>
          <div class="item">
            <img src={dog6}/>
          </div>
          <div class="item">
            <img src={dog7}/>
          </div>
          <div class="item">
            <img src={dog8}/>
          </div>
          <div class="item">
            <img src={dog9}/>
          </div>
          <div class="item">
            <img src={dog10}/>
          </div>
        </div>
      </>
      );
};

export default Blogs;