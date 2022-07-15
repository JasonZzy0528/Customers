import { RadioWrapper, RadioInput } from "./styles";

type RadioProps = {
  selected: boolean;
  label: string;
  onSelect: () => void;
};

export const Radio = ({
  selected,
  label,
  onSelect,
}: RadioProps): JSX.Element => {
  return (
    <RadioWrapper
      style={{
        backgroundColor: selected ? "rgb(234, 242, 250)" : "transparent",
      }}
      onClick={onSelect}
      data-testid="radio"
    >
      <RadioInput type="radio" checked={selected} readOnly />
      <span>{label}</span>
    </RadioWrapper>
  );
};
