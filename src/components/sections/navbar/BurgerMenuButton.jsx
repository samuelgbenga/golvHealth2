import { RxHamburgerMenu } from "react-icons/rx";

export default function BurgerMenuButton({ onClick }) {
  return (
    <div className="flex cursor-pointer lg:hidden ml-4 text-4xl" onClick={onClick}>
      <RxHamburgerMenu />
    </div>
  );
}
