import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from '../reducer/filterReducer'

const FilterContext = createContext();

const initialState = {
        filter_products: [],
        all_products: [],
        product_View:true,
        // sorting_value:"lowest",
        sorting_value:null,
        filters:{
                text:"",
                category:"All",
                company:"All",
                colors :"All",
                maxPrice:0,
                price:0,
                minPrice:0,
                
        }
}

const FilterContextProvider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer,initialState);
        const { products } = useProductContext();


        // to set grid view
        const setGridView=()=>{
                return dispatch({type:"SET_GRID_VIEW"});
        };

        // to set list view
        const setListView=()=>{
                return dispatch({type:"SET_List_VIEW"});
        };

        // sorting function  
        const sorting =(event)=>{
                let userValue = event.target.value;
                dispatch({type:"GET_SORT_VALUE",payload:userValue});
        };

        // update the filter value felterSection
        const updateFilterValue=(event)=>{
        //      const {name,value} = event.target;
               let name = event.target.name;  
               let value = event.target.value;  

               return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})
        }


        // Clear filters
        const clearFilter=()=>{
                dispatch({type:"CLEAR_FILTERS"})
        }

        //  short the product
        useEffect(()=>{
                dispatch({type:"FILTER_PRODUCTS"});
                dispatch({type:"SORTING_PRODUCTS"});
        },[products,state.sorting_value, state.filters])


        useEffect(() => {
                dispatch({ type: "LOAD_FILTER_PRODUCTS", payload:products })
        }, [products])


        return <FilterContext.Provider value={{ ...state ,setGridView,setListView,sorting,updateFilterValue, clearFilter}}>
                {children}
        </FilterContext.Provider>
}

const useFilterContext = () => {
        return useContext(FilterContext)
}

export default FilterContextProvider;
export { useFilterContext };