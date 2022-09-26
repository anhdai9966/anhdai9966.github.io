// 2. action
import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    PLUS_PRODUCT,
    MINUS_PRODUCT,
} from './constants';

// 1. initial state
export const initialState = [
    {
        id: 1,
        name: '1 Lorem ipsum dolor sit amet',
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        rating: 4.5,
        price: 400000,
        count: 1,
        size: 'L',
    },
    {
        id: 2,
        name: '2 Lorem ipsum dolor sit amet',
        image: 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: 500000,
        count: 3,
        size: 'M',
    },
    {
        id: 3,
        name: '3 Lorem ipsum dolor sit amet',
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: 550000,
        count: 2,
        size: 'XL',
    },
];

// 3 reducer
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return state;
        case PLUS_PRODUCT: {
            const id = action.payload;
            const update = state.map((product) => {
                if (product.id === id) product.count++;
                return product;
            });
            return update;
        }
        case MINUS_PRODUCT: {
            const id = action.payload;
            const update = state.map((product) => {
                if (product.id === id) product.count--;
                if (product.count < 1) product.count = 1;
                return product;
            });
            return update;
        }

        case DELETE_PRODUCT: {
            const id = action.payload;
            const update = state.filter((product) => product.id !== id);
            
            return update;
        }

        default:
            throw Error('Invalid action');
    }
};

export default reducer;
