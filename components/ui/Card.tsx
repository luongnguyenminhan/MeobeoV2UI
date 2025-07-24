import React from 'react';
import {
  Card as AntdCard,
  Avatar,
  Typography,
  Image,
  Button as AntdButton,
  Row,
  Col,
} from 'antd';

const { Title, Text } = Typography;

interface CardProps {
  avatarSrc: string;
  avatarName: string;
  heading: string;
  subheading: string;
  bodyText: string;
  imageSrc: string;
  imageAlt: string;
  onCommentClick?: () => void;
  onShareClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  avatarSrc,
  avatarName,
  heading,
  subheading,
  bodyText,
  imageSrc,
  imageAlt,
  onCommentClick,
  onShareClick,
}) => {
  return (
    <AntdCard style={{ maxWidth: 400 }} bodyStyle={{ padding: 16 }}>
      <Row align="middle" gutter={12} style={{ marginBottom: 12 }}>
        <Col>
          <Avatar src={avatarSrc} alt={avatarName} size={48} />
        </Col>
        <Col flex="auto">
          <Title level={5} style={{ margin: 0 }}>
            {heading}
          </Title>
          <Text type="secondary">{subheading}</Text>
        </Col>
      </Row>
      <Text style={{ display: 'block', marginBottom: 12 }}>{bodyText}</Text>
      <Image
        src={imageSrc}
        alt={imageAlt}
        style={{ width: '100%', objectFit: 'cover', marginBottom: 12 }}
        preview={false}
      />
      <Row justify="space-between" gutter={8}>
        <Col>
          <AntdButton onClick={onCommentClick}>Comment</AntdButton>
        </Col>
        <Col>
          <AntdButton onClick={onShareClick}>Share</AntdButton>
        </Col>
      </Row>
    </AntdCard>
  );
};

export default Card;
