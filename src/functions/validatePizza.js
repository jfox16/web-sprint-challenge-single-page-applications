
import * as yup from 'yup';

const pizzaSchema = yup.object().shape({
  name: yup.string()
  .required('No name provided.')
  .min(2, 'Name must be at least 2 character long.'),
  toppings: yup.array()
  .required('Must choose at least 4 toppings.')
  .min(4, 'Must choose at least 4 toppings.'),
});

const validatePizza = (pizza) => {
  return pizzaSchema.validate(pizza);
}

export default validatePizza;