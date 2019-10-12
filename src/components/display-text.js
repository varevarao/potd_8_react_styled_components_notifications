import React from 'react';
import styled from 'styled-components';

export const StrongText = styled.span`
  font-weight: 500;
`;

export const PlainText = styled.span`
  font-weight: 400;
`;

export const SubduedText = styled(PlainText)`
  color: lightgray;
`;

const VARIANT_MAP = {
    'strong': StrongText,
    'plain': PlainText,
    'subdued': SubduedText,
    'default': PlainText
}

export const DisplayText = ({ variant, children, ...rest }) => {
    const TextComponent = (variant && variant in VARIANT_MAP) ? VARIANT_MAP[variant] : VARIANT_MAP.default;
    return (
        <TextComponent {...rest}>
            {children}
        </TextComponent>
    );
}