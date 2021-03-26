// It's when we change some data type to another

// Implicit coercion - when javascript makes the change for us
var a = 4 + "7"; // Returns "47". JS converts the variable to string
var b = 4 * "7"; // return 28. JS converts the variable to number

// Explicit coercion - when we convert one data type to another ourselves
var a = 20;
var b = String(a); // We convert "a" from number to string
var c = Number(b); // We convert "a" from string to number