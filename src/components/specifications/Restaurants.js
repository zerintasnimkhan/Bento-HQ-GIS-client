"use-client";
import React from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import styles from "../styles/specification.module.css";
//import { useAppDispatch } from "../../app/hooks";
import { addSpecification } from "../../features/selectMap/selectMap-slice";

function SpecificationRestaurant() {
  const dispatch = useAppDispatch();
  const selectedLevel = useAppSelector(
    (state) => state.selectMap.specifications.level
  );

  const [checked, setChecked] = React.useState(false); 
  function handleChange(e) {
     setChecked(e.target.checked);
  }

  // const [checkboxes, setCheckboxes] = useState({
  //   HU: false,
  //   MU: false,
  //   LU: false,

  // });

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // const handleCheckboxChange = (checkboxName) => {
  //   console.log(checkboxName);
  //   setCheckboxes((prevCheckboxes) => ({
  //     ...prevCheckboxes,
  //     [checkboxName]: !prevCheckboxes[checkboxName],
  //   }));
  //   setSelectedCheckbox(checkboxName);

  //   dispatch(addSpecification(checkboxName));
  // };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  useEffect(() => {
    if (selectedLevel) {
      console.log("Selected Level:", selectedLevel);
      dispatch(fetchMarkersFromJson());
    }
  }, [dispatch, selectedLevel]);


  function getValue() {
    // Get the checkbox element by its ID
    var checkbox = document.getElementById("myCheckbox");
    console.log(checkbox);

    // Check if the checkbox is checked
    if (checkbox.checked) {
      // Get the value of the checkbox
      var checkboxValue = checkbox.value;

      // Log or use the checkbox value as needed
      console.log("Checkbox value:", checkboxValue);
    } else {
      console.log("Checkbox is not checked");
    }
  }

  // const handleCheckbox = (level) => {
  //   dispatch(addSpecification(level));
  // };
  // console.log(dispatch);

  
  return (
    <div className={styles.spf}>
      <h3>Utility Level</h3>
      <div>
        <label className={styles.checkboxes}>
          <input
            type="checkbox"
            //id="myCheckbox"
            value="checkBoxValue"
            //checked={checkboxes.HU}
            //onChange={() => handleCheckboxChange("HU")}
            onChange={handleChange}
            //onClick={getValue}
           // isSelected={selectedLevel === "HU"}
          />
          {/* HU (High Utilization) */}

          {checked ? (
            <div> Checkbox is checked. </div>
         ) : (
            <div> Checkbox is not checked. </div>
         )}
        </label>
      </div>

      <div>
        <label className={styles.checkboxes}>
          <input
            type="checkbox"
            checked={checkboxes.MU}
            onChange={() => handleCheckboxChange("MU")}
          />
          MU (Moderate Utilization)
        </label>
      </div>

      <div>
        <label className={styles.checkboxes}>
          <input
            type="checkbox"
            checked={checkboxes.LU}
            onChange={() => handleCheckboxChange("LU")}
          />
          LU (Low Utilization)
        </label>
      </div>
      <div className={styles.time}>
        <h3>Select Time Range</h3>
        <div className={styles.time}>
          <label>
            Start Time:
            <input
              className={styles.inputTime}
              type="datetime-local"
              value={startTime}
              onChange={handleStartTimeChange}
            />
          </label>
        </div>

        <div className={styles.time}>
          <label>
            End Time:
            <input
              className={styles.inputTime}
              type="datetime-local"
              value={endTime}
              onChange={handleEndTimeChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default SpecificationRestaurant;
