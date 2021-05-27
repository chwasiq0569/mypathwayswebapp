import React from "react";
import "./stepfour.css";

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

const StepFour = () => {
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
      <h3>We’ll keep track of how much money you save!</h3>
      <div className="stepFourGridContainer">
        <div className="row row1">
          <p className="drugName">Alcohol</p>
          <div className="colContainer">
            <div className="col col1">
              <label>Quantity purchased</label>
              <input type="text" placeholder="i.e., 1.75 liters" />
            </div>
            <div className="col col2">
              <label>Purchase Frequency</label>
              <input type="text" placeholder="i.e., 02" />
            </div>
            <div className="col col3">
              <label>Average price/quantity</label>
              <input type="text" placeholder="$ 30                 /quantity" />
            </div>
          </div>
        </div>
        <div className="row row2">
          <p className="drugName">Heroine</p>
          <div className="colContainer">
            <div className="col col1">
              <label>Quantity purchased</label>
              <input type="text" placeholder="i.e., 1.75 liters" />
            </div>
            <div className="col col2">
              <label>Purchase Frequency</label>
              <input type="text" placeholder="i.e., 02" />
            </div>
            <div className="col col3">
              <label>Average price/quantity</label>
              <input type="text" placeholder="$ 30                 /quantity" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
