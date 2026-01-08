import React from "react";
import { Button, Card, Typography } from "antd";
import { CardItemProps } from "../types/props";
import { ArrowUpOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function CardItem({
  title, value, description, extra, loading = false,
  variant = 'borderless', style, styleValue, styleDescription, className, icon
}: CardItemProps) {
  return (
    <div style={{
      position: 'relative',
      borderRadius: 8,
      padding: 1,
      background: 'linear-gradient(-140deg, rgba(19,22,20,1), rgba(62,139,255,1))',
      color: 'white',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        padding: 0.5, // spessore del bordo
        borderRadius: 8,
        background: 'linear-gradient(315deg, rgba(255,255,255,0.8), rgba(255,255,255,0))',
        WebkitMask:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        pointerEvents: 'none',
      }} />
      <Card title={
        <span
          style={{
            color: 'white',
            fontWeight: 700,
            fontSize: '24px',
          }}
        >
          {title}
        </span>
      }
        extra={extra}
        loading={loading}
        variant={variant}
        style={style}
        className={className}
      >
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          background: 'transparent',
          alignItems: 'center',
          height: '43px',
        }}>
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}>
            <Text strong style={{ fontSize: 18, color: 'white', ...styleValue }}>
              <Button size="middle" style={{ backgroundColor: 'white', borderRadius: 30 }} icon={icon} iconPlacement="end">
                <Text style={{ color: 'black', fontWeight: 500 }}>{value}</Text>
              </Button>
            </Text>
          </div>
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}>
            {description ? (
              <Text type="secondary" style={{ color: 'white', fontSize: 14, ...styleDescription }}>{description}</Text>
            ) : null}
          </div>
        </div>
      </Card>
    </div>
  );
}
