
import axios from 'axios';

const BASE_URL = 'https://reqres.in/api/users';

const postPizza = (pizza) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: pizza
    })
  })
}

export default postPizza;