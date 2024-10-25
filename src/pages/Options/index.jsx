import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { Tooltip } from "primereact/tooltip";
import './index.css';
import logo from '../../assets/img/logo.svg'; // Adjust the path if necessary




export default function Options() {
    const features = [
        { name: 'Unsub from unwanted subs', key: 'U', infoUrl: 'https://example.com/unsub-info' },
        { name: 'Lists update', key: 'L', infoUrl: 'https://example.com/lists-update-info' },
        { name: 'Delete read stored emails after EED', key: 'D', infoUrl: 'https://example.com/delete-read-info' },
        { name: 'Save seen emails locally', key: 'S', infoUrl: 'https://example.com/save-seen-info' },
    ];
    
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    const onFeatureChange = (e) => {
        let _selectedFeatures = [...selectedFeatures];

        if (e.checked) _selectedFeatures.push(e.value);
        else _selectedFeatures = _selectedFeatures.filter(feature => feature.key !== e.value.key);

        setSelectedFeatures(_selectedFeatures);
    };

    return (
        <div className="options-container">
            <header className="options-header">
                <img src={logo} alt="App Logo" className="options-logo" />
                <p className="options-subtext">Choose which features to activate</p>
            </header>

            <div className="options-content">
                {features.map((feature) => (
                    <div key={feature.key} className="feature-item">
                        <Checkbox
                            inputId={feature.key}
                            name="feature"
                            value={feature}
                            onChange={onFeatureChange}
                            checked={selectedFeatures.some((item) => item.key === feature.key)}
                        />
                        <label htmlFor={feature.key} className="feature-label">{feature.name}</label>
                        <a href={feature.infoUrl} target="_blank" rel="noopener noreferrer" className="info-icon" data-pr-tooltip="Learn more">
                            ℹ️
                        </a>
                    </div>
                ))}
            </div>

            <button className="validate-button">Validate</button>
            <Tooltip target=".info-icon" />
        </div>
    );
}
