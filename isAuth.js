import { getCookies } from 'next-client-cookies/server';

export default function isAuth() {
    const cookies = getCookies();
    let token = cookies.get('token')
    // TODO: Burada cookie varsa  true yoksa false dönülecek
    if(token){
        return true
    }
    return false
}