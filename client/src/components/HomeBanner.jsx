
const HomeBanner = () => {
    return (
        <>
            <div className="
                w-full
                h-screen
                relative
            ">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/home-banner-1.avif"
                    className="
                        w-full
                        h-full
                        object-cover
                    "
                >
                    <source src="/videos/home-banner-1.webm" type="video/webm" />
                </video>

                <div className="
                    py-[3.5rem]
                    px-[7%]
                    absolute
                    top-0
                    w-full
                    h-full
                    flex
                    items-end
                ">
                    <h1 className="
                        text-[3.2rem]
                        text-[#fff]
                        font-[600]
                    ">
                        MARSONS LIMITED
                    </h1>
                </div>

            </div>
        </>
    )
}

export default HomeBanner
