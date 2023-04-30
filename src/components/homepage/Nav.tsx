export default function Nav() {

    // compass logo
    const CompassLogo = require('../../assets/images/compass-uol-logo.png');

    return (
        <section className='homeNav'>
            <img src={CompassLogo} alt='Logo' className='navLogo' />
        </section>
    );
}
