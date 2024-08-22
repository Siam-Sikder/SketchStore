import './pricing.css';

const goHome = () => {
  document.querySelector('.home').scrollIntoView({ behavior: 'smooth' })
}

const Pricing = () => {
  return (
    <div className='container'>
      <div className="pricing">
        <h1 style={{
            textAlign: 'center',
            width: '100%',
            position: 'absolute'
        }}>pricing <span>plan</span></h1>

        <div className="pricing-cards">
            <div className="bar">
                <input
                style={{
                      fontSize: '35px',
                      color: '#fff',
                      textAlign: 'center'
                }}
                value='Basic'
                type="text" />
                
                <h1 style={{
                  textAlign: 'center',
                  margin: '15px',
                  marginLeft: '35px',
                  color: '#04aa6d',
                  fontSize: '80px'
                }}>FREE</h1>

                <div className="conBar">
                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Download & Upload Projects'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Get Source Codes & Blocks'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Enable Monetization'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="close-outline"></ion-icon>}
                    <input
                    value='Share swb Project File'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="close-outline"></ion-icon>}
                    <input
                    value='Restore Any External Projects'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="close-outline"></ion-icon>}
                    <input
                    value='Remove Ads'
                    type="text" />
                  </div>
                </div>

                <button onClick={goHome}>Free</button>
            </div>

            
            <div className="bar">
                <input
                style={{
                      fontSize: '35px',
                      color: '#fff',
                      textAlign: 'center'
                }}
                value='Premium'
                type="text" />
                
                <h1 style={{
                  textAlign: 'center',
                  margin: '15px',
                  marginLeft: '35px',
                  color: '#04aa6d',
                  fontSize: '80px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}>49 <span style={{
                    fontSize: '20px',
                    color: '#9d9d9d',
                    position: 'relative',
                    top: '55px'
                }}>/month</span></h1>

                <div className="conBar">
                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Download & Upload Projects'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Get Source Codes & Blocks'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Enable Monetization'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Share swb Project File'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Restore Any External Projects'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Remove Ads'
                    type="text" />
                  </div>
                </div>

                <button onClick={goHome}>Coming Soon</button>
            </div>

            <div className="bar">
                <input
                style={{
                      fontSize: '35px',
                      color: '#fff',
                      textAlign: 'center'
                }}
                value='Ultimate'
                type="text" />
                
                <h1 style={{
                  textAlign: 'center',
                  margin: '15px',
                  marginLeft: '35px',
                  color: '#04aa6d',
                  fontSize: '80px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}>499 <span style={{
                    fontSize: '20px',
                    color: '#9d9d9d',
                    position: 'relative',
                    top: '55px'
                }}>/year</span></h1>

                <div className="conBar">
                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Download & Upload Projects'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Get Source Codes & Blocks'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Enable Monetization'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Share swb Project File'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Restore Any External Projects'
                    type="text" />
                  </div>

                  <div className="txt">
                    {<ion-icon name="checkmark-outline"></ion-icon>}
                    <input
                    value='Remove Ads'
                    type="text" />
                  </div>
                </div>

                <button onClick={goHome}>Coming Soon</button>
            </div>


        </div>
      </div>
    </div>
  )
}

export default Pricing
