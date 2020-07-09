import React, {useEffect, useState} from 'react';
import {getCampaign} from '../../services/service';
import Loader from "../../Loader";
import Team from "./team-component/Team";
import ColorExplanation from "./color-explanation/ColorExplanation";

const Scenario = () => {
    const [campaign, setCampaign] = useState({});
    useEffect(() => {
        async function getCampaignFromService() {
            let campaignObj = await getCampaign();
            setCampaign(campaignObj);
        }

        getCampaignFromService();
    }, []);

    if (Object.keys(campaign).length < 1) {
        return <Loader/>;
    }

    return (
        <div className="Scenario">
            <div className="titleContainer">
                <div className="scenarioTitle">Scenario Visualization</div>
                <div className="campaignName">{campaign.campaign_name && campaign.campaign_name}</div>
            </div>
            {campaign.team_instances && <div className="teamsWrapper">
                {campaign.team_instances.map((t, index) => <Team details={t} key={index}/>)}
            </div>}
            <ColorExplanation/>
        </div>
    );
};

export default Scenario;