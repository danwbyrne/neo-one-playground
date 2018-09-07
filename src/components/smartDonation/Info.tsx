import * as React from 'react';
import { Button, Flex, Grid, styled } from 'reakit';
import { WithContracts } from '../../../one/generated';
import vacuum from '../../../root/audio/vacuum.mp3';
import { ComponentProps } from '../../types';

const StyledGrid = styled(Grid)`
  padding: 8px 0;
`;

const audio = new Audio(vacuum);

export function Info(props: ComponentProps<typeof StyledGrid>) {
  return (
    <WithContracts>
      {({ client, gasVac }) => (
        <Flex justifyContext="flex-end">
          <Button
            data-test="contribute-button"
            onClick={() => {
              const from = client.getCurrentAccount();
              if (from === undefined) {
                return;
              }
              audio.play();
              gasVac
                .vacuum(from.id.address)
                .then((result) => {
                  result.confirmed();
                })
                .catch((err) => console.error(err));
            }}
          />
        </Flex>
      )}
    </WithContracts>
  );
}
