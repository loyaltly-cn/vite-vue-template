const get = (key: string) => localStorage.getItem(key);
const set = (key: string, val: string) => localStorage.setItem(key,val)
const remove = (key: string) => localStorage.removeItem(key)
const clear = (key: string) => localStorage.removeItem(key)

export default {
    get,
    set,
    remove,
    clear
}

