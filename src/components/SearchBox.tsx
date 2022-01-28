import React, { useState } from "react";
import router from "next/router";
import styled from "styled-components";

const InputBox = styled.input`
  width: 100%;
  height: 36px;

  background: #414141;
  border-radius: 5px;
  font-weight: 500;
  outline: none;
  color: white;
  text-align: center;
`;

function SearchBox() {
  const [inputVal, setInputVal] = useState("");

  function redirect(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let value = inputVal.trim().split(", ");
    console.log(value);
    if (value[0] == "") {
      alert("Please enter a valid city and state");
      return;
    } else {
      router.push(`/?city=${value[0]}&state=${value[1]}&country=${value[2]}`);
    }
  }

  return (
    <form
      onSubmit={(e) => redirect(e)}
      className="flex flex-row justify-between mb-4 w-full max-w-[300px]"
    >
      <InputBox
        placeholder="City, State, Country"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        type="text"
        value={inputVal}
        className="px-2"
      />
      <button
        type="submit"
        className="bg-[#eead61] rounded-md w-12 ml-2 font-medium"
      >
        Go
      </button>
    </form>
  );
}

export { SearchBox };
