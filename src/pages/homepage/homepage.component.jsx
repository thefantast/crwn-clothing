import React from 'react';

import Directory from '../../components/directory/directory.component'
import Header from '../../container/header/header.component'
import Promotion from '../../container/Promotion/promotion.component'
import SpecialArtist from '../../container/SpecialArtist/SpecialArtist.component'
import Promotion2 from '../../container/Promotion2/Promotion2.component'
import Footer from '../../components/footer/footer.component';
import ArtistShowCase from '../../container/ArtistShowCase/ArtistShowCase';
import Promotion3 from '../../container/Promotion3/Promotion.component';
import Promotion4 from '../../container/Promotion4/Promotion4.component';

import { HomePageContainer } from './homepage.styles';


const Homepage = () => (
<HomePageContainer>
    <Header />
    <Directory />
    <Promotion3 />
    <Promotion />
    <SpecialArtist />
    <Promotion2 />
    <Promotion4 />
    <ArtistShowCase />
    <Footer />
</HomePageContainer>




);

export default Homepage;
