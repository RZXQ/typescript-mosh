// ===========================================================
//                      Define Types
// ===========================================================
// Draggable and Resizable are two basic types that define the behavior of the widget.

type Draggable = { drag: () => void };
type Resizable = { resize: () => void };

// ===========================================================
//                      Intersection Type
// ===========================================================
// Intersection type combines multiple types into one. In this case, UIWidget
// must have both drag and resize methods to satisfy both Draggable & Resizable.

type UIWidget = Draggable & Resizable;

// ===========================================================
//                      Create UIWidget
// ===========================================================
// Creating an object that conforms to the UIWidget type, which includes both drag and resize methods.

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

console.log(textBox);
