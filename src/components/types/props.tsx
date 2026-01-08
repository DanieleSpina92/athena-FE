import React, { ReactNode } from "react";
import { MenuListItem, MenuOption } from "./models";
import type { RangePickerProps } from "antd/es/date-picker";
import type { ButtonProps } from "antd";
import type { MenuProps } from "antd";

export interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  breakpoint?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export interface HeaderBarProps {
  children?: ReactNode;
  role: string
}

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
  height?: number | string;
  width?: number | string;
  icon?: ReactNode;
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

export interface MenuItemProps {
  itemKey: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface CardItemProps {
  value: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  loading?: boolean;
  variant?: 'outlined' | 'borderless';
  style?: React.CSSProperties;
  styleValue?: React.CSSProperties;
  styleDescription?: React.CSSProperties;
  className?: string;
  icon?: React.ReactNode;
}

export interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  headerContent?: ReactNode;
  children?: ReactNode;
  footerContent?: ReactNode;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  dialogBg?: string;
  headerBg?: string;
  footerBg?: string;
  textColor?: string;
  borderRadius?: string;
  overlayBg?: string;
}

export interface CardItemWithDialogProps {
  title: string;
  value: string;
  children: ReactNode;
  dialogHeaderContent?: ReactNode;
  style?: React.CSSProperties;
  extra?: ReactNode | ((openDialog: () => void) => ReactNode);
}

export interface KpiSectionProps {
  storeId?: number;
  startDate: string;
  endDate: string;
}

export interface CustomTableColumn<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  render?: (value: any, record: T, index: number) => React.ReactNode;
}

export interface CustomTableProps<T> {
  columns: CustomTableColumn<T>[];
  data: T[];
  headerGradient?: string;
  headerTextColor?: string;
  rowGradient?: string;
  rowTextColor?: string;
  style?: React.CSSProperties;
}