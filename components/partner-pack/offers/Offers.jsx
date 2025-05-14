import React from 'react'

const OfferCard = ({ offer }) => {
  const {
    name,
    logo,
    headline,
    description,
    secondaryCta,
    ctaText,
    ctaLink,
    multipleCtas,
    ctaText1,
    ctaLink1,
    ctaText2,
    ctaLink2
  } = offer;

  return (
    <div className="offer-card">
      <div className="offer-card__logo">
        <img src={`/images/partners/${logo}`} alt={`${name} Logo`} />
      </div>
      <div className="offer-card__description">
        <h3>{name}</h3>
        <p><strong>{headline}</strong></p>
        <p>{description}</p>
        {secondaryCta && <p><strong>{secondaryCta}</strong></p>}
      </div>

      {multipleCtas ? (
        <div className="offer-card__cta-container">
          <a href={ctaLink1} className="offer-card__cta" target="_blank" rel="noopener noreferrer">{ctaText1}</a>
          <a href={ctaLink2} className="offer-card__cta" target="_blank" rel="noopener noreferrer">{ctaText2}</a>
        </div>
      ) : (
        <div className="offer-card__cta-container">
          <a href={ctaLink} className="offer-card__cta" target="_blank" rel="noopener noreferrer">{ctaText}</a>
        </div>
      )}
    </div>
  )
}

const Offers = ({ partnerOffers, additionalSections }) => {
  const {
    wantMoreTitle,
    wantMoreContent,
    wantMoreLinkText,
    wantMoreLinkUrl,
    partnersTitle,
    partnersContent,
    joinAsPartnerContent
  } = additionalSections;
  
  // Sort the partner offers alphabetically by name
  const sortedPartnerOffers = [...partnerOffers].sort((a, b) => 
    a.name.localeCompare(b.name)
  );
  
  // Filter out private offers for the public offer cards
  const publicOffers = sortedPartnerOffers.filter(offer => !offer.private);
  
  return (
    <div>
      <h2>Offers</h2>
      <div className="offers-grid-container">
        <div className="offers-grid">
          {publicOffers.map((offer, index) => (
            <OfferCard key={index} offer={offer} />
          ))}
        </div>
      </div>
      
      <h2>{wantMoreTitle}</h2>
      <p dangerouslySetInnerHTML={{ __html: wantMoreContent }}></p>

      <h2>{partnersTitle}</h2>
      <p>{partnersContent}</p>
      
      <div className="partner-logos">
        {sortedPartnerOffers.map((offer, index) => (
          <img 
            key={index} 
            src={`/images/partners/${offer.logo}`} 
            alt={offer.name} 
          />
        ))}
      </div>
      
      <div className="become-partner-note">
        <p dangerouslySetInnerHTML={{ __html: joinAsPartnerContent }}></p>
      </div>
    </div>
  )
}

export default Offers