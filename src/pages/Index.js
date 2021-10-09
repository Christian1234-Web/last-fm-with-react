
import React from 'react';
import Navbar from '../components/Navbar';
import Bg_content from '../components/Bg_content';
import Join_other from '../components/Join_other';
import Top_tracks from '../components/Top_tracks';
import Footer from '../components/Footer';
import Album from '../components/Album';
import Artist from '../components/Artist';
import Trending from '../components/Trending';
function Index() {
    return <div>
        <Navbar></Navbar>
        <Bg_content></Bg_content>
        <Join_other></Join_other>
        <Top_tracks/>


    
        <Album></Album>
        <Artist></Artist>
        <Trending></Trending>
        <Footer></Footer>
    </div>
}
export default Index;
    