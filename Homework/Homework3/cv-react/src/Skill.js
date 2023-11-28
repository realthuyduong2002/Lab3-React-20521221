import React from 'react';
import './index.css';

const Skill = () => (
    <div className="container">
        <div className="sider">
            <div className="sider-content">
                <h1 className="tag-fill">Skill</h1>
                <div className="tag-content progress-container">
                    <p className="progress-title">English</p>
                    <div className="progress-wrap">
                        <div className="progress" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div className="tag-content progress-container">
                    <p className="progress-title">C++</p>
                    <div className="progress-wrap">
                        <div className="progress" style={{ width: '60%' }}></div>
                    </div>
                </div>
                <div className="tag-content progress-container">
                    <p className="progress-title">SQL</p>
                    <div className="progress-wrap">
                        <div className="progress" style={{ width: '75%' }}></div>
                    </div>
                </div>
                <div className="tag-content progress-container">
                    <p className="progress-title">Python</p>
                    <div className="progress-wrap">
                        <div className="progress" style={{ width: '85%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Skill;
