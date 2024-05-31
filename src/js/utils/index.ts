import crypto from 'crypto-js'
const KEY = 'https://github.com/loyaltly-cn/'

const md5 = (val:string) => crypto.MD5(val).toString()
const encrypt = (val: string) => crypto.AES.encrypt(val,KEY).toString()
const decrypt = (val:string) => crypto.AES.decrypt(val,KEY).toString(crypto.enc.Utf8)


export default {
    md5,
    encrypt,
    decrypt
}