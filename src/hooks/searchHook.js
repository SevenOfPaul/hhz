export function code1HasCode2(code1,code2){
   return code1.indexOf(code2)!==-1||code1.indexOf(code2.toUpperCase())!==-1||code1.indexOf(code2.toLowerCase())!==-1
}