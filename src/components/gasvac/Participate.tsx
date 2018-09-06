import * as React from 'react';
import { SectionGrid } from '../../layout';
import { ComponentProps } from '../../types';
import { Description } from './Description';
import { Info } from './Info';

export const Participate = (props: Partial<ComponentProps<typeof SectionGrid>>) => (
  <SectionGrid bg="darkLight" title="Participate" {...props}>
    <Description />
    <Info />
  </SectionGrid>
);
