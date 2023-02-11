import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from '../reducer/filterReducer'

const FilterContext = createContext();

const initialState = {
        filter_products: [],
        all_products: [],
        grid_view:false,
}

const FilterContextProvider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer,initialState);
        const { products } = useProductContext();

        // to set grid view
        const setGridView=()=>{
                return dispatch({type:"SET_GRID_VIEW"})
        }

        useEffect(() => {
                dispatch({ type: "LOAD_FILTER_PRODUCTS", payload:products })
        }, [products])

        return <FilterContext.Provider value={{ ...state ,setGridView}}>
                {children}
        </FilterContext.Provider>
}

const useFilterContext = () => {
        return useContext(FilterContext)
}

export default FilterContextProvider;
export { useFilterContext };