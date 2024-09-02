import React from 'react';
import Cards from './Cards';

export default {
    title: 'FWK/Cards',
    component: Cards,
};

export const Default = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    return <Cards title="Example Card" items={items} />;
};
