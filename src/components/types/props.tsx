import React, { ReactNode } from "react";
import { MenuListItem, MenuOption } from "./models";
import type { RangePickerProps } from "antd/es/date-picker";
import type { ButtonProps } from "antd";
import type { MenuProps } from "antd";


export interface MenuOptionsProps {
  value?: string;
  onChange?: (value: string) => void;
  options: MenuOption[];
  placeholder?: string;
  width?: number;
  height?: number;
  disabled?: boolean;
}

export interface RangeDatePickerProps {
  value?: RangePickerProps["value"];
  onChange?: RangePickerProps["onChange"];
  format?: string;
  width?: number;
  placeholder?: [string, string];
  disabled?: boolean;
  allowClear?: boolean;
}

export interface CustomButtonProps extends ButtonProps {
  label: React.ReactNode;
  height?: number;
}

export interface MenuListProps {
  items: MenuListItem[];
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  onClick?: MenuProps["onClick"];
  theme?: MenuProps["theme"];
  mode?: MenuProps["mode"];
  selectable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}


export interface CardItemProps {
  title?: React.ReactNode;
  value: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  loading?: boolean;
  bordered?: boolean;
  style?: React.CSSProperties;
}