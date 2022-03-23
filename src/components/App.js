import React from "react";
import CryptoList from "./CryptoList";
import ExchangeList from "./ExchangeList";
import NewsList from "./NewsList";
import { BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";

/*Yukarıda import edilen js dosyalarımızı app.js içerisine yerleştirip return edip ardından src/index.js'den ekrana verilmesi için yazdık. NavBar'dan diğer sayfalara erişim vermek için router kullandım. */

const App = () => {
  return (
    <div className="container">
      <div className="row">
      <Router>
        <div className="navbar-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg py-4 navbar-dark bg-primary shadow-sm">
                            <div className="container">
                                <div  className="navbar-brand">
                                    <Link className="link active" as={Link} to={"/"}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ka_Logo-Black.svg/107px-Ka_Logo-Black.svg.png?20171107213715" width="56" height={56} alt="KA LOGO" className="d-inline-block align-middle mr-3" /></Link>
                                    <Link className="link active" as={Link} to={"/"}><span className="text-uppercase font-weight-bold text-white">Kerem AKSOY Crypto Blog</span></Link>
                                </div>

                                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item">
                                           <Link className="nav-link active" as={Link} to={"/"}>Popular Coin</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" as={Link} to={"/news"}>News</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" as={Link} to={"/exchanges"}>Exchanges</Link>
                                        </li>
                                    </ul>
                                     <div className="nav-item dropdown">
                                        <button className="btn btn-primary dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Contact
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                           <li><a className="dropdown-item nav-link" href="https://github.com/KeremAksoy11?tab=repositories" target="_blank" rel='noreferrer'  >GitHub</a></li>
                                            <li><a className="dropdown-item nav-link" href="mailto:keremaksoy1127@gmail.com" target="_blank" rel='noreferrer' >Mail</a></li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div>

                        <Switch>
                            <Route path="/news">
                                <NewsList/>
                            </Route>
                            <Route path="/exchanges">
                              <ExchangeList/>
                            </Route>
                            <Route path="/">
                                <CryptoList/> 
                            </Route>
                        </Switch>
                </div>
                </div>
            </Router>
      </div>
    </div>
  )
}

export default App;

/* Router kullanım şekline dikkat et. Stil tam bu tarzda olmalı. AnaSayfya yönlendirmesi en sona gelmeli ve path="/" şeklinde yazılmalı */

/* Logoya ve sayfa başlığına tıklandığında da anasayfaya yönlendirme yapıyoruz. */