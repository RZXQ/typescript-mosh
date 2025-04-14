// ============================================================================
//                      Static vs Instance Members Explained
// ============================================================================
//
// In JavaScript and TypeScript, the "static" keyword indicates clearly that a method or
// property belongs to the class itself, NOT to the instances created from that class.
//
// 1. Static Members:
//    - Exist only ONCE, associated directly with the class itself.
//    - Shared across all instances of the class.
//    - Stored in memory as part of the class definition itself (the constructor function)
//      and NOT replicated for each individual instance.
//
// 2. Instance Members:
//    - Created separately for every individual instance of a class.
//    - Each instance has its individual dedicated memory for storing these members.
//
// Conceptual Memory Diagram (using Ride as an example):
//
//    | Memory                                     |
//    |--------------------------------------------|
//    | CLASS: Ride                                |
//    |   └─ static: _activeRides                  |  <-- single shared memory space
//    |                                            |
//    | INSTANCES:                                 |
//    |                                            |
//    | firstRide                                  |
//    |   └─ (instance methods and properties)     |
//    |                                            |
//    | secondRide                                 |
//    |   └─ (instance methods and properties)     |
//    |                                            |
// ----------------------------------------------------------------------------

// ===========================================================
//             Ride Class with Access Control
// ===========================================================

// 1. Static property: only one instance exists in memory.
// 2. Access modifier prevents direct external modification.
class Ride {
  private static _activeRides: number = 0;

  // Static getter to access the active rides count directly from the class.
  static get activeRides() {
    return Ride._activeRides;
  }

  // Start a ride and increment the active rides count.
  start() {
    Ride._activeRides++;
  }
}

// ===========================================================
//                     Demonstration Code
// ===========================================================

let firstRide = new Ride();
firstRide.start();

let secondRide = new Ride();
secondRide.start();

console.log(Ride.activeRides); // Outputs: 2

export = {};
