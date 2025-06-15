import { useState } from 'react';
// import '../App.css'

const ShowHideMessage = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleMessage = () => {
        setIsVisible(prev => !prev)
    }

    return(
        <>
        <button onClick={toggleMessage}>Toggle Message</button>
        {/* <p className={`message ${isVisible ? 'show' : 'hide'} `}>Secret Message Revealed!</p> */}
        {isVisible && <p>Secret Message Revealed!</p>}
        </>
    )
};

export default ShowHideMessage

