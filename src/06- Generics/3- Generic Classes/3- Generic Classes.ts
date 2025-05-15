// ===========================================================
//                      Generic KeyValuePair Class
// ===========================================================
// Note: T (Template), K (Key), V (Value), U (Utility) are common generic type parameter names
// K and V are used here for key-value pairs, enhancing readability
class KeyValuePair<K, V> {
  constructor(
    public key: K,
    public value: V,
  ) {}
}

// ===========================================================
//                      Usage Example
// ===========================================================
const pair1 = new KeyValuePair<string, number>("1", 1);
const pair2 = new KeyValuePair<number, string>(1, "1");

// ===========================================================
//                      Advantages of Generics
// ===========================================================
// Note: Benefits of using generics in this class:
// 1. Conciseness: One generic class replaces multiple specific classes (e.g., no need for separate KeyValuePair for each key/value type).
// 2. Type Safety: Ensures type checking for each instance (e.g., pair1’s key is string, value is number; pair2’s key is number, value is string).
// 3. Flexibility: Supports any combination of types for K and V (e.g., string, number, boolean, custom objects) without code duplication.
// 4. Reusability: Reduces maintenance by avoiding redundant code for similar key-value pair structures.
// 5. IDE Support: Provides IntelliSense for specific types, unlike 'any', improving development experience.

export = {};
