import { Button } from "antd";
import { CustomButtonProps } from "../types/props";
import GradientBorder from "../../utils/GradientBorder";

export default function CustomButton({ label, height = 40, width = 100, icon, ...buttonProps }: CustomButtonProps) {
  return (
    <>
      <GradientBorder padding={1.2} radius={8}>
        <Button
          {...buttonProps}
          style={{ height, border: '1px solid transparent', ...buttonProps.style }}
          icon={icon}
          iconPlacement="start">
          {label}
        </Button>
      </GradientBorder>
    </>
  )
}
