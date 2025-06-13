interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

// A. Pass through the generic type parameter unchanged from parent to child
// The child class accepts any type T and forwards it to the parent Store<T>
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// B. Constrain the generic type parameter with additional requirements
// T must have at least a 'name' property of type string to satisfy the constraint
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// C. Specialize the generic type by fixing it to a concrete type
// No generic parameter needed - this store only works with Product objects
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}

export = {};
