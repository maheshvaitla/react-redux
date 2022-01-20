
import { DEC_COUNT, INC_COUNT } from "./actionType";



export const inc_count = (count) =>
{
    return {
        type: INC_COUNT,
        payload:count,
    }
    
};


export const dec_count = ( count ) =>
{
    return {
        type: DEC_COUNT,
        payload:count,
    }
}