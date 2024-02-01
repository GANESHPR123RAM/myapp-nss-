import React from 'react';
import './css/index.css'

const EventsHeader = () => {
    return (
        <div className='events-header-container p-0 m-2'
            style={{
                paddingBottom:'0.2rem'
            }}
        >
            <div className='row'>
                <div className='col-md-6'
                    style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: '2.5rem',

                        color: '#222222'

                    }}
                >
                    Events
                </div>
               
                
                
            </div>

        </div>
    )
}

export default EventsHeader;
