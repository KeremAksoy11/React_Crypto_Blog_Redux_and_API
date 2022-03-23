import { combineReducers } from "redux";
import cryptoReducer from "./cryptoReducer";
import newsReducer from "./newsReducer";
import exchangeReducer from "./exchangeReducer";
import marketReducer from "./marketReducer";

export default combineReducers({ 
    cryptos : cryptoReducer,
    newscast : newsReducer,
    exchanges : exchangeReducer,
    markets : marketReducer
  }); 

  /* reducer: Action'dan gelen verileri süzgeçleyip store'da belirtilen veriyi güncellememizi sağlayan bir araç. action: Reducer'lara ulaşarak onları tetikleyen, store'daki güncellemesi gereken veriyi yollan bir araç. 
  Reducer: State ve action'ı parametre alan ve yeni state'i dönen pure bir fonksiyondur */