//callback hell (one way)
items = {
    mobile:20000,
    cover:300,
}
const payment = (items, showdetails) => {
    const total = Object.values(items).reduce((acc, price) => acc + price, 0);
    showdetails(total);
};
function showdetails(total) {
    console.log("Total payment: $" + total);
}
function checkout(items) {
    payment(items, showdetails);
}
checkout(items); 

//callback hell (other way)

// Step 1: Create Order
function CreateOrder(items, callback) {
    setTimeout(() => {
        console.log("CreateOrder for: " + Object.keys(items));
        callback(items);
    }, 1000);
}

// Step 2: Proceed to Payment
function ProceedToPayment(items, callback) {
    setTimeout(() => {
        console.log("payment");
        var paymentTotal = (items) => Object.values(items).reduce((acc, price) => acc + price, 0);
        callback(paymentTotal(items)); // pass the computed number
    }, 2000);
}

// Step 3: Show Details
function details(total, items) {
    console.log("total amount paid for " + Object.keys(items) + " is " + total);
}

// Callback hell in action
CreateOrder(items, (orderItems) => {
    ProceedToPayment(orderItems, (total) => {
        details(total, orderItems);
    });
});




//to overcome this callback hell we should use promises
// Items

// Step 1: Create Order
function CreateOrder1(items) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("CreateOrder for: " + Object.keys(items));
            resolve(items);
        }, 1000);
    });
}

// Step 2: Proceed to Payment
function ProceedToPayment1(items) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Proceeding to payment...");
            const totalPayment = Object.values(items).reduce((acc, price) => acc + price, 0);
            resolve(totalPayment);
        }, 2000);
    });
}

// Step 3: Show Details
function details1(total, items) {
    return new Promise((resolve) => {
        console.log("Total amount paid for " + Object.keys(items) + " is $" + total);
        resolve(total);
    });
}

// Step 4: Update Wallet Balance
function updateWalletBalance1(balance) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Wallet balance updated. Remaining balance: $" + (1000 - balance));
            resolve();
        }, 1000);
    });
}

// Using Promises (linear flow)
CreateOrder1(items)
    .then(orderItems => ProceedToPayment1(orderItems))
    .then(total => details1(total, items))
    .then(balance => updateWalletBalance1(balance))
    .catch(error => console.error("Error:", error));





//Promises
var promise = new Promise(function(resolve, reject) {
    console.log("abhijit");
    setTimeout(function() {
        let success = true; // simulate failure
        if (success) {
            resolve("done");
        } else {
            reject("something went wrong");
        }
    }, 1000);
});

promise.then(function(result) {
    console.log("Success:", result);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });


  


