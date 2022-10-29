import cat1 from './images/cat1.png';
import cat2 from './images/cat2.png';
import cat3 from './images/cat3.png';
import cat4 from './images/cat4.png';
import cat5 from './images/cat5.png';
import cat6 from './images/cat6.png';
import cat7 from './images/cat7.png';
import cat8 from './images/cat8.png';
import cat9 from './images/cat9.png';
import cat10 from './images/cat10.png';

const Contact = () => {
  return (
      <>
        <h1>Pictures of Dogs</h1>
        
        <div class="masonry">
          <div class="item">
            <img src={cat1}/>
          </div>
          <div class="item">
            <img src={cat2}/>
          </div>
          <div class="item">
            <img src={cat3}/>
          </div>
          <div class="item">
            <img src={cat4}/>
          </div>
          <div class="item">
            <img src={cat5}/>
          </div>
          <div class="item">
            <img src={cat6}/>
          </div>
          <div class="item">
            <img src={cat7}/>
          </div>
          <div class="item">
            <img src={cat8}/>
          </div>
          <div class="item">
            <img src={cat9}/>
          </div>
          <div class="item">
            <img src={cat10}/>
          </div>
        </div>
      </>
      );
};

export default Contact;