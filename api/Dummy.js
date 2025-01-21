//navbar

export const navbarData = {
  menu: [
    {
      name: "Hire",
      type: "dropdown",
      path: "/hire",
      description: "Explore innovative solutions designed to simplify processes . ",
      features: [
        {
          name: "Frontend Developers",
          icon: "fa-briefcase",
          description: "Design and develop user-friendly interfaces for web applications.",
          path: "/hire/job-openings",
        },
        {
          name: "Backend Developers",
          icon: "fa-user-tie",
          description: "Join us as a freelancer and work on exciting projects.",
          path: "/hire",
        },
        {
          name: "Mobile App Developers",
          icon: "fa-mobile-alt",
          description: "Create mobile applications for iOS and Android platforms.",
          path: "/hire/contract-roles",
        },
        {
          name: "QA Engineers",
          icon: "fa-bug",
          description: "Test software applications to ensure quality and performance.",
          path: "/hire/qa-roles",
        },
        {
          name: "DevOps Engineers",
          icon: "fa-tools",
          description: "Streamline development processes and infrastructure with DevOps practices.",
          path: "/hire/devops-roles",
        },
        {
          name: "AI & ML Specialists",
          icon: "fa-robot",
          description: "Leverage AI and ML technologies to build smart applications.",
          path: "/hire/ai-ml-roles",
        },
      ],
    },
    {
      name: "Industries",
      type: "dropdown",
      path: "/industries",
      description: "Discover the industries we serve.",
      features: [
        {
          name: "Fintech",
          icon: "fa-heartbeat",
          description: "Solutions for the healthcare sector to improve patient care.",
          path: "/industries/healthcare",
        },
        {
          name: "Education",
          icon: "fa-university",
          description: "Innovative financial tools and services for the modern world.",
          path: "/industries/finance",
        },
        {
          name: "Logistics",
          icon: "fa-store",
          description: "Transforming retail experiences with technology-driven solutions.",
          path: "/industries/retail",
        },
        {
          name: "Manufacturing",
          icon: "fa-store",
          description: "Transforming retail experiences with technology-driven solutions.",
          path: "/industries/retail",
        },

        {
          name: "Enterprise",
          icon: "fa-building",
          description: "Innovative solutions for businesses of all sizes.",
          path: "/industries",
        },
        {
          name: "Education",
          icon: "fa-graduation-cap",
          description: "Empowering educators and students with technology.",
          path: "/industries",
        },
        {
          name: "Real Estate",
          icon: "fa-home",
          description: "Revolutionizing the real estate industry with tech solutions.",
          path: "/industries/real-estate",
        },
        {
          name: "Medical & Healthcare",
          icon: "fa-heartbeat",
          description: "Enhancing healthcare services with technology.",
          path: "/industries",
        },
        {
          name: "Technology Company",
          icon: "fa-laptop-code",
          description: "Tech solutions for companies looking to innovate.",
          path: "/industries",
        },
        {
          name: "Media & Entertainment",
          icon: "fa-film",
          description: "Transforming media and entertainment with tech.",
          path: "/industries",
        },
        {
          name: "NGO",
          icon: "fa-hand-holding-heart",
          description: "Supporting NGOs with technology-driven solutions.",
          path: "/industries",
        },
      ],
    },
    {
      name: "Services",
      type: "dropdown",
      path: "/services",
      description: "Explore the range of services we offer.",
      features: [
        {
          name: "Team Extension",
          icon: "fa-lightbulb",
          description: "Expert advice and strategic planning for your business.",
          path: "/services/consulting",
        },
        {
          name: "Custom Software Development",
          icon: "fa-cogs",
          description: "End-to-end software development services for every industry.",
          path: "/services/development",
        },
        {
          name: "Enterprise Software Development",
          icon: "fa-headset",
          description: "24/7 customer support to assist with any challenges.",
          path: "/services",
        },
        {
          name: "MVP Development",
          icon: "fa-headset",
          description: "24/7 customer support to assist with any challenges.",
          path: "/services",
        },
      ],
    },
    {
      name: "Products",
      type: "dropdown",
      path: "/products",
      description: "Discover our range of innovative products.",
      features: [
        {
          name: "Time2Task",
          icon: "fa-box",
          description: "Our flagship product designed to streamline operations.",
          path: "/products/product-a",
        },
        {
          name: "Cloud Clock In",
          icon: "fa-cogs",
          description: "A cutting-edge tool for improving productivity..",
          path: "/products",
        },
        {
          name: "Flyte CRM",
          icon: "fa-cogs",
          description: "A cutting-edge tool for improving productivity.",
          path: "/products",
        },
        {
          name: "Flyte POS",
          icon: "fa-cogs",
          description: "A cutting-edge tool for improving productivity.",
          path: "/products",
        },
      ],
    },
    {
      name: "Case Studies",
      type: "link",
      path: "/case-studies",
      description: "Read about the success stories of our clients.",
    },
    {
      name: "Company",
      type: "dropdown",
      path: "/company",
      description: "Learn more about our company.",
      features: [
        {
          name: "About Us",
          icon: "fa-info-circle",
          description:
            "Learn about our mission, vision, and the values that drive our commitment to excellence. Discover the story behind our journey and what makes us a trusted partner for businesses worldwide.",
          path: "/company/about-us",
        },
        {
          name: "News & Blogs",
          icon: "fa-users",
          description:
            "Stay updated with the latest company news, industry insights, and expert opinions. Dive into our blogs for valuable tips and updates shaping the future of technology and business.",
          path: "/company/news&blogs",
        },
      ],
    },
    {
      name: "Career",
      type: "link",
      path: "/career",
      description: "Explore career opportunities and join our team.",
    },
  ],
};

// banner
export const bannerData = {
  title: "Achieve <span> Sucess </span> With Innovative <span> Software Solutions </span>",
  description:
    "Our platform empowers your business with cutting-edge software solutions and lightning-fast deployment. Achieve your goals with unmatched efficiency and reliability.",
  industries: [
    {
      logo: "fa-solid fa-chart-area",
      name: "Fintech",
    },
    {
      logo: "fa-solid fa-graduation-cap",
      name: "Education",
    },
    {
      logo: "fa-solid fa-truck",
      name: "Logistics",
    },
    {
      logo: "fa-solid fa-store",
      name: "Retail & Manufacturing",
    },
    {
      logo: "fa-solid fa-building",
      name: "Real Estate",
    },
    {
      logo: "fa-solid fa-heart-pulse",
      name: "Medical & Healthcare",
    },
    {
      logo: "fa-solid fa-microchip",
      name: "Technology Company",
    },
    {
      logo: "fa-solid fa-video",
      name: "Media & Entertainment",
    },
  ],
  bannerImage: "/images/bannerImg.png",
};

export const brandData = {
  title: "Trusted by top brands to deliver excellence every time",
  brands: [
    {
      src: "/images/uber.png",
      alt: "Brand 1",
    },
    {
      src: "/images/Roche_brand.png",
      alt: "Brand 2",
    },
    {
      src: "/images/city_bank_brand.png",
      alt: "Brand 3",
    },
    {
      src: "/images/robi_brand.png",
      alt: "Brand 4",
    },
    {
      src: "/images/care_brand.png",
      alt: "Brand 5",
    },
    {
      src: "/images/unicef_brand.png",
      alt: "Brand 6",
    },
    {
      src: "/images/macmillan_brand.png",
      alt: "Brand 7",
    },
    {
      src: "/images/world-health-organization_brand.png",
      alt: "Brand 8",
    },
    {
      src: "/images/ilo_brand.png",
      alt: "Brand 9",
    },
    {
      src: "/images/bell.png",
      alt: "Brand 10",
    },
    {
      src: "/images/usaid_brand.png",
      alt: "Brand 11",
    },
    {
      src: "/images/sage-brand.png",
      alt: "Brand 12",
    },
    {
      src: "/images/hydro-one-telecom-logo.png",
      alt: "Brand 13",
    },
    {
      src: "/images/keller-williams.png",
      alt: "Brand 14",
    },
    {
      src: "/images/FAO_logo_brand.png",
      alt: "Brand 15",
    },
    {
      src: "/images/ada-grp.png",
      alt: "Brand 16",
    },
    {
      src: "/images/berger.png",
      alt: "Brand 17",
    },
    {
      src: "/images/walton.png",
      alt: "Brand 18",
    },
    {
      src: "/images/DB_WORDMARK.png",
      alt: "Brand 19",
    },
  ],
};

// service

export const serviceData = [
  {
    title: "Team Extension",
    description:
      "Expand your development capabilities with dedicated teams that integrate seamlessly with your existing operations.",
    keywords: ["outsourcing", "staffing", "developers"],
    image: "/images/service1.png",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions that align with your business needs, ensuring seamless integration and efficiency.",
    keywords: ["solutions", "design", "apps"],
    image: "/images/service2.png",
  },
  {
    title: "Enterprise Software Development",
    description:
      "Build robust enterprise-level software to support large-scale operations, improve efficiency, and foster innovation.",
    keywords: ["scalable", "automation", "growth"],
    image: "/images/service3.png",
  },
  {
    title: "Mobile App Development",
    description:
      "Design and develop mobile applications for iOS and Android platforms, enhancing user experience and engagement.",
    keywords: ["iOS", "Android", "apps"],
    image: "/images/service4.svg",
  },
  {
    title: "QA & Testing",
    description:
      "Ensure software quality with comprehensive testing services, from functional to performance testing.",
    keywords: ["testing", "automation", "bugs"],
    image: "/images/service5.png",
  },
  {
    title: "MVP Development",
    description:
      "Build a minimum viable product quickly to test your ideas, validate concepts, and enter the market faster.",
    keywords: ["MVP", "validation", "startup"],
    image: "/images/service6.png",
  },
  {
    title: "Cloud Computing Solutions",
    description:
      "Implement cloud solutions that improve scalability, security, and collaboration for businesses of all sizes.",
    keywords: ["cloud", "security", "infrastructure"],
    image: "/images/service3.png",
  },
];

// blog and news

export const blogData = {
  cards: [
    {
      title: "Flyte Secures ISO Certification",
      image: "/images/blog-flyte-iso.png",
      description:
        "Flyte, a leading cloud-based platform, has recently secured its ISO certification, further enhancing its commitment to data security and customer trust.",
      keywords: ["Flyte", "ISO Certification", "Data Security", "Cloud Platform"],
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
      image: "/images/blog-flyte-devops.png",
      description:
        "This article covers key DevOps practices that help streamline software development processes, improve collaboration, and increase deployment frequency.",
      keywords: ["DevOps", "Best Practices", "Software Development", "Automation"],
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
      image: "/images/blog-flyte-cloudManagement.png",
      description:
        "Join us for an informative session on best practices in cloud management, focusing on scaling, cost optimization, and security in the cloud.",
      keywords: ["Cloud Management", "Info Session", "Cost Optimization", "Security"],
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
      image: "/images/blog-flyte-devops.png",
      description:
        "This article discusses the evolving landscape of DevOps tools and technologies, focusing on emerging tools and trends that are reshaping the industry.",
      keywords: ["DevOps Tools", "Emerging Technologies", "Industry Trends", "Automation"],
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
      image: "/images/blog-flyte-iso.png",
      description:
        "Cloud infrastructure is revolutionizing the IT industry. This article covers how organizations are adopting cloud solutions to improve flexibility and reduce costs.",
      keywords: ["Cloud Infrastructure", "IT Industry", "Cost Reduction", "Flexibility"],
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
    {
      title: "How Cloud Infrastructure is Changing IT",
      image: "/images/blog-flyte-iso.png",
      description:
        "Cloud infrastructure is revolutionizing the IT industry. This article covers how organizations are adopting cloud solutions to improve flexibility and reduce costs.",
      keywords: ["Cloud Infrastructure", "IT Industry", "Cost Reduction", "Flexibility"],
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
    {
      title: "How Cloud Infrastructure is Changing IT",
      image: "/images/blog-flyte-iso.png",
      description:
        "Cloud infrastructure is revolutionizing the IT industry. This article covers how organizations are adopting cloud solutions to improve flexibility and reduce costs.",
      keywords: ["Cloud Infrastructure", "IT Industry", "Cost Reduction", "Flexibility"],
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
    {
      title: "How Cloud Infrastructure is Changing IT",
      image: "/images/blog-flyte-iso.png",
      description:
        "Cloud infrastructure is revolutionizing the IT industry. This article covers how organizations are adopting cloud solutions to improve flexibility and reduce costs.",
      keywords: ["Cloud Infrastructure", "IT Industry", "Cost Reduction", "Flexibility"],
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
  frontend: {
    title: "Frontend Development",
    description: "Creating responsive and dynamic user interfaces using modern frontend technologies.",
    technologies: [
      {
        name: "HTML",
        image: "/images/html.png",
      },
      {
        name: "CSS",
        image: "/images/css.png",
      },
      {
        name: "JavaScript",
        image: "/images/js.png",
      },
      {
        name: "React",
        image: "/images/react.png",
      },
      {
        name: "Angular",
        image: "/images/angular.png",
      },
      {
        name: "Vue.js",
        image: "/images/vue.png",
      },
    ],
  },
  backend: {
    title: "Backend Development",
    description:
      "Building a robust and scalable backend that supports various features, requirements, and experiences for your users.",
    technologies: [
      {
        name: "Node.js",
        image: "/images/node.png",
      },
      {
        name: "PHP(Laravel)",
        image: "/images/laravel.png",
      },
      {
        name: "Python",
        image: "/images/python.png",
      },
      {
        name: "Django",
        image: "/images/django.png",
      },
      {
        name: "Ruby",
        image: "/images/ruby.jpg",
      },
      {
        name: "Java(Spring)",
        image: "/images/java.png",
      },
    ],
  },
  mobileDevelopment: {
    title: "Mobile Development",
    description: "Developing cross-platform and native mobile apps with cutting-edge frameworks.",
    technologies: [
      {
        name: "React Native",
        image: "/images/react.png",
      },
      {
        name: "Flutter",
        image: "/images/flutter.png",
      },
      {
        name: "Swift",
        image: "/images/swift.jpg",
      },
      {
        name: "Kotlin",
        image: "/images/kotlin.svg",
      },
      {
        name: "iOS",
        image: "/images/iOS.png",
      },
    ],
  },
  qualityAssurance: {
    title: "Quality Assurance",
    description: "Delivering quality applications with advanced testing and QA tools.",
    technologies: [
      {
        name: "Selenium",
        image: "/images/selenium.png",
      },
      {
        name: "Jest",
        image: "/images/jest.png",
      },
      {
        name: "Jmeter",
        image: "/images/jmeter.png",
      },
      {
        name: "Postman",
        image: "/images/postman.png",
      },
      {
        name: "OWASP",
        image: "/images/owasp.png",
      },
    ],
  },
  devOps: {
    title: "DevOps",
    description: "Streamlining development processes and infrastructure with DevOps practices and tools.",
    technologies: [
      {
        name: "Docker",
        image: "/images/docker.png",
      },
      {
        name: "Kubernetes",
        image: "/images/kubernetes.png",
      },
      {
        name: "AWS",
        image: "/images/jenkins.png",
      },
      {
        name: "Azure",
        image: "/images/azure.png",
      },
      {
        name: "Jenkins",
        image: "/images/jenkins.png",
      },
    ],
  },
  aiML: {
    title: "AI & ML",
    description: "Leveraging artificial intelligence and machine learning to build smart applications.",
    technologies: [
      {
        name: "TensorFlow",
        image: "/images/tensorflow.png",
      },
      {
        name: "PyTorch",
        image: "/images/pytorch.png",
      },
      {
        name: "Keras",
        image: "/images/keras.png",
      },
      {
        name: "Scikit-learn",
        image: "/images/scikit-learn.png",
      },
      {
        name: "OpenCV",
        image: "/images/opencv.png",
      },
    ],
  },
};

// project data

export const projectData = [
  {
    logo: "https://via.placeholder.com/40x40",
    tags: ["FINTECH", "STARTUP"],
    title: "Innovating Financial Solutions Globally",
    description:
      "Their ability to simplify complex financial processes was outstanding. They exceeded expectations.",
    testimonial: {
      name: "Jane Doe",
      role: "CFO at FinTech Corp",
      profileImage: "https://via.placeholder.com/40x40",
    },
    features: ["Seamless Integration", "AI-Powered Insights", "Secure Transactions"],
    mainImage: "https://via.placeholder.com/500x375",
    button: "Discover More",
  },
  {
    logo: "https://via.placeholder.com/40x40",
    tags: ["HEALTHCARE", "TECH"],
    title: "Pioneering Healthtech Advancements",
    description: "Their commitment to improving healthcare through technology was remarkable and inspiring.",
    testimonial: {
      name: "Michael Smith",
      role: "Director at HealthPlus",
      profileImage: "https://via.placeholder.com/40x40",
    },
    features: ["Patient-Centric Solutions", "Real-Time Monitoring", "Data-Driven Care"],
    mainImage: "https://via.placeholder.com/500x375",
    button: "Learn More",
  },
  {
    logo: "https://via.placeholder.com/40x40",
    tags: ["TRAVEL", "HOSPITALITY"],
    title: "Revolutionizing Travel Experiences",
    description: "Their attention to detail and focus on customer satisfaction stood out in every aspect.",
    testimonial: {
      name: "Emily Johnson",
      role: "CEO at Wanderlust Co.",
      profileImage: "https://via.placeholder.com/40x40",
    },
    features: ["Personalized Itineraries", "24/7 Customer Support", "Sustainable Travel"],
    mainImage: "https://via.placeholder.com/500x375",
    button: "Explore Now",
  },
];

//industry data

export const industrydata = {
  subTitle: "Our Industries",
  sectionTitle: "Driving innovation across industries",
  industries: [
    {
      name: "Fintech",
      icon: "fa-solid fa-gauge",
      features: [
        {
          icon: "fas fa-coins fa-2xl",
          title: "Disruptive FinTech Solutions",
          description: "Empowering financial innovation and growth.",
        },
        {
          icon: "fas fa-credit-card fa-2xl",
          title: "Digital Payments",
          description: "Revolutionizing the way payments are made.",
        },
        {
          icon: "fas fa-chart-line fa-2xl",
          title: "Investment Strategies",
          description: "Providing innovative investment solutions.",
        },
        {
          icon: "fas fa-shield-alt fa-2xl",
          title: "Fraud Prevention",
          description: "Safeguarding transactions from malicious activities.",
        },
        {
          icon: "fas fa-lock fa-2xl",
          title: "Data Security",
          description: "Ensuring the security of sensitive financial data.",
        },
      ],
    },
    {
      name: "Startup",
      icon: "fas fa-lightbulb",
      features: [
        {
          icon: "fas fa-users fa-2xl",
          title: "Team Building",
          description: "Assembling innovative teams for success.",
        },
        {
          icon: "fas fa-bullhorn fa-2xl",
          title: "Brand Awareness",
          description: "Creating strong brand recognition in the market.",
        },
        {
          icon: "fas fa-chart-pie fa-2xl",
          title: "Market Strategy",
          description: "Identifying and targeting the right market.",
        },
        {
          icon: "fas fa-cogs fa-2xl",
          title: "Product Development",
          description: "Turning ideas into functional products.",
        },
        {
          icon: "fas fa-hand-holding-usd fa-2xl",
          title: "Investment & Funding",
          description: "Securing capital for business growth.",
        },
      ],
    },
    {
      name: "Logistics",
      icon: "fas fa-truck",
      features: [
        {
          icon: "fas fa-route fa-2xl",
          title: "Supply Chain Management",
          description: "Optimizing the flow of goods and services.",
        },
        {
          icon: "fas fa-truck-moving fa-2xl",
          title: "Fleet Management",
          description: "Managing transportation logistics efficiently.",
        },
        {
          icon: "fas fa-box-open fa-2xl",
          title: "Inventory Tracking",
          description: "Monitoring inventory in real-time.",
        },
        {
          icon: "fas fa-shipping-fast fa-2xl",
          title: "Fast Delivery Solutions",
          description: "Ensuring on-time delivery to customers.",
        },
        {
          icon: "fas fa-chart-line fa-2xl",
          title: "Logistics Optimization",
          description: "Improving operational efficiencies in logistics.",
        },
      ],
    },
    {
      name: "Retail & Manufacturing",
      icon: "fas fa-store",
      features: [
        {
          icon: "fas fa-cogs fa-2xl",
          title: "Manufacturing Optimization",
          description: "Streamlining production processes.",
        },
        {
          icon: "fas fa-tags fa-2xl",
          title: "Retail Management",
          description: "Managing retail operations effectively.",
        },
        {
          icon: "fas fa-truck-loading fa-2xl",
          title: "Supply Chain Solutions",
          description: "Ensuring smooth product flow.",
        },
        {
          icon: "fas fa-box fa-2xl",
          title: "Product Packaging",
          description: "Enhancing packaging solutions for retail.",
        },
        {
          icon: "fas fa-percent fa-2xl",
          title: "Sales Growth",
          description: "Driving revenue through retail strategies.",
        },
      ],
    },
    {
      name: "Enterprise",
      icon: "fas fa-building",
      features: [
        {
          icon: "fas fa-network-wired fa-2xl",
          title: "Network Infrastructure",
          description: "Building robust IT networks for enterprise.",
        },
        {
          icon: "fas fa-users-cog fa-2xl",
          title: "Enterprise Resource Planning",
          description: "Integrating business functions with ERP systems.",
        },
        {
          icon: "fas fa-chart-bar fa-2xl",
          title: "Business Analytics",
          description: "Leveraging data to drive business decisions.",
        },
        {
          icon: "fas fa-lock fa-2xl",
          title: "Security Solutions",
          description: "Providing enterprise-level security services.",
        },
        {
          icon: "fas fa-cloud fa-2xl",
          title: "Cloud Computing",
          description: "Empowering businesses with scalable cloud solutions.",
        },
      ],
    },
    {
      name: "Education",
      icon: "fas fa-graduation-cap",
      features: [
        {
          icon: "fas fa-laptop fa-2xl",
          title: "E-learning Solutions",
          description: "Providing online learning platforms.",
        },
        {
          icon: "fas fa-chalkboard-teacher fa-2xl",
          title: "Teacher Collaboration",
          description: "Improving collaboration among educators.",
        },
        {
          icon: "fas fa-book-open fa-2xl",
          title: "Curriculum Development",
          description: "Designing innovative learning curricula.",
        },
        {
          icon: "fas fa-certificate fa-2xl",
          title: "Certification Programs",
          description: "Offering credentialing for online learning.",
        },
        {
          icon: "fas fa-users fa-2xl",
          title: "Student Engagement",
          description: "Enhancing student participation and interaction.",
        },
      ],
    },
    {
      name: "Real Estate",
      icon: "fas fa-home",
      features: [
        {
          icon: "fas fa-building fa-2xl",
          title: "Property Development",
          description: "Developing and managing residential and commercial properties.",
        },
        {
          icon: "fas fa-search fa-2xl",
          title: "Market Research",
          description: "Analyzing market trends and property values.",
        },
        {
          icon: "fas fa-handshake fa-2xl",
          title: "Investment Opportunities",
          description: "Connecting investors with profitable properties.",
        },
        {
          icon: "fas fa-cogs fa-2xl",
          title: "Property Management",
          description: "Managing real estate properties efficiently.",
        },
        {
          icon: "fas fa-chart-line fa-2xl",
          title: "Real Estate Analytics",
          description: "Providing data-driven insights for real estate decisions.",
        },
      ],
    },
    {
      name: "Medical & Healthcare",
      icon: "fas fa-heartbeat",
      features: [
        {
          icon: "fas fa-stethoscope fa-2xl",
          title: "Telemedicine Solutions",
          description: "Providing remote healthcare services.",
        },
        {
          icon: "fas fa-pills fa-2xl",
          title: "Pharmaceutical Services",
          description: "Offering medical and pharmaceutical support.",
        },
        {
          icon: "fas fa-ambulance fa-2xl",
          title: "Emergency Care",
          description: "Ensuring fast and efficient emergency services.",
        },
        {
          icon: "fas fa-heart fa-2xl",
          title: "Patient Care",
          description: "Improving patient health and well-being.",
        },
        {
          icon: "fas fa-chart-medical fa-2xl",
          title: "Health Data Analytics",
          description: "Using data to enhance healthcare delivery.",
        },
      ],
    },
    {
      name: "Technology Company",
      icon: "fas fa-laptop-code",
      features: [
        {
          icon: "fas fa-code fa-2xl",
          title: "Software Development",
          description: "Building custom software solutions for businesses.",
        },
        {
          icon: "fas fa-cloud fa-2xl",
          title: "Cloud Solutions",
          description: "Enabling businesses with scalable cloud computing.",
        },
        {
          icon: "fas fa-digital-tachograph fa-2xl",
          title: "Tech Consulting",
          description: "Providing expert guidance for technology adoption.",
        },
        {
          icon: "fas fa-mobile-alt fa-2xl",
          title: "Mobile Development",
          description: "Creating mobile applications for various platforms.",
        },
        {
          icon: "fas fa-network-wired fa-2xl",
          title: "IT Infrastructure",
          description: "Designing and implementing tech infrastructures.",
        },
      ],
    },
    {
      name: "Media & Entertainment",
      icon: "fas fa-film",
      features: [
        {
          icon: "fas fa-video fa-2xl",
          title: "Film Production",
          description: "Producing high-quality films and content.",
        },
        {
          icon: "fas fa-headphones-alt fa-2xl",
          title: "Music Production",
          description: "Creating and producing original music.",
        },
        {
          icon: "fas fa-camera fa-2xl",
          title: "Media Coverage",
          description: "Providing media coverage and advertising services.",
        },
        {
          icon: "fas fa-tv fa-2xl",
          title: "Broadcasting",
          description: "Delivering media content across various platforms.",
        },
        {
          icon: "fas fa-play-circle fa-2xl",
          title: "Streaming Services",
          description: "Offering on-demand content to audiences.",
        },
      ],
    },
    {
      name: "NGO",
      icon: "fas fa-hand-holding-heart",
      features: [
        {
          icon: "fas fa-donate fa-2xl",
          title: "Fundraising",
          description: "Raising funds to support social causes.",
        },
        {
          icon: "fas fa-globe-americas fa-2xl",
          title: "Global Outreach",
          description: "Expanding social impact globally.",
        },
        {
          icon: "fas fa-users fa-2xl",
          title: "Community Support",
          description: "Building and supporting local communities.",
        },
        {
          icon: "fas fa-hands-helping fa-2xl",
          title: "Volunteer Coordination",
          description: "Engaging volunteers for community projects.",
        },
        {
          icon: "fas fa-handshake fa-2xl",
          title: "Partnerships",
          description: "Creating strategic partnerships for social good.",
        },
      ],
    },
  ],
};

// footer data
export const footerData = {
  footer: {
    contactUs: {
      location: "Flyte Solutions Ltd, The Reeve, House 11, Road 33, Gulshan-1, Dhaka-1212, Bangladesh.",
      companyLogo: "/images/flyte-logo.png",
      successLogos: [
        "/images/clip.png",
        "/images/goodfirms.png",
        "/images/Untitled-design.png",
        "/images/iso1.png",
        "/images/iso2.png",
      ],
      phoneNumbers: ["+880-171-320-3656 ", "+880-179-353-2035 "],
      emails: ["info@flytesolutions.com ", "sales@flytesolutions.com "],
      socialLinks: [
        {
          platform: "Facebook",
          url: "https://www.facebook.com/@flytesoft/",
          icon: "fa-facebook",
        },
        {
          platform: "Twitter",
          url: "https://twitter.com/example",
          icon: "fa-twitter",
        },
        {
          platform: "LinkedIn",
          url: "https://www.linkedin.com/company/flytesolutions/posts/?feedView=all",
          icon: "fa-linkedin",
        },
      ],
      paymentMethods: [
        {
          method: "Visa",
          icon: "/images/visa.png",
        },
        {
          method: "MasterCard",
          icon: "/images/mastercard.png",
        },
        {
          method: "Amex",
          icon: "/images/amex.png",
        },
      ],
    },
    services: {
      sectionName: "Services",
      subsections: [
        {
          name: "Software Development",
          id: "software-development",
          items: [
            "Product Design",
            "Web Development",
            "MVP Development",
            "Mobile Development",
            "Quality Assurance",
            "Support & Maintenance",
            "Cloud & DevOps",
          ],
        },
        {
          name: "Team Extension",
          id: "team-extension",
          items: [
            "Python & Django Developer",
            "Next/React Developer",
            "VueJS Developer",
            "NodeJS Developer",
            "React Native Developer",
            "Flutter Developer",
            "ASP.NET Developer",
          ],
        },
        {
          name: "IT Consulting & Advisory",
          id: "it-consulting-advisory",
          items: [
            "Technology Consulting",
            "For Startups",
            "Digital Transformation",
            "IT Infrastructure Optimization",
            "Quality Assurance",
            "Outsourced IT Support",
            "IT Helpdesk Consulting",
          ],
        },
        {
          name: "ML & AI Services",
          id: "ml-ai-services",
          items: [
            "Data Analytics and Visualization",
            "AI-Driven Workflow Automation",
            "Intelligent Chatbots and Virtual Assistants",
            "Speech Recognition and Conversational AI",
            "Text Summarization and Translation",
          ],
        },
      ],
    },
    expertise: {
      sectionName: "Expertise",
      subsections: [
        {
          name: "Industry",
          id: "industry",
          items: [
            { name: "Fintech", path: "/industry/fintech" },
            { name: "Startup", path: "/industry/startup" },
            { name: "Logistics", path: "/industry/logistics" },
            {
              name: "Retail & Manufacturing",
              path: "/industry/retail-manufacturing",
            },
            { name: "Enterprise", path: "/industry/enterprise" },
            { name: "Education", path: "/industry/education" },
          ],
        },
        {
          name: "Product",
          id: "product",
          items: [
            { name: "Time2Task", path: "/product/time2task" },
            { name: "Cloud ClockIn", path: "/product/cloud-clockin" },
            { name: "Flyte Queue", path: "/product/flyte-queue" },
            { name: "Flyte ERP", path: "/product/flyte-erp" },
            { name: "Flyte CRM", path: "/product/flyte-crm" },
            { name: "Flyte POS", path: "/product/flyte-pos" },
          ],
        },
        {
          name: "Case Studies",
          id: "case-studies",
          items: [
            { name: "Time Tracker", path: "/case-studies/time-tracker" },
            {
              name: "Rostering System",
              path: "/case-studies/rostering-system",
            },
            {
              name: "Queue Management System",
              path: "/case-studies/queue-management-system",
            },
            { name: "ERP Software", path: "/case-studies/erp-software" },
            { name: "CRM Software", path: "/case-studies/crm-software" },
            { name: "POS Software", path: "/case-studies/pos-software" },
          ],
        },
        {
          name: "Company",
          id: "company",
          items: [
            { name: "About Us", path: "/company/about-us" },
            { name: "News & Blogs", path: "/company/news-blogs" },
            { name: "Privacy Policy", path: "/company/privacy-policy" },
            { name: "Partner With Us", path: "/company/partner-with-us" },
          ],
        },
      ],
    },
  },
};

// case study

export const caseStudyData = [
  {
    id: 1,
    image: "/images/FuelPro.png",
    title: "Time Tracker",
    description: "A task management tool to plan, assign, and track project tasks efficiently.",
    tags: ["Time Tracking", "Project Management", "Task Assignment"],
    category: "enterprise",
  },
  {
    id: 2,
    image: "/images/FuelPro.png",
    title: "Project X",
    description: "A powerful tool to manage complex projects with ease and efficiency.",
    tags: ["Project Management", "Collaboration", "Productivity"],
    category: "technology company",
  },
  {
    id: 3,
    image: "/images/FuelPro.png",
    title: "Task Master",
    description: "An intuitive task management app that helps teams stay organized and on track.",
    tags: ["Task Management", "Organization", "Teamwork"],
    category: "startup",
  },
  {
    id: 4,
    image: "/images/FuelPro.png",
    title: "Collab Hub",
    description: "A collaboration platform for teams to communicate, share files, and track progress.",
    tags: ["Collaboration", "Communication", "File Sharing"],
    category: "enterprise",
  },
  {
    id: 5,
    image: "/images/FuelPro.png",
    title: "Time Saver",
    description: "A time management app that helps you save time with automated scheduling and reminders.",
    tags: ["Time Management", "Scheduling", "Reminders"],
    category: "enterprise",
  },
  {
    id: 6,
    image: "/images/FuelPro.png",
    title: "Team Up",
    description: "A team management app that fosters communication and collaboration among team members.",
    tags: ["Team Management", "Collaboration", "Communication"],
    category: "startup",
  },
  {
    id: 7,
    image: "/images/FuelPro.png",
    title: "Work Flow Pro",
    description: "A work management tool to streamline workflows, automate tasks, and boost productivity.",
    tags: ["Workflow", "Automation", "Productivity"],
    category: "enterprise",
  },
  {
    id: 8,
    image: "/images/FuelPro.png",
    title: "Focus Time",
    description: "A productivity app designed to keep you focused by blocking distractions.",
    tags: ["Productivity", "Focus", "Distraction-Free"],
    category: "technology company",
  },
  {
    id: 9,
    image: "/images/FuelPro.png",
    title: "Smart Scheduler",
    description: "An intelligent scheduling app that adjusts to your work habits and preferences.",
    tags: ["Scheduling", "Automation", "Productivity"],
    category: "enterprise",
  },
  {
    id: 10,
    image: "/images/FuelPro.png",
    title: "Work Mate",
    description: "A collaborative workspace for teams to track tasks, share documents, and meet deadlines.",
    tags: ["Collaboration", "Workspace", "Teamwork"],
    category: "enterprise",
  },
  {
    id: 11,
    image: "/images/FuelPro.png",
    title: "Pro Planner",
    description: "A professional planner to organize tasks, appointments, and goals efficiently.",
    tags: ["Planning", "Task Management", "Goal Setting"],
    category: "enterprise",
  },
  {
    id: 12,
    image: "/images/FuelPro.png",
    title: "Team Sync",
    description: "A tool that synchronizes teams across time zones, making collaboration easy and efficient.",
    tags: ["Teamwork", "Time Zones", "Collaboration"],
    category: "enterprise",
  },
  {
    id: 13,
    image: "/images/FuelPro.png",
    title: "Task Flow",
    description: "A task management solution to track tasks from start to finish with clear deadlines.",
    tags: ["Task Management", "Deadline Tracking", "Organization"],
    category: "enterprise",
  },
  {
    id: 14,
    image: "/images/FuelPro.png",
    title: "Quick Task",
    description: "An app for quick task organization and tracking, ensuring high productivity.",
    tags: ["Task Organization", "Quick Tasks", "Efficiency"],
    category: "enterprise",
  },
  {
    id: 15,
    image: "/images/FuelPro.png",
    title: "Meeting Planner",
    description: "A meeting scheduling app that optimizes team calendars and time slots.",
    tags: ["Scheduling", "Meetings", "Team Coordination"],
    category: "enterprise",
  },
  {
    id: 16,
    image: "/images/FuelPro.png",
    title: "Team Organizer",
    description: "An app that organizes team tasks, schedules, and milestones to improve workflow.",
    tags: ["Team Management", "Task Scheduling", "Team Collaboration"],
    category: "enterprise",
  },
  {
    id: 17,
    image: "/images/FuelPro.png",
    title: "Project Manager",
    description: "A project management tool to plan, organize, and execute projects effectively.",
    tags: ["Project Management", "Planning", "Execution"],
    category: "enterprise",
  },
  {
    id: 18,
    image: "/images/FuelPro.png",
    title: "Sync Pro",
    description: "A synchronization tool for teams to coordinate tasks and share updates in real-time.",
    tags: ["Syncing", "Collaboration", "Real-time"],
    category: "enterprise",
  },
  {
    id: 19,
    image: "/images/FuelPro.png",
    title: "Task Genie",
    description: "A magical task manager that adapts to your needs and keeps you on track.",
    tags: ["Task Management", "Productivity", "Adaptability"],
    category: "enterprise",
  },
  {
    id: 20,
    image: "/images/FuelPro.png",
    title: "Time Master",
    description: "A time management tool that tracks, analyzes, and improves your time usage.",
    tags: ["Time Management", "Analytics", "Productivity"],
    category: "enterprise",
  },
  {
    id: 21,
    image: "/images/FuelPro.png",
    title: "Team Vision",
    description: "A strategic planning app for teams to align on goals, timelines, and progress.",
    tags: ["Strategic Planning", "Team Alignment", "Goal Setting"],
    category: "enterprise",
  },
  {
    id: 22,
    image: "/images/FuelPro.png",
    title: "Focus Pro",
    description: "A focused environment app that helps you stay on task and avoid distractions.",
    tags: ["Focus", "Productivity", "Distraction-Free"],
    category: "technology company",
  },
  {
    id: 23,
    image: "/images/FuelPro.png",
    title: "Task Hub",
    description: "A hub for organizing and managing all your tasks, deadlines, and projects.",
    tags: ["Task Management", "Organization", "Deadline Tracking"],
    category: "enterprise",
  },
  {
    id: 24,
    image: "/images/FuelPro.png",
    title: "Work Force",
    description: "A workforce management app designed for teams to track work hours and productivity.",
    tags: ["Workforce Management", "Time Tracking", "Productivity"],
    category: "enterprise",
  },
];

//project section

export const projectSliderData = [
  {
    title: "Marketing Material Design",
    description:
      "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
    image:
      "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
    tags: ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"],
  },
  {
    title: "Marketing Material Design",
    description:
      "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
    image:
      "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
    tags: ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"],
  },
  {
    title: "Marketing Material Design",
    description:
      "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
    image:
      "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
    tags: ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"],
  },
  {
    title: "Marketing Material Design",
    description:
      "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
    image:
      "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
    tags: ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"],
  },
];

export const contactUsKeyPoints = [
  {
    id: 1,
    title: "Your request has been received and is currently under review.",
    icon: "fa-regular fa-hourglass-half",
  },
  {
    id: 2,
    title: "A solution advisor will analyze your requirements and provide a response within 3 business days.",
    icon: "fa-solid fa-user",
  },
  {
    id: 3,
    title: "If required, a mutual NDA can be arranged within 1-2 business days to ensure confidentiality.",
    icon: "fa-solid fa-handshake-angle",
  },
  {
    id: 4,
    title: "Project estimates or recommendations will be presented within 3-5 business days.",
    icon: "fa-regular fa-square-check",
  },
];

// service Overview Data
export const serviceOverviewData = [
  {
    title: "Cost-Efficient and Scalable",
    description:
      "Significant savings by eliminating recruitment, infrastructure, and long-term commitments, offering high-quality results within budget.",
    icon: {
      path: "M40.3337 7H17.0003C11.8437 7 7.66699 11.1767 7.66699 16.3333V39.6667C7.66699 44.8233 11.8437 49 17.0003 49H45.0003C47.5903 49 49.667 46.9233 49.667 44.3333V21C49.667 18.4333 47.5903 16.3333 45.0003 16.3333V11.6667C45.0003 9.1 42.9237 7 40.3337 7ZM40.3337 11.6667V16.3333H17.0003C15.297 16.3333 13.7103 16.8 12.3337 17.5933V16.3333C12.3337 13.7667 14.4337 11.6667 17.0003 11.6667M36.8337 36.1667C34.897 36.1667 33.3337 34.6033 33.3337 32.6667C33.3337 30.73 34.897 29.1667 36.8337 29.1667C38.7703 29.1667 40.3337 30.73 40.3337 32.6667C40.3337 34.6033 38.7703 36.1667 36.8337 36.1667Z",
      fill: "#3B82F6",
    },
  },
  {
    title: "Simplified Talent Acquisition",
    description:
      "Significant savings by eliminating recruitment, infrastructure, and long-term commitments, offering high-quality results within budget.",
    icon: {
      path: "M41.9997 37.334H40.6463L38.7563 35.444C40.833 32.6673 41.9997 29.1673 41.9997 25.6673C41.9997 16.6373 34.6963 9.33398 25.6663 9.33398C22.1663 9.33398 18.6663 10.5007 15.843 12.6007C8.63301 18.014 7.16301 28.2573 12.5763 35.4673C17.9897 42.6773 28.233 44.1473 35.443 38.734L37.333 40.624V42.0006L48.9997 53.6673L53.6663 49.0006L41.9997 37.334ZM25.6663 37.334C19.2263 37.334 13.9997 32.1073 13.9997 25.6673C13.9997 19.2273 19.2263 14.0007 25.6663 14.0007C32.1063 14.0007 37.333 19.2273 37.333 25.6673C37.333 32.1073 32.1063 37.334 25.6663 37.334ZM6.99967 14.0007L2.33301 18.6673V2.33398H18.6663L13.9997 7.00065H6.99967V14.0007ZM48.9997 2.33398V18.6673L44.333 14.0007V7.00065H37.333L32.6663 2.33398H48.9997ZM13.9997 44.334L18.6663 49.0006H2.33301V32.6673L6.99967 37.334V44.334H13.9997Z",
      fill: "#3B82F6",
    },
  },
  {
    title: "Full Transparency and Control",
    description:
      "Significant savings by eliminating recruitment, infrastructure, and long-term commitments, offering high-quality results within budget.",
    icon: {
      path: "M28.334 28.0007H44.6673C43.4306 37.5906 37.014 46.154 28.334 48.814V28.0007H12.0007V14.7007L28.334 7.44398M28.334 2.33398L7.33398 11.6673V25.6673C7.33398 38.6173 16.294 50.704 28.334 53.6673C40.374 50.704 49.334 38.6173 49.334 25.6673V11.6673L28.334 2.33398Z",
      fill: "#3B82F6",
    },
  },

  {
    title: "Aligned with Your Vision",
    description:
      "Significant savings by eliminating recruitment, infrastructure, and long-term commitments, offering high-quality results within budget.",
    icon: {
      path: "M28.6673 4.66602C25.6031 4.66602 22.569 5.26955 19.738 6.44216C16.9071 7.61477 14.3349 9.33349 12.1682 11.5002C7.79231 15.876 5.33398 21.811 5.33398 27.9994C5.33398 34.1877 7.79231 40.1227 12.1682 44.4985C14.3349 46.6652 16.9071 48.3839 19.738 49.5565C22.569 50.7292 25.6031 51.3327 28.6673 51.3327C34.8557 51.3327 40.7906 48.8744 45.1665 44.4985C49.5423 40.1227 52.0007 34.1877 52.0007 27.9994C52.0007 25.2927 51.5107 22.6094 50.5773 20.0893L46.844 23.8227C47.1707 25.1994 47.334 26.5993 47.334 27.9994C47.334 32.9501 45.3673 37.698 41.8666 41.1987C38.366 44.6994 33.618 46.666 28.6673 46.666C23.7166 46.666 18.9687 44.6994 15.468 41.1987C11.9673 37.698 10.0007 32.9501 10.0007 27.9994C10.0007 23.0486 11.9673 18.3007 15.468 14.8C18.9687 11.2993 23.7166 9.33268 28.6673 9.33268C30.0673 9.33268 31.4673 9.49602 32.844 9.82268L36.6007 6.06602C34.0573 5.15602 31.374 4.66602 28.6673 4.66602ZM45.0007 4.66602L35.6673 13.9993V17.4993L29.7173 23.4494C29.3673 23.3327 29.0173 23.3327 28.6673 23.3327C27.4296 23.3327 26.2427 23.8244 25.3675 24.6995C24.4923 25.5747 24.0007 26.7617 24.0007 27.9994C24.0007 29.237 24.4923 30.424 25.3675 31.2992C26.2427 32.1744 27.4296 32.666 28.6673 32.666C29.905 32.666 31.092 32.1744 31.9671 31.2992C32.8423 30.424 33.334 29.237 33.334 27.9994C33.334 27.6494 33.334 27.2994 33.2173 26.9494L39.1673 20.9993H42.6673L52.0007 11.666H45.0007V4.66602ZM28.6673 13.9993C24.9543 13.9993 21.3933 15.4743 18.7678 18.0999C16.1423 20.7254 14.6673 24.2863 14.6673 27.9994C14.6673 31.7124 16.1423 35.2733 18.7678 37.8988C21.3933 40.5244 24.9543 41.9994 28.6673 41.9994C32.3804 41.9994 35.9413 40.5244 38.5668 37.8988C41.1923 35.2733 42.6673 31.7124 42.6673 27.9994H38.0007C38.0007 30.4747 37.0173 32.8487 35.267 34.599C33.5166 36.3494 31.1427 37.3327 28.6673 37.3327C26.192 37.3327 23.818 36.3494 22.0677 34.599C20.3173 32.8487 19.334 30.4747 19.334 27.9994C19.334 25.524 20.3173 23.1494 22.0677 21.399C23.818 19.6487 26.192 18.666 28.6673 18.666C31.1427 18.666 33.5166 19.6487 35.267 21.399C37.0173 23.1494 38.0007 25.524 38.0007 27.9994H42.6673C42.6673 24.2863 41.1923 20.7254 38.5668 18.0999C35.9413 15.4743 32.3804 13.9993 28.6673 13.9993Z",
      fill: "#3B82F6",
    },
  },

  {
    title: "Flexible Team Management",
    description: "Easily scale your team based on project demands for short-term or long-term support.",
    icon: {
      path: "M28 12.834C30.1659 12.834 32.2432 13.6944 33.7747 15.2259C35.3063 16.7575 36.1667 18.8347 36.1667 21.0007C36.1667 23.1666 35.3063 25.2438 33.7747 26.7754C32.2432 28.3069 30.1659 29.1673 28 29.1673C25.8341 29.1673 23.7568 28.3069 22.2253 26.7754C20.6937 25.2438 19.8333 23.1666 19.8333 21.0007C19.8333 18.8347 20.6937 16.7575 22.2253 15.2259C23.7568 13.6944 25.8341 12.834 28 12.834ZM11.6667 18.6673C12.9733 18.6673 14.1867 19.0173 15.2367 19.6473C14.8867 22.984 15.8667 26.2973 17.8733 28.8873C16.7067 31.1273 14.3733 32.6673 11.6667 32.6673C9.81015 32.6673 8.02967 31.9298 6.71692 30.6171C5.40416 29.3043 4.66667 27.5238 4.66667 25.6673C4.66667 23.8108 5.40416 22.0303 6.71692 20.7176C8.02967 19.4048 9.81015 18.6673 11.6667 18.6673ZM44.3333 18.6673C46.1898 18.6673 47.9703 19.4048 49.2831 20.7176C50.5958 22.0303 51.3333 23.8108 51.3333 25.6673C51.3333 27.5238 50.5958 29.3043 49.2831 30.6171C47.9703 31.9298 46.1898 32.6673 44.3333 32.6673C41.6267 32.6673 39.2933 31.1273 38.1267 28.8873C40.1333 26.2973 41.1133 22.984 40.7633 19.6473C41.8133 19.0173 43.0267 18.6673 44.3333 18.6673ZM12.8333 42.584C12.8333 37.754 19.6233 33.834 28 33.834C36.3767 33.834 43.1667 37.754 43.1667 42.584V46.6673H12.8333V42.584ZM0 46.6673V43.1673C0 39.924 4.41 37.194 10.3833 36.4007C9.00667 37.9873 8.16667 40.1807 8.16667 42.584V46.6673H0ZM56 46.6673H47.8333V42.584C47.8333 40.1807 46.9933 37.9873 45.6167 36.4007C51.59 37.194 56 39.924 56 43.1673V46.6673Z",
      fill: "#3B82F6",
    },
  },

  // {
  //   title: "High-Quality Output",
  //   description:
  //     "Achieve faster delivery and superior quality without the burden of office space, equipment, or administrative costs.",
  //   icon: {
  //     path: "M53.9993 28.0004L48.306 21.5138L49.0993 12.9271L40.676 11.0137L36.266 3.59375L28.3327 7.00042L20.3993 3.59375L15.9893 11.0137L7.56602 12.9038L8.35935 21.4904L2.66602 28.0004L8.35935 34.4871L7.56602 43.0971L15.9893 45.0104L20.3993 52.4304L28.3327 49.0004L36.266 52.4071L40.676 44.9871L49.0993 43.0737L48.306 34.4871L53.9993 28.0004ZM23.666 39.6671L14.3327 30.3337L17.6227 27.0437L23.666 33.0637L39.0427 17.6871L42.3327 21.0004L23.666 39.6671Z",
  //     fill: "#3B82F6",
  //   },
  // },
];

// service highlights Data

export const serviceHighlightsData = [
  {
    id: 1,
    category: "Speed",
    title: "High Velocity Product Development",
    description: "Accelerate time-to-market with our specialized offshore IT experts.",
    features: ["Rapid product development", "Cost-effective scaling", "Time zone advantage"],
    backgroundImage: "https://i.ibb.co.com/DLFqKr5/Rectangle-3841.png",
  },
  {
    id: 2,
    category: "Expertise",
    title: "Access to Specialized IT Experts",
    description: "Leverage top-tier talent for niche and challenging tech projects.",
    features: ["Highly skilled offshore teams", "Expertise in emerging tech", "Global resource availability"],
    backgroundImage: "https://i.ibb.co.com/DLFqKr5/Rectangle-3842.png",
  },
  {
    id: 3,
    category: "Flexibility",
    title: "Adaptable Offshore Teams",
    description: "Scale your team as per your project's dynamic needs.",
    features: ["On-demand scaling", "Diverse tech capabilities", "Customized solutions"],
    backgroundImage: "https://i.ibb.co.com/DLFqKr5/Rectangle-3843.png",
  },
  {
    id: 4,
    category: "Control",
    title: "Organizations Requiring Managed Offshore IT Experts",
    description: "Maintain control over development while we handle administrative tasks.",
    features: [
      "Full control over development",
      "Reduced administrative overhead",
      "Efficient resource management",
    ],
    backgroundImage: "https://i.ibb.co.com/DLFqKr5/Rectangle-3844.png",
  },
];

// induscried bannerData

export const induscriedBannerData = {
  bgImage: "https://i.ibb.co.com/bH3K5FL/Rectangle-3843-2x.png",
  subtitle: "Explore Our Expertise Across Diverse Industries!",
  title: "Innovative Solutions for Your Industry",
  description:
    "We deliver solutions designed to meet industry-specific needs and help you achieve your goals.",
  btnName: "Book A Consultation",
  btnPath: "/contact-us",
};

// product
export const productBannerData = {
  bgImage: "https://i.ibb.co.com/bH3K5FL/Rectangle-3843-2x.png",
  subtitle: "EXPLORE OUR PRODUCTS, DESIGNED FOR YOUR SUCCESS!",
  title: "Discover Innovative Solutions Built for Your Business",
  description:
    "Explore our range of products designed to enhance your operations, boost productivity, and help you achieve your goals effortlessly.",
  btnName: "Book A Consultation",
  btnPath: "/hire/application-form",
};

// product cards

export const ProductCardsData = [
  {
    productImg: "https://i.ibb.co.com/dbNN1h2/Picture.png",
    productTitle: "Cloud ClockIn",
    ProductDetails: "A digital system for tracking employee attendance and work hours in real time.",
    tags: ["Attendance Management", "Real-Time Tracking", "SaaS"],
  },
  {
    productImg: "https://i.ibb.co.com/dbNN1h2/Picture.png",
    productTitle: "Time2Task",
    ProductDetails: "A task management tool to plan, assign, and track project tasks efficiently.",
    tags: ["Project Management", "Real-Time Tracking", "SaaS"],
  },
  {
    productImg: "https://i.ibb.co.com/dbNN1h2/Picture.png",
    productTitle: "Flyte Queue",
    ProductDetails: "A digital queue management system to streamline customer flow and reduce waiting times.",
    tags: ["Queue Management", "Real-Time Tracking", "SaaS"],
  },
  {
    productImg: "https://i.ibb.co.com/dbNN1h2/Picture.png",
    productTitle: "Flyte ERP",
    ProductDetails:
      "A comprehensive platform that integrates and streamlines core business processes for enhanced productivity.",
    tags: ["Enterprise Solutions", "Real-Time Tracking", "SaaS"],
  },
  {
    productImg: "https://i.ibb.co.com/dbNN1h2/Picture.png",
    productTitle: "Flyte CRM",
    ProductDetails:
      "A customer relationship management tool designed to optimize sales, marketing, and customer support operations.",
    tags: ["Customer Management", "Real-Time Tracking", "SaaS"],
  },
  {
    productImg: "https://i.ibb.co.com/dbNN1h2/Picture.png",
    productTitle: "Flyte POS",
    ProductDetails:
      "A reliable point-of-sale system for efficient retail transactions and inventory tracking.",
    tags: ["Retail Management", "Real-Time Tracking", "SaaS"],
  },
  {
    productImg: "https://i.ibb.co.com/dbNN1h2/Picture.png",
    productTitle: "Inventory Management System",
    ProductDetails: "A solution for tracking, managing, and optimizing stock levels across locations.",
    tags: ["Stock Control", "Real-Time Tracking", "SaaS"],
  },
  {
    productImg: "https://i.ibb.co.com/dbNN1h2/Picture.png",
    productTitle: "Board Meeting Management",
    ProductDetails: "A system to organize, schedule, and document board meetings effectively.",
    tags: ["Corporate Governance", "Real-Time Tracking", "Single Page Application"],
  },
  {
    productImg: "https://i.ibb.co.com/dbNN1h2/Picture.png",
    productTitle: "Help Desk Management",
    ProductDetails: "A platform for tracking, resolving, and managing customer support requests.",
    tags: ["Customer Support", "Help Desk", "Single Page Application"],
  },
  {
    productImg: "https://i.ibb.co.com/dbNN1h2/Picture.png",
    productTitle: "Clinic & Hospital Management",
    ProductDetails: "A solution to streamline patient records, appointments, billing, and medical workflows.",
    tags: ["Healthcare Solutions", "Doctor", "Single Page Application"],
  },
  {
    productImg: "https://i.ibb.co.com/dbNN1h2/Picture.png",
    productTitle: "Document Management System",
    ProductDetails: "A secure platform for storing, managing, and retrieving organizational documents.",
    tags: ["File Organization", "FTP", "Single Page Application"],
  },
];

// industries page

export const IndustriesCardsData = [
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-chart-area",
    industryName: "Fintech",
    industryDescription:
      "Drive innovation with secure, scalable, and customer-centric fintech solutions. From payment gateways to digital banking, empower your business with cutting-edge technology.",
    industryReview:
      "The team's dedication and expertise in FinTech solutions were impressive, ensuring efficiency and keeping everyone aligned throughout the project.",
    reviewerName: "John Doe",
    reviewerImage: "https://via.placeholder.com/40x40",
    reviewerPosition: "CEO",
    reviewerCompany: "Uber",

    services: [
      "Digital Payments Solutions",
      "Blockchain Technology Integration",
      "Mobile Banking Applications",
      "Peer-to-Peer Lending Platforms",
      "Wealth & Asset Management Tools",
      "Fraud Detection & Prevention Systems",
      "Cryptocurrency Platforms",
      "Regulatory Compliance Solutions",
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-lightbulb",
    industryName: "Startup",
    industryDescription:
      "Empower your startup with innovative solutions that drive growth and efficiency. From MVP development to scaling, we provide the tools you need to succeed.",
    industryReview:
      "Their expertise in startup solutions was invaluable. They helped us launch quickly and scale efficiently.",
    reviewerName: "Alice Brown",
    reviewerImage: "https://via.placeholder.com/40x40",
    reviewerPosition: "Founder",
    reviewerCompany: "TechStart",

    services: [
      "MVP Development",
      "Product Design & Prototyping",
      "Market Research & Analysis",
      "Growth Hacking Strategies",
      "Investor Pitch Decks",
      "Scalable Cloud Solutions",
      "Agile Development",
      "Startup Mentorship",
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-truck",
    industryName: "Logistics",
    industryDescription:
      "Optimize your logistics operations with advanced technology solutions. From supply chain management to real-time tracking, enhance efficiency and reduce costs.",
    industryReview:
      "Their logistics solutions streamlined our operations and significantly improved our delivery times.",
    reviewerName: "Robert Green",
    reviewerImage: "https://via.placeholder.com/40x40",
    reviewerPosition: "Logistics Manager",
    reviewerCompany: "FastTrack Logistics",

    services: [
      "Supply Chain Management",
      "Fleet Management Systems",
      "Inventory Tracking Solutions",
      "Real-Time Shipment Tracking",
      "Warehouse Management",
      "Route Optimization",
      "Logistics Analytics",
      "Automated Order Processing",
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-store",
    industryName: "Retail & Manufacturing",
    industryDescription:
      "Transform your retail and manufacturing processes with technology-driven solutions. From inventory management to customer engagement, drive growth and efficiency.",
    industryReview:
      "Their solutions for retail and manufacturing helped us streamline our processes and improve customer satisfaction.",
    reviewerName: "Laura White",
    reviewerImage: "https://via.placeholder.com/40x40",
    reviewerPosition: "Operations Director",
    reviewerCompany: "RetailPro",

    services: [
      "Inventory Management Systems",
      "Customer Relationship Management (CRM)",
      "Point of Sale (POS) Systems",
      "E-commerce Platforms",
      "Manufacturing Process Automation",
      "Supply Chain Optimization",
      "Retail Analytics",
      "Customer Engagement Solutions",
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-building",
    industryName: "Enterprise",
    industryDescription:
      "Empower your enterprise with scalable and secure technology solutions. From ERP systems to cloud computing, enhance productivity and drive innovation.",
    industryReview:
      "Their enterprise solutions provided us with the tools we needed to scale and innovate effectively.",
    reviewerName: "James Black",
    reviewerImage: "https://via.placeholder.com/40x40",
    reviewerPosition: "CIO",
    reviewerCompany: "EnterpriseCorp",

    services: [
      "Enterprise Resource Planning (ERP)",
      "Business Intelligence & Analytics",
      "Cloud Computing Solutions",
      "Cybersecurity Services",
      "IT Infrastructure Management",
      "Enterprise Mobility Solutions",
      "Data Management & Integration",
      "Custom Software Development",
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-graduation-cap",
    industryName: "Education",
    industryDescription:
      "Enhance the learning experience with innovative education technology solutions. From e-learning platforms to student management systems, empower educators and students.",
    industryReview:
      "Their education technology solutions transformed our learning environment and improved student engagement.",
    reviewerName: "Sarah Blue",
    reviewerImage: "https://via.placeholder.com/40x40",
    reviewerPosition: "Principal",
    reviewerCompany: "EduTech School",

    services: [
      "E-learning Platforms",
      "Student Information Systems",
      "Learning Management Systems (LMS)",
      "Virtual Classrooms",
      "Educational Content Development",
      "Teacher Collaboration Tools",
      "Student Engagement Solutions",
      "Assessment & Evaluation Tools",
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-home",
    industryName: "Real Estate",
    industryDescription:
      "Revolutionize the real estate industry with technology solutions that enhance property management, sales, and customer engagement.",
    industryReview:
      "Their real estate solutions helped us manage properties more efficiently and improve client satisfaction.",
    reviewerName: "David Grey",
    reviewerImage: "https://via.placeholder.com/40x40",
    reviewerPosition: "Real Estate Manager",
    reviewerCompany: "RealEstatePro",

    services: [
      "Property Management Systems",
      "Real Estate CRM",
      "Virtual Property Tours",
      "Online Booking & Scheduling",
      "Market Analysis & Insights",
      "Customer Engagement Solutions",
      "Investment Management Tools",
      "Real Estate Analytics",
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-heartbeat",
    industryName: "Medical & Healthcare",
    industryDescription:
      "Enhance healthcare delivery with advanced technology solutions. From telemedicine to patient management systems, improve patient care and operational efficiency.",
    industryReview: "Their healthcare solutions improved our patient care and streamlined our operations.",
    reviewerName: "Emma Brown",
    reviewerImage: "https://via.placeholder.com/40x40",
    reviewerPosition: "Healthcare Administrator",
    reviewerCompany: "HealthCarePlus",

    services: [
      "Telemedicine Solutions",
      "Electronic Health Records (EHR)",
      "Patient Management Systems",
      "Medical Billing & Coding",
      "Healthcare Analytics",
      "Remote Patient Monitoring",
      "Pharmacy Management Systems",
      "Healthcare Mobile Apps",
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-laptop-code",
    industryName: "Technology Company",
    industryDescription:
      "Drive innovation with cutting-edge technology solutions. From software development to cloud computing, empower your tech company to achieve its goals.",
    industryReview: "Their technology solutions helped us innovate and stay ahead of the competition.",
    reviewerName: "Chris White",
    reviewerImage: "https://via.placeholder.com/40x40",
    reviewerPosition: "CTO",
    reviewerCompany: "TechInnovate",

    services: [
      "Custom Software Development",
      "Cloud Computing Solutions",
      "AI & Machine Learning",
      "DevOps Services",
      "Cybersecurity Solutions",
      "Data Analytics & Visualization",
      "Mobile App Development",
      "IT Consulting & Strategy",
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-film",
    industryName: "Media & Entertainment",
    industryDescription:
      "Transform the media and entertainment industry with innovative technology solutions. From content creation to distribution, enhance your audience's experience.",
    industryReview:
      "Their media and entertainment solutions helped us create and distribute content more effectively.",
    reviewerName: "Olivia Green",
    reviewerImage: "https://via.placeholder.com/40x40",
    reviewerPosition: "Media Director",
    reviewerCompany: "MediaPro",

    services: [
      "Content Management Systems",
      "Digital Asset Management",
      "Video Streaming Solutions",
      "Social Media Integration",
      "Audience Analytics",
      "Interactive Media Solutions",
      "Virtual & Augmented Reality",
      "Media Production Tools",
    ],
  },
];

export const successStories = [
  {
    companyName: "uber",
    description:
      "Their dedication and willingness to help were impressive. They were efficient and kept everyone on-task.",
    image: "https://via.placeholder.com/40x40",
    AuthorName: "John Abraham",
    AuthorTag: "CEO",
  },
  {
    companyName: "Google",
    description: "Their innovative solutions and expertise helped us achieve our goals efficiently.",
    image: "https://via.placeholder.com/40x40",
    AuthorName: "Jane Smith",
    AuthorTag: "CTO",
  },
  {
    companyName: "Microsoft",
    description: "The team was highly professional and delivered exceptional results on time.",
    image: "https://via.placeholder.com/40x40",
    AuthorName: "Michael Johnson",
    AuthorTag: "Project Manager",
  },
  {
    companyName: "Amazon",
    description: "Their ability to understand our needs and provide tailored solutions was remarkable.",
    image: "https://via.placeholder.com/40x40",
    AuthorName: "Emily Davis",
    AuthorTag: "Operations Manager",
  },
  {
    companyName: "Apple",
    description: "The collaboration was seamless, and the quality of work exceeded our expectations.",
    image: "https://via.placeholder.com/40x40",
    AuthorName: "David Wilson",
    AuthorTag: "Head of Development",
  },
];

// service data
export const servicesBannerData = {
  bgImage: "https://i.ibb.co.com/18ym442/Rectangle-3843.png",
  subtitle: "Explore Our Services, Built to Drive Your Success",
  title: "Discover Professional Services for Your Business",
  description:
    "We provide expert services to enhance your operations, improve efficiency, and help you achieve your goals.",
  btnName: "Book A Consultation",
  btnPath: "/about",
};

export const servicesData = [
  {
    id: 1,
    subTitle: "Custom Software Development",
    title: "Empowering businesses with reliable software solutions",
    description:
      "Develop software solutions that are reliable, scalable, and secure, designed to enhance business efficiency, streamline processes, and support growth across various industries.",
    features: ["Inventory Management System", "CRM System", "Business Intelligence Tool"],
  },
  {
    id: 2,
    subTitle: "Team Extension",
    title: "Expand your team with skilled experts to drive growth and innovation",
    description:
      "Team Extension helps you scale quickly by augmenting your in-house team with specialized talent, offering flexibility to meet project demands without the overhead of full-time hires.",
    features: [
      "Project Scaling for Short-Term Needs",
      "Filling Skill Gaps",
      "Long-Term Resource Augmentation for Growing Teams",
    ],
  },
  {
    id: 3,
    subTitle: "Mobile App Development",
    title: "Empowering businesses with reliable mobile solutions",
    description:
      "Develop mobile apps for Android, iOS, and cross-platform environments that are intuitive, scalable, and high-performing, helping businesses reach more customers on mobile platforms.",
    features: ["E-Commerce Mobile App", "Healthcare Mobile App", "Social Networking App"],
  },
  {
    id: 4,
    subTitle: "MVP Development",
    title: "Empowering startups to bring their ideas to life quickly",
    description:
      "Build a minimum viable product (MVP) to test and validate your idea with real users, ensuring faster time to market and cost-effective development.",
    features: ["Startup Product Launch", "Subscription Service", "On-Demand Service App"],
  },
];

// about us data
export const aboutBannerData = {
  title: "About Us",
  description: "Empowering Businesses with Innovative Tech Solutions and Expert Teams.",
  img: "https://i.ibb.co.com/KVwS1VN/about-banner-image.png",
  altText: "about us banner",
};

export const missionVisionData = {
  missionIcon: "fa-solid fa-bullseye",
  missionTitle: "Our Mission",
  missionDescription:
    "To develop advanced software solutions that simplify business processes, drive growth, and support scalability.",
  visionIcon: "fa-solid fa-compass",
  visionTitle: "Our Vision",
  visionDescription:
    "To build lasting partnerships by sharing our clients' goals, embracing responsibility, and prioritizing long-term success.",
};

export const NewsBlogsBannerData = {
  bgImage: "https://i.ibb.co.com/bH3K5FL/Rectangle-3843-2x.png",
  subtitle: "Insights That Inform, Stories That Inspire",
  title: "Stay Informed with Our Latest Insights!",
  description:
    "Explore expert perspectives, industry trends, and practical advice through our news and blogs.",
  btnName: "Book A Consultation",
  btnPath: "/contact-us",
};

// Career data
export const careerBannerData = {
  title: "Discover How We Empower Careers to Reach New Heights",
  description:
    "At Flyte Solutions, we believe that the journey of growth is driven by continuous learning and a sense of wonder. We’re committed to creating a workplace where curiosity thrives, talents are nurtured, and innovative ideas flourish. Discover a dynamic environment where your potential knows no bounds, and find a role that aligns with your passion and purpose. Join us and be part of a team where every day offers new opportunities for growth and adventure.",
  images: [
    "https://i.ibb.co.com/JtcqtSf/surface1.png",
    "https://i.ibb.co.com/pP9mzVj/cert-3-1.png",
    "https://i.ibb.co.com/gjZYtkW/Untitled-design-2-1-1.png",
    "https://i.ibb.co.com/XxwnN4x/basis-1.png",
  ],
  bannerImage: "https://i.ibb.co.com/F6G9RHs/Frame-9.png",
};

export const careerShowcaseData = {
  designShowcase: {
    title: "Designs",
    description: "Creating visually stunning and user-centric designs.",
    image: "https://i.ibb.co.com/JdJTbWn/about-3d-2x.png",
    services: [
      { name: "Logo & Branding" },
      { name: "Apps Design" },
      { name: "Graphic Design" },
      { name: "Website Design" },
    ],
  },
  businessShowcase: {
    title: "Business Solutions",
    description: "Transforming businesses with innovative software solutions.",
    services: [
      { name: "ERP Systems" },
      { name: "CRM Development" },
      { name: "Data Visualization" },
      { name: "Workflow Automation" },
    ],
  },

  softwareShowcase: {
    title: "Software Development",
    description: "Building innovative and scalable software applications.",
    image: "https://i.ibb.co.com/fM130CB/about-3d-2x-1-removebg-preview.png",
    services: [
      { name: "Custom Software Development" },
      { name: "Web App Development" },
      { name: "Mobile App Development" },
    ],
  },

  technologyShowcase: {
    title: "Technology",
    description:
      "Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc.",
    services: [{ name: "DevOps Services" }, { name: "AI & Machine Learning" }],
  },
};

export const workCultureData = {
  imgage1: "https://i.ibb.co.com/2NN4pNq/Rectangle-1.png",
  imgage2: "https://i.ibb.co.com/wNB52YH/Rectangle-3.png",
  imgage3: "https://i.ibb.co.com/ykzczw9/Rectangle-2.png",
  cultures: [
    {
      title: "Diversity",
      description: "We hire people from diverse backgrounds to foster innovation and creativity.",
      icon: "fa-earth-americas",
    },
    {
      title: "Collaboration",
      description: "We believe in teamwork and open communication to achieve great results.",
      icon: "fa-trophy",
    },
    {
      title: "Integrity",
      description: "Honesty and transparency are at the heart of everything we do.",
      icon: "fa-shield-alt",
    },
    {
      title: "Growth Mindset",
      description: "We encourage continuous learning and self-improvement.",
      icon: "fa-arrow-up-right-dots",
    },
  ],
};
