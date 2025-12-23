import React from "react";
import { DatePicker } from "antd";
import { RangeDatePickerProps } from "../types/props";

export default function RangeDatePicker({ value, onChange, format = "DD/MM/YYYY", width = 250, placeholder = ["Data Inizio", "Data Fine"], disabled = false, allowClear = true }: RangeDatePickerProps) {
  return <DatePicker.RangePicker
      value={value}
      onChange={onChange}
      format={format}
      style={{ width }}
      placeholder={placeholder}
      disabled={disabled}
      allowClear={allowClear}
    />
}
