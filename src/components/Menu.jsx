import React from 'react';
import MenuSection from './MenuSection';
import { Grid } from '@material-ui/core';
import MenuHeader from './MenuHeader';
import MenuFooter from './MenuFooter';

const Menu = () => {
  const coffeeBevarages = [
    { id: 1, item: 'Regular Coffee', price: '4.00' },
    { id: 2, item: 'Americano', price: '4.00' },
    { id: 3, item: 'Cafe Latte', price: '5.50' },
    { id: 4, item: 'Caramel Latte', price: '6.00' },
    { id: 5, item: 'Cappuccino', price: '5.00' },
    { id: 6, item: 'Vanilla Cappuccino', price: '5.75' },
    { id: 7, item: 'Espresso', price: '2.75' },
    { id: 8, item: 'Double Espresso', price: '4.00' },
    { id: 9, item: 'Iced Mojito Latte', price: '6.00' },
    { id: 10, item: 'Mocaccino', price: '7.00' },
    { id: 11, item: 'Chocolate Fudge Frappe', price: '5.50' },
    { id: 12, item: 'Iced Coffee', price: '4.00' },
    { id: 13, item: 'Coke Float', price: '5.00' },
    { id: 14, item: 'Hot Chocolate', price: '4.50' },
    { id: 15, item: 'Hot Macchiato', price: '5.00' },
    { id: 16, item: 'Coffee Moka', price: '4.00' },
  ];

  const juicesFrappes = [
    { id: 1, item: 'Orange', price: '2.50' },
    { id: 2, item: 'Papaya', price: '3.50' },
    { id: 3, item: 'Water Melon', price: '3.00' },
    { id: 4, item: 'Pineapple', price: '3.50' },
    { id: 5, item: 'Orange & Carrot Juice', price: '4.50' },
    { id: 6, item: 'Lime & Mint Frappe', price: '3.75' },
    { id: 7, item: 'Orange Frappe', price: '4.50' },
  ];

  const milkshakes = [
    { id: 1, item: 'Vanilla Milkshake', price: '3.75' },
    { id: 2, item: 'Chocolate Milkshake', price: '4.00' },
    { id: 3, item: 'Coffee Milkshake', price: '4.50' },
    { id: 4, item: 'Strawberry Milkshake', price: '4.00' },
    { id: 5, item: 'Mint Milkshake', price: '4.50' },
  ];
  const breakfast = [
    { id: 1, item: 'English Breakfast', price: '6.50' },
    { id: 2, item: 'Mushroom Omelette', price: '4.50' },
    { id: 3, item: 'Ham & Cheese Muffins', price: '5.00' },
  ];
  const salads = [
    { id: 1, item: 'Bacon Bistro Salad', price: '6.00' },
    { id: 2, item: 'Chicken Caesar Salad', price: '6.50' },
    { id: 3, item: 'Greek Salad', price: '5.00' },
  ];
  const sandwiches = [
    { id: 1, item: 'Egg & Cheese Sandwich', price: '6.50' },
    { id: 2, item: 'Roast Chicken Sandwich', price: '4.50' },
    { id: 3, item: 'Grilled Beef Sandwich', price: '5.00' },
    { id: 4, item: 'Club Sandwich', price: '6.50' },
    { id: 5, item: 'Tandoori Sandwich', price: '4.50' },
    { id: 6, item: 'Beef Avocado Wrap', price: '5.00' },
    { id: 7, item: 'Vege Wrap', price: '6.50' },
    { id: 8, item: 'Bacon & Egg Waffle', price: '4.50' },
    { id: 9, item: 'Spicy Chicken Waffle', price: '5.00' },
    { id: 10, item: 'Chicken Waffle', price: '6.50' },
    { id: 11, item: 'Waffle with Ice Cream', price: '4.50' },
  ];

  const items = (array) => {
    return array.map((obj) => <li>{obj.item}</li>);
  };
  const prices = (array) => {
    return array.map((obj) => <li>{obj.price} £</li>);
  };

  return (
    <div
      style={{
        backgroundColor: 'black',
      }}
    >
      <MenuHeader />
      <Grid container direction='row'>
        <Grid item xs={12} xl={6} md={6}>
          <MenuSection
            title={'COFFEES/BEVERAGES'}
            items={items(coffeeBevarages)}
            prices={prices(coffeeBevarages)}
          />
        </Grid>
        <Grid item item xs={12} xl={6} md={6}>
          <MenuSection
            title={'JUICES/FRAPES'}
            items={items(juicesFrappes)}
            prices={prices(juicesFrappes)}
          />
          <MenuSection
            title={'MILKSHAKES'}
            items={items(milkshakes)}
            prices={prices(milkshakes)}
          />
        </Grid>
        <Grid item item xs={12} xl={6} md={6}>
          <MenuSection
            title={'BREAKFAST'}
            items={items(breakfast)}
            prices={prices(breakfast)}
          />
          <MenuSection
            title={'SALADS'}
            items={items(salads)}
            prices={prices(salads)}
          />
        </Grid>
        <Grid item item xs={12} xl={6} md={6}>
          <MenuSection
            title={'SANDWICHES/WAFFLES/WRAPS'}
            items={items(sandwiches)}
            prices={prices(sandwiches)}
          />
        </Grid>
      </Grid>
      <MenuFooter />
    </div>
  );
};

export default Menu;
