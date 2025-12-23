import React from "react";
import { Button } from "antd";
import { CustomButtonProps } from "../types/props";

export default function CustomButton({ label, height = 50,...buttonProps }: CustomButtonProps) {
  return <Button {...buttonProps} style={{ height, ...buttonProps.style }}>{label}</Button>
}
