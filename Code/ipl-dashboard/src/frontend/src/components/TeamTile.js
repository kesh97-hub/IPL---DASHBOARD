import React from 'react';
import { Link } from 'react-router-dom';
import './TeamTile.css';

export const TeamTile = ({teamName}) => {

    return (
        <div className="TeamTile">
            <Link to={`/teams/${teamName}`}>{teamName}</Link>
        </div>
    );
}