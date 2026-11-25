// CALLBACK FUNCTION
// Q1: Calculate Square
function square(num, callback) {
    callback(num * num);
}
square(5, function(result) {
    console.log("Square:", result);
});
// Q2: Find Maximum Number
function maximum(a, b, callback) {
    callback(a > b ? a : b);
}
maximum(20, 15, function(result) {
    console.log("Maximum:", result);
});
// Q3: Convert Celsius to Fahrenheit
function convert(celsius, callback) {
    callback((celsius * 9/5) + 32);
}

convert(30, function(result) {
    console.log("Fahrenheit:", result);
});

// CALLBACK HELL
// Q1: Login Process
setTimeout(() => {
    console.log("Username Entered");

    setTimeout(() => {
        console.log("Password Verified");

        setTimeout(() => {
            console.log("Login Successful");
        }, 1000);

    }, 1000);
}, 1000);


// Q2: Exam Result Process
setTimeout(() => {
    console.log("Exam Completed");

    setTimeout(() => {
        console.log("Papers Checked");

        setTimeout(() => {
            console.log("Result Announced");
        }, 1000);

    }, 1000);
}, 1000);


// Q3: Bank Transaction
setTimeout(() => {
    console.log("Account Verified");

    setTimeout(() => {
        console.log("Transaction Processing");

        setTimeout(() => {
            console.log("Transaction Completed");
        }, 1000);

    }, 1000);
}, 1000);

// Q1: Create a Promise that resolves after 2 seconds
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);
});
p1.then(result => console.log(result))
  .catch(error => console.log(error));


// Q2: Resolve a Promise with Success
let p2 = new Promise((resolve, reject) => {
    resolve("Success");
});
p2.then(result => console.log(result))
  .catch(error => console.log(error));


// Q3: Reject a Promise and handle error
let p3 = new Promise((resolve, reject) => {
    reject("Something went wrong");
});
p3.then(result => console.log(result))
  .catch(error => console.log(error));


// Q4: Check Even or Odd using Promise
let number = 7;
let p4 = new Promise((resolve, reject) => {
    if (number % 2 === 0) {
        resolve("Even Number");
    } else {
        reject("Odd Number");
    }
});
p4.then(result => console.log(result))
  .catch(error => console.log(error));


// Q5: Check Age Eligibility
let age = 20;
let p5 = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("Eligible");
    } else {
        reject("Not Eligible");
    }
});
p5.then(result => console.log(result))
  .catch(error => console.log(error));


// Q6: Login System
let username = "admin";
let password = "12345";
let p6 = new Promise((resolve, reject) => {
    if (username === "admin" && password === "12345") {
        resolve("Login Successful");
    } else {
        reject("Invalid Credentials");
    }
});
p6.then(result => console.log(result))
  .catch(error => console.log(error));


// Q7: Check Student Marks
let marks = 65;
let p7 = new Promise((resolve, reject) => {
    if (marks >= 50) {
        resolve("Pass");
    } else {
        reject("Fail");
    }
});
p7.then(result => console.log(result))
  .catch(error => console.log(error));


// Q8: Shopping Payment
let payment = true;
let p8 = new Promise((resolve, reject) => {
    if (payment) {
        resolve("Payment Successful");
    } else {
        reject("Payment Failed");
    }
});
p8.then(result => console.log(result))
  .catch(error => console.log(error));


// Q9: Check Temperature
let temperature = 35;
let p9 = new Promise((resolve, reject) => {
    if (temperature > 30) {
        resolve("Hot");
    } else {
        resolve("Normal");
    }
});
p9.then(result => console.log(result))
  .catch(error => console.log(error));


// Q10: API Simulation
let p10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "Awantika", age: 22 });
    }, 3000);
});
p10.then(result => console.log(result))
   .catch(error => console.log(error));


// Q1: Add 5 to 10 and multiply by 2
Promise.resolve(10)
    .then(num => num + 5)
    .then(num => num * 2)
    .then(result => console.log(result));


// Q2: Find the square of a number
Promise.resolve(6)
    .then(num => num * num)
    .then(result => console.log(result));


// Q3: Double, Add 10 and Multiply by 2
Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num + 10)
    .then(num => num * 2)
    .then(result => console.log(result));


// Q4: Add 5 to marks and check Pass or Fail
Promise.resolve(70)
    .then(marks => marks + 5)
    .then(marks => marks >= 50 ? "Pass" : "Fail")
    .then(result => console.log(result));


// Q5: Display User Details
Promise.resolve("Awantika")
    .then(name => {
        return { name: name, email: "awantikakhatri09@gmail.com" };
    })
    .then(user => {
        console.log("Name:", user.name);
        console.log("Email:", user.email);
    });


// Q6: Calculate Shopping Bill
Promise.resolve(500)
    .then(price => price + 100)
    .then(price => price - 50)
    .then(result => console.log("Total Bill:", result));


// Q7: Calculate Age
Promise.resolve(2004)
    .then(birthYear => 2026 - birthYear)
    .then(age => console.log("Age:", age));


// Q8: Multiply, Add and Divide
Promise.resolve(10)
    .then(num => num * 3)
    .then(num => num + 5)
    .then(num => num / 2)
    .then(result => console.log(result));


// Q9: Login Verification
Promise.resolve("admin")
    .then(username => {
        if (username === "admin") {
            return "Username Verified";
        } else {
            throw "Invalid Username";
        }
    })
    .then(result => {
        console.log(result);
        return "Password Verified";
    })
    .then(result => console.log(result))
    .catch(error => console.log(error));


// Q10: Complete Order System
Promise.resolve("Order Placed")
    .then(result => {
        console.log(result);
        return "Payment Successful";
    })
    .then(result => {
        console.log(result);
        return "Order Shipped";
    })
    .then(result => {
        console.log(result);
        return "Order Delivered";
    })
    .then(result => console.log(result))
    .catch(error => console.log(error));
