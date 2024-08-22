import './facts.css';

const Facts = () => {
  return (
    <div style={{
      minHeight: '800px',
      marginTop: '-100px',
      marginBottom: '-30px'
    }} className='container'>
      <div className="facts">
        <div style={{
            position: 'relative',
            marginTop: '50px'
        }} className="img img2"></div>
        <div style={{
            width: '500px',
            position: 'relative',
            top: '20px'
        }} className="content">
            <h1 style={{
                textAlign: 'center'
            }}>Fun <span>Facts</span></h1>
            <p>SketchStore, the unofficial project store is created for sharing sketchware projects, codes, blocks and assets to the world. By uploading your projects on SketchStore you can get feedbacks from the users about how's your project or how can you improve it and also you earn some money on each new download in your project. There is small virtual communication system throw what you can talk to other developers.</p>

            <div className="boxes">
                <div style={{
                    background: '#e91e63',
                    padding: '30px',
                    borderRadius: '20px',
                    margin: '10px'
                }} className="box1">
                    <h1>500+</h1>
                    <p>DOWNLOADS</p>
                </div>
                <div style={{
                    background: '#ffba45',
                    padding: '30px',
                    borderRadius: '20px',
                    margin: '10px'
                }} className="box1">
                    <h1>NO</h1>
                    <p>STAR RATING</p>
                </div>
                <div style={{
                    background: '#00ffff',
                    padding: '30px',
                    borderRadius: '20px',
                    margin: '10px'
                }} className="box1">
                    <h1>100+</h1>
                    <p>PROJECTS</p>
                </div>
                <div style={{
                    background: '#6c63ff',
                    padding: '30px',
                    borderRadius: '20px',
                    margin: '10px'
                }} className="box1">
                    <h1>50+</h1>
                    <p>DAILY ACTIVE USERS</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Facts
