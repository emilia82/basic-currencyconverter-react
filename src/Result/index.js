import React from 'react';
import { Wrapper } from '../Clock/styled';


export const Result = ({ result }) => (
    <Wrapper>
        {!!result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </Wrapper>
);



