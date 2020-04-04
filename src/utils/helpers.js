import { css } from "styled-components";
import { useState } from "react";
import { breakpoints } from "./constants";

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export const useFormFields = (initialState) => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function (event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
};

export const hCardConverter = (element) => {
  const hCard = new XMLSerializer().serializeToString(element);
  window.open("data:application/octet-stream;base64," + btoa(hCard));
};
