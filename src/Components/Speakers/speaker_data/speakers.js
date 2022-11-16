const id_maker = () =>{
    return Math.random() * 9**99
  }
  export const speakers = [
    {
      name:"ALLEN MANVILLE",
      profession: "Director for Strategic Alliances, Europe, Cofense",
      bio: ["Allen Manville is an experienced Channel Director, offering a breadth of channel knowledge from his roles at Microsoft, Adobe and most recently Nitro."
      , "As the Director of Strategic Alliances at Cofense, Allen is focused on helping Cofense expand our European presence and helping the European channel partners grow their business by meeting the growing demand for email security with market leading protection, detection & response solutions."
        ],
      image_src: `allen-manville.jpg`,
      key: id_maker()
    },
    {
      name:"Paul Witchell",
      profession: "Sales Director, Cofense",
      bio: ["Paul has over 20 years' extensive experience in the technical and sales industries, including roles in business development and as a technical project manager."
      , "In the past 8+ years at Cofense, formerly PhishMe, Paul is responsible for enabling European companies in the UK and Benelux regions to reduce their risk and improve incident response by establishing and evolving their phishing defence strategies."
        ],
      image_src: `paul-witchell.jpeg`,
      key: id_maker()
    },
    {
      name:"Ben Jenkins",
      profession: "Director of Cybersecurity, ThreatLocker",
      bio: ["Ben Jenkins the Director of Cybersecurity at ThreatLocker.", 
      "With over 8 years of experience working within the technology sector, Ben specializes in working with SME's, helping them implement technical solutions that will grow and scale their businesses."
      ,
      "As a cybersecurity expert, Ben spends most of his free time educating others about the importance of keeping up-to-date with the latest technologies in order to better protect businesses.",
      "Ben has presented at many major events across the globe, and taken part in various panel discussions.",
      "Before joining Threatlocker, Ben worked in a variety of roles from support technician, to systems engineer.",
      "Together, these roles have enabled Ben to become the technology expert he is today."
     ],
      image_src: `ben-jenkins.jpg`,
      key: id_maker()
    },
    {
      name: 'Matthew Rhodes',
      key: id_maker(),
      profession:"Regional Sales Director for MSSPs, LogPoint",
      bio:["He has extensive experience from a range of established cybersecurity vendors, most recently Palo Alto Networks.",
          "He has previously served as EMEA Channel Manager at Demisto, Northern European Channel Manager at Cylance, and as Major Accounts Director at Exclusive Networks."],
      image_src: `matthew-rhodes.png`
    },
    {
      name: 'Alex Ford',
      key: id_maker(),
      profession:"Vice President of Sales, IT Glue",
      bio:["Alex Ford has been a leader in the IT channel for the best part of a decade.",
           "Alex has built a considerable network and has a wealth of experience, having been an integral part of building the EMEA Channel at Datto before IT Glue.",
           "A highly knowledgeable and passionate channel expert, Alex has been part of IT Glue EMEA since its inception and continues to lead the team in his capacity as Vice President of Sales EMEA."
          ],
      image_src: `alex-ford.jpg`
    },
    {
      name:"Laurence Woolley",
      profession: "Senior Key Accounts Manager, RapidFire Tools",
      bio: [`An experienced and driven Account Manger focusing primarily on SaaS in EMEA.`,
            `Laurence is a versatile self-starter with exposure to enterprise sales and experience within Software sales, IT, ITSM, Security, Compliance & Risk Management`,
            
           ],
      image_src: `laurence-wool.jpg`,
      key: id_maker()
    }
    ,
    {
      name:"Marwin Marcussen",
      profession: "Sales Engineer Manager, Kaseya",
      bio: [`Marwin has worked with Kaseya for over 10 years, and he consults with customers, prospects, and channel partners all over the EMEA region to understand their requirements and show how Kaseya can solve specific problems from a technical standpoint.`,
            `Prior to joining Kaseya, Marwin worked in IT Security with Kahuna Managing Security.`          
           ],
      image_src: `marwin.png`,
      key: id_maker()
    }
    ,
    {
      name:"Phylip Morgan",
      profession: "Chief Channel Officer, Pax8 UK",
      image_src: `Morgan_Phylip.png`,
      key: id_maker()
    }
    ,
    {
      name:"Greg Jones",
      profession: "Business Development Director EMEA, Datto",
      bio: [`As Business Development Director, EMEA, Greg is responsible for expanding and driving the success of Datto’s partner program and unique MSP ecosystem across the region. With over 20 years of experience in the IT sector, Greg has extensive knowledge in expertly managing the development of technology and business processes.`,
            `Prior to joining Datto in October 2019, Greg was CTO for a large managed service provider in the Northwest of England. Greg started his management career in IT for the public sector after securing a senior IT management position within the local authority, and later went on to private consultancy for central government.`,
            `Greg’s passion extends to his community where he serves as Business Ambassador for Alder Hey Children’s Charity, whose mission is to support the young patients, families and the staff at Alder Hey Children’s NHS Foundation Trust.`
           ],
      image_src: `greg-jones.jpg`,
      key: id_maker()
    }
    ,
    {
      name:"Kyle Torres",
      profession: "Channel Account Executive - MSP UKI/WER, Sophos",
      bio: [`Kyle has worked for Sophos for 3 years and is at the forefront of the MSP offering in the UKI. During this time, he has worked across the sales organisation and now focuses on adding value to the partners on the UKI MSP programme. He regularly speaks at conferences and Think Tanks to advocate for Sophos and its MSP offering.`,
            
           ],
      image_src: `kyle-torres.jpg`,
      key: id_maker()
    }
    ,
    {
      name:"Tia Hopkins",
      profession: "Field CTO and Chief Cyber Risk Strategist, eSentire",
      bio: [`Tia is a Cybersecurity Executive who has spent the past 20+ years of her career in various IT and IT Security roles with over a decade of experience in the managed services space. Her work focuses on helping organisations achieve cyber resilience through effective and efficient combinations of people, process, and technology; as well as influencing the rapid transformation and market value of high-growth, disruptive cybersecurity start-ups through market research and education, thought leadership and evangelism, product messaging, competitive differentiation, and roadmap guidance.`,
            `In addition to her work at eSentire, she is also an adjunct professor of Cybersecurity at Yeshiva University and is currently pursuing an PhD in Cybersecurity Technology Innovation Management. Her mission is to help drive the growth and success of the cybersecurity industry by researching and addressing current industry challenges and trends, and taking an innovative approach to solving for both current and future concerns.`,
            
           ],
      image_src: `tia-hopkins.jpeg`,
      key: id_maker()
    }
    ,
    {
      name:"Guido Gerrits",
      profession: "Business Development Director EMEA, Datto",
      bio: [`As Business Development Director, EMEA, Greg is responsible for expanding and driving the success of Datto’s partner program and unique MSP ecosystem across the region. With over 20 years of experience in the IT sector, Greg has extensive knowledge in expertly managing the development of technology and business processes.`,
            `Prior to joining Datto in October 2019, Greg was CTO for a large managed service provider in the Northwest of England. Greg started his management career in IT for the public sector after securing a senior IT management position within the local authority, and later went on to private consultancy for central government.`,
            `Greg’s passion extends to his community where he serves as Business Ambassador for Alder Hey Children’s Charity, whose mission is to support the young patients, families and the staff at Alder Hey Children’s NHS Foundation Trust.`
           ],
      image_src: `guido.jpg`,
      key: id_maker()
    }
    ,
    {
      name:"MARC ROBERTS",
      profession: "Head of network solutions, Redcentric",
      image_src: `marc_roberts.jpg`,
      key: id_maker()
    }
    ,
    {
      name:"Leigh Cockell",
      profession: "Security Sales Engineer, Connectwise",
      bio: [`Leigh Cockell is a Security Sales Engineer at ConnectWise with 16 years of IT Channel experience.`,
            `As one of ConnectWise’s cyber security experts, Leigh supports the technical qualification of our services and assists our partners in their security maturity journey. Leigh has focused on Information Security and IT Governance in the last 5 years previously working as the Head of IT Governance for a security conscious MSP. Responsibilities included service improvement, change & management of security frameworks, review & implementation of new tools, managing NOC processes, endpoint patching & Security incident response.`,
            `As a Lead Implementor and Auditor of Iso27001 Leigh helped build a successful Information Security Program with 3+ years of Iso27001 certification and GDPR Compliance. Leigh believes in collaboration towards Security maturity and sharing industry knowledge to allow a more secure channel, with a background in consultancy to various verticals including medical and Gov Leigh understands the need for security to be appropriate to the risk and use case.`
           ],
      image_src: `leigh-cockell.jpg`,
      key: id_maker()
    }
    ,
    {
      name:"Bob Layton",
      profession: "Chief Channel Officer, eSentire.",
      bio: [`Bob Layton leads eSentire’s channel sales organisation and partner strategy, with a focus on growing and expanding eSentire’s Partner Program globally.`,
            `Bob comes to eSentire with 25 years of experience in the technology industry, specifically in B2B and B2C sales, channels, and marketing. Across the last decade, he has driven transformation and international expansion through channel-leveraged strategies and has successfully created new strategy and execution models that have led to MRR growth and new routes to market in security, services and SaaS platforms. Immediately prior to eSentire, he helped drive the successful acquisition of Digital Defense by creating new paths to revenue with an ecosystem of partners, alliances, and technical integrations.`
            ,
            `Bob has also held senior leadership positions where he was responsible for sales, channel and marketing at Alert Logic, Pluribus Networks, Lumenate, and Cisco. He has been recognised three times as Channel Chief by CRN magazine and has been published extensively in security and channel publications. When not advising venture-backed startups or serving as a board member to technology companies, he enjoys spending quality time with his wife and three children at their home in Austin, Texas.`
           ],
      image_src: `bob_layton.png`,
      key: id_maker()
    }
    ,
    {
      name:"ROSS MCDONNELL",
      profession: "Account Manager, ID Agent",
      image_src: `ross_mcdon.jfif`,
      key: id_maker()
    }
    ,
    {
      name:"Ronan Short",
      profession: "MD, IT Support 4U",
      bio: [`IT Support 4U - An Irish MSP who specialise in providing Managed Cloud and IT services to the SMB market.`,
            `Ronan comes form over 20 years experience in the IT Industry, from the early days with some multinationals, he then moved into self employment in an IT retail setting for a few of these years. Ronan then built IT Support 4U into being a managed service provider. We are steadily growing and evolving this business with our customers needs at the forefront.`
            ,
            `This all drives him to take huge pride in providing an exceptionally high standard of customer service. In doing so, Ronan has aligned his business with leading partners in the MSP space to take the IT stresses from his team and customers so they can focus on their daily activities.`
           ],
      image_src: `ronan_short.jpg`,
      key: id_maker()
    }
    
  ]