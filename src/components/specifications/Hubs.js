"use-client";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import { useState } from "react";
import styles from "../../styles/specification.module.css";

function Hubs() {
  const type =  useAppSelector((state) => state.selectMap.type);

  const [checkboxes, setCheckboxes] = useState({
    HU: false,
    MU: false,
    LU: false,
  });

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  return (
    <div className={styles.spf}>
      <h3>Utility Level</h3>
      <div>
        <label className={styles.checkboxes}>
          <input
            type="checkbox"
            checked={checkboxes.HU}
            onChange={() => handleCheckboxChange("HU")}
          />
          High Capacity hubs
        </label>
      </div>

      <div>
        <label className={styles.checkboxes}>
          <input
            type="checkbox"
            checked={checkboxes.MU}
            onChange={() => handleCheckboxChange("MU")}
          />
          Medium Capacity hubs
        </label>
      </div>

      <div>
        <label className={styles.checkboxes}>
          <input
            type="checkbox"
            checked={checkboxes.LU}
            onChange={() => handleCheckboxChange("LU")}
          />
          Low Capacity hubs
        </label>
      </div>
      <div className={styles.time}>
        <h3>Select Time Range</h3>
        <div className={styles.time}>
          <label>
            Start Time:
            <input className={styles.inputTime}
              type="datetime-local"
              value={startTime}
              onChange={handleStartTimeChange}
            />
          </label>
        </div>

        <div className={styles.time}>
          <label>
            End Time:
            <input className={styles.inputTime}
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

export default Hubs;
