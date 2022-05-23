import React, { MouseEventHandler, useEffect } from "react";
import { ISetValue } from "@interfaces/index";
import theme from "@styles/theme";
import Button from "@components/Button";

interface ISuggestions extends ISetValue {
  filteredSuggestions: Array<string>;
  activeSuggestionIndex: number;
  onClick: MouseEventHandler;
}

const Suggestions = ({ filteredSuggestions, onClick, setValue }: ISuggestions) => {
  useEffect(() => setValue((prevState) => [...prevState, "Suggestions"]), []);

  return filteredSuggestions.length ? (
    <ul style={{ backgroundColor: theme.colors.secondary, listStyleType: "none", textAlign: "center", padding: 0 }}>
      {filteredSuggestions.map((suggestion) => {
        return (
          <li key={suggestion}>
            <Button onClick={onClick}>{suggestion}</Button>
          </li>
        );
      })}
    </ul>
  ) : (
    <div style={{ backgroundColor: theme.colors.secondary }}>
      <p>No suggestions, try something else!</p>
    </div>
  );
};

export default Suggestions;
