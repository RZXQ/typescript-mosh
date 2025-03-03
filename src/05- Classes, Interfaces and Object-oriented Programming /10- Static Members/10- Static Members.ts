// ===========================================================
//             Ride Class with Access Control
// ===========================================================

// 1. Static property: only one instance exists in memory.
// 2. Access modifier prevents direct external modification.
class Ride {
  private static _activeRides: number = 0;

  // Getter to access the active rides count.
  get activeRides() {
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

// Direct modification demo (not recommended in practice)
Ride._activeRides = 10;

let firstRide = new Ride();
firstRide.start();

let secondRide = new Ride();
secondRide.start();

console.log(Ride.activeRides);
