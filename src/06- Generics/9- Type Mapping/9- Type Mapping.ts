// 1. Specific mapped type - creates a readonly version of Product interface
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

// 2. Generic mapped types - reusable utility types for type transformations

// A. Readonly mapped type - makes all properties readonly
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Customer {
  name: string;
  price: number;
}

const customer: ReadOnly<Customer> = {
  name: "ab",
  price: 10,
};

// B. Optional mapped type - makes all properties optional
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// C. Nullable mapped type - allows all properties to be null
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export = {};
