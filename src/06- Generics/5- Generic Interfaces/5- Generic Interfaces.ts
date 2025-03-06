// ===========================================================
//                    Simulate API Endpoints
// ===========================================================

// endpoints to simulate:
// https://mywebsite.com/users
// https://mywebsite.com/products

interface Result<T> {
  data: T | null; // null if there's an error
  error: string | null; // null if successful
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

// ===========================================================
//                       Data Interfaces
// ===========================================================

interface User {
  username: string;
}

interface Product {
  title: string;
}

// ===========================================================
//                      Function Usages
// ===========================================================

// without explicit type, defaults to Result<unknown>
let user = fetch<User>("url");
let product = fetch<Product>("url");

console.log(user.data);
console.log(product.data);
