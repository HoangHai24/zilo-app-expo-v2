export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
};

export const objectGetVal = (objKey, obj, typeObj = 'str', def = '') => {
    let returnVal = obj;
    const arrChild = objKey.split('.');
    arrChild.forEach(child => {
        if ((typeof returnVal === 'object') && (child in returnVal)) {
            returnVal = returnVal[child]
        } else {
            returnVal = def;
            return null;
        }
    });
    switch (typeObj) {
        case 'str':
            returnVal = String(returnVal);
            break;
        case 'int':
            returnVal = returnVal ? Number(returnVal) : def;
            break;
        case 'obj':
            returnVal = Object(returnVal);
            break;
        case 'arr':

            break;
        default:
            break
    }
    return returnVal;
};

export const showDuration = time => {
    const today = parseInt(new Date().getTime() / 1000);
    let duration = today - time;
    if (duration < 60) {
        return duration + ' giây trước';
    }
    if (duration < 86400) {
        let h = parseInt(duration / 3600);
        duration = duration - h * 3600;
        let m = parseInt(duration / 60);
        if (h > 0) return h + 'h ' + m + '\' trước';
        if (m > 0) return m + '\' trước';
    }
    const date = new Date(time * 1000);
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
};

export const chatDuration = (time, type = 0) => {
    if (!time || time <= 0) {
        return {
            type: 0,
            text: type === 0 ? "Vừa gửi" : "Vừa nhận"
        }
    }
    const today = parseInt(new Date().getTime() / 1000) + 1;

    const d = today - time;
    if (d < 60) {
        return {
            type: 1,
            text: (type === 0 ? "Vừa gửi" : "Vừa nhận") + d
        }
    }
    if (d < 3600) {
        return {
            type: 2,
            text: `${parseInt(d / 60)}' trước`
        }
    }

    const cYear = new Date().getFullYear();
    const chatYear = new Date(time * 1000).getFullYear();
    const date = new Date(time * 1000);
    if (new Date().getDay() === date.getDay()) {
        return {
            type: 3,
            text: date.getHours() + ':' + date.getMinutes()
        }
    }
    if (cYear === chatYear) {
        return {
            type: 4,
            text: date.getDate() + '/' + (date.getMonth() + 1) + ', ' + date.getHours() + ':' + date.getMinutes()
        }
    }
    return {
        type: 5,
        text: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes()
    }
}

export const groupMessage = (data) => {
    const initTime = (new Date()).getTime() / 1000;
    let startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    return data.reduce((arrReturn, item) => {
        const k = arrReturn.length;
        if (k <= 0) {
            arrReturn.push({
                author: item.author,
                time: item.milli_time,
                data: [{
                    type: item.type,
                    data: item.data
                }]
            })
        } else {
            const lG = arrReturn[k - 1];
            if (lG.author === item.author) {
                let dTime = 300;
                if (initTime - item.milli_time > 3600) dTime = 1800;
                if (initTime - item.milli_time > 36000) dTime = 3600;
                if (lG.time - item.milli_time < dTime) {
                    lG.data.push({
                        type: item.type,
                        data: item.data
                    })
                } else {
                    arrReturn.push({
                        author: item.author,
                        time: item.milli_time,
                        data: [{
                            type: item.type,
                            data: item.data
                        }]
                    })
                }
            } else {
                arrReturn.push({
                    author: item.author,
                    time: item.milli_time,
                    data: [{
                        type: item.type,
                        data: item.data
                    }]
                })
            }
        }
        return arrReturn;
    }, [])
}

export const pushMessage = (item, datas) => {
    const time = parseInt(new Date().getTime() / 1000) - 1;
    if (datas.length <= 0) {
        return [
            {
                author: item.author,
                time: time,
                data: [{
                    type: item.type,
                    data: item.data
                }]
            }
        ]
    }
    const data = datas[0];
    if (data.author === item.author) {
        if (time - data.time > 300) {
            datas = [{
                author: item.author,
                time: time,
                data: [{
                    type: item.type,
                    data: item.data
                }]
            }, ...datas]
        } else {

            data.time = time;
            data.data = [{
                type: item.type,
                data: item.data
            }, ...data.data]
        }
    } else {
        datas = [{
            author: item.author,
            time: time,
            data: [{
                type: item.type,
                data: item.data
            }]
        }, ...datas]
    }
    return datas;
}
