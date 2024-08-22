import './howTo.css';

const HowToPage = () => {
    return (
        <div className="page">
            <div className="numHolder">
                <div className="num">1</div>
                <div className="num">2</div>
                <div className="num">3</div>
                <div className="num">4</div>
                <div className="line"></div>
            </div>
            <div className="texts">
                <div className="con1 con">
                    <h2>Download App</h2>
                    <p>Download the app from any of the given medium mentioned above.</p>
                </div>

                <div className="con2 con">
                    <h2>Create Profile</h2>
                    <p>Sign In to the app and thus create a new profile or login to previous account.</p>
                </div>

                <div className="con3 con">
                    <h2>Search Projects & Sources</h2>
                    <p>Search your required projects & sources in Home, other pages or directly from the Search Bar.</p>
                </div>

                <div className="con4 con">
                    <h2>Get Sources</h2>
                    <p>Download your selected projects & sources. Specific sources can add directly into any project.</p>
                </div>
            </div>
        </div>
    )
}

const HowToCard = ({ num, heading, paragraph }) => {
    return (
        <div className="howToCard">
            <div style={{
                background: '#04aa6d',
                borderRadius: '50%',
                width: '70px',
                height: '70px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '30px'
            }}>{num}</div>
            <h2 style={{
                margin: '50px'
            }}>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    )
}

const HowTo = () => {
  return (
    <div className='container'>
      <div className="how">
        <h1 style={{
            textAlign: 'center'
        }}>How It <span>Works</span></h1>
        <div className="howToCards">
            <HowToCard
                num='1'
                heading='Download App'
                paragraph='Download the app from any of the given medium mentioned above.'
            />

            <HowToCard
                num='2'
                heading='Create Profile'
                paragraph='Sign In to the app and thus create a new profile or login to previous account.'
            />

            <HowToCard
                num='3'
                heading='Search Projects & Sources'
                paragraph='Search your required projects & sources in Home, other pages or directly from the Search Bar.'
            />

            <HowToCard
                num='4'
                heading='Get Sources'
                paragraph='Download your selected projects & sources. Specific sources can add directly into any project.'
            />
        </div>

        <HowToPage/>


      </div>
    </div>
  )
}

export default HowTo
