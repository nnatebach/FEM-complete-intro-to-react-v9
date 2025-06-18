const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("div", {}, props.description)
  ])
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Pedro Pagino's"),
      React.createElement(Pizza, {
        name: "The Pepperoni Pizza",
        description: "some dope pizza yo"
      }),
      React.createElement(Pizza, {
        name: "Americano Pizza",
        description: "French fries and hot dogs, wtf Italy"
      }),
      React.createElement(Pizza, {
        name: "The Hawaiian",
        description: "pineapple and ham, wrf America"
      }),
      React.createElement(Pizza, {
        name: "Chicken Pizza?",
        description: "chicken nuggies on your pizza, wtf UK"
      }),
      React.createElement(Pizza, {
        name: "Baked Potato Pizza",
        description: "unholy potato mash, wtf Minnesota"
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));