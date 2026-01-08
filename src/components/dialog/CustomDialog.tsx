import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { CustomDialogProps } from "../types/props";

const StyledDialog = styled(Dialog)<{ overlayBg?: string }>(({ overlayBg }) => ({
  "& .MuiBackdrop-root": {
    backgroundColor: overlayBg || "rgba(0,0,0,0.6)",
  },
}));

export default function CustomDialog({ open, onClose, headerContent, children, footerContent, width = "600px", minWidth = "400px",
                                       maxWidth = "90%", dialogBg = "#1a73e8", headerBg = "#0b2f66", footerBg = "#0b2f66", 
                                       textColor = "#fff", borderRadius = "4px", overlayBg }: CustomDialogProps) {
  return <StyledDialog
      open={open}
      onClose={onClose}
      overlayBg={overlayBg}
      PaperProps={{ sx: { width, minWidth, maxWidth, borderRadius, overflow: "hidden" }}}
    >
      {headerContent && (
        <DialogTitle sx={{ background: headerBg, color: textColor, padding: 0, margin: 0, width: "100%"}}>
          {headerContent}
        </DialogTitle>
      )}

      <DialogContent sx={{ background: dialogBg, color: textColor, padding: "24px" }}>
        {children}
      </DialogContent>

      {footerContent && (
        <DialogActions sx={{ backgroundColor: footerBg, padding: "16px 24px" }}>
          {footerContent}
        </DialogActions>
      )}
    </StyledDialog>
};
