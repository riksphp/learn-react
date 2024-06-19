/**
 * <div>
 *      <h1>Hello from react</h1>
 *      <h2>This is heading 1 </h2>
 *
 *      <ul>
 *          <li>item 1 </li>
 *          <li>item 2 </li>
 *          <li>item 3 </li>
 *      </ul>
 * </div>
 */

let keyCount = 0;
const elementToBeAppended = React.createElement(React.Fragment, {}, [
  React.createElement(
    "h1",
    { className: "red", key: keyCount++ },
    "Hello from React"
  ),
  React.createElement("h2", { key: keyCount++ }, "This is heading 1"),
  React.createElement("ul", { key: keyCount++ }, [
    React.createElement("li", { key: keyCount++ }, "ITEM 1"),
    React.createElement("li", { key: keyCount++ }, "ITEM 2"),
    React.createElement("li", { key: keyCount++ }, "ITEM 3"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(elementToBeAppended);
