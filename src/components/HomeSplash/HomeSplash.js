import React, { Component } from 'react';
import HomeHero from '../HomeHero/HomeHero'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer'
import UpcomingGames from '../UpcomingGames/UpcomingGames'
import HomeFooter from '../HomeFooter/HomeFooter'

import './HomeSplash.css'

class HomeSplash extends Component {
    render() {
        return (
            <main className='HomeSplash' role='main'>
                <HomeHero />
                <WhoWeAre />
                <WhatWeOffer />
                <UpcomingGames />
                <HomeFooter />
            </main>
        )
    }
}

export default HomeSplash