import { nanoid } from "nanoid";

export function Gamepad(obj){
    obj.id=nanoid();
    obj.name=obj.name||""
    obj.android=obj.android||""
    obj.pc=obj.pc||""
    obj.info=obj.info||""
    obj.desc=obj.desc||""
    return obj
}