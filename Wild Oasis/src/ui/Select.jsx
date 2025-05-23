import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

const Select = ({ options, value, type, onChange }) => {
  return (
    <StyledSelect onChange={onChange} value={value} type={type}>
      {options.map((el) => {
        return (
          <option value={el.value} key={el.value}>
            {el.label}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default Select;
