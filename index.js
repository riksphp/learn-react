import React from "react";
import ReactDOM from "react-dom/client";

// * JSX - Transpiled  before it reaches the JS - PARCEL is doing this.
// * Behind the scene, babel is doing that
const HeadingComponent = () => (
  <h1 className="red">Hellow world from jsx 🚀</h1>
);

const description = <h3>This is the description of app</h3>;

// ! THis is component composition.
// * using one component inside other
const RenderComponent = () => {
  return (
    <>
      <HeadingComponent />
      {HeadingComponent()}
      <h2>Namaste react with Rishikesh 😻 </h2>
      {description}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// ! below can be used but not a good practise
// root.render(HeadingComponent());

root.render(<RenderComponent />);
