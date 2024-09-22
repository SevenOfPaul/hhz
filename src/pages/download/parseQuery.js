export default function parseQuery(defaultUrl){
    if(!defaultUrl){
        return Promise.reject("链接无效")
    }
    const sPos=defaultUrl.indexOf("/s/");
    const badiuPos=defaultUrl.indexOf("pan.baidu.com");
    if(sPos==-1||badiuPos==-1){
        return Promise.reject("链接无效")
    }
    const pwdPos=defaultUrl.indexOf("?pwd");
    const url=defaultUrl.slice(0,pwdPos==-1?defaultUrl.length:pwdPos);
    const pwd=pwdPos==-1?"":defaultUrl.slice(pwdPos,defaultUrl.length);
    const surl=defaultUrl.slice(sPos+3,pwdPos==-1?defaultUrl.length:pwdPos);
    return Promise.resolve({surl,pwd,url})
}