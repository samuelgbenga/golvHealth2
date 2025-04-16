import logo from "../../../assets/images/golvhealthLogo2.png";

export default function Logo({ size = 100 }) {
  return (
    <img
      src={logo}
      alt="logo"
      width={size}
      height={size}
      className="ml-4 object-scale-down"
    />
  );
}
