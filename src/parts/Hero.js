import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg'
import IconClients from 'assets/images/icons/ic-clients.svg'
import IconCities from 'assets/images/icons/ic-cities.svg'
import IconTreasure from 'assets/images/icons/ic-treasure.svg'

import Button from 'elements/Button'
export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }
    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530}}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Gapailah Mimpimu,<br />
                        bersama Kost Impianmu
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%"}}>
                        Kami menyediakan apa yang Anda butuhkan dalam menikmati 
                        kehidupan karir Anda.
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Temukan kostan Impianmu
                    </Button>

                    <div className="row" style={{ marginTop: 80}}>
                        <div className="col-auto" style={{ marginRight: 35}}>
                            <img width="36" height="36" src={IconClients} alt={`${props.data.clients} Clients`} />
                            <h6 className="mt-3">
                                {props.data.clients} <span className="text-gray-00 font-weight-light">
                                    Klien
                                </span>
                            </h6>
                        </div>
                            <div className="col-auto" style={{ marginRight: 35}}>
                            <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`} />
                            <h6 className="mt-3">
                                {props.data.cities} <span className="text-gray-00 font-weight-light">
                                    Kota
                                </span>
                            </h6>
                        </div>
                            <div className="col-auto">
                            <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasure} Treasure`} />
                            <h6 className="mt-3">
                                {props.data.treasure} <span className="text-gray-00 font-weight-light">
                                    Kostan
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-5">
                    <div style={{ width: 520, height: 410}}>
                        <img src={ImageHero} alt="Boarding House" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1}} />
                        <img src={ImageHeroFrame} alt="Boarding House with Frame" className="img-fluid position-absolute" style={{ margin: '-0 -15px -15px 0px' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

