import { getCookies } from 'next-client-cookies/server';

export default function isAuth() {
    const cookies = getCookies();
    console.log(cookies.get('token'))
    // TODO: Burada cookie varsa  true yoksa false dönülecek
    return false
}