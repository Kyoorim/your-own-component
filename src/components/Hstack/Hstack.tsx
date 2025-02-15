import React from 'react';
import Stack from '../Stack/Stack';
import { CustomProps } from '../Stack/Stack';
import { FCC } from '../../types';

export const HStack: FCC<CustomProps> = ({ direction, gap, ...props }) => {
  return <Stack data-testid="hstack-comp" direction="row" gap={gap} {...props}></Stack>;
};

export default HStack;
