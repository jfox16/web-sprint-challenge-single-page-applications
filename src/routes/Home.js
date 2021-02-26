
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

import Button from 'components/Button';

import pizzaPic from 'img/shourav-sheikh-a66sGfOnnqQ-unsplash.jpg';

const Home = () => {

  const history = useHistory();

  return (
    <div className='Home'>
      <div className='splash-image fullscreen' style={{ backgroundImage: `url(${pizzaPic})` }} />
      <div className="header">
        <h1>Lambda Eats</h1>
      </div>
      <div className='splash-div fullscreen'>
        <Button onClick={() => history.push('/pizza')}>
          ORDER PIZZA
        </Button>
      </div>
    </div>
  );  
}

export default Home;