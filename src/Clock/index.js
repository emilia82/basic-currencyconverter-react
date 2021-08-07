import { Wrapper } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

   
const todayDate = (date) => date.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    
    export const Clock = () => {
        const date = useCurrentDate();
    

    return (
        <Wrapper>
          Dzisiejsza data: {todayDate(date)}
            </Wrapper>
        
    );
};

export default Clock;