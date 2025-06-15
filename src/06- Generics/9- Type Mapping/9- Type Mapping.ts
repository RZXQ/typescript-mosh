// 1. Specific mapped type - creates a readonly version of the original Product interface
interface Product {
  id: number;
  name: string;
  price: number;
}

type ReadOnlyProduct = {
  readonly [K in keyof Product]: Product[K];
};

let product1: ReadOnlyProduct = {
  id: 1,
  name: "a",
  price: 1,
};

// 2. Generic mapped types - reusable utility types for type transformations

// A. Custom Readonly mapped type - makes all properties readonly
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

// 3. Built-in utility types - TypeScript's predefined utility types

// Partial<T> - makes all properties optional
let partialProduct: Partial<Product>;

// Required<T> - makes all properties required (opposite of Partial)
let requiredProduct: Required<Product>;

// Readonly<T> - makes all properties read-only
let readonlyProduct: Readonly<Product>;

// Pick<T, K> - creates a type with only specified properties
let pickedProduct: Pick<Product, "id" | "price">;

// Omit<T, K> - creates a type excluding specified properties
let omittedProduct: Omit<Product, "name">;

export = {};
