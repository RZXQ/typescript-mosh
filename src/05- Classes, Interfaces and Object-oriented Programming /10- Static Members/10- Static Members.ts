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
