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
          "name": "Job Openings",
          "icon": "fa-briefcase",
          "description": "Find the latest job opportunities at our company.",
          "path": "/hire/job-openings"
        },
        {
          "name": "Freelance Opportunities",
          "icon": "fa-user-tie",
          "description": "Join us as a freelancer and work on exciting projects.",
          "path": "/hire/freelance-opportunities"
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
          "name": "Healthcare",
          "icon": "fa-heartbeat",
          "description": "Solutions for the healthcare sector to improve patient care.",
          "path": "/industries/healthcare"
        },
        {
          "name": "Finance",
          "icon": "fa-university",
          "description": "Innovative financial tools and services for the modern world.",
          "path": "/industries/finance"
        },
        {
          "name": "Retail",
          "icon": "fa-store",
          "description": "Transforming retail experiences with technology-driven solutions.",
          "path": "/industries/retail"
        }
      ]
    },
    {
      "name": "Services",
      "type": "dropdown",
      "path": "/services",
      "description": "Explore the range of services we offer.",
      "features": [
        {
          "name": "Consulting",
          "icon": "fa-lightbulb",
          "description": "Expert advice and strategic planning for your business.",
          "path": "/services/consulting"
        },
        {
          "name": "Development",
          "icon": "fa-cogs",
          "description": "End-to-end software development services for every industry.",
          "path": "/services/development"
        },
        {
          "name": "Support",
          "icon": "fa-headset",
          "description": "24/7 customer support to assist with any challenges.",
          "path": "/services/support"
        }
      ]
    },
    {
      "name": "Products",
      "type": "dropdown",
      "path": "/products",
      "description": "Discover our range of innovative products.",
      "features": [
        {
          "name": "Product A",
          "icon": "fa-box",
          "description": "Our flagship product designed to streamline operations.",
          "path": "/products/product-a"
        },
        {
          "name": "Product B",
          "icon": "fa-cogs",
          "description": "A cutting-edge tool for improving productivity.",
          "path": "/products/product-b"
        }
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
  subTitle:"Our Industries",
  sectionTitle: "Driving innovation across industries",
  industries: [
    { name: "Fintech", icon: "fa-solid fa-gauge" },
    { name: "Startup", icon: "fas fa-lightbulb" },
    { name: "Logistics", icon: "fas fa-truck" },
    { name: "Retail & Manufacturing", icon: "fas fa-store" },
    { name: "Enterprise", icon: "fas fa-building" },
    { name: "Education", icon: "fas fa-graduation-cap" },
    { name: "Real Estate", icon: "fas fa-home" },
    { name: "Medical & Healthcare", icon: "fas fa-heartbeat" },
    { name: "Technology Company", icon: "fas fa-laptop-code" },
    { name: "Media & Entertainment", icon: "fas fa-film" },
    { name: "NGO", icon: "fas fa-hand-holding-heart" }
  ],
  features: [
    {
      icon: "fas fa-coins fa-2xl",
      title: "Disruptive FinTech Solutions",
      description: "Empowering financial innovation and growth."
    },
    {
      icon: "fas fa-cogs fa-2xl",
      title: "Business & Operational Support",
      description: "Streamlining business processes efficiently."
    },
    {
      icon: "fas fa-bullhorn fa-2xl",
      title: "Marketing, Customer Experience & Engagement",
      description: "Enhancing customer journeys and brand presence."
    },
    {
      icon: "fas fa-database fa-2xl",
      title: "Data Management & Analysis",
      description: "Transforming data into actionable insights."
    },
    {
      icon: "fas fa-shield-alt fa-2xl",
      title: "Risk, Compliance & Fraud",
      description: "Ensuring security and regulatory compliance."
    }
  ]
};



