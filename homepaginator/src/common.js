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

  export const filterStates = {
    Default: 'Home',
    MostViewed: "Most viewed",
    History: 'History',
    Pins: 'Pins',
    Folders: 'Folders',
  }

  export const dateEnum = {
    Today: 'Today',
    Yesterday: 'Yesterday',
    Week: 'Week',
    Month: 'Month',
  }

  //TO-DO get date ranges for week and month
  export function getDateRange(date) {
    let dateRange = [];
    let dateObj = new Date();
    switch (date) {
      case date.Yesterday:
        dateRange.push(dateObj.setDate(dateObj.getDate() - 1));
        break;
      case date.Week:
        break;
      default:
      case date.Today:
        dateRange.push(dateObj);
        break;
    }
    return dateRange;
  }