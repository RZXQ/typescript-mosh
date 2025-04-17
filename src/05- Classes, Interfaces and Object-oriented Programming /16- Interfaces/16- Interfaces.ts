// ===========================================================
//                      Abstract Class Example
// ===========================================================
// Note: This is an alternative approach to interfaces
// Using abstract class allows sharing logic with subclasses
//
// abstract class Calendar {
//     constructor(public name: string) {}
//
//     abstract addEvent(): void;
//     abstract removeEvent(): void;
// }

// ===========================================================
//                      Interface Definition
// ===========================================================
// Interface: Defines object shape without implementation
// Note: Interfaces don't generate JavaScript code when compiled
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

// ===========================================================
//                      Extended Interface
// ===========================================================
// Extends: Adds new method to the base interface
interface CloudCalendar extends Calendar {
  sync(): void;
}

// ===========================================================
//                      Concrete Implementation
// ===========================================================
// Class: Implements the interface with actual logic
class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    console.log("addEvent in GoogleCalendar");
  }

  removeEvent(): void {
    console.log("removeEvent in GoogleCalendar");
  }
}

// ===========================================================
//                      When to Use Interface vs Abstract Class
// ===========================================================
/*
When to Use an Interface:
- For defining contracts (shape) without implementation
- When you need loose coupling (a class can implement multiple interfaces)
- When different classes need the same structure but different behaviors
- Example: Calendar interface for GoogleCalendar and OutlookCalendar with
  different event-handling implementations

When to Use an Abstract Class:
- When you need to share common code/logic across subclasses
- For tighter coupling within a related class hierarchy
- When subclasses should inherit both structure and behavior
- Example: Use if all calendars need a shared validation method

Key Differences:
- Interfaces: No implementation, multiple inheritance, more flexible
- Abstract Classes: Can include implementation, single inheritance, more reusable

Decision Guide:
- Need just structure? → Interface
- Need structure + shared code? → Abstract class
*/

export = {};
