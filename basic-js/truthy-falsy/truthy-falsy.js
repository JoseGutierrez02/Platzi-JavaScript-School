// Examples of values that return false
Boolean(0);
Boolean(null);
Boolean(NaN);
Boolean(undefined);
Boolean(false);
Boolean("");

// Examples of values that return true
Boolean(1); // Any number different from 0 is true
Boolean("a"); // Any character, string or space is true
Boolean([]); // true even if it is empty
Boolean({}); // true even if its empty
Boolean(function(){}); // Any function is true