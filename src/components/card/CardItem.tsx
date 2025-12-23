import React from "react";
import { Card, Typography } from "antd";
import { CardItemProps } from "../types/props";

const { Text } = Typography;

export default function CardItem({ title, value, description, extra, loading = false, bordered = true, style }: CardItemProps) {
  return <Card title={title} extra={extra} loading={loading} bordered={bordered} style={style}>
      <Text strong style={{ fontSize: 18 }}>
        {value}
      </Text>
      {description && (
        <>
          <br />
          <Text type="secondary">{description}</Text>
        </>
      )}
    </Card>
}
