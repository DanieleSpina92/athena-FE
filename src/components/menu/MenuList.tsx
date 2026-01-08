import { Menu } from "antd";
import { MenuListProps } from "../types/props";

export default function MenuList({ items, ...props }: MenuListProps) {
  return (<Menu
      {...props}
      items={items.map(item => ({
        key: item.key,
        icon: item.icon,
        label: item.label,
        disabled: item.disabled,
      }))}
    />)
}
