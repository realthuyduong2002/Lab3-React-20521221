import React from 'react';
import './index.css';

const Content = () => (
    <div className="container">
        <div className="content">
            <div className="description-content">
                <h1 className="tag">EDUCATION LEVEL</h1>
                <ul>
                    <li>
                        <div className="tabbar-title">
                            <p className="text-date">10/2020 - now</p>
                        </div>
                        <h3>Fourth-year student in Advance Program at Information Systems</h3>
                        <p className="text-content">
                            Institution: University of Information and Technology - Vietnam National University Ho Chi Minh City.
                        </p>
                        <ul>
                            <li>GPA: 7.92/10</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="description-content">
                <h1 className="tag">WORK EXPERIENCE</h1>
                <ul>
                    <li>
                        <h3>- Intermediate Statistical Analysis Project:</h3>
                        <p className="text-content">
                            Subject: Using Time Series Analysis To Forecast Crude Oil Price
                        </p>
                        <ul>
                            <li>Using 4 machine learning models to forecast crude oil price.</li>
                            <li>Using machine learning models to compare and forecast the volatility of crude oil close prices from 2016 to 2022.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="description-content">
                <ul>
                    <li>
                        <h3>- Enterprise Resource Planning Project:</h3>
                        <p className="text-content">
                            Subject: Forecasting Supermarket Sales
                        </p>
                        <ul>
                            <li>Using 3 machine learning models to predict petrol price.</li>
                            <li>Forecast supermarket sales for each product line in the next 30 days.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="description-content">
                <ul>
                    <li>
                        <h3>- System Analysis and Design Project:</h3>
                        <p className="text-content">
                            Subject: Cosmetic Sales Management
                        </p>
                        <ul>
                            <li>The research centers on the implementation of a Cosmetic Sales Management project.</li>
                            <li>This project is designed to tackle specific research issues and attain defined objectives aimed at enhancing the management of cosmetic sales.
                            </li>
                            <li>Additionally, the study outlines its scope and limitations.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Content;
