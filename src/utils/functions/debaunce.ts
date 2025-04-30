const debounce = (): (func: () => void, delay: number) => void => {
    let timer: number;
    return function (func: () => void, delay: number) {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    }
}

export default debounce;