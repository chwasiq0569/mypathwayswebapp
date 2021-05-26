import React from "react";
import OnboardingNavbar from "../../components/OnboardingNavbar/OnboardingNavbar";
import "./initialStep.css";
import CheckBoxImg from "../../assets/images/checkbox.png";

const InitialStep = () => {
  const list = ["Active Recovery", "Recovery Ally"];
  const [selected, setSelected] = React.useState("");

  const createList = (list) => {
    return list.map((l) => {
      return { status: false, content: l };
    });
  };

  const [itemsList, setItemsList] = React.useState(createList(list));

  const selectItem = (selectedItem) => {
    let updatedList = itemsList.map((item) =>
      item.content === selectedItem.content
        ? { ...selectedItem, status: true }
        : { ...item, status: false }
    );
    setItemsList(updatedList);
  };

  console.log(itemsList);
  return (
    <div className="stepContainer">
      <OnboardingNavbar />
      <div className="pageContent">
        <div className="initialStepContentContainer">
          <div className="initialStep__UpperContent">
            <h3>Hi Joseph!</h3>
            <h5>Please answer the onboarding questions below</h5>
            <em>
              Answering the following questions will help us build your Personal
              Progress Dashboard. All this information is encrypted and is only
              visible to you.{" "}
            </em>
          </div>
        </div>
        <div className="lowerSection">
          <h3>Please choose from options below</h3>
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
      </div>
    </div>
  );
};

export default InitialStep;
