import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";

interface LogoProps {
  width?: number;
  variant?: "black" | "white";
}

const Logo = ({ width = 36, variant = "black" }: LogoProps) => {
  return (
    <Link
      href="/"
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src={logo}
        alt="Journey to the one Logo"
        width={width}
        style={{
          height: "auto",
          filter: variant === "white" ? "invert(1)" : "none",
        }}
        priority
      />
    </Link>
  );
};

export default Logo;
