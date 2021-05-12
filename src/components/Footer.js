const Footer = () => {

    return <div className='footer'>
        <p id='to-top-page' onClick={() => window.scrollTo(0,0)}>{`^Top`}</p>
        <a id='tvmaze-link' href='https://www.tvmaze.com/api' target='_blank'>Powered by TVMAZE API</a>
        <p id='site-owner' style={{color: 'aliceblue'}}>Andrei Felecan</p>
    </div>
}

export default Footer;