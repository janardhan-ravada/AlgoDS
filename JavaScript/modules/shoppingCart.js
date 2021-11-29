const shippingCart = 10;

const cart = [];


//Named export
 export const addToCart = (product, quantity) => {
	console.log(`Adding product ${product} to cart`);
  cart.push({product:quantity});
};

 const printCart = () => {
 	console.log("Printing cart");
	cart.forEach(item => console.log(item.product));
}
//Default export 
export default () => {
	return cart.length;
}


export {printCart};