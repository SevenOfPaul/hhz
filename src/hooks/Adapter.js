import { nanoid } from "nanoid";

export function Gamepad(obj,parmas){
    obj.id=nanoid();
    for(let v of parmas){
        obj[v]=obj[v]||""
    }
    return obj
}
export function bindSouce(obj,parmas){
    for(let v of parmas){
        obj[v]=obj[v]||""
    }
    return obj
}