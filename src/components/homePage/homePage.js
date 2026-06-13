import "./homePage.css";
import React from 'react';
import { useEffect, useState } from "react";
import * as icons from '../../img/icons';

const cardNewsHed = [
  {
    id: 1,
    icon: icons.iconAiTech,
    title: 'AI Technology Expansion',
    description: 'Companies around the world continue investing in artificial intelligence solutions to improve efficiency and accelerate innovation.',
    publicAndType: '22 mins ago | Technology'
  },
  {
    id: 2,
    icon: icons.iconFurute,
    title: 'Future of Artifical Intelligence',
    description: 'Experts discuss the growing role of AI in education, healthcare, and business at international technology events.',
    publicAndType: '35 mins ago | Business'
  },

];

const cardNewsHedBig = [
  {
    icon: icons.iconNewAiTech,
    title: 'Breaking News New AI Technology Unveiled at Global Conference',
    description: 'A leading technology company has announced a new AI platform designed to improve business efficiency and accelerate digital innovation worldwide.',
  }
];

const cardNewsHedText = [
  {
    id: 1,
    title: 'Global Tourism Sees Strong Recovery in 2025',
    description: 'International travel continues to rebound as airlines report higher passenger numbers and destinations welcome record-breaking visitor totals.',
    publicAndType: '8 hrs ago | Travel'
  },
  {
    id: 2,
    title: 'Scientists Discover New Deep-Sea Species',
    description: 'Researchers exploring the Pacific Ocean have identified several previously unknown marine creatures living at extreme depths.',
    publicAndType: '6 hrs ago | Science & Environment'
  },
  {
    id: 3,
    title: 'European Cities Invest in Green Transport',
    description: 'Major urban centres are expanding electric bus networks and cycling infrastructure to reduce emissions and improve mobility.',
    publicAndType: '4 hrs ago | Europe'
  },
  {
    id: 4,
    title: 'Tech Firms Race to Develop Next-Generation AI',
    description: 'Leading companies are increasing investments in artificial intelligence as competition in the sector continues to grow worldwide.',
    publicAndType: '1 hr ago | Technology'
  }
];

const cardOnlyFromTheGBC = [
  {
    id: 1,
    icon: icons.iconShip,
    title: 'Ancient Shipwreck Discovered Off Mediterranean Coast',
    description: 'Marine archaeologists have uncovered a remarkably preserved shipwreck believed to date back more than 2,000 years.The discovery could provide valuable insight into ancient trade routes and maritime history across the',
    publicAndType: '14 mins ago | Europe'
  },
  {
    id: 2,
    icon: icons.iconMountainRes,
    title: 'Mountain Rescue Teams Search for Missing Hikers',
    description: 'Emergency services have launched a large-scale operation after several hikers failed to return from a remote mountain trail.Authorities say weather conditions have complicated rescue efforts, with teams continuing the search overnight.',
    publicAndType: '21 mins ago | World'
  }
];

const recAudio = [
  {
    id: 1,
    icon: icons.iconWorldAff,
    description: 'Rising tensions reshape global diplomacy',
    title: 'World Affairs Podcast',
    time: '24 mins'
  },
  {
    id: 2,
    icon: icons.iconScinceWee,
    description: 'Exploring the mysteries of the deep ocean',
    title: 'Science Weekly',
    time: '18 mins'
  },
  {
    id: 3,
    icon: icons.iconWitneHis,
    description: 'The day the Berlin Wall came down',
    title: 'Witness History',
    time: '12 mins'
  },
  {
    id: 4,
    icon: icons.iconDocPod,
    description: 'Life inside the world\'s busiest cities',
    title: 'Documentary Podcast',
    time: '31 mins'
  },
  {
    id: 5,
    icon: icons.iconTheInter,
    description: 'Climate solutions and the road ahead',
    title: 'The Interview',
    time: '27 mins'
  },
  {
    id: 6,
    icon: icons.iconBusinessDaily,
    description: 'Global markets adapt to economic shifts',
    title: 'Business Daily',
    time: '15 mins'
  }
];

const cardNewsBody = [
  {
    id: 1,
    icon: icons.iconYoung,
    title: 'Young Mayor Wins Surprise Election Victory',
    description: 'A 32-year-old candidate has secured an unexpected win in local elections after campaigning on housing and public transport reforms.',
    publicAndType: '5 hrs ago | Politics'
  },
  {
    id: 2,
    icon: icons.iconLiveEuro,
    title: 'LIVE | European Leaders Meet to Discuss Security Cooperation',
    description: 'Officials from several countries are gathering in Brussels for talks focused on defence, energy security and regional stability.',
    publicAndType: 'LIVE | Europe'
  },
];

const cardNewsBodyType = [
  {
    id: 1,
    icon: icons.iconInterFoot,
    title: 'International Football Referee Selected for World Final',
    description: 'The experienced official will oversee one of the biggest matches of the year after receiving approval from governing bodies.',
    publicAndType: '7 hrs ago | Sport'
  },
  {
    id: 2,
    icon: icons.iconGlobal,
    title: 'Global Markets Rally After Economic Report',
    description: 'Investors reacted positively after new figures suggested stronger-than-expected growth in several major economies.',
    publicAndType: '4 hrs ago | Business'
  },
  {
    id: 3,
    icon: icons.iconScientTrack,
    title: 'Scientists Track Rare Volcano Activity',
    description: 'Researchers are closely monitoring increased seismic activity near a volcano that has remained dormant for decades.',
    publicAndType: '9 hrs ago | Science & Environment',
  },
  {
    id: 4,
    icon: icons.iconArchaeo,
    title: 'Archaeologists Uncover Lost Ancient City',
    description: 'Researchers have discovered the remains of a settlement believed to be more than 3,000 years old, offering new clues about early civilizations.',
    publicAndType: '11 mins ago | Science'
  },
  {
    id: 5,
    icon: icons.iconMajorRail,
    title: 'Major Rail Project Set to Transform Regional Travel',
    description: 'Officials say the new high-speed rail network will reduce travel times and connect millions of people across the country.',
    publicAndType: '29 mins ago | Travel',
  }
];

const cardNewsBodyBig = [
  {
    icon: icons.iconPower,
    title: 'Powerful Storm Causes Disruptions Across Southeast Asia',
    description: 'Thousands of residents have been forced to leave their homes after severe weather brought flooding and transport disruptions to several regions.',
    publicAndType: '41 mins ago | Asia'
  }
];

const cardNewsBodyChapterTwo = [
  {
    id: 1,
    icon: icons.iconRareSnow,
    title: 'Rare Snowfall Covers Desert Region',
    description: 'Residents were surprised after an unusual weather event brought snow to an area known for its hot climate.',
    publicAndType: '1 hr ago | World'
  },
  {
    id: 2,
    icon: icons.iconNationalPark,
    title: 'National Park Welcomes Record Number of Visitors',
    description: 'Tourism officials report a significant increase in visitor numbers following improvements to hiking routes and facilities.',
    publicAndType: '2 hrs ago | Travel'
  },
  {
    id: 3,
    icon: icons.iconScientDevelop,
    title: 'Scientists Develop New Method to Clean Ocean Plastic',
    description: 'A research team has tested a system designed to remove waste from coastal waters more efficiently than previous technologies.',
    publicAndType: '4 hrs ago | Science & Environment'
  },
  {
    id: 4,
    icon: icons.iconHistoric,
    title: 'Historic Castle Reopens After Major Restoration',
    description: 'Thousands of visitors are expected to attend the reopening of one of the country\'s most famous landmarks.',
    publicAndType: '6 hrs ago | Culture'
  },
  {
    id: 5,
    icon: icons.iconVolcanoErup,
    title: 'Volcano Eruption Forces Thousands to Evacuate',
    description: 'Volcano Eruption Forces Thousands to Evacuate',
    publicAndType: '17 mins ago | World'
  }
];

const cardNewsBigBody = [
  {
    id: 1,
    icon: icons.iconMassiveBegins,
    title: 'Massive Solar Farm Begins Operations',
    description: 'The facility is expected to provide clean electricity to more than one million homes.',
    publicAndType: '39 mins ago | Climate'
  },
  {
    id: 2,
    icon: icons.iconWildlifeRare,
    title: 'Wildlife Camera Captures Rare Snow Leopard',
    description: 'Conservationists say the footage provides valuable information about one of the world\'s most elusive animals.',
    publicAndType: '1 hr ago | Nature'
  },
  {
    id: 3,
    icon: icons.iconLuxuryCom,
    title: 'Luxury Cruise Ship Completes Maiden Voyage',
    description: 'The vessel arrived at its final destination after a successful journey across several continents.',
    publicAndType: '2 hrs ago | Travel'
  }

];
const cardNewsBigBigBody = [
  {
    id: 1,
    icon: icons.iconExplore,
    title: 'Explorers have successfully mapped a vast underwater cave network that had remained undiscovered for decades.',
    description: 'The expedition, which lasted several weeks, revealed a series of interconnected chambers stretching for kilometres beneath the coastline. Researchers say the discovery could provide valuable information about the region\'s geological history and unique underwater ecosystems.',
    publicAndType: '25 mins ago | Science'
  }
]

const cardNewsOOH = [
  {
    id: 1,
    icon: icons.iconNATO,
    title: 'United Nations General Assembly Opens Annual Session',
    description: 'World leaders have gathered at the United Nations headquarters in New York for the opening of the annual General Assembly, where discussions are expected to focus on international security, climate change, economic development and humanitarian challenges. Delegates from nearly 200 countries will participate in a series of meetings and speeches aimed at strengthening global cooperation. Officials say this year\'s agenda includes ongoing regional conflicts, sustainable development goals and efforts to address the impact of extreme weather events around the world. The gathering is regarded as one of the most important diplomatic events of the year, bringing together heads of state, government representatives and international organisations.',
    iconType: icons.iconOOH,
    publicAndType: '45 mins ago | World'
  }
];

const cardNewsThree = [
  {
    id: 1,
    icon: icons.iconMeteorShower,
    title: 'Meteor Shower Lights Up Night Sky',
    description: 'Astronomers reported that millions of people observed the annual event under clear skies.',
    publicAndType: '3 hrs ago | Science'
  },
  {
    id: 2,
    icon: icons.iconTomb,
    title: 'Ancient Tomb Reveals Unexpected Treasures',
    description: 'Archaeologists have discovered jewellery, tools and artwork dating back more than 2,500 years.',
    publicAndType: '4 hrs ago | History'
  },
  {
    id: 3,
    icon: icons.iconWorldTall,
    title: 'World\'s Tallest Wooden Building Opens',
    description: 'The project has been praised for combining modern architecture with sustainable materials.',
    publicAndType: '5 hrs ago | Architecture'
  },
];

const mediaLib = [
  {
    id: 1,
    icon: icons.iconScientDiscover,
    title: 'Scientists Discover Massive Coral Reef'
  },
  {
    id: 2,
    icon: icons.iconLuxuryTrain,
    title: 'Luxury Train Route Opens Through Alpine Mountains'
  },
  {
    id: 3,
    icon: icons.iconResearchTest,
    title: 'Researchers Test Next-Generation Electric Aircraft'
  },
  {
    id: 4,
    icon: icons.iconResearchExplore,
    title: ' Researchers Explore Remote Arctic Ice Caves'
  },
  {
    id: 5,
    icon: icons.iconMedievalCastle,
    title: 'Medieval Castle Opens Hidden Underground Passages'
  },
  {
    id: 6,
    icon: icons.iconRareWhale,
    title: 'Rare Whale Spotted Near Popular Coastline'
  },
  {
    id: 7,
    icon: icons.iconNewHigh,
    title: 'New High-Speed Train Breaks National Record'
  },
  {
    id: 8,
    icon: icons.iconRecord,
    title: 'Record Number of Turtles Hatch on Protected Beach'
  }

];

const cardNewsInterval = [
  {
    id: 1,
    icon: icons.iconSpaceMoon,
    title: 'Space: International Moon Mission Announced',
    description: 'Several international space agencies have revealed plans for a joint lunar exploration mission. The project aims to expand scientific research on the Moon and support future deep-space exploration initiatives.',
    publicAndType: '6 hrs ago | Space'
  },
  {
    id: 2,
    icon: icons.iconEnviron,
    title: 'Environment: New Urban Parks Open',
    description: 'Several major cities have announced the opening of new public parks and green spaces. Local governments say the projects are designed to improve air quality, encourage outdoor activities, and enhance residents\' quality of life.',
    publicAndType: '5 hrs ago | Environment'
  },
  {
    id: 3,
    icon: icons.iconScientDiscover,
    title: 'Scientists Discover Ancient Shipwreck',
    description: 'Scientists launched a new expedition to study deep-sea ecosystems and marine life.',
    publicAndType: '4 hrs ago | Science'
  },
  {
    id: 4,
    icon: icons.iconSportsAt,
    title: 'Sports: Record Crowds Attend Football Matches',
    description: 'Football leagues across several countries are reporting record attendance figures this season. Officials attribute the increase to improved fan experiences, stronger competition, and growing international interest in the sport.',
    publicAndType: '7 hrs ago | Sports'
  },
  {
    id: 5,
    icon: icons.iconTechVehic,
    title: 'Technology: New Electric Vehicle Battery Breakthrough',
    description: 'Researchers announced a new battery technology that could reduce charging times for electric vehicles.',
    publicAndType: '2 hrs ago | Technology'
  },
  {
    id: 6,
    icon: icons.iconTravel,
    title: 'Travel: Tourism Reaches New Highs',
    description: ' Global tourism continues to recover as international travel demand rises. Industry experts report increased bookings for major destinations, driven by improved transportation services and growing consumer confidence.',
    publicAndType: '5 hrs ago | Travel'
  },
];

const cardNewsIntervalTwo = [
  {
    id: 1,
    icon: icons.iconNewOpens,
    title: 'New Airport Terminal Opens',
    description: 'The modern facility is expected to serve millions of passengers each year. Officials say the terminal features advanced security systems and expanded passenger services. The project is expected to boost tourism and regional connectivity.',
    publicAndType: '2 hrs ago | Travel'
  },
  {
    id: 2,
    icon: icons.iconScientSeaVolc,
    title: 'Scientists Study Deep-Sea Volcano',
    description: 'Researchers launched a mission to explore volcanic activity beneath the ocean. The team will collect samples and map underwater formations. Scientists hope the findings will improve understanding of Earth\'s geological processes.',
    publicAndType: '4 hrs ago | Science'
  },
  {
    id: 3,
    icon: icons.iconCitySys,
    title: 'City Introduces Smart Traffic System',
    description: 'Officials say the new technology will help reduce congestion and delays. Sensors installed across the city will monitor traffic conditions in real time. Authorities expect travel times to improve significantly over the coming months.',
    publicAndType: '1 hr ago | Technology'
  },
  {
    id: 4,
    icon: icons.iconWildProtect,
    title: 'Wildlife Reserve Expands Protected Area',
    description: 'The project aims to preserve habitats for endangered species. Conservation groups welcomed the decision and called it an important step forward. Experts believe the expansion will strengthen local biodiversity.',
    publicAndType: '5 hrs ago | Environment'
  },
];

const globalDefNews = [
  {
    icon: icons.iconNATO,
    title: 'NATO Strengthens Eastern Defense',
    description: 'The North Atlantic Treaty Organization (NATO) announced a series of military exercises across Eastern Europe aimed at improving readiness and cooperation among allied forces. Officials stated that the drills are designed to enhance collective defense capabilities and ensure regional stability. Member states continue to invest in modern defense systems, cybersecurity, and rapid-response units. NATO leaders emphasized that cooperation between allies remains essential in addressing emerging security challenges and maintaining peace across the Euro-Atlantic region.',
    publicAndType: 'June 2026 | International Affairs',
    iconType: icons.iconNATOTWO
  }
];

const newsNewType = [
  {
    id: 1,
    icon: icons.iconClimateRep,
    type: 'Climate',
    title: 'Climate Report Released',
    description: 'A new environmental report highlights rising global temperatures and their impact on ecosystems worldwide.',
    publicAndType: '2 hrs ago | Climate'
  },
  {
    id: 2,
    icon: icons.iconAltTools,
    type: 'Technology',
    title: 'AI Tools Expand Worldwide',
    description: 'Businesses continue to adopt artificial intelligence solutions to improve efficiency and automate routine tasks.',
    publicAndType: '4 hrs ago | Technology'
  },
  {
    id: 3,
    icon: icons.iconNewGalaxy,
    type: 'Space',
    title: 'New Galaxy Images Published',
    description: 'Astronomers released detailed images captured by a next-generation space observatory.',
    publicAndType: '6 hrs ago | Space'
  },
  {
    id: 4,
    icon: icons.iconHealthcare,
    type: 'Health',
    title: 'Healthcare Technology Advances',
    description: 'Hospitals are introducing new digital systems designed to improve patient care and reduce waiting times.',
    publicAndType: '3 hrs ago | Health'
  }
];

const newsBlue = [
  {
    id: 1,
    title: 'Scientists Monitor Active Volcano',
    description: 'Researchers are tracking increased activity at a volcano in the Pacific region. Experts say there is currently no immediate danger to nearby communities.',
    publicAndType: '1 hr ago | Science',
    icon: icons.iconScientMonitor
  },
  {
    id: 2,
    icon: icons.iconCity,
    title: 'Electric Buses Added to City Fleet',
    description: 'The city introduced a new fleet of electric buses to reduce emissions. Officials expect the project to improve air quality and public transport services.',
    publicAndType: '3 hrs ago | Transport'
  },
  {
    id: 3,
    title: 'New Wildlife Species Identified',
    description: 'Biologists have identified a previously unknown species in a remote rainforest. Further studies are underway to learn more about its habitat.',
    publicAndType: '5 hrs ago | Nature',
    icon: icons.iconNewWildlife
  },
  {
    id: 4,
    icon: icons.iconMajorBrid,
    title: 'Major Bridge Construction Begins',
    description: 'Construction has started on a major bridge designed to improve regional transportation. Officials expect the project to create hundreds of jobs during development.',
    publicAndType: '2 hrs ago | Infrastructure'
  }
]
function HomePage() {

  const Card = ({ icon, title, description, publicAndType, className, iconClass }) => (
    <div className={className}>
      {icon && <img src={icon} className={iconClass} alt={title} />}
      <h3 className="titleCard">{title}</h3>
      <p className="discriptionCard">{description}</p>
      <p className="publicAndTypeCard">{publicAndType}</p>
    </div>
  );

  const CardType = ({ icon, title, type, description, publicAndType, className, iconClass }) => (
    <div className={className}>
      {icon && <img src={icon} className={iconClass} alt={title} />}
      <h3 className="typeCard">{type}</h3>
      <h3 className="titleCard">{title}</h3>
      <p className="discriptionCard">{description}</p>
      <p className="publicAndTypeCard">{publicAndType}</p>
    </div>
  );


  const CardAudio = ({ icon, title, description, time, className, iconClass }) => (
    <div className={className}>
      <img src={icon} className={iconClass} alt={title} />
      <p className="discriptionCard">{description}</p>
      <h3 className="titleCard">{title}</h3>
      <p className="time">{time}</p>
    </div>
  );

  const CardBody = ({ id, icon, title, description, publicAndType, className, iconClass }) => {
    const bottomImage = [1, 3, 5].includes(id);

    return (
      <div className={className}>
        {!bottomImage && <img src={icon} className={iconClass} alt={title} />}

        <h3 className="titleCard">{title}</h3>
        <p className="discriptionCard">{description}</p>
        <p className="publicAndTypeCard">{publicAndType}</p>

        {bottomImage && <img src={icon} className={iconClass} alt={title} />}
      </div>
    );
  };

  const CardOOH = ({ icon, title, description, publicAndType, iconType, className, iconClass }) => (
    <div className={className}>
      {icon && <img src={icon} className={iconClass} alt={title} />}
      <h3 className="titleCard">{title}</h3>
      <p className="discriptionCard">{description}</p>
      {iconType && <img src={iconType} className={iconClass} alt={title} />}
      <p className="publicAndTypeCard">{publicAndType}</p>
    </div>
  );


  return (
    <div className="homePage">
      <div className="hedSection">
        <section className="cardHed">
          <div className="miniHedCardConteiner">
            {cardNewsHed.map(({ id, ...props }) => (
              <Card key={id} {...props} className="card" iconClass="iconCard" />
            ))}
          </div>
          <div className="bigHedCardConteiner">
            {cardNewsHedBig.map(({ id, ...props }) => (
              <Card key={id} {...props} className="bigCard" iconClass="bigIconHed" />
            ))}
          </div>
          <div className="textCardConteiner">
            {cardNewsHedText.map(({ id, ...props }) => (
              <Card key={id} {...props} className="miniTextCard" />
            ))}
          </div>
        </section>
      </div>

      <div className="onlyForGbcSection">
        <div className="titleSectionContainer">
          <h2 className="titleSection">ONLY FROM THE GBC</h2>
        </div>
        <section className="cardForGbc">
          <div className="cardFor">
            {cardOnlyFromTheGBC.map(({ id, ...props }) => (
              <Card key={id} {...props} className="cardOnlyGbc" iconClass="iconOnlyCard" />
            ))}
          </div>
        </section>
      </div>

      <div className="recAudioSection">
        <div className="titleSectionContainer">
          <h2 className="titleSection">RECOMMENDED AUDIO</h2>
        </div>
        <section className="cardRecAudio">
          <div className="cardAudioConteiner">
            {recAudio.map(({ id, ...props }) => (
              <CardAudio key={id} {...props} className="cardRecAudio" iconClass="iconAudioCard" />
            ))};
          </div>
        </section>
      </div>

      <div className="newsBodySection">
        <section className="newsBody">
          <div className="minicardBody">
            {cardNewsBody.map(({ id, ...props }) => (
              <Card key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
          <div className="bigCardBody">
            {cardNewsBodyBig.map(({ id, ...props }) => (
              <Card key={id} {...props} className="bigCardBody" iconClass="bigIconCard" />
            ))}
          </div>
          <div className="miniTypeCardBodyConteiner">
            {cardNewsBodyType.map(({ id, ...props }) => (
              <CardBody key={id} id={id} {...props} className="bigCardBody" iconClass="bigIconCard" />
            ))}
          </div>
        </section>
      </div>
      <div className="newsBodyChapterTwo">
        <section className="newsChapterTwo">
          <div className="cardChapterConteiner">
            {cardNewsBodyChapterTwo.map(({ id, ...props }) => (
              <Card key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
        </section>
      </div>
      <div className="bigBigBody">
        <section className="cardBigBigBody">
          <div className="cardBigOneConteiner">
            {cardNewsBigBigBody.map(({ id, ...props }) => (
              <Card key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
          <div className="cardBigBodyConteiner">
            {cardNewsBigBody.map(({ id, ...props }) => (
              <Card key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
        </section>
      </div>
      <div className="UnitedNation">
        <section className="cardUnitedNation">
          <div className="cardUnitedContainer">
            {cardNewsOOH.map(({ id, ...props }) => (
              <CardOOH key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
        </section>
      </div>
      <div className="NewsThree">
        <section className="cardThree">
          <div className="cardThreeContainer">
            {cardNewsThree.map(({ id, ...props }) => (
              <Card key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
        </section>
      </div>
      <div className="mediaLib">
        <section className="cardMediaLib">
          <div className="cardMediaLibContainer">
            {mediaLib.map(({ id, ...props }) => (
              <Card key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
        </section>
        <div className="titleSectionContainer">
          <h2 className="titleMedia">MEDIA LIBRARY</h2>
        </div>
      </div >
      <div className="NewsInterval">
        <section className="cardNewsInterval">
          <div className="cardNewsIntervalContainer">
            {cardNewsInterval.map(({ id, ...props }) => (
              <Card key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
        </section>
      </div>
      <div className="cardNewsIntervalTwo">
        <section className="NewsIntervalTwo">
          <div className="cardNewsIntervalTwoContainer">
            {cardNewsIntervalTwo.map(({ id, ...props }) => (
              <Card key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
        </section>
      </div>
      <div className="globalDefNews">
        <section className="cardGlobalDefNews">
          <div className="cardGlobalDefNewsContainer">
            {globalDefNews.map(({ id, ...props }) => (
              <CardOOH key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
        </section>
      </div>
      <div className="newsType">
        <section className="cardNewsType">
          <div className="cardNewsTypeContainer">
            {newsNewType.map(({ id, ...props }) => (
              <CardType key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
        </section>
      </div>
      <div className="newsBlue">
        <section className="cardBlue">
          <div className="cardBlueContainer">
            {newsBlue.map(({ id, ...props }) => (
              <Card key={id} {...props} className="miniCardBody" iconClass="iconCard" />
            ))}
          </div>
        </section>
      </div>
    </div >
  );
}

export default HomePage;