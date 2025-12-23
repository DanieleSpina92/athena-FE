import React from "react";
import { Select } from "antd";
import { MenuOptionsProps } from "../types/props";
const { Option } = Select;

export default function MenuOptions({ value, onChange, options, placeholder = "Seleziona un'opzione", width = 200, height = 50, disabled = false}: MenuOptionsProps) {
  return <Select value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} style={{ width, height }} >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
}
