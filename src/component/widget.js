import React from 'react';
import { FlexboxGrid } from 'rsuite';
import { Panel, IconButton } from 'rsuite';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import ImageIcon from '@rsuite/icons/Image';
import SpeakerIcon from '@rsuite/icons/Speaker';
import PeoplesIcon from '@rsuite/icons/Peoples';


const Widget = () => {
    const dollarSvg = <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 100 100">
        <text x="30" y="70" font-size="60" fill="white">$</text>
    </svg>

    const ImogSvg = <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 100 100">
        <text x="20" y="70" font-size="60" fill="white">&#128522;</text>
    </svg>




    return (
        <div className="show-grid" style={{ margin: '20px' }}>
            <FlexboxGrid justify="space-around">

                <FlexboxGrid.Item colspan={5} md={6}>
                    <Panel shaded style={{ background: '#D1E7DD' }}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <IconButton icon={dollarSvg} color="lime green" appearance="primary" circle />

                            </div>
                            <div style={{ marginLeft: '15px' }}>
                                <div style={{ marginTop: '8px', fontSize: '1rem' }}>Revenue</div>
                                <span>$ 20,999 </span>
                            </div>
                        </div>
                    </Panel>
                </FlexboxGrid.Item>

                <FlexboxGrid.Item colspan={5} md={6}>
                    <Panel shaded style={{ background: '#F8D7DA' }}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <IconButton icon={<ImageIcon style={{ fontSize: '2rem' }} />} color="red" appearance="primary" circle />

                            </div>
                            <div style={{ marginLeft: '15px' }}>
                                <div style={{ marginTop: '8px', fontSize: '1rem' }}>Expense</div>
                                <span>$ 14,450</span>
                            </div>
                        </div>
                    </Panel>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={5} md={6}>
                    <Panel shaded style={{ background: '#FFF3CD' }}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <IconButton icon={<UserBadgeIcon style={{ fontSize: '2rem' }} />} color="sunflower yellow" appearance="primary" circle />

                            </div>
                            <div style={{ marginLeft: '15px' }}>
                                <div style={{ marginTop: '8px', fontSize: '1rem' }}>Happy Clients</div>
                                <span>13,000</span>
                            </div>
                        </div>
                    </Panel>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={5} md={6}>
                    <Panel shaded style={{ background: '#CFF4FC' }}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <IconButton icon={<SpeakerIcon style={{ fontSize: '2rem' }}></SpeakerIcon>} color="blue" appearance="primary" circle />

                            </div>
                            <div style={{ marginLeft: '15px' }}>
                                <div style={{ marginTop: '8px', fontSize: '1rem' }}>New Store Open</div>
                                <span>8,400</span>
                            </div>
                        </div>
                    </Panel>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={3} md={6}>
                    <Panel shaded style={{ background: 'white' }}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <IconButton icon={<PeoplesIcon style={{ fontSize: '2rem' }} />} color="blue" appearance="primary" circle />

                            </div>
                            <div style={{ marginLeft: '15px' }}>
                                <div style={{ marginTop: '8px', fontSize: '1rem' }}>Visitors</div>
                                <span>10,44</span>
                            </div>
                        </div>
                    </Panel>
                </FlexboxGrid.Item>


            </FlexboxGrid>
        </div>

    );
}

export default Widget;
