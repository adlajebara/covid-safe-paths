import styled, { css } from '@emotion/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SvgXml } from 'react-native-svg';

import { Typography } from '../../components/Typography';
import { Divider } from '../../components/Divider';

/**
 * Render a single tappable settings item with optional description and icon.
 *
 * @param {{
 *   label: string,
 *   description?: string,
 *   onPress: (event: import('react-native').GestureResponderEvent) => void,
 *   last?: boolean,
 * }} param0
 */

type ItemProps = {
  label?: string;
  onPress?: () => void;
  description?: string;
  icon?: string;
  last?: boolean;
};

export const Item = ({
  label,
  onPress,
  description,
  icon,
  last,
}: ItemProps): JSX.Element => {
  const { i18n } = useTranslation();

  const getCurrentMarginDirection = () =>
    i18n.dir() === 'rtl' ? 'margin-left: 12px;' : 'margin-right: 12px;';

  const getCurrentRowDirection = () =>
    i18n.dir() === 'rtl' ? 'row-reverse' : 'row';

  return (
    <>
      <Container
        style={css`
          flex-direction: ${getCurrentRowDirection()};
        `}
        onPress={onPress}>
        {icon && (
          <Icon
            xml={icon}
            style={css`
              ${getCurrentMarginDirection()};
            `}
            size={24}
          />
        )}
        <Label>
          <Typography use='body1'>{label}</Typography>
          {description && (
            <Typography
              use='body3'
              secondary
              style={css`
                margin-top: 4px;
              `}>
              {description}
            </Typography>
          )}
        </Label>
      </Container>
      {!last && <Divider />}
    </>
  );
};

const Container = styled.TouchableOpacity`
  padding: 18px 0;
  align-items: center;
`;

const Label = styled.View`
  flex: 1;
  justify-content: center;
`;

const Icon = styled(SvgXml)`
  max-width: 24px;
  max-height: 24px;
  margin-top: 2.5px;
`;