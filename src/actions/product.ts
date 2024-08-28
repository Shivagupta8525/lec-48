 import Product from "../models/product";
import { ActionCreator } from "./index";
 
 export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
 
 export const LoadProductsAction : ActionCreator =()=>({
   type:LOAD_PRODUCTS,
   payload:undefined,
 });


 
 export const PRODUCTS_LOADED = "PRODUCTS_LOADED";
 
 export const ProductsloadedAction : ActionCreator<Product[]> =(
    products:Product[]
 )=>({
   type:PRODUCTS_LOADED,
   payload:products,
 });