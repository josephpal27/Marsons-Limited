import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <>
            <div className="home-banner">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/home-banner-1.avif"
                >
                    <source src="/videos/home-banner-1.webm" type="video/webm" />
                </video>

                <div className="banner-content">
                    <h1>Marsons Limited</h1>
                </div>

            </div>
        </>
    )
}

export default HomeBanner
