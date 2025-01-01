//navbar

export const navbarData ={
  "menu": [
    {
      "name": "Hire",
      "type": "dropdown",
      "path": "/hire",
      "description": "Explore innovative solutions designed to simplify processes . ",
      "features": [
        {
          "name": "Frontend Developers",
          "icon": "fa-briefcase",
          "description": "Design and develop user-friendly interfaces for web applications.",
          "path": "/hire/job-openings"
        },
        {
          "name": "Backend Developers",
          "icon": "fa-user-tie",
          "description": "Join us as a freelancer and work on exciting projects.",
          "path": "/hire/freelance-opportunities"
        },
        {
          "name": "Mobile App Developers",
          "icon": "fa-mobile-alt",
          "description": "Create mobile applications for iOS and Android platforms.",
          "path": "/hire/contract-roles"
        },
        {
          "name": "QA Engineers",
          "icon": "fa-bug",
          "description": "Test software applications to ensure quality and performance.",
          "path": "/hire/qa-roles"
        },
        {
          "name": "DevOps Engineers",
          "icon": "fa-tools",
          "description": "Streamline development processes and infrastructure with DevOps practices.",
          "path": "/hire/devops-roles"
        },
        {
          "name": "AI & ML Specialists",
          "icon": "fa-robot",
          "description": "Leverage AI and ML technologies to build smart applications.",
          "path": "/hire/ai-ml-roles"
        }

      ]
    },
    {
      "name": "Industries",
      "type": "dropdown",
      "path": "/industries",
      "description": "Discover the industries we serve.",
      "features": [
        {
          "name": "Fintech",
          "icon": "fa-heartbeat",
          "description": "Solutions for the healthcare sector to improve patient care.",
          "path": "/industries/healthcare"
        },
        {
          "name": "Education",
          "icon": "fa-university",
          "description": "Innovative financial tools and services for the modern world.",
          "path": "/industries/finance"
        },
        {
          "name": "Logistics",
          "icon": "fa-store",
          "description": "Transforming retail experiences with technology-driven solutions.",
          "path": "/industries/retail"
        },
        {
          "name": "Manufacturing",
          "icon": "fa-store",
          "description": "Transforming retail experiences with technology-driven solutions.",
          "path": "/industries/retail"
        },

        { "name": "Enterprise", "icon": "fa-building", "description": "Innovative solutions for businesses of all sizes.", "path": "/industries/enterprise" },
        { "name": "Education", "icon": "fa-graduation-cap", "description": "Empowering educators and students with technology.", "path": "/industries/education" },
        { "name": "Real Estate", "icon": "fa-home", "description": "Revolutionizing the real estate industry with tech solutions.", "path": "/industries/real-estate" },
        { "name": "Medical & Healthcare", "icon": "fa-heartbeat", "description": "Enhancing healthcare services with technology.", "path": "/industries/healthcare" },
        { "name": "Technology Company", "icon": "fa-laptop-code", "description": "Tech solutions for companies looking to innovate.", "path": "/industries/technology" },
        { "name": "Media & Entertainment", "icon": "fa-film", "description": "Transforming media and entertainment with tech.", "path": "/industries/media-entertainment" },
        { "name": "NGO", "icon": "fa-hand-holding-heart", "description": "Supporting NGOs with technology-driven solutions.", "path": "/industries/ngo" }
      ]
    },
    {
      "name": "Services",
      "type": "dropdown",
      "path": "/services",
      "description": "Explore the range of services we offer.",
      "features": [
        {
          "name": "Team Extension",
          "icon": "fa-lightbulb",
          "description": "Expert advice and strategic planning for your business.",
          "path": "/services/consulting"
        },
        {
          "name": "Custom Software Development",
          "icon": "fa-cogs",
          "description": "End-to-end software development services for every industry.",
          "path": "/services/development"
        },
        {
          "name": "Enterprise Software Development",
          "icon": "fa-headset",
          "description": "24/7 customer support to assist with any challenges.",
          "path": "/services/support"
        },
        {
          "name": "MVP Development",
          "icon": "fa-headset",
          "description": "24/7 customer support to assist with any challenges.",
          "path": "/services/support"
        },
      ]
    },
    {
      "name": "Products",
      "type": "dropdown",
      "path": "/products",
      "description": "Discover our range of innovative products.",
      "features": [
        {
          "name": "Time2Task",
          "icon": "fa-box",
          "description": "Our flagship product designed to streamline operations.",
          "path": "/products/product-a"
        },
        {
          "name": "Cloud Clock In",
          "icon": "fa-cogs",
          "description": "A cutting-edge tool for improving productivity.",
          "path": "/products/product-b"
        },
        {
          "name": "Flyte CRM",
          "icon": "fa-cogs",
          "description": "A cutting-edge tool for improving productivity.",
          "path": "/products/product-b"
        },
        {
          "name": "Flyte POS",
          "icon": "fa-cogs",
          "description": "A cutting-edge tool for improving productivity.",
          "path": "/products/product-b"
        },

      ]
    },
    {
      "name": "Case Studies",
      "type": "link",
      "path": "/case-studies",
      "description": "Read about the success stories of our clients."
    },
    {
      "name": "Company",
      "type": "dropdown",
      "path": "/company",
      "description": "Learn more about our company.",
      "features": [
        {
          "name": "About Us",
          "icon": "fa-info-circle",
          "description": "Get to know our mission, vision, and values.",
          "path": "/company/about-us"
        },
        {
          "name": "Our Team",
          "icon": "fa-users",
          "description": "Meet the talented individuals behind our success.",
          "path": "/company/our-team"
        },
        {
          "name": "Contact",
          "icon": "fa-envelope",
          "description": "Get in touch with us for inquiries or support.",
          "path": "/company/contact"
        }
      ]
    },
    // {
    //   "name": "Career",
    //   "type": "link",
    //   "path": "/career",
    //   "description": "Explore career opportunities and join our team."
    // }
  ]
}


// banner
export const bannerData = {
  title: "Trusted Experts in Custom Software",
  subtitle: "Innovative Software Solutions to Drive Your Success",
  description:
    "Flyte Solutions Ltd. (FSL) delivers ROI-driven software solutions tailored for startups, SMBs, and enterprises. From web to mobile applications, we offer cost-effective services to help businesses achieve their goals, cut costs, and grow efficiently.",
  stats: {
    yearsExperience: 12,
    projectsCompleted: 350,
    recurringClients: 97,
    solutionsDelivered: 500,
  },
  bannerImage: "/images/bannerImg.png",
};

export const brandData = {
  title: "Trusted by top brands to deliver excellence every time",
  brands: [
    {
      src: "/images/bell.png",
      alt: "Brand 1",
    },
    {
      src: "/images/care_brand.png",
      alt: "Brand 2",
    },
    {
      src: "/images/city_bank_brand.png",
      alt: "Brand 3",
    },
    {
      src: "/images/EFSA_brand.png",
      alt: "Brand 4",
    },
    {
      src: "/images/FAO_logo_brand.png",
      alt: "Brand 5",
    },
    {
      src: "/images/flyte-logo.png",
      alt: "Brand 6",
    },
    {
      src: "/images/hydro-one-telecom_brand.svg",
      alt: "Brand 7",
    },
    {
      src: "/images/ilo_brand.png",
      alt: "Brand 8",
    },
    {
      src: "/images/macmillan_brand.png",
      alt: "Brand 9",
    },
    {
      src: "/images/robi_brand.png",
      alt: "Brand 10",
    },
    {
      src: "/images/Roche_brand.png",
      alt: "Brand 11",
    },
    {
      src: "/images/sage-brand.png",
      alt: "Brand 12",
    },
    {
      src: "/images/uber_brand.svg",
      alt: "Brand 13",
    },
    {
      src: "/images/unicef_brand.png",
      alt: "Brand 14",
    },
    {
      src: "/images/usaid_brand.png",
      alt: "Brand 15",
    },
    {
      src: "/images/world-health-organization_brand.png",
      alt: "Brand 16",
    },
  ],
};

// service

export const serviceData = [
  {
    title: "Team Extension",
    description:
      "Expand your development capabilities with dedicated teams that integrate seamlessly with your existing operations.",
    keywords: ["outsourcing", "staffing", "scalable", "developers"],
    image: "/images/service1.png",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions that align with your business needs, ensuring seamless integration and efficiency.",
    keywords: ["custom", "solutions", "design", "apps"],
    image: "/images/service2.png",
  },
  {
    title: "Enterprise Software Development",
    description:
      "Build robust enterprise-level software to support large-scale operations, improve efficiency, and foster innovation.",
    keywords: ["enterprise", "scalable", "automation", "growth"],
    image: "/images/service3.png",
  },
  {
    title: "Mobile App Development",
    description:
      "Design and develop mobile applications for iOS and Android platforms, enhancing user experience and engagement.",
    keywords: ["mobile", "iOS", "Android", "apps"],
    image: "/images/service4.svg",
  },
  {
    title: "QA & Testing",
    description:
      "Ensure software quality with comprehensive testing services, from functional to performance testing.",
    keywords: ["quality", "testing", "automation", "bugs"],
    image: "/images/service5.png",
  },
  {
    title: "MVP Development",
    description:
      "Build a minimum viable product quickly to test your ideas, validate concepts, and enter the market faster.",
    keywords: ["MVP", "launch", "validation", "startup"],
    image: "/images/service6.png",
  },
  {
    title: "Cloud Computing Solutions",
    description:
      "Implement cloud solutions that improve scalability, security, and collaboration for businesses of all sizes.",
    keywords: ["cloud", "scalable", "security", "infrastructure"],
    image: "/images/service3.png",
  },
];

// blog and news

export const blogData = {
  cards: [
    {
      title: "Flyte Secures ISO Certification",
      image:"/images/blog-flyte-iso.png",
      description:
        "Flyte, a leading cloud-based platform, has recently secured its ISO certification, further enhancing its commitment to data security and customer trust.",
      keywords: [
        "Flyte",
        "ISO Certification",
        "Data Security",
        "Cloud Platform",
      ],
      profile: {
        name: "Joanna Wellick",
        image: " /images/ceo_sumon.jpg",
        date: "June 28, 2023",
      },
      article: {
        readTime: "4 min read",
        views: "230 views",
      },
    },
    {
      title: "DevOps Best Practices",
      image:"/images/blog-flyte-devops.png",
      description:
        "This article covers key DevOps practices that help streamline software development processes, improve collaboration, and increase deployment frequency.",
      keywords: [
        "DevOps",
        "Best Practices",
        "Software Development",
        "Automation",
      ],
      profile: {
        name: "John Doe",
        image: " /images/ceo_sumon.jpg",
        date: "March 15, 2024",
      },
      article: {
        readTime: "5 min read",
        views: "172 views",
      },
    },
    {
      title: "Info Session on Cloud Management",
      image:"/images/blog-flyte-cloudManagement.png",
      description:
        "Join us for an informative session on best practices in cloud management, focusing on scaling, cost optimization, and security in the cloud.",
      keywords: [
        "Cloud Management",
        "Info Session",
        "Cost Optimization",
        "Security",
      ],
      profile: {
        name: "Alex Smith",
        image: " /images/ceo_sumon.jpg",
        date: "April 10, 2024",
      },
      article: {
        readTime: "6 min read",
        views: "145 views",
      },
    },
    {
      title: "The Future of DevOps Tools",
      image:"/images/blog-flyte-devops.png",
      description:
        "This article discusses the evolving landscape of DevOps tools and technologies, focusing on emerging tools and trends that are reshaping the industry.",
      keywords: [
        "DevOps Tools",
        "Emerging Technologies",
        "Industry Trends",
        "Automation",
      ],
      profile: {
        name: "Sarah Lee",
        image: " /images/ceo_sumon.jpg",
        date: "February 19, 2024",
      },
      article: {
        readTime: "7 min read",
        views: "198 views",
      },
    },
    {
      title: "How Cloud Infrastructure is Changing IT",
      image:"/images/blog-flyte-iso.png",
      description:
        "Cloud infrastructure is revolutionizing the IT industry. This article covers how organizations are adopting cloud solutions to improve flexibility and reduce costs.",
      keywords: [
        "Cloud Infrastructure",
        "IT Industry",
        "Cost Reduction",
        "Flexibility",
      ],
      profile: {
        name: "David Warner",
        image: " /images/ceo_sumon.jpg",
        date: "January 25, 2024",
      },
      article: {
        readTime: "8 min read",
        views: "300 views",
      },
    },
  ],
};

// operations techs

export const techData = {
  "frontend": {
    title: "Frontend Development",
    description: "Creating responsive and dynamic user interfaces using modern frontend technologies.",
    technologies: [
      {
        "name": "HTML",
        "image": "/images/html.png"
      },
      {
        "name": "CSS",
        "image": "/images/css.png"
      },
      {
        "name": "JavaScript",
        "image": "/images/js.png"
      },
      {
        "name": "React",
        "image": "/images/react.png"
      },
      {
        "name": "Angular",
        "image": "/images/angular.png"
      },
      {
        "name": "Vue.js",
        "image": "/images/vue.png"
      }
    ]
  },
  "backend": {
    title: "Backend Development",
    description: "Building a robust and scalable backend that supports various features, requirements, and experiences for your users.",
    technologies: [
      {
        "name": "Node.js",
        "image": "/images/node.png"
      },
      {
        "name": "PHP(Laravel)",
        "image": "/images/laravel.png"
      },
      {
        "name": "Python",
        "image": "/images/python.png"
      },
      {
        "name": "Django",
        "image": "/images/django.png"
      },
      {
        "name": "Ruby",
        "image": "/images/ruby.jpg"
      },
      {
        "name": "Java(Spring)",
        "image": "/images/java.png"
      }
    ]
  },
  "mobileDevelopment": {
    title: "Mobile Development",
    description: "Developing cross-platform and native mobile apps with cutting-edge frameworks.",
    technologies: [
      {
        "name": "React Native",
        "image": "/images/react.png"
      },
      {
        "name": "Flutter",
        "image": "/images/flutter.png"
      },
      {
        "name": "Swift",
        "image": "/images/swift.jpg"
      },
      {
        "name": "Kotlin",
        "image": "/images/kotlin.svg"
      },
      {
        "name": "iOS",
        "image": "/images/iOS.png"
      }
    ]
  },
  "qualityAssurance": {
    title: "Quality Assurance",
    description: "Delivering quality applications with advanced testing and QA tools.",
    technologies: [
      {
        "name": "Selenium",
        "image": "/images/selenium.png"
      },
      {
        "name": "Jest",
        "image": "/images/jest.png"
      },
      {
        "name": "Jmeter",
        "image": "/images/jmeter.png"
      },
      {
        "name": "Postman",
        "image": "/images/postman.png"
      },
      {
        "name": "OWASP",
        "image": "/images/owasp.png"
      }
    ]
  },
  "devOps": {
    title: "DevOps",
    description: "Streamlining development processes and infrastructure with DevOps practices and tools.",
    technologies: [
      {
        "name": "Docker",
        "image": "/images/docker.png"
      },
      {
        "name": "Kubernetes",
        "image": "/images/kubernetes.png"
      },
      {
        "name": "AWS",
        "image": "/images/jenkins.png"
      },
      {
        "name": "Azure",
        "image": "/images/azure.png"
      },
      {
        "name": "Jenkins",
        "image": "/images/jenkins.png"
      }
    ]
  },
  "aiML": {
    title: "AI & ML",
    description: "Leveraging artificial intelligence and machine learning to build smart applications.",
    technologies: [
      {
        "name": "TensorFlow",
        "image": "/images/tensorflow.png"
      },
      {
        "name": "PyTorch",
        "image": "/images/pytorch.png"
      },
      {
        "name": "Keras",
        "image": "/images/keras.png"
      },
      {
        "name": "Scikit-learn",
        "image": "/images/scikit-learn.png"
      },
      {
        "name": "OpenCV",
        "image": "/images/opencv.png"
      }
    ]
  }
};

// project data

export const projectData=[
  {
    "logo": "https://via.placeholder.com/40x40",
    "tags": ["FINTECH", "STARTUP"],
    "title": "Innovating Financial Solutions Globally",
    "description": "Their ability to simplify complex financial processes was outstanding. They exceeded expectations.",
    "testimonial": {
      "name": "Jane Doe",
      "role": "CFO at FinTech Corp",
      "profileImage": "https://via.placeholder.com/40x40"
    },
    "features": ["Seamless Integration", "AI-Powered Insights", "Secure Transactions"],
    "mainImage": "https://via.placeholder.com/500x375",
    "button": "Discover More"
  },
  {
    "logo": "https://via.placeholder.com/40x40",
    "tags": ["HEALTHCARE", "TECH"],
    "title": "Pioneering Healthtech Advancements",
    "description": "Their commitment to improving healthcare through technology was remarkable and inspiring.",
    "testimonial": {
      "name": "Michael Smith",
      "role": "Director at HealthPlus",
      "profileImage": "https://via.placeholder.com/40x40"
    },
    "features": ["Patient-Centric Solutions", "Real-Time Monitoring", "Data-Driven Care"],
    "mainImage": "https://via.placeholder.com/500x375",
    "button": "Learn More"
  },
  {
    "logo": "https://via.placeholder.com/40x40",
    "tags": ["TRAVEL", "HOSPITALITY"],
    "title": "Revolutionizing Travel Experiences",
    "description": "Their attention to detail and focus on customer satisfaction stood out in every aspect.",
    "testimonial": {
      "name": "Emily Johnson",
      "role": "CEO at Wanderlust Co.",
      "profileImage": "https://via.placeholder.com/40x40"
    },
    "features": ["Personalized Itineraries", "24/7 Customer Support", "Sustainable Travel"],
    "mainImage": "https://via.placeholder.com/500x375",
    "button": "Explore Now"
  }
]

//industry data

export const industrydata = {
  subTitle: "Our Industries",
  sectionTitle: "Driving innovation across industries",
  industries: [
    {
      name: "Fintech",
      icon: "fa-solid fa-gauge",
      features: [
        { icon: "fas fa-coins fa-2xl", title: "Disruptive FinTech Solutions", description: "Empowering financial innovation and growth." },
        { icon: "fas fa-credit-card fa-2xl", title: "Digital Payments", description: "Revolutionizing the way payments are made." },
        { icon: "fas fa-chart-line fa-2xl", title: "Investment Strategies", description: "Providing innovative investment solutions." },
        { icon: "fas fa-shield-alt fa-2xl", title: "Fraud Prevention", description: "Safeguarding transactions from malicious activities." },
        { icon: "fas fa-lock fa-2xl", title: "Data Security", description: "Ensuring the security of sensitive financial data." }
      ]
    },
    {
      name: "Startup",
      icon: "fas fa-lightbulb",
      features: [
        { icon: "fas fa-users fa-2xl", title: "Team Building", description: "Assembling innovative teams for success." },
        { icon: "fas fa-bullhorn fa-2xl", title: "Brand Awareness", description: "Creating strong brand recognition in the market." },
        { icon: "fas fa-chart-pie fa-2xl", title: "Market Strategy", description: "Identifying and targeting the right market." },
        { icon: "fas fa-cogs fa-2xl", title: "Product Development", description: "Turning ideas into functional products." },
        { icon: "fas fa-hand-holding-usd fa-2xl", title: "Investment & Funding", description: "Securing capital for business growth." }
      ]
    },
    {
      name: "Logistics",
      icon: "fas fa-truck",
      features: [
        { icon: "fas fa-route fa-2xl", title: "Supply Chain Management", description: "Optimizing the flow of goods and services." },
        { icon: "fas fa-truck-moving fa-2xl", title: "Fleet Management", description: "Managing transportation logistics efficiently." },
        { icon: "fas fa-box-open fa-2xl", title: "Inventory Tracking", description: "Monitoring inventory in real-time." },
        { icon: "fas fa-shipping-fast fa-2xl", title: "Fast Delivery Solutions", description: "Ensuring on-time delivery to customers." },
        { icon: "fas fa-chart-line fa-2xl", title: "Logistics Optimization", description: "Improving operational efficiencies in logistics." }
      ]
    },
    {
      name: "Retail & Manufacturing",
      icon: "fas fa-store",
      features: [
        { icon: "fas fa-cogs fa-2xl", title: "Manufacturing Optimization", description: "Streamlining production processes." },
        { icon: "fas fa-tags fa-2xl", title: "Retail Management", description: "Managing retail operations effectively." },
        { icon: "fas fa-truck-loading fa-2xl", title: "Supply Chain Solutions", description: "Ensuring smooth product flow." },
        { icon: "fas fa-box fa-2xl", title: "Product Packaging", description: "Enhancing packaging solutions for retail." },
        { icon: "fas fa-percent fa-2xl", title: "Sales Growth", description: "Driving revenue through retail strategies." }
      ]
    },
    {
      name: "Enterprise",
      icon: "fas fa-building",
      features: [
        { icon: "fas fa-network-wired fa-2xl", title: "Network Infrastructure", description: "Building robust IT networks for enterprise." },
        { icon: "fas fa-users-cog fa-2xl", title: "Enterprise Resource Planning", description: "Integrating business functions with ERP systems." },
        { icon: "fas fa-chart-bar fa-2xl", title: "Business Analytics", description: "Leveraging data to drive business decisions." },
        { icon: "fas fa-lock fa-2xl", title: "Security Solutions", description: "Providing enterprise-level security services." },
        { icon: "fas fa-cloud fa-2xl", title: "Cloud Computing", description: "Empowering businesses with scalable cloud solutions." }
      ]
    },
    {
      name: "Education",
      icon: "fas fa-graduation-cap",
      features: [
        { icon: "fas fa-laptop fa-2xl", title: "E-learning Solutions", description: "Providing online learning platforms." },
        { icon: "fas fa-chalkboard-teacher fa-2xl", title: "Teacher Collaboration", description: "Improving collaboration among educators." },
        { icon: "fas fa-book-open fa-2xl", title: "Curriculum Development", description: "Designing innovative learning curricula." },
        { icon: "fas fa-certificate fa-2xl", title: "Certification Programs", description: "Offering credentialing for online learning." },
        { icon: "fas fa-users fa-2xl", title: "Student Engagement", description: "Enhancing student participation and interaction." }
      ]
    },
    {
      name: "Real Estate",
      icon: "fas fa-home",
      features: [
        { icon: "fas fa-building fa-2xl", title: "Property Development", description: "Developing and managing residential and commercial properties." },
        { icon: "fas fa-search fa-2xl", title: "Market Research", description: "Analyzing market trends and property values." },
        { icon: "fas fa-handshake fa-2xl", title: "Investment Opportunities", description: "Connecting investors with profitable properties." },
        { icon: "fas fa-cogs fa-2xl", title: "Property Management", description: "Managing real estate properties efficiently." },
        { icon: "fas fa-chart-line fa-2xl", title: "Real Estate Analytics", description: "Providing data-driven insights for real estate decisions." }
      ]
    },
    {
      name: "Medical & Healthcare",
      icon: "fas fa-heartbeat",
      features: [
        { icon: "fas fa-stethoscope fa-2xl", title: "Telemedicine Solutions", description: "Providing remote healthcare services." },
        { icon: "fas fa-pills fa-2xl", title: "Pharmaceutical Services", description: "Offering medical and pharmaceutical support." },
        { icon: "fas fa-ambulance fa-2xl", title: "Emergency Care", description: "Ensuring fast and efficient emergency services." },
        { icon: "fas fa-heart fa-2xl", title: "Patient Care", description: "Improving patient health and well-being." },
        { icon: "fas fa-chart-medical fa-2xl", title: "Health Data Analytics", description: "Using data to enhance healthcare delivery." }
      ]
    },
    {
      name: "Technology Company",
      icon: "fas fa-laptop-code",
      features: [
        { icon: "fas fa-code fa-2xl", title: "Software Development", description: "Building custom software solutions for businesses." },
        { icon: "fas fa-cloud fa-2xl", title: "Cloud Solutions", description: "Enabling businesses with scalable cloud computing." },
        { icon: "fas fa-digital-tachograph fa-2xl", title: "Tech Consulting", description: "Providing expert guidance for technology adoption." },
        { icon: "fas fa-mobile-alt fa-2xl", title: "Mobile Development", description: "Creating mobile applications for various platforms." },
        { icon: "fas fa-network-wired fa-2xl", title: "IT Infrastructure", description: "Designing and implementing tech infrastructures." }
      ]
    },
    {
      name: "Media & Entertainment",
      icon: "fas fa-film",
      features: [
        { icon: "fas fa-video fa-2xl", title: "Film Production", description: "Producing high-quality films and content." },
        { icon: "fas fa-headphones-alt fa-2xl", title: "Music Production", description: "Creating and producing original music." },
        { icon: "fas fa-camera fa-2xl", title: "Media Coverage", description: "Providing media coverage and advertising services." },
        { icon: "fas fa-tv fa-2xl", title: "Broadcasting", description: "Delivering media content across various platforms." },
        { icon: "fas fa-play-circle fa-2xl", title: "Streaming Services", description: "Offering on-demand content to audiences." }
      ]
    },
    {
      name: "NGO",
      icon: "fas fa-hand-holding-heart",
      features: [
        { icon: "fas fa-donate fa-2xl", title: "Fundraising", description: "Raising funds to support social causes." },
        { icon: "fas fa-globe-americas fa-2xl", title: "Global Outreach", description: "Expanding social impact globally." },
        { icon: "fas fa-users fa-2xl", title: "Community Support", description: "Building and supporting local communities." },
        { icon: "fas fa-hands-helping fa-2xl", title: "Volunteer Coordination", description: "Engaging volunteers for community projects." },
        { icon: "fas fa-handshake fa-2xl", title: "Partnerships", description: "Creating strategic partnerships for social good." }
      ]
    }
  ]
};




// footer data

export const footerData = {
  "footer": {
    "contactUs": {
      "location": "Flyte Solutions Ltd, The Reeve, House 11, Road 33, Gulshan-1, Dhaka-1212, Bangladesh.",
      "companyLogo": "/images/flyte-logo.png",
      "successLogos": [
        "/images/clip.png",
        "/images/goodfirms.png",
        "/images/Untitled-design.png",
        "/images/iso1.png",
        "/images/iso2.png",
      ],
      "phoneNumbers": ["+880-171-320-3656 ", "+880-179-353-2035 "],
      "emails": ["info@flytesolutions.com ", "sales@flytesolutions.com "],
      "socialLinks": [
        {
          "platform": "Facebook",
          "url": "https://www.facebook.com/@flytesoft/",
          "icon": "fa-facebook"
        },
        {
          "platform": "Twitter",
          "url": "https://twitter.com/example",
          "icon": "fa-twitter"
        },
        {
          "platform": "LinkedIn",
          "url": "https://www.linkedin.com/company/flytesolutions/posts/?feedView=all",
          "icon": "fa-linkedin"
        }
      ],
      "paymentMethods": [
        {
          "method": "Visa",
          "icon": "/images/visa.png"
        },
        {
          "method": "MasterCard",
          "icon": "/images/mastercard.png"
        },
        {
          "method": "Amex",
          "icon": "/images/amex.png"
        }
      ]
    },
    "services": [
      { "name": "Custom Software Development", "path": "/services/custom-software-development" },
      { "name": "Mobile Application Development", "path": "/services/mobile-application-development" },
      { "name": "MVP Development", "path": "/services/mvp-development" },
      { "name": "Enterprise Software Development", "path": "/services/enterprise-software-development" },
      { "name": "Team Extension", "path": "/services/team-extension" },
      { "name": "IT Consultancy", "path": "/services/it-consultancy" },
      { "name": "UI/UX Design", "path": "/services/ui-ux-design" },
      { "name": "QA & Testing", "path": "/services/qa-testing" },
      { "name": "DevOps", "path": "/services/devops" },
      { "name": "Legacy Application", "path": "/services/legacy-application" },
      { "name": "SaaS Development", "path": "/services/saas-development" },
      { "name": "IT Outsourcing", "path": "/services/it-outsourcing" }
    ],
    "products": [
      { "name": "Time2Task", "demoLink": "https://example.com/time2task" },
      { "name": "Cloud ClockIn", "demoLink": "https://example.com/cloud-clockin" },
      { "name": "Flyte Queue", "demoLink": "https://example.com/flyte-queue" },
      { "name": "Flyte ERP", "demoLink": "https://example.com/flyte-erp" },
      { "name": "Flyte CRM", "demoLink": "https://example.com/flyte-crm" },
      { "name": "Flyte POS", "demoLink": "https://example.com/flyte-pos" },
      { "name": "Inventory Management System", "demoLink": "https://example.com/inventory-management" },
      { "name": "AI Chatbot", "demoLink": "https://example.com/ai-chatbot" },
      { "name": "Board Meeting Management", "demoLink": "https://example.com/board-meeting" },
      { "name": "Help Desk Management", "demoLink": "https://example.com/help-desk" },
      { "name": "Clinic & Hospital Management", "demoLink": "https://example.com/clinic-hospital" },
      { "name": "Document Management System", "demoLink": "https://example.com/document-management" }
    ],
    "industry": [
      "Fintech",
      "Startup",
      "Logistics",
      "Retail & Manufacturing",
      "Enterprise",
      "Education",
      "Real Estate",
      "Medical & Healthcare",
      "Technology Company",
      "Media & Entertainment",
      "NGO"
    ]
  }
}
