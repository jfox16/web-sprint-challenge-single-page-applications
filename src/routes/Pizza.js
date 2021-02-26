
import React, { useEffect, useState } from 'react';
import './Pizza.css';

import Header from 'components/Header';

import validatePizza from 'functions/validatePizza';

const initialFormData = {
  name: '',
  size: 'md',
  toppings: [],
};

const sizeOptions = [
  { name: 'Small', key: 'sm' },
  { name: 'Medium', key: 'md' },
  { name: 'Large', key: 'lg' },
  { name: 'EXTRA BIG FOR BIG BOYS (too big)', key: 'xl' },
];

const toppingOptions = [
  { name: 'Pepperoni', key: 0 },
  { name: 'Sausage', key: 1 },
  { name: 'Mushrooms', key: 2 },
  { name: 'Olives', key: 3 },
  { name: 'Onion', key: 4 },
  { name: 'Bell Pepper', key: 5 },
  { name: 'Jalapeno', key: 6 },
  { name: 'Anchovies', key: 7 },
  { name: 'Pineapple', key: 8 },
  { name: 'Bacon', key: 9 },
  { name: 'Garlic', key: 10 },
];



const Pizza = () => {

  const [ formData, setFormData ] = useState(initialFormData);
  const [ errorMessage, setErrorMessage ] = useState(null);

  useEffect(() => {
    console.log(formData);
  }, [ formData ]);

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value })
  };

  const handleToppingChange = (e) => {
    const checked = e.target.checked;
    const topping = e.target.value;
    const newToppings = [...formData.toppings];
    if (checked) {
      if (!newToppings.includes(topping)) {
        newToppings.push(topping);
      }
    }
    else {
      const i = newToppings.indexOf(topping);
      if (i > -1) newToppings.splice(i, 1);
    }
    setFormData({ ...formData, toppings: newToppings })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePizza(formData)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.message);
      setErrorMessage(err.message);
    })
  }



  return (
    <div className='Pizza'>
      <Header />
      <div className='content'>
        <h1>Customize Your Pizza</h1>
        <form onSubmit={handleSubmit}>

          <label>
            <span>Name</span>
            <span><input type='text' name='name' value={formData.name || ''} onChange={handleInputChange} /></span>
          </label>
          
          <label>
            <span>Size</span>
            <select name="size" onChange={handleInputChange} value={formData.size || ''}>
              {sizeOptions.map(size => <option value={size.key} key={size.key}>{size.name}</option>)}
            </select>
          </label>
          
          <label>
            <span>Toppings (at least 4)</span>
          </label>

          {toppingOptions.map(topping => (
            <label className='checkbox-label' key={topping.name}>
              <input type='checkbox' name={'topping'} checked={formData.toppings.includes(topping.name)} value={topping.name} onChange={handleToppingChange} />
              {topping.name}
            </label>
          ))}

          <button id='submit-btn'>All done!</button>

          {errorMessage && <p className='error'>{errorMessage}</p>}

        </form>
      </div>
    </div>
  );  
}



export default Pizza;