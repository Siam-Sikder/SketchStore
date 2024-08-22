import './download.css';

const Card = ({ icon, heading, paragraph, btn, src }) => {
    return (
        <div className='card'>
            <div>{icon}</div>
            <h2>{heading}</h2>
            <p>{paragraph}</p>
            <a href={src} target='_blank'>{btn}</a>
        </div>
    )
}

const Download = () => {
  return (
    <div className="container">
      <div className="download">
        <h1>Download <span>App</span></h1>
        <p style={{
          marginTop: '100px'
        }}>Version : v1.1.1 Size : 7.9MB</p>
        <div className="cards">
            <Card
                icon={<ion-icon name="logo-google-playstore"></ion-icon>}
                heading='Google Play'
                paragraph='Currently unavailable on Google Play'
                btn='Not Available'
            />

            <Card
              icon={<ion-icon name="flame"></ion-icon>}
              heading='MediaFire'
              paragraph='Download from one of the most popular and secure cloud storage, MediaFire on the web.'
              btn='Download'
              src='https://www.mediafire.com/file/57wtoo5dsan7nht/SketchStore.apk/file'
            />

            <Card
              icon={<ion-icon name="cloud-download"></ion-icon>}
              heading='direct download'
              paragraph="Download directly from our server. Browser may show that it's may harmful for your device but it's completely free from harm and secure."
              btn='Download'
              src='https://firebasestorage.googleapis.com/v0/b/gd-sketchstore.appspot.com/o/appActivities%2FSketchStore.apk?alt=media&amp;token=7d201eb7-0409-45f0-961e-8ae712dcacac'
            />
        </div>
      </div>
    </div>
  )
}

export default Download
