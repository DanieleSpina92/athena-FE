import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { CustomTableProps } from "../types/props";

export default function CustomTable<T extends Record<string, any>>({ columns, data, headerGradient, headerTextColor, rowGradient, rowTextColor, style = {}}: CustomTableProps<T>) {
  return <TableContainer component={Paper} sx={{ boxShadow: "none", ...style }} >
      <Table sx={{ borderCollapse: "collapse" }}>
        <TableHead>
          <TableRow sx={{ background: headerGradient }}>
            {columns.map((col) => (
              <TableCell
                key={col.key}
                sx={{
                  color: headerTextColor,
                  fontWeight: "bold",
                  border: "none",
                  textAlign: "center",
                  p: 1,
                }}
              >
                {col.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} sx={{ background: rowGradient, color: rowTextColor, border: "none" }}>
              {columns.map((col) => {
                const cellValue = row[col.dataIndex];
                return (
                  <TableCell
                    key={col.key}
                    sx={{
                      color: rowTextColor,
                      textAlign: "center",
                      border: "none",
                      p: 3,
                    }}
                  >
                    {col.render
                      ? col.render(cellValue, row, rowIndex)
                      : (cellValue as React.ReactNode)
                    }
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
}
