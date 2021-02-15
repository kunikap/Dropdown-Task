import React, { useRef } from "react";
import useSelect from "use-select";
import styled from "styled-components";
import {matchSorter} from "match-sorter";
import { FixedSizeList } from "react-window";

const OptionsWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
`;

const Options = styled(FixedSizeList)`
  border: 1px solid black;
  &.mySelectOptions {
      background-color: blue;
  }

`;

const Option = styled.div`
  background: "red";
  display: flex;
  alignitems: center;
  padding: 0.5rem;
`;

export default function MySelect({
  value,
  options,
  onChange,
  multi=false,
  pageSize = 10,
  itemHeight = 40
}) {
  const reactWindowInstanceRef = useRef();
  const optionsRef = useRef();

  const scrollToIndex = index => {
    if (!reactWindowInstanceRef.current) {
      return;
    }
    reactWindowInstanceRef.current.scrollToItem(index);
  };

  const shiftAmount = pageSize;

  const {
    visibleOptions,
    selectedOption,
    highlightedOption,
    getInputProps,
    getOptionProps,
    isOpen
  } = useSelect({
    multi,
    options,
    value,
    onChange,
    scrollToIndex,
    optionsRef,
    shiftAmount,
    filterFn: (options, value) =>
      matchSorter(options, value, { keys: ["label"] })
  });
  console.log(visibleOptions, '===visibleOptions====')

  const height =
    Math.max(Math.min(pageSize, visibleOptions.length), 1) * itemHeight;

  return (
    <div
      style={{
        display: "inline-block",
        position: "relative"
      }}
    >
      {multi ? (
        <div>
          {selectedOption.map(option => (
            <div key={option.value}>
              {option.value}{" "}
              
                <button onClick={() => onChange(value.filter(d => d !== option.value))}>Clear</button>
         
            </div>
          ))}
        </div>
      ) : null}
      <input {...getInputProps()} placeholder="Select one..." />
      <OptionsWrapper ref={optionsRef}>
        {isOpen ? (
          <Options
            ref={reactWindowInstanceRef}
            height={height}
            itemCount={visibleOptions.length || 1}
            itemSize={itemHeight}
            width={400}
            className="mySelectOptions"
          >
            {React.forwardRef(({ index, style, ...rest }, ref) => {
              const option = visibleOptions[index];
              if (!visibleOptions.length) {
                return (
                  <Option ref={ref} style={style}>
                    No options were found...
                  </Option>
                );
              }
              return (
                <Option
                  {...getOptionProps({
                    index: 1,
                    option,
                    ref,
                    style,
                    highlighted: option === highlightedOption,
                    selected: option === selectedOption
                  })}
                >
                  {option.label}
                </Option>
              );
            })}
          </Options>
        ) : null}
      </OptionsWrapper>
    </div>
  );
}
