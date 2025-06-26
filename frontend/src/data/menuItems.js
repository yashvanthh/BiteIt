// import all 30 images
import margherita from '../assets/images/margherita_pizza.jpg';
import paneer from '../assets/images/paneer_tikka.jpg';
import vegBiryani from '../assets/images/veg_biryani.jpg';
import masalaDosa from '../assets/images/masala_dosa.jpg';
import choleBhature from '../assets/images/chole_bhature.jpg';
import alooParatha from '../assets/images/aloo_paratha.jpg';
import palakPaneer from '../assets/images/palak_paneer.jpg';
import vegPulao from '../assets/images/veg_pulao.jpg';
import rajmaChawal from '../assets/images/rajma_chawal.jpg';
import vegManchurian from '../assets/images/vegetable_manchurian.jpg';

import chickenBurger from '../assets/images/chicken_burger.jpg';
import fishCurry from '../assets/images/fish_curry.jpg';
import butterChicken from '../assets/images/butter_chicken.jpg';
import muttonRoganJosh from '../assets/images/mutton_rogan_josh.jpg';
import prawnFry from '../assets/images/prawn_fry.jpg';
import eggCurry from '../assets/images/egg_curry.jpg';
import chickenBiryani from '../assets/images/chicken_biryani.jpg';
import tandooriChicken from '../assets/images/tandoori_chicken.jpg';
import fishFry from '../assets/images/fish_fry.jpg';
import muttonKeema from '../assets/images/mutton_keema.jpg';

import frenchFries from '../assets/images/french_fries.jpg';
import springRolls from '../assets/images/spring_rolls.jpg';
import chickenNuggets from '../assets/images/chicken_nuggets.jpg';
import samosa from '../assets/images/samosa.jpg';
import onionRings from '../assets/images/onion_rings.jpg';

import masalaChai from '../assets/images/masala_chai.jpg';
import coldCoffee from '../assets/images/cold_coffee.jpg';
import mangoLassi from '../assets/images/mango_lassi.jpg';
import lemonSoda from '../assets/images/lemon_soda.jpg';
import softDrink from '../assets/images/soft_drink.jpg';

const menuItems = [
  { id: 1, name: 'Margherita Pizza', description: 'Classic cheese & tomato pizza.', price: 299, image: margherita, category: 'Veg' },
  { id: 2, name: 'Paneer Tikka', description: 'Spicy grilled paneer cubes.', price: 199, image: paneer, category: 'Veg' },
  { id: 3, name: 'Veg Biryani', description: 'Aromatic rice with vegetables and spices.', price: 229, image: vegBiryani, category: 'Veg' },
  { id: 4, name: 'Masala Dosa', description: 'Crispy dosa with spicy potato filling.', price: 149, image: masalaDosa, category: 'Veg' },
  { id: 5, name: 'Chole Bhature', description: 'Spicy chickpeas with fried bread.', price: 189, image: choleBhature, category: 'Veg' },
  { id: 6, name: 'Aloo Paratha', description: 'Stuffed potato paratha served with curd.', price: 129, image: alooParatha, category: 'Veg' },
  { id: 7, name: 'Palak Paneer', description: 'Spinach and cottage cheese curry.', price: 249, image: palakPaneer, category: 'Veg' },
  { id: 8, name: 'Veg Pulao', description: 'Basmati rice cooked with veggies & spices.', price: 189, image: vegPulao, category: 'Veg' },
  { id: 9, name: 'Rajma Chawal', description: 'Kidney beans curry with rice.', price: 179, image: rajmaChawal, category: 'Veg' },
  { id: 10, name: 'Vegetable Manchurian', description: 'Fried veggie balls in Indo-Chinese sauce.', price: 199, image: vegManchurian, category: 'Veg' },

  { id: 11, name: 'Chicken Burger', description: 'Grilled chicken patty burger.', price: 249, image: chickenBurger, category: 'Non-Veg' },
  { id: 12, name: 'Fish Curry', description: 'Traditional spicy fish curry.', price: 349, image: fishCurry, category: 'Non-Veg' },
  { id: 13, name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry.', price: 379, image: butterChicken, category: 'Non-Veg' },
  { id: 14, name: 'Mutton Rogan Josh', description: 'Rich, aromatic mutton curry.', price: 399, image: muttonRoganJosh, category: 'Non-Veg' },
  { id: 15, name: 'Prawn Fry', description: 'Crispy fried prawns with seasoning.', price: 289, image: prawnFry, category: 'Non-Veg' },
  { id: 16, name: 'Egg Curry', description: 'Boiled eggs in spicy masala curry.', price: 229, image: eggCurry, category: 'Non-Veg' },
  { id: 17, name: 'Chicken Biryani', description: 'Layered rice & chicken cooked with spices.', price: 299, image: chickenBiryani, category: 'Non-Veg' },
  { id: 18, name: 'Tandoori Chicken', description: 'Charred marinated chicken from tandoor.', price: 299, image: tandooriChicken, category: 'Non-Veg' },
  { id: 19, name: 'Fish Fry', description: 'Spicy and crispy fried fish fillet.', price: 249, image: fishFry, category: 'Non-Veg' },
  { id: 20, name: 'Mutton Keema', description: 'Minced mutton cooked in spices.', price: 349, image: muttonKeema, category: 'Non-Veg' },

  { id: 21, name: 'French Fries', description: 'Crispy golden potato fries.', price: 99, image: frenchFries, category: 'Veg' },
  { id: 22, name: 'Spring Rolls', description: 'Stuffed & fried Indo-Chinese rolls.', price: 119, image: springRolls, category: 'Veg' },
  { id: 23, name: 'Chicken Nuggets', description: 'Crispy chicken pieces.', price: 139, image: chickenNuggets, category: 'Non-Veg' },
  { id: 24, name: 'Samosa', description: 'Fried pastry filled with spicy potato mix.', price: 59, image: samosa, category: 'Veg' },
  { id: 25, name: 'Onion Rings', description: 'Deep-fried crispy onion rings.', price: 99, image: onionRings, category: 'Veg' },

  { id: 26, name: 'Masala Chai', description: 'Indian spiced tea.', price: 39, image: masalaChai, category: 'Veg' },
  { id: 27, name: 'Cold Coffee', description: 'Iced coffee with cream.', price: 89, image: coldCoffee, category: 'Veg' },
  { id: 28, name: 'Mango Lassi', description: 'Sweet mango yogurt drink.', price: 79, image: mangoLassi, category: 'Veg' },
  { id: 29, name: 'Lemon Soda', description: 'Refreshing lemon soda.', price: 49, image: lemonSoda, category: 'Veg' },
  { id: 30, name: 'Soft Drink', description: 'Choice of Coke, Sprite or Fanta.', price: 59, image: softDrink, category: 'Veg' },
];

export default menuItems;
