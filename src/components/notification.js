import React from 'react';
import styled from 'styled-components';
import { DisplayPicture } from './display-picture';
import { DisplayText } from './display-text';

const Notification = styled.div`
  height: 4rem;
  width: 100%;

  margin-top: 2px;
  margin-bottom: 2px;

  display: flex;

  background-color: white;
`;

const NotificationImage = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotificationContent = styled.div`
  flex: 5;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;
`;

const NotificationText = styled.div`
  font-size: 0.875rem;

  >:first-child::after {
    content: ' '
  }
`;

const NotificationTime = styled.div`
  font-size: 0.8rem;
`;

export const NotificationLine = ({ image, name, description, time }) => (
  <Notification>
    <NotificationImage>
      <DisplayPicture image={image} />
    </NotificationImage>
    <NotificationContent>
      <NotificationText>
        <DisplayText variant="strong">{name}</DisplayText>
        <DisplayText>{description}</DisplayText>
      </NotificationText>
      <NotificationTime>
        <DisplayText variant="subdued">{time}</DisplayText>
      </NotificationTime>
    </NotificationContent>
  </Notification>
)