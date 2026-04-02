const BannerImg = ({
    urlImage,
    title,
    backgroundPosition = 'center center',
    className = ''
} : {
    urlImage: string,
    title: string,
    backgroundPosition?: string,
    className?: string
}) => {

    return (
        <section className={`marginHeader image-container ${className}`} style={{backgroundImage: `url(${urlImage})`, backgroundPosition}}>
            <div className="container box-text">
                <div className="mainBox">
                    <span className="banner-kicker">Q&C Revestimientos</span>
                    <h1 className="banner-text">
                        {title}
                    </h1>
                    <span className="banner-accent" aria-hidden="true" />
                </div>
            </div>
        </section>        
    )
}

export default BannerImg;
