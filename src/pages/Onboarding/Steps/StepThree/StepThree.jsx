import React from "react";
import "./stepthree.css";

const list = [
  "Alcohol",
  "Cocaine",
  "Heroin",
  "Prescription Opioids",
  "Prescription Stimulants",
  "MDMA",
  "Methamphetamine",
  "Hallucinogens",
  "Other",
];

const createList = (list) => {
  return list.map((l) => {
    return { status: false, content: l };
  });
};

const StepThree = () => {
  const [itemsList, setItemsList] = React.useState(createList(list));

  const selectItem = (selectedItem) => {
    let updatedList = itemsList.map((item) =>
      item.content === selectedItem.content
        ? { ...selectedItem, status: true }
        : { ...item, status: false }
    );
    setItemsList(updatedList);
  };

  return (
    <div className="lowerSection">
      <h3>What was your drug(s) of choice</h3>
      <div className="stepThreeGridContainer">
        <div className="col col1">
          <div className="checkboxes__Wrapper">
            {itemsList.map((item) => (
              <div
                key={item.content}
                onClick={() => selectItem(item)}
                className={
                  item.status ? "answer__Item selected__Item" : "answer__Item"
                }
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
        <div className="col col2"></div>
        <div className="col col3"></div>
        <div className="col col4"></div>
      </div>

      {/* <div className="checkboxes__Wrapper">
        {itemsList.map((item) => (
          <div
            key={item.content}
            onClick={() => selectItem(item)}
            className={
              item.status ? "answer__Item selected__Item" : "answer__Item"
            }
          >
            {item.content}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default StepThree;
