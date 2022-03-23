import React from "react";
import { connect } from "react-redux";
import { fetchCrypto, /* fetchMarkets */ } from '../actions'



/* Ana sayfamız burada yazılmıştır.   */ 

class CryptoList extends React.Component {

    componentDidMount() {
        this.props.fetchCrypto();
    /*     const veri = this.props.cryptos.map((crypto) =>(
            crypto.id
        ))
        const array =[veri];
        console.log(array)
        this.props.fetchMarkets(); */
    }





    renderList() {

        return (
            <div className="container">
                <div className="row">
                    <h2 className="text-center">Popularity Ranking of Cryptocurrencies</h2>
                    <hr />
                    {this.props.cryptos.map((crypto) => (
                        <div className="col-lg-3" key={crypto.id}>
                            <div className="card mb-5 shadow-sm">
                                <img src={crypto.icon} className="card-img-top" alt="Sample Crypto" />
                                <hr />
                                <div className="card-body" key={crypto.id}>
                                    <h4 className="text-center font-weight-bold">{crypto.name}</h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">{crypto.symbol}</li>
                                </ul>
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item text-center">{crypto.price}</li>
                                </ul>  <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Popularity Ranking: {crypto.rank}</li>
                                </ul>
                                <div className="card-body">
                                    <a href={crypto.websiteUrl} target="_blank" rel='noreferrer' ><button className="btn btn-success btn-lg btn-block " >{crypto.name} WebSite </button></a>
                                </div>
                            </div>
                           {/*  <div>

                                {this.props.markets.map((market) => (
                                    <h2>{"Crypto " + market.pair + "  Listed Exchange " + market.exchange}</h2>
                                ))}
                            </div>
 */}
                        </div>
                    ))}
                </div>
            </div>
        )
    }



    render() {
        return (
            <div>{this.renderList()}</div>

        )
    };
};

const mapStateToProps = (state) => {
    return { cryptos: state.cryptos /* markets: state.markets */ };

};

/*  cryptos ismini index reducer'da yazmıştık, ardından map functionunu kullandığımızda da cryptos ismini kullandık*/

export default connect(mapStateToProps, { fetchCrypto /*  fetchMarkets */ })(CryptoList);

