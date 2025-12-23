import React from "react";

export interface MenuOption {
  label: React.ReactNode;
  value: string;
}

export interface MenuListItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}