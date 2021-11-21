import React, { useEffect, useState } from 'react';

import './HomePage.css';
import { TeamTile } from '../components/TeamTile';
//  eslint-disable-next-line
export const HomePage = () => {

    const [teams, setTeams] = useState([]); //can store state variables

    //useEffect executes the block when something changes.
    //Here this block is executed when the page is empty.
    useEffect(
        () => {
            const fetchAllTeams = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                const data = await response.json();
                console.log(data);
                setTeams(data);
            };
            fetchAllTeams();
        }, []
    );

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL Dashboard</h1>
            </div>
            
            <div className="team-grid">
                {teams.map(team => <TeamTile key={team.id} teamName={team.teamName}/> )}
            </div>
        </div>
    );
}
