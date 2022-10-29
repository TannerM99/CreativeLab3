import dog from './images/dog.png';
import cat from './images/cat.png';
import other from './images/other.png';

const Home = () => {
  return (
    <>
        <h1>Home</h1>
        <div class='grid-container'>
          <div class='grid'>
            <div class='grid-item first-item'>
              <img src={dog}/>
              <div class='page'>Dogs</div>
            </div>
            <div class='grid-item'>
              <img src={cat}/>
              <div class='page'>Cats</div>
            </div>
            <div class='grid-item'>
              <img src={other}/>
              <div class='page'>Other</div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;