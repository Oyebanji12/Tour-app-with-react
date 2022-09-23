import React from 'react'
import { useState} from 'react'


const Tours = () => {
    
    const mydata=[
        
        {
            src: 'https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg',
            name: 'Best of Paris in 7 Days tour',
            caption: 'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best ofthe City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. Youll also enjoy guided neighborhood walks through the citys historic heart as well as quieter moments to slow down and savor the citys intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!',
            id: 0,
            amount: '$1400',
            
        },
        {
            src: "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
            name: 'Best Of Ireland In 14 Days Tour',
            caption: 'Best of Ireland tour kicks off with the best of Dublin, followed by Irelands must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giants Causeway, and the compelling city of Belfast. All along the way, Ricks guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!',
            id: 1,
            amount: '$4000',
            
        },
        {
            src: "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
            name: 'Best Of Salzburg & Vienna In 8 Days Tour',
            caption: 'Lets go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austrias Golden Age. Your Rick Steves guide will bring the this regions rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!',
            id: 2,
            amount: '$2600',
            
        },
        
        {
            src: 'https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg',
            name: 'Best Of Rome In 7 Days Tour',
            caption: 'Our Rome tour serves up Europes most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Romes Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, youll marvel at St. Peters Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. Youll also enjoy todays Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!Show Less',
            id: 3,
            amount: '$3800',
            
    },
    {
        src: 'https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg',
        name: 'Best Of Poland In 10 Days Tour',
        caption: 'Starting in the colorful port city of Gdańsk, youll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side youll experience mighty Malbork castle, the cobbly-cute village of Toruń, Polands contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Polands finest city. In this land of surprises — so trendy and hip, yet steeped in history — theres so much to discover. Join us for the Best of Poland in 10 Days!',
        id: 4,
        amount: '$4800',
        
} ,
    ]
// react state
    const [readMore, setReadMore]= useState(false)
    
    const [tours, setTours]= useState(mydata)
    
    // the function is to toggle the button, whenever the button is clicked, setReadMore state should remove readmore or probably make it opposite of the value given.

    const buttonToggle=()=>{
        setReadMore(!readMore)
    }

    // the removeTours function is created, while another variable is created inside it, the tours state will filter through and check if the id value from the tours state is not equal to the id value from the map list, if it's not equal then it should be assigned to the variable newTours and get render in setTours

    const removeTours=(id)=>{
        const newTours= tours.filter((tour)=> tour.id !== id);
        
        setTours(newTours)

    }
    
    //  if the length of the tours is equal to zero it should return no tour left; in another word, if all the tours has be remove/deleted, it should return, no tour left
    if(tours.length === 0){
        return(
            <main>
                <div className='title'>
                    <h2>no tour left</h2>
                </div>
            </main>
        )
    }
    
  return (
    <>
    <section>
        <div className='title'>
            <h2>Our Tours</h2>
            <div className='underline'></div>
        </div>
   
    {/* map through the data list and output the value */}
        {tours.map((tour,i)=>{
            return(
            <div key={i}>
                <article className='single-tour'>
                <img src={tour.src} alt="" />
                <footer>
               <div className='tour-info'>
                <h4>{tour.name}</h4>
               <h4 className='tour-price'>{tour.amount}</h4>
               </div> 
               {/* the ternary can be explain as thus, if readmore state is true, it should output the value of caption from the data, if otherwise it should output just 200 word from the caption in the data */}

               <p>{readMore ? tour.caption : `${tour.caption.substring(0, 200)}..`}
               {/* a button is created to toggle, if readmore state is true, showless button should show, if otherwise the readmore button should not show */}
               <button  onClick={buttonToggle}>
                {readMore? 'show less' : 'readmore'}
               </button>
               </p>

               {/* the onClick function is to assigned the value of id from the map to the removeTours function */}
               <button className='delete-btn' onClick={()=> removeTours(tour.id)} >not interested</button>
               
            
               </footer>
               </article>
            </div>
            )
        })}
 </section>
    </>
  )
}

export default Tours