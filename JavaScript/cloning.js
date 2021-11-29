let user  = {
	name : "Janardhan",
	surname : "ravada",
	address: {
		village : "peddakollivalasa",
		district : "Srikakulam",
		zipCode : "532459",
		phone:{
			"mobile" : "9703664515"
		}
	}

};


let deepClone = function(source){
	let dest ={};
	for(let key in source){
		if(!(typeof source[key]==="object")){
			dest[key] = source[key];
		}else{
			dest[key] = deepClone({...source[key]});
		}
	}
	return dest;
}

let userClone = deepClone(user);

userClone.name ="Tannamy";
console.log(userClone.name);

console.log(user.name);


userClone.address.zipCode ="532458";

console.log(userClone.address.zipCode);
console.log(user.address.zipCode);

console.log(user.address.phone.mobile);
console.log(userClone.address.phone.mobile);
userClone.address.phone.mobile ="7306037855";

console.log(user.address.phone.mobile);
console.log(userClone.address.phone.mobile);







function User(name) {
  if (!new.target) { // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name); // John
