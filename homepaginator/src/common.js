export function RandomID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        // eslint-disable-next-line
        return (c==='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

  export function formatUrl(url) {
    if(!url) { return; }
    let _url = '';

    url = url.replace('http://', '');
    url = url.replace('https://', '');
    let arr = url.split('');
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if(el === '/') {
                break 
            } else {
                _url += el;
            }
        }
    return _url;
  }