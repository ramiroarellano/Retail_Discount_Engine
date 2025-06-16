 //Step 1 Create a new JavaScript file called cc_4.js and link it to an index.html file.

 //Step 2: Create an array of objects representing 5 products.
 const products = [
  { name:"EchoBuds", category:"Electronics", inventory: 150, price: 129.99 },
  { name: "NatureGlow", category: "Beauty", inventory: 75, price: 24.99 },
  { name: "TechGuru", category: "Fitness Gadgets", inventory: 200, price: 499.99 },
  { name: "EcoBottle", category: "Home & Kitchen", inventory: 300, price: 19.99 },
  { name: "Smartband Pro", category: "Health & Wellness", inventory: 100, price: 199.99 }
 ];
 // Step 3: Write a for...of loop that cycles through each product.
 for (const product of products) {
 let discount = 0; // Initialize discount variable
     switch (products.category) {
        case "Electronics":
            discount = 0.2;
            break;
        case "Beauty":
            discount = 0.15;
            break;
        case "Fitness Gadgets":
            discount = 0.1;
            break;
        case "Home & Kitchen":
            discount = 0.1;
            break;
        case "Health & Wellness":
            discount = 0.12;
            break;
        // no default needed, discount stays 0
     }

    // Step 4: Create a variable called customerType and write an if...else if chain to apply the discount.
     const customerTypes = ["regular","student","senior"]; // can be "student", "senior", or "regular"
  let extradiscount= 0;
  if (customerTypes === "student") {
    extradiscount = 0.05; // 5%  extra discount for student customers
  }
  else if (customerTypes === "senior") {
    extradiscount = 0.07; // 7%  extra discount for senior customers
  }
    else if (customerTypes === "regular") {
        extradiscount = 0; // no extra discount for regular customers  
  }
 
     let totaldiscount = discount + extradiscount;
     if(totaldiscount > 0) {
        const discountedPrice = product.price * (1 - totaldiscount);
        console.log(`Product: ${product.name}, Category: ${product.category}, Original Price: $${product.price.toFixed(2)}, Discounted Price: $${discountedPrice.toFixed(2)}`);
     }
     else {
        console.log(`Product: ${product.name}, Category: ${product.category}, Price: $${product.price.toFixed(2)}, No Discount Available`);
     }
    }

 // Step 5: Use for or while loops to simulate a checkout process for 3 customers.
    
  customerTypes = ["regular", "student", "senior"];

 for (let i = 0; i < customerTypes.length; i++) {
    let customerType = customerTypes[i];
    let extradiscount = 0;
    if (customerType === "student") {
        extradiscount = 0.05;
    } else if (customerType === "senior") {
        extradiscount = 0.07;
    }

    let totalCost = 0;
    console.log(`\nCustomer #${i + 1} (${customerType.toUpperCase()}) checkout:`);

    for (const product of products) {
        let discount = 0;
        switch (product.category) {
            case "Electronics": discount = 0.2; break;
            case "Beauty": discount = 0.15; break;
            case "Fitness Gadgets": discount = 0.1; break;
            case "Home & Kitchen": discount = 0.1; break;
            case "Health & Wellness": discount = 0.12; break;
        }
        let totalDiscount = discount + extradiscount;
        let finalPrice = product.price * (1 - totalDiscount);
        totalCost += finalPrice;

        // Reduce inventory by 1 for each product bought
        if (product.inventory > 0) {
            product.inventory -= 1;
        }

        console.log(`  ${product.name}: $${finalPrice.toFixed(2)} (Inventory left: ${product.inventory})`);
    }
    console.log(`Total cost for Customer #${i + 1}: $${totalCost.toFixed(2)}`);
 }

 // Step 6: Use for...in to log each key/value pair for a single product after discounts are applied.
 let productForDiscount = products[1]; //NatureGLow
 let beautyDiscount = 0.15; // 15% discount for Beauty category
 let extraDiscountForStudent = 0.05; // 5% extra discount for student customers
 let totalDiscount = beautyDiscount + extraDiscountForStudent;
 let discountedPrice = productForDiscount.price * (1 - totalDiscount);
 let productWithDiscount = {...productForDiscount, discountedPrice: discountedPrice.toFixed(2) };

 console.log(`\nProduct with discount (for...in):`);
    for (const key in productWithDiscount) {    
    console.log(`${key}: ${productWithDiscount[key]}`);
 }

 // Step 7: Use Object.entries() and destructuring to log all product info after inventory is updated.
 console.log('\nUpdated product inventory (Object.entries):');
 let selectedProduct = products[1]; // NatureGlow
 for (const [key, value] of Object.entries(selectedProduct)) {
    console.log(`${key}: ${value}`);
 }
 