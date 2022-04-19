import { GoBackLink } from "./GoBackBtn.styled"
import { GoChevronLeft } from "react-icons/go";

export default function GoBackBtn() {

  return (
    <GoBackLink to='/'><GoChevronLeft />Go Back</GoBackLink>
  )
};
