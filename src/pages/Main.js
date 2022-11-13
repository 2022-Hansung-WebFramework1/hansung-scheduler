import React from 'react';

const Main = () => {
    return (
        <>
            <div style={{ position: "absolute", zIndex: 999 }}>
                {
                    Array.from({length: 40}, () => 0).map(() => {
                        return (
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequatur deserunt, dolore ducimus harum inventore ipsum itaque minus mollitia porro quam quos, reiciendis sunt totam! Beatae exercitationem impedit ipsam.</div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Main;
