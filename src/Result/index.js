import React from 'react';
import { Wrapper } from '../Clock/styled';
import { StyledResult } from './styled';

export const Result = ({ result }) => (
    <Wrapper>
        <StyledResult />
        {!!result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp; {" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </Wrapper>
);



