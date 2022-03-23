import cryptoApi from "../apis/cryptoApi";



export const fetchCrypto = () => async dispatch => {
    const response = await cryptoApi.get(`/coins?skip=0&limit=${100}`)

    dispatch({ type: 'FETCH_CRYPTO', payload: response.data.coins })

}; /* Bu Api sorgumuz ile 100 tane coin listelemesini istedik */

export const fetchNews = () => async dispatch => {
    const response = await cryptoApi.get("/news/trending?skip=0&limit=20")

    dispatch({ type: 'FETCH_NEWS', payload: response.data.news })
}/* bu api sorgumuzdan trend haberlerden 20 tanesini getirmesini istedik */


export const fetchExchange = () => async dispatch =>{
  const response = await cryptoApi.get("/fiats")

  dispatch({type : 'FETCH_EXCHANGE' , payload : response.data})
}/* bu api sorgumuzdan ulusal para birimlerini getirmesini istedik. */


/* 
export const fetchMarkets = () =>async dispatch=>{
  const response = await cryptoApi.get(`/markets?coinId=${}`)
  
  dispatch({type : 'FETCH_MARKETS', payload : response.data})
} // Eğer çalıştırabilseyim hangi kripto paranın hangi borsada listelendiğini görecektik lakin istediğim gibi olmadı. Parametrelerde doğru çalışamadım.

 */















/*
export function App(){


const perPage = 3;
const [totalPages, setTotalPages] = useState(1);
const [page, setPage] = useState(1);

const [userList, setUserList] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  const getUserList = () => {
    setLoading(true);
    fetch(`https://reqres.in/api/users?per_page=${perPage}&page=${page}`)
      .then(res => res.json())
      .then(res => {
        setTotalPages(res.total_pages);
        setUserList([...userList, ...res.data]);
        setLoading(false);
      });
  }
  getUserList();
}, [page]);
} */

// ULUSAL PARA BİRİMLERİNİ ALIR
/* export const fetchNews = () => async dispatch=>{
    const response = await cryptoApi.get("/fiats")

    dispatch({type : 'FETCH_NEWS', payload : response.data})
} */


/* Bir paranın diğer piyasa değerlerini alır.
export const fetchNews = () => async dispatch=>{
    const response = await cryptoApi.get("/markets?coinId=bitcoin")

    dispatch({type : 'FETCH_NEWS', payload : response.data})
}*/

/* COİN / ULUSAL PARA BİRİMİ ÇEVİRİMİ 
export const fetchNews = () => async dispatch=>{
    const response = await cryptoApi.get("/tickers?exchange=yobit&pair=BTC-USD")

    dispatch({type : 'FETCH_NEWS', payload : response.data.tickers})
}*/