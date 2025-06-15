// 1. Specific type mapping - creates a readonly version of a specific interface
interface Product {
  name: string;
  price: number;
}

type ReadOnlyProduct = {
  readonly [K in keyof Product]: Product[K];
};

let product: ReadOnlyProduct = {
  name: "a",
  price: 1,
};

// 2. Generic type mapping - creates a reusable readonly utility type
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Customer {
  name: string;
  price: number;
}

const customer: ReadOnly<Customer> = {
  // This creates a readonly version of the Customer interface
  name: "ab",
  price: 10,
};

// 3. Optional type mapping and nullable type mapping
type Optional<T> = {
  [K in keyof T]?: T[K]; // Makes all properties optional
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null; // Makes all properties nullable (can be original type or null)
};

export = {};
