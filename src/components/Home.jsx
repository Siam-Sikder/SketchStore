import './home.css';

const goDownload = () => {
  document.querySelector('.download').scrollIntoView({ behavior: 'smooth' })
}

const Home = () => {
  return (
    <div className="container">
      <div className="content home">
        <h1>Multifunctional featured Sketchware project store</h1>

        <p>Download, upload & share FREE projects. Get source codes, blocks, more blocks & assets. Upload your projects for FREE and get some money in return.</p>

        <button onClick={goDownload}>Download App</button>
      </div>

      <div className="imgBox">
        <div className="img"></div>
        <div className="block"></div>
      </div>
    </div>
  )
}

export default Home
