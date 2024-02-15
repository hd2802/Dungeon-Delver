import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import TrialCampaign from './pages/TrialCampaign.js';

import Barb1 from './pages/trial-campaign-pages/Barb1.js';
import Barb21 from './pages/trial-campaign-pages/Barb21.js';
import Barb211 from './pages/trial-campaign-pages/Barb211.js';
import Barb212 from './pages/trial-campaign-pages/Barb212.js';
import Barb22 from './pages/trial-campaign-pages/Barb22.js';
import Barb23 from './pages/trial-campaign-pages/Barb23.js';
import Barb3 from './pages/trial-campaign-pages/Barb3.js';
import Barb31 from './pages/trial-campaign-pages/Barb31.js';
import Barb32 from './pages/trial-campaign-pages/Barb32.js';
import Barb33 from './pages/trial-campaign-pages/Barb33.js';
import Barb311 from './pages/trial-campaign-pages/Barb311.js';
import Wizard1 from './pages/trial-campaign-pages/Wizard1.js';
import Wizard21 from './pages/trial-campaign-pages/Wizard21.js';
import Wizard211 from './pages/trial-campaign-pages/Wizard211.js';
import Wizard212 from './pages/trial-campaign-pages/Wizard212.js';
import Wizard3 from './pages/trial-campaign-pages/Wizard3.js';
import Wizard31 from './pages/trial-campaign-pages/Wizard31.js';
import Wizard311 from './pages/trial-campaign-pages/Wizard311.js';
import Wizard32 from './pages/trial-campaign-pages/Wizard32.js';
import Wizard33 from './pages/trial-campaign-pages/Wizard33.js';
import Wizard22 from './pages/trial-campaign-pages/Wizard22.js';
import Wizard23 from './pages/trial-campaign-pages/Wizard23.js';
import Rogue1 from './pages/trial-campaign-pages/Rogue1.js';
import Rogue21 from './pages/trial-campaign-pages/Rogue21.js';
import Rogue211 from './pages/trial-campaign-pages/Rogue211.js';
import Rogue212 from './pages/trial-campaign-pages/Rogue212.js';
import Rogue3 from './pages/trial-campaign-pages/Rogue3.js';
import Rogue31 from './pages/trial-campaign-pages/Rogue31.js';
import Rogue32 from './pages/trial-campaign-pages/Rogue32.js';
import Rogue33 from './pages/trial-campaign-pages/Rogue33.js';
import Rogue311 from './pages/trial-campaign-pages/Rogue311.js';
import Rogue22 from './pages/trial-campaign-pages/Rogue22.js';
import Rogue23 from './pages/trial-campaign-pages/Rogue23.js';

import CampaignEndBandit from './pages/trial-campaign-pages/CampaignEndBandit.js';
import CampaignEndStealth from './pages/trial-campaign-pages/CampaignEndStealth.js';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trial-campaign" element={<TrialCampaign/>} />
        <Route path="/barb-page-1" element={<Barb1/>}/>
        <Route path="/barb-page-2-1" element={<Barb21/>}/>
        <Route path="/barb-page-2-1-1" element={<Barb211/>}/>
        <Route path="/barb-page-2-1-2" element={<Barb212/>}/>
        <Route path="/barb-page-3" element={<Barb3/>}/>
        <Route path="/barb-page-3-1" element={<Barb31/>}/>
        <Route path="/barb-page-3-2" element={<Barb32/>}/>
        <Route path="/barb-page-3-3" element={<Barb33/>}/>
        <Route path="/barb-page-2-2" element={<Barb22/>}/>
        <Route path="/barb-page-2-3" element={<Barb23/>}/>
        <Route path="/barb-page-3-1-1" element={<Barb311/>}/>
        <Route path="/wizard-page-1" element={<Wizard1/>}/>
        <Route path="/wizard-page-2-1" element={<Wizard21/>}/>
        <Route path="/wizard-page-2-1-1" element={<Wizard211/>}/>
        <Route path="/wizard-page-2-1-2" element={<Wizard212/>}/>
        <Route path="/wizard-page-3" element={<Wizard3/>}/>
        <Route path="/wizard-page-3-1" element={<Wizard31/>}/>
        <Route path="/wizard-page-3-2" element={<Wizard32/>}/>
        <Route path="/wizard-page-3-3" element={<Wizard33/>}/>
        <Route path="/wizard-page-3-1-1" element={<Wizard311/>}/>
        <Route path="/wizard-page-2-2" element={<Wizard22/>}/>
        <Route path="/wizard-page-2-3" element={<Wizard23/>}/>
        <Route path="/rogue-page-1" element={<Rogue1/>}/>
        <Route path="/rogue-page-2-1" element={<Rogue21/>}/>
        <Route path="/rogue-page-2-1-1" element={<Rogue211/>}/>
        <Route path="/rogue-page-2-1-2" element={<Rogue212/>}/>
        <Route path="/rogue-page-3" element={<Rogue3/>}/>
        <Route path="/rogue-page-3-1" element={<Rogue31/>}/>
        <Route path="/rogue-page-3-2" element={<Rogue32/>}/>
        <Route path="/rogue-page-3-3" element={<Rogue33/>}/>
        <Route path="/rogue-page-3-1-1" element={<Rogue311/>}/>
        <Route path="/rogue-page-2-2" element={<Rogue22/>}/>
        <Route path="/rogue-page-2-3" element={<Rogue23/>}/>
        <Route path='/campaign-end-bandit' element={<CampaignEndBandit/>}/>
        <Route path='/campaign-end-stealth' element={<CampaignEndStealth/>}/>
      </Routes>
    </>
  );
}

export default Router;
