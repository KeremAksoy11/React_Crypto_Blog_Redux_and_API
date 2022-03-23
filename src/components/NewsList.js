import React from "react";
import { connect } from "react-redux";
import { fetchNews } from "../actions"

const space = '⠀' /*  Bu space değişkenimiz boş karakterdir. Çünkü api'den gelen haber içeriği detayına paragraf başı  yaparmış şeklinde görülsün istedim ve bunu kullandım. */
const truncateOverview = (string, maxLength) => {
    if(!string) return null;
    if(string.lenght <= maxLength) return string;
    return `${string.substring(0,maxLength)} ...`;
} /* Bu fonksiyonumuz ise api'den gelen haber içeriğinin ilk XX karakterini kadar ekrana yazdırması gerektiğii ve ardından 3 nokta şeklinde devam etmesini istesiğim için kullandım.*/

class NewList extends React.Component {
    componentDidMount() {
        this.props.fetchNews();
    }



    renderList() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <h2 className="text-center">Crypto News</h2>
                        <hr />
                    </div>
                    {this.props.newscast.map((news) => (

                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-3" key={news.id}>
                                    <img src={news.imgURL} className="img-fluid rounded-start" alt="..." height={150}  width={1010}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body" >
                                        <h3 className="card-title">{news.title}</h3>
                                        <br />
                                        <p className="card-text">{truncateOverview(  space + news.description, 100)}</p>
                                        <a href={news.link} target='_blank' rel='noreferrer' className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };



    render() {
        return (
            <div>{this.renderList()}</div>)
    };

};


const mapStateToProps = (state) => {
    return { newscast: state.newscast };
};
/*  newscast ismini index reducer'da yazmıştık, ardından map functionunu kullandığımızda da newscast ismini kullandık*/

export default connect(mapStateToProps, { fetchNews })(NewList);



/* 
  const truncateOverview = (string, maxLength) => {
        if(!string) return null;
        if(string.lenght <= maxLength) return string;
        return `${string.substring(0,maxLength)} ...`;
    } 

    

      */