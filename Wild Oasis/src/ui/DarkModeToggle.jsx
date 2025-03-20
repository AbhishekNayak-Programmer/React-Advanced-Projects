import { useContext } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import ButtonIcon from "../ui/ButtonIcon";
import { DarkModeContext } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const darkModeContext = useContext(DarkModeContext);

  return (
    <ButtonIcon onClick={darkModeContext.toggleDarkMode}>
      {darkModeContext.isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
