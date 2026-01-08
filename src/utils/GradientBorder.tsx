import { type CSSProperties, type ReactNode } from "react";

interface gradientBorderProps {
  children: ReactNode;
  radius: number | string;
  padding: number | string;
  style?: CSSProperties;
}

const GradientBorder = ({
  children,
  radius = 8,
  padding = 2,
  style = {},
}: gradientBorderProps) => {

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        padding: padding,
        borderRadius: radius,
        background: `linear-gradient(
          -24deg,
          rgb(255, 255, 255) 0,
          rgba(255, 255, 255, 0.3) 34%,
          rgba(255, 255, 255, 0)
        )`,
        ...style,
      }}
    >
      <div
        style={{
          background: "transparent",
          borderRadius: radius,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientBorder;