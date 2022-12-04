/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const { url, data, method, callback } = options;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let formData = new FormData();
    const arr = [];
    for (let key in data) {
        arr.push(`${key}=${data[key]}`);
    }
    for (let item in data) {
        FormData.append(item, data[item]);
    }
    try {
        xhr.open(method, resultUrl);
        xhr.send(method === 'GET' ? null : formData);
    } catch (e) {
        callback(e);
    }
    xhr.onerror = function() {
        callback(xhr.statusText, null);
    }
};