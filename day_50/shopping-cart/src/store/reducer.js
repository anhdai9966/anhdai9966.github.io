import { ADD_COUNT, DELETE_PRODUCT, SUBTRACT_COUNT } from './constants';
import { data } from './data';

const initState = [...data];

const reducer = (state, action) => {
    const { id } = action.payload;

    switch (action.type) {
        case ADD_COUNT: {
            const newState = state.map((product) => {
                if (product.id === id) {
                    return { ...product, count: product.count + 1 };
                }
                return product;
            });

            return newState;
        }

        case SUBTRACT_COUNT: {
            const newState = state.map((product) => {
                if (product.id === id) {
                    return { ...product, count: product.count - 1 };
                }
                return product;
            });

            return newState;
        }

        case DELETE_PRODUCT: {
            const newState = state.filter((product) => product.id !== id);

            return newState;
        }
            

        default:
            return state;
    }
};

export { initState };
export default reducer;
