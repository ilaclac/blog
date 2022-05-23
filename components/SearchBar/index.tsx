import React, { useState, useContext, ChangeEvent, MouseEventHandler, useEffect } from "react";
import Suggestions from "@components/Suggestions";
import { Container, Input } from "@components/SearchBar/index.style";
import { PostContext } from "@context/PostContext";
import { ISetValue } from "@interfaces/index";

interface ISearchBar extends ISetValue {
  suggestions: Array<string>;
}

const SearchBar = ({ suggestions, setValue }: ISearchBar) => {
  useEffect(() => setValue((prevState) => [...prevState, "SearchBar"]), []);
  const [filteredSuggestions, setFilteredSuggestions] = useState([""]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [, setActivePost] = useContext(PostContext);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter((suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick: MouseEventHandler = (e) => {
    e.preventDefault();
    const input = e.target as HTMLElement;

    setFilteredSuggestions([]);
    setInput(input.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    setActivePost(input.innerText);
  };

  const onKeyDown = (key: { keyCode: number }) => {
    if (key.keyCode === 13 || key.keyCode === 9) {
      setInput(filteredSuggestions[activeSuggestionIndex]);
      setFilteredSuggestions([]);
    }
  };

  return (
    <Container>
      <Input type="text" placeholder="Enter Post title" onChange={onChange} onKeyDown={onKeyDown} value={input} />
      {showSuggestions && input && (
        <Suggestions
          onClick={onClick}
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          setValue={setValue}
        />
      )}
    </Container>
  );
};

export default SearchBar;
