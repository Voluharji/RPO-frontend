import './InfoCards.css'

function InfoCards({ name, surname, mail ,telephoneNum, slika, about}) {
    return(
        <div className="info-card">

            <img className="Info-photo" src={slika} alt="SVG Icon"/>

            <div className="info-card-opis">
                <p>{name} {surname}</p>
                <p><i className="fa fa-envelope"></i> {mail}</p>
                <p><i className="fa fa-phone"></i> {telephoneNum}</p>
                <p>&#34;{about}&#34;</p>
            </div>

        </div>

    )
}

export default InfoCards;