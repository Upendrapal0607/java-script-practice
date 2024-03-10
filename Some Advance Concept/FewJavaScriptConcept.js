function foo(x) {
    if (typeof x === 'function') {
        return function() {
            return -x();
        };
    } else {
        return "can't be converted";
    }
}
console.log(foo(foo(function() { return 10; }))()); 
console.log(foo(foo(function() { return -5; }))());

// return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

// const convertToSlug = text => text.toLowerCase().replace(/[aeiou]/g,"b");
//   console.log(convertToSlug("aeiou"));


// const CheckChar = str=> str.matched(/[A-Za-z0-9]/);
// const CheckSpecial = str=> /[!@#$%^&*()]/.test(str);
// const isStrongPassword = password => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password);

// Test the function
// console.log(isStrongPassword("Weak")); // false
// console.log(isStrongPassword("Weak12")); // false
// console.log(isStrongPassword("Strong123!")); // true

    
