// Interface defining the structure of a Product object.
// It requires two properties: a name (string) and a price (number).
interface Product {
  name: string;
  price: number;
}

// Generic Store class to manage a collection of objects of type T.
// This class serves as a base for storing and retrieving items of any type.
class Store<T> {
  protected _objects: T[] = [];

  // Adds an object of type T to the collection.
  add(obj: T): void {
    this._objects.push(obj);
  }

  // Returns the current array of objects in the store.
  show(): T[] {
    return this._objects;
  }
}

// Example 1: Extending the generic class without modifying the generic type.
// - The `CompressibleStore` inherits from `Store` and keeps the generic type `T`.
// - This allows it to work with any type, just like the parent class.
class CompressibleStore<T> extends Store<T> {}

// Creating an instance of CompressibleStore for Product objects.
// Example usage:
// - productStore.add({ name: "Laptop", price: 1000 });
// - console.log(productStore.show()); // [{ name: "Laptop", price: 1000 }]
let productStore = new CompressibleStore<Product>();

// Example 2: Extending the generic class with a type constraint.
// - The `SearchableStore` restricts `T` to objects that have a `name` property (string).
// - This constraint ensures that the `find` method can safely use the `name` property.
class SearchableStore<T extends { name: string }> extends Store<T> {
  // Finds and returns the first object with a matching name, or undefined if not found.
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Creating an instance of SearchableStore for Product objects.
// Example usage:
// - searchableStore.add({ name: "Phone", price: 500 });
// - const found = searchableStore.find("Phone");
// - console.log(found); // { name: "Phone", price: 500 }
let searchableStore = new SearchableStore<Product>();

// Example 3: Extending the generic class with a fixed type.
// - The `ProductStore` fixes the type to `Product`, specializing it for Product objects.
// - This allows adding methods specific to the `Product` type, like filtering by category.
class ProductStore extends Store<Product> {
  // Method to filter products by category (currently a placeholder).
  // Note: This returns an empty array as an example; in practice, it would filter based on a category property if added to the Product interface.
  filterByCategory(category: string): Product[] {
    return [];
  }
}
