"use-client";
import React from "react";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import styles from "../styles/specification.module.css";
import { filterMarkers, levelSpecifiedMarkers } from "../features/selectMap/selectMap-slice";
// import { addSpecification } from "../../features/selectMap/selectMap-slice";

function SpecificationRestaurant() {
  const dispatch = useAppDispatch();
  // const selectedLevel = useAppSelector(
  //   (state) => state.selectMap.selectedLevels
  // );

  const [checkboxes, setCheckboxes] = useState({
    HU: false,
    MU: false,
    LU: false,
  });

  const [selectedLevels, setSelectedLevels] = useState([]);
  const handleCheckboxChange = (level) => {
    setSelectedLevel(level);
    dispatch(filterMarkers(level));
  };

  useEffect(() => {
    dispatch(filterMarkers());
    console.log(selectedLevels)
  }, [selectedLevels, dispatch]);

  function getValue(value) {
    var checkbox = document.getElementById(value);
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [value]: !prevCheckboxes[value],
    }));
    if (checkbox.checked) {
      var checkboxValue = checkbox.value;
      console.log("Checkbox value:", checkboxValue);

      setSelectedLevels((prevSelectedLevels) => [
        ...prevSelectedLevels,
        checkboxValue,
      ]);
      dispatch(levelSpecifiedMarkers((prevSelectedLevels) => [
        ...prevSelectedLevels,
        checkboxValue,
      ]));

      //console.log(selectedLevels);
    } else {
      setSelectedLevels((prevSelectedLevels) =>
        prevSelectedLevels.filter((val) => val !== checkbox.value)
      );
    }
    //console.log(selectedLevels);
  }

  // useEffect(() => {
  //   dispatch(filterMarkers());
  //   console.log(selectedLevels);
  // }, [selectedLevels, dispatch]);

  return (
    <div className={styles.spf}>
      <h3>Utility Level</h3>
      <div>
        <label className={styles.checkboxes}>
          <input
            type="checkbox"
            id="HU"
            value="HU"
            checked={checkboxes.HU}
            onChange={() => getValue("HU")}
          />
          HU (High Utilization)
        </label>
      </div>

      <div>
        <label className={styles.checkboxes}>
          <input
            type="checkbox"
            id="MU"
            value="MU"
            checked={checkboxes.MU}
            onChange={() => getValue("MU")}
          />
          MU (Moderate Utilization)
        </label>
      </div>

      <div>
        <label className={styles.checkboxes}>
          <input
            type="checkbox"
            id="LU"
            value="LU"
            checked={checkboxes.LU}
            onChange={() => getValue("LU")}
          />
          LU (Low Utilization)
        </label>
      </div>
    </div>
  );
}

export default SpecificationRestaurant;
