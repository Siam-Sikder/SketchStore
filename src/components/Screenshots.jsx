import './screenshots.css';

const Screenshots = () => {
  return (
    <div className='container'>
      <div className="screenshots">
        <h1 style={{
            textAlign: 'center',
            marginBottom: '70px'
        }}>App <span>Screenshots</span></h1>
        <div className="shotBox">
            <div className="shot one"></div>
            <div className="shot two"></div>
            <div className="shot three"></div>
            <div className="shot four"></div>
            <div className="shot five"></div>
            <div className="shot six"></div>
            <div className="shot seven"></div>
            <div className="shot eight"></div>
        </div>
      </div>
    </div>
  )
}

export default Screenshots
