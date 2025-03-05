// // ===========================================================
// //                      Abstract Class Example
// // ===========================================================
// // Note: Use abstract class to share logic with subclasses
// // abstract class Calendar {
// //     constructor(public name: string) {}
// //
// //     abstract addEvent(): void;
// //     abstract removeEvent(): void;
// // }
//
// // ===========================================================
// //                      Interface Definition
// // ===========================================================
// // Interface: Defines object shape; more concise than abstract class
// interface Calendar {
//   name: string;
//   addEvent(): void;
//   removeEvent(): void;
// }
//
// // ===========================================================
// //                      Extended Interface
// // ===========================================================
// // Extends: Adds new method to the base interface
// interface CloudCalendar extends Calendar {
//   sync(): void;
// }
//
// // ===========================================================
// //                      Concrete Implementation
// // ===========================================================
// // Class: Implements the interface with actual logic
// class GoogleCalendar implements Calendar {
//   constructor(public name: string) {}
//
//   addEvent(): void {
//     console.log("addEvent in GoogleCalendar");
//   }
//
//   removeEvent(): void {
//     console.log("removeEvent in GoogleCalendar");
//   }
// }
//
// // ===========================================================
// //                      When to Use Interface vs Abstract Class
// // ===========================================================
// /*
// When to Use an Interface:
// - Use when you only need to define a contract (shape) for objects, like properties and method signatures, without any implementation.
// - Ideal for loose coupling: classes can implement multiple interfaces, making it flexible (e.g., a class could implement Calendar and another unrelated interface).
// - Perfect for scenarios where different classes need to share a structure but not behavior (e.g., Calendar as a blueprint for GoogleCalendar, iCal, etc.).
// - Example: Use Calendar interface if GoogleCalendar and OutlookCalendar have totally different ways of adding events but must expose the same methods.
//
// When to Use an Abstract Class:
// - Use when you want to share common logic (methods with code) across subclasses, alongside a blueprint.
// - Good for tighter coupling within a hierarchy: subclasses inherit both structure and behavior (e.g., a default addEvent() logic that subclasses can tweak).
// - Suited for cases where you have a family of related classes with shared functionality (e.g., a Calendar abstract class with a method to log event changes that all subclasses use).
// - Example: Use abstract Calendar if all calendars should share a method to validate event dates before adding them.
//
// Key Differences:
// - Interfaces: No implementation, multiple inheritance possible, more flexible.
// - Abstract Classes: Can include implementation, single inheritance only, more rigid but reusable.
//
// Choose Based on Needs:
// - Need just structure? Go with interface.
// - Need structure + shared code? Go with abstract class.
// */
