

export const setLocalStorage = function (arg) {
    let { key, value } = arg;
    window.localStorage.setItem(key, value);
};

export const getLocalStorage = function (key) {
    return window.localStorage.getItem(key);
} 
