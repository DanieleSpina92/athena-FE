import React, { useState } from "react";
import CardItem from "./CardItem";
import CustomDialog from "../dialog/CustomDialog";
import { CardItemWithDialogProps } from "../types/props";

export function CardItemWithDialog({ title, value, children, extra, dialogHeaderContent, style }: CardItemWithDialogProps) {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  return <>
      <CardItem title={title} value={value} extra={typeof extra === "function" ? extra(openDialog) : extra} style={style} />
      <CustomDialog
        width="300"
        open={open}
        onClose={() => setOpen(false)}
        headerBg="linear-gradient(to right, #00497d, #001639)"
        headerContent={dialogHeaderContent}
        dialogBg="linear-gradient(to bottom right, #007dd4, #000e25)"
        footerBg="#0b2f66"
        textColor="#fff"
        borderRadius="7px"
       // footerContent={}
      >
        {children}
      </CustomDialog>
    </>
}
