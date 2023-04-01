import React from 'react'

const AboutUs = () => {
  return (
    <article className='about-us' id='about-us'>
        <div className='ab-us-container'>
            <h2>Chnou Hiya Handel ?</h2>
            <div className='infos'>
                <div className='info'>
                    <i class="fa-regular fa-hand"></i>
                    <div className='info-rightSide'>
                    <h4>Bi Bassata</h4>
                    <p>Kan9riwk trading, Wakha Matkoun 3reft 3lih Walou!</p>
                    </div>
                </div>
                <div className='info'>
                    <i class="fa-solid fa-fire"></i>
                    <div className='info-rightSide'>
                    <h4>Kaykoun Fiha</h4>
                    <p>Consultation, Formation, Certificat, Suivi, Premier Dollar...</p>
                    </div>
                </div>
                <div className='info'>
                    <i class="fa-solid fa-gift"></i>
                    <div className='info-rightSide'>
                    <h4>W Had La Formation</h4>
                    <p>Katkoun En Ligne, Walakin Kan3awdoha Kamla En Présentiel</p>
                    </div>
                </div>
                <div className='info'>
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    <div className='info-rightSide'>
                    <h4>Alors!</h4>
                    <p>Yla bghity T3ref Kter 3lina, Seft Lina Message!</p>
                    </div>
                </div>
            </div>
            <a href="mailto:handel@investment.com"><button>Twassel M3ana Mna!</button></a>
        </div>
    </article>
  )
}

export default AboutUs
