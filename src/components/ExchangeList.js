import React from "react";
import { connect } from "react-redux";
import { fetchExchange } from '../actions'


/* Ulusal para birimlerinin listelendiği componentimiz burada yazılmıştır. Yöntemler birebirdir.*/

class ExchangeList extends React.Component {
    componentDidMount() {
        this.props.fetchExchange();
    }
    renderList() {

        return (
            <div className="container">
                <div className="row">
                    <h2 className="text-center">Instant Exchange Rates</h2>
                    <hr />
                    {this.props.exchanges.map((exchange) => (
                        <div className="col-lg-3">
                            <div className="card mb-5 shadow-sm" key={exchange.id}>
                                <img src={exchange.imageUrl} className="card-img-top" alt="Sample Exchange" />
                                <hr />
                                <div className="card-body">
                                    <h5 className="text-center">{exchange.name}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">{exchange.symbol}</li>
                                  
                                </ul>
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item text-center">{exchange.rate}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }


    render() {
        return <div>{this.renderList()}</div>
    };
};

const mapStateToProps = (state) => {
    return { exchanges: state.exchanges };
};

/*  exchanges ismini index reducer'da yazmıştık, ardından map functionunu kullandığımızda da exchanges ismini kullandık*/

export default connect(mapStateToProps, { fetchExchange })(ExchangeList);

/*
<div className="row">
<div className="col-lg-4" key={crypto.id}>
<img src={crypto.icon} className="card-img-top" alt="Sample Crypto" />
  <div class="card-body">
    <h5 class="card-title">{crypto.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{crypto.symbol}</li>
    <li class="list-group-item">{crypto.price}</li>
  </ul>
  <div class="card-body">
  <button type="button" className="btn btn-success">Buy</button>
  </div>
</div> */