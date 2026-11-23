let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "Manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No acess granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn === true) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Wecolme, User!";
    }
} else {
    userMessage = "Please log in to access the system";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Practice Task

let isEmployee = true;
let memberCategory = "Subscriber";
if (isEmployee === true) {
    console.log("You have Employee's access!");
    
    switch (memberCategory) {
        case "Member":
            console.log("You have full access to Dietary Services!")
            break;
        case "Subscriber":
            console.log("You have partial access to Dietary Services!")
            break;
        default:
            console.log("You need to enroll to Dietary Services!")
    }
} else {
    console.log("You don't have access!")
}