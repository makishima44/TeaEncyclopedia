import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const LocalStorageTraining = () => {
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onButtonHandlerSetLS = () => {
    localStorage.setItem("Value", JSON.stringify(inputValue));
    setInputValue("");
  };

  const onButtonHandlerGetLS = () => {
    const lSValue = JSON.parse(localStorage.getItem("Value") ?? '""');
    setStoredValue(lSValue);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>LocalStorageTraining</h1>
      <div className="LSBlock">
        <div style={{ display: "flex" }}>
          <Input
            title="LSsend"
            value={inputValue}
            onChange={handleInputChange}
          />

          <Button
            name={"send"}
            size="medium"
            color="main"
            onClick={onButtonHandlerSetLS}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Button
            name={"get"}
            size="medium"
            color="main"
            onClick={onButtonHandlerGetLS}
          />
          <span>{storedValue}</span>
        </div>
      </div>
    </div>
  );
};
