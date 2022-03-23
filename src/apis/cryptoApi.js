import axios from 'axios';


export default axios.create({
    baseURL : 'https://api.coinstats.app/public/v1'
}) /* Ana Api sorgularımızın baş noktası burasıdır. Bu Linkin devamına actiona devam ederek api sorgularımızı alıyoruz. */