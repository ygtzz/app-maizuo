export function fFormatUtcDate(sUtcDateString){
    return sUtcDateString.replace('T',' ').replace('Z','').replace(/-/g,'/');
}

export function fConvertTimeToDate(time){
    var d = new Date(time);
    return d.toLocaleDateString();
}

export function fConvertTimeToMonthDay(time){
    var aDate = fConvertTimeToDate(time).split('/');
    if(aDate.length > 2){
        return aDate[1] + '月' + aDate[2] + '日';
    }
    else{
        return '';
    }
}