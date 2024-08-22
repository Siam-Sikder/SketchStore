import './features.css';

const Box = ({ icon, heading, paragraph }) => {
    return (
        <div className="box">
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}>{icon}</div>
            <h2 style={{
                textAlign: 'center',
                margin: '20px'
            }}>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    )
};

const Features = () => {
  return (
    <div className="container">
        <div className="features">
            <h1 style={{ 
                width: '100%',
                display: 'block',
                position: 'absolute',
                textAlign: 'center',
                marginTop: '80px'
                }}>Awesome <span>Features</span></h1>

            <div style={{
                width: '100%',
                display: 'flex',
                marginLeft: '-105px',
                marginRight: '20px',
                overflow: 'scroll'
            }} className="content">

                <Box className='box1' icon={
                    <ion-icon name="log-in"></ion-icon>
                } heading='Easy Sign In' paragraph='Google sign in, neat and clean interface, one click to signup/login, quick access to Privacy Policy.'/>

                <Box icon={
                    <ion-icon name="code-slash"></ion-icon>
                } heading='Clean Code' paragraph='Dynamic, neat and clean and colourised code editor comes with extra modifiable toolbar(upcoming).'/>

                <Box icon={
                    <ion-icon name="color-palette"></ion-icon>
                } heading='pixel perfect design' paragraph='Awesome interface, responsive UI(adapts to all screen sizes), attractive animations that makes the app outstanding.'/>

                <Box icon={
                    <ion-icon name="cloud-upload"></ion-icon>
                } heading='Private backup' paragraph='Backup projects privately in local or cloud storage.
                Share backup projects with specific person throw high encryption.'/>
            </div>
        </div>
    </div>
  )
}

export default Features
