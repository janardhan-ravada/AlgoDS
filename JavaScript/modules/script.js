/** Before ES6, modules were used to implement using Module pattern.
 * 
 * const shoppingCart = (function(){
 * 	let cart = [];
 * 	 
 *  let addToCart = function( item, quantity){
 *  	cart.push({item : quantitty});
 *  }
 * 
 * 	return {
 * 	addToCart
 * }
 * })(); 
 * 
 * 
 * shoppingCart.addToCart();//cart variable will not be accessed outside which is private.
 * */




/** Exports can be named exports, default exports. 
 * for anonymous functions, export default will be prepended.
 * 
 * For named exports export keyword will be added before the function declaration.
 * 
 * while importing named exports will be imported with {} braces, default exports will be imported with our curly braces and with any name.
 * 
 * For named imports if we want to specify any specific name we can do it with help of 'as speciedName'
 * 
 * Unlike Java, import statements can be any where in file, they will be hoisted.
 * */

import   {addToCart, printCart} from './shoppingCart.js';

addToCart('apples', 4);

addToCart('Banana', 5);

printCart();

import  cartLength from './shoppingCart.js';
console.log("cart length: "+cartLength());


/** ?? Common JS module?? */



