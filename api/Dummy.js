//navbar
export const navbarData = {
  menu: [
    {
      name: "Hire",
      type: "dropdown",
      path: "/hire",
      description:
        "Hire skilled developers to bring expertise and efficiency to your projects, ensuring outstanding results every time.",
      features: [
        {
          name: "Frontend Developers",
          icon: "fa-briefcase",
          description: "Design and develop user-friendly interfaces for web applications.",
          path: "/hire/frontend-developer",
        },
        {
          name: "Backend Developers",
          icon: "fa-user-tie",
          description: "Join us as a freelancer and work on exciting projects.",
          path: "/hire/backend-developer",
        },
        {
          name: "Mobile App Developers",
          icon: "fa-mobile-alt",
          description: "Create mobile applications for iOS and Android platforms.",
          path: "/hire/mobile-app-developer",
        },
        {
          name: "QA Engineers",
          icon: "fa-bug",
          description: "Test software applications to ensure quality and performance.",
          path: "/hire/qa-engineer",
        },
        {
          name: "DevOps Engineers",
          icon: "fa-tools",
          description: "Streamline development processes and infrastructure with DevOps practices.",
          path: "/hire/devops-engineer",
        },
        {
          name: "AI & ML Specialists",
          icon: "fa-robot",
          description: "Leverage AI and ML technologies to build smart applications.",
          path: "/hire/ai-ml-developer",
        },
      ],
    },
    {
      name: "Industries",
      type: "dropdown",
      path: "/industries",
      description:
        "Our expertise covers a wide range of industries, addressing the specific challenges of each sector. From healthcare and finance to e-commerce, education, and more, we create innovative, scalable solutions that drive efficiency and success in your industry.",
      features: [
        {
          name: "Fintech",
          icon: "fa-heartbeat",
          description: "Solutions for the healthcare sector to improve patient care.",
          path: "/industries/fintech",
        },
        {
          name: "Startup",
          icon: "fa-university",
          description: "Innovative financial tools and services for the modern world.",
          path: "/industries/startup",
        },
        {
          name: "Logistics",
          icon: "fa-store",
          description: "Transforming retail experiences with technology-driven solutions.",
          path: "/industries/logistics",
        },
        {
          name: "Retail & Manufacturing",
          icon: "fa-store",
          description: "Transforming retail experiences with technology-driven solutions.",
          path: "/industries/retail-and-manufacturing",
        },

        {
          name: "Enterprise",
          icon: "fa-building",
          description: "Innovative solutions for businesses of all sizes.",
          path: "/industries/enterprise",
        },
        {
          name: "Education",
          icon: "fa-graduation-cap",
          description: "Empowering educators and students with technology.",
          path: "/industries/education",
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
          path: "/industries/medical-and-healthcare",
        },
        {
          name: "Technology Company",
          icon: "fa-laptop-code",
          description: "Tech solutions for companies looking to innovate.",
          path: "/industries/technology-company",
        },
        {
          name: "Media & Entertainment",
          icon: "fa-film",
          description: "Transforming media and entertainment with tech.",
          path: "/industries/media-and-entertainment",
        },
        {
          name: "NGO",
          icon: "fa-hand-holding-heart",
          description: "Supporting NGOs with technology-driven solutions.",
          path: "/industries/ngo",
        },
      ],
    },
    {
      name: "Services",
      type: "dropdown",
      path: "/services",
      description:
        "We take care of all your technical needs, from concept to execution and beyond. Whether it's development, optimization, or scaling, we’re committed to delivering and continuously improving your product so you can focus on growth.",
      features: [
        {
          name: "Team Extension",
          icon: "fa-user-group",
          description: "Expanding your team with skilled professionals.",
          // path: "/services/team-extension",
          path: "/hire",
        },
        {
          name: "Custom Software Development",
          icon: "fa-cogs",
          description: "Building software solutions to meet unique business needs efficiently.",
          path: "/services/custom-software-development",
        },
        {
          name: "Enterprise Software Development",
          icon: "fa-chart-column",
          description: "Streamlining enterprise operations with robust software.",
          path: "/services/enterprise-software-development",
        },
        {
          name: "Mobile App Development",
          icon: "fa-mobile-screen",
          description: "Creating engaging and user-friendly mobile experiences.",
          path: "/services/mobile-app-development",
        },
        {
          name: "QA & Testing",
          icon: "fa-shield-halved",
          description: "Ensuring quality through rigorous testing processes.",
          path: "/services/qa-and-testing",
        },
        {
          name: "MVP Development",
          icon: "fa-rocket",
          description: "Launching ideas faster with a minimum viable product.",
          path: "/services/mvp-development",
        },
      ],
    },
    {
      name: "Products",
      type: "dropdown",
      path: "/products",
      description:
        "Explore innovative solutions designed to simplify processes, enhance efficiency, and drive growth across industries.",
      features: [
        {
          name: "Time2Task",
          icon: "fa-box",
          description: "A task management tool to plan, assign, and track project tasks efficiently.",
          path: "/products/time2task",
        },
        {
          name: "Cloud Clock In",
          icon: "fa-clock",
          description: "A digital system for tracking employee attendance and work hours in real time.",
          path: "/products/cloud-clockin",
        },
        {
          name: "Flyte Queue",
          icon: "fa-people-line",
          description:
            "A digital queue management system to streamline customer flow and reduce waiting times.",
          path: "/products/flyte-queue",
        },
        {
          name: "Flyte ERP",
          icon: "fa-poo-storm",
          description:
            "A comprehensive platform that integrates and streamlines core business processes for enhanced productivity.",
          path: "/products/flyte-erp",
        },
        {
          name: "Flyte CRM",
          icon: "fa-clone",
          description:
            "A customer relationship management tool designed to optimize sales, marketing, and customer support operations.",
          path: "/products/flyte-crm",
        },
        {
          name: "Flyte POS",
          icon: "fa-radiation",
          description:
            "A reliable point-of-sale system for efficient retail transactions and inventory tracking.",
          path: "/products/flyte-pos",
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
      description:
        "Explore who we are, what we stand for, and how we’re shaping the future. Stay informed with the latest updates, insights, and stories that define our journey and inspire innovation.",
      features: [
        {
          name: "About Us",
          icon: "fa-globe",
          description:
            "Learn about our mission, vision, and the values that drive our commitment to excellence. Discover the story behind our journey and what makes us a trusted partner for businesses worldwide.",
          path: "/company/about-us",
          btnText: "Explore About Us",
        },
        {
          name: "News & Blogs",
          icon: "fa-newspaper",
          description:
            "Stay updated with the latest company news, industry insights, and expert opinions. Dive into our blogs for valuable tips and updates shaping the future of technology and business.",
          path: "/company/news-and-blogs",
          btnText: "Read News & Blogs",
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
  title: "Hire Remote Dev Team or Build Your SaaS MVP - Starting from $3,000",
  description:
    "Supercharge your projects with Flyte Solutions Ltd's resource augmentation services - your gateway to top-tier development talent without the overhead of traditional hiring.",
  industries: [
    {
      logo: "fa-solid fa-chart-area",
      name: "Fintech",
      path: "industries/fintech",
    },
    {
      logo: "fa-solid fa-graduation-cap",
      name: "Education",
      path: "industries/education",
    },
    {
      logo: "fa-solid fa-truck",
      name: "Logistics",
      path: "industries/logistics",
    },
    {
      logo: "fa-solid fa-store",
      name: "Retail & Manufacturing",
      path: "industries/retail-and-manufacturing",
    },
    {
      logo: "fa-solid fa-building",
      name: "Real Estate",
      path: "industries/real-estate",
    },
    {
      logo: "fa-solid fa-heart-pulse",
      name: "Medical & Healthcare",
      path: "industries/medical-and-healthcare",
    },
    {
      logo: "fa-solid fa-microchip",
      name: "Technology Company",
      path: "industries/technology-company",
    },
    {
      logo: "fa-solid fa-video",
      name: "Media & Entertainment",
      path: "industries/media-and-entertainment",
    },
  ],
  bannerImage: "/images/bannerImg.webp",
};

// brand data
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
      src: "/images/scb-logo.webp",
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
      src: "/images/keller-williams.png",
      alt: "Brand 13",
    },
    {
      src: "/images/hydro-one-telecom-logo.png",
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
      src: "/images/kocsitem-logo.png",
      alt: "Brand 19",
    },
  ],
};

// service
export const serviceData = [
  {
    id: 1,
    title: "Transform Your Business with Team Extension",
    short_title: "Team Extension",
    short_description:
      "Expand your development capabilities with dedicated teams that integrate seamlessly with your existing operations.",
    subTitle: "Team Extension",
    description:
      "Expand your development capabilities with dedicated teams that integrate seamlessly with your existing operations.",
    keywords: ["outsourcing", "staffing", "developers"],
    image: "/images/service1.png",
    image1: "https://i.ibb.co.com/BzrstK4/Image1.png",
    image2: "https://i.ibb.co.com/QdrF5BQ/Image2.png",
    image3: "https://i.ibb.co.com/7W1VRHX/Image3.png",
    features: [
      {
        icon: "fas fa-users",
        title: "Collaborative",
        description: "We work closely with you at every stage.",
      },
      {
        icon: "fa-bullseye",
        title: "Transparent",
        description: "Regular updates keep you informed.",
      },
      {
        icon: "fa-rotate",
        title: "Quality-Focused",
        description: "Rigorous testing ensures a reliable product.",
      },
      {
        icon: "fa-code",
        title: "Scalable",
        description: "Solutions designed to grow with your business.",
      },
    ],
    serviceLinkName: "team-extension",
    heroTitle: "Transform Your Business with Team Extension",
    heroSubtitle: "TEAM EXTENSION",
    heroDesctiption:
      "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
    heroButton: "Book A Consulation",
    heroButtonLink: "/schedule-consultation",
    heroImage: "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
    steps: {
      developing_title: "Team Extension Service",
      developing_short_description:
        "Expand your team with skilled professionals who integrate seamlessly into your workflow.",
      developing_short_title: "Dedicated Developer Teams",
      developing_image: "/images/hire/team-extension.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Requirement Gathering",
          description:
            "Identify your current team’s gaps, required skills, and the scope of work to build the right extension strategy.",
        },
        {
          id: 2,
          developing_step_title: "Talent Sourcing",
          description:
            "Select highly skilled professionals from our pool who align with your tech stack, goals, and culture.",
        },
        {
          id: 3,
          developing_step_title: "Seamless Onboarding",
          description:
            "Integrate the selected team members into your workflow with clear communication, tools, and processes.",
        },
        {
          id: 4,
          developing_step_title: "Ongoing Collaboration",
          description:
            "Ensure real-time collaboration through daily syncs, task management tools, and transparent reporting.",
        },
        {
          id: 5,
          developing_step_title: "Performance Optimization",
          description:
            "Continuously monitor and optimize team performance to ensure quality delivery and scalability.",
        },
      ],
      button_path: "/schedule-consultation",
      button_name: "Start Team Extension",
    },
  },
  {
    id: 2,
    title: "Transform Your Business with Custom Software Solutions",
    short_title: "Custom Software Development",
    short_description:
      "Tailored software solutions that align with your business needs, ensuring seamless integration and efficiency.",
    subTitle: "Custom Software Development",
    description:
      "Tailored software solutions that align with your business needs, ensuring seamless integration and efficiency.",
    keywords: ["solutions", "design", "apps"],
    image: "/images/service2.png",
    image1: "https://i.ibb.co.com/997tLysb/Adobe-Stock-508936825-resized-1080x675.jpg",
    image2: "https://i.ibb.co.com/232F2LrY/custom-software-solutions-development.jpg",
    image3: "https://i.ibb.co.com/HmfCFFz/Custom-Software-Development-1024x538-1.webp",
    features: [
      {
        icon: "fas fa-users",
        title: "Collaborative",
        description: "We work closely with you at every stage.",
      },
      {
        icon: "fa-bullseye",
        title: "Transparent",
        description: "Regular updates keep you informed.",
      },
      {
        icon: "fa-rotate",
        title: "Quality-Focused",
        description: "Rigorous testing ensures a reliable product.",
      },
      {
        icon: "fa-code",
        title: "Scalable",
        description: "Solutions designed to grow with your business.",
      },
    ],
    serviceLinkName: "custom-software-development",
    heroTitle: "Transform Your Business with Custom Software Solutions",
    heroSubtitle: "CUSTOM SOFTWARE DEVELOPMENT",
    heroDesctiption:
      "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
    heroButton: "Book A Consulation",
    heroButtonLink: "/schedule-consultation",
    heroImage: "/images/services/custom-software-development-banner-image.webp",
    steps: {
      developing_title: "Custom Software Development",
      developing_short_description:
        "Tailored, scalable software solutions built to solve your unique business challenges.",
      developing_short_title: "Tailored Digital Solutions",
      developing_image: "/images/services/custom-software.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Requirement Analysis",
          description:
            "We thoroughly analyze your business needs, technical requirements, and goals to create a tailored software strategy.",
        },
        {
          id: 2,
          developing_step_title: "Solution Architecture",
          description:
            "Our team designs a scalable, secure, and modular architecture that aligns with your technical specifications and project needs.",
        },
        {
          id: 3,
          developing_step_title: "Agile Development",
          description:
            "We build the solution using agile methodology, delivering incremental updates and continuously improving based on feedback.",
        },
        {
          id: 4,
          developing_step_title: "Testing & Quality Assurance",
          description:
            "We conduct thorough unit, integration, and end-to-end testing to ensure your software is stable and bug-free.",
        },
        {
          id: 5,
          developing_step_title: "Deployment & Support",
          description:
            "We deploy the solution to production, ensuring complete support, comprehensive documentation, and ongoing post-launch maintenance.",
        },
      ],
      button_path: "/schedule-consultation",
      button_name: "Start Custom Project",
    },
  },
  {
    id: 3,
    title: "Transform Your Business with Enterprise Software Development",
    short_title: "Enterprise Software Development",
    short_description:
      "Build robust enterprise-level software to support large-scale operations, improve efficiency, and foster innovation.",
    subTitle: "Enterprise Software Development",
    description:
      "Build robust enterprise-level software to support large-scale operations, improve efficiency, and foster innovation.",
    keywords: ["scalable", "automation", "growth"],
    image: "/images/service3.png",
    image1: "https://i.ibb.co.com/Y4Ph8ydF/enterprize-1.webp",
    image2: "https://i.ibb.co.com/W4vDqymm/enterprize-2.png",
    image3: "https://i.ibb.co.com/Hj2HCmz/enterprize-3.jpg",
    features: [
      {
        icon: "fas fa-users",
        title: "Collaborative",
        description: "We work closely with you at every stage.",
      },
      {
        icon: "fa-bullseye",
        title: "Transparent",
        description: "Regular updates keep you informed.",
      },
      {
        icon: "fa-rotate",
        title: "Quality-Focused",
        description: "Rigorous testing ensures a reliable product.",
      },
      {
        icon: "fa-code",
        title: "Scalable",
        description: "Solutions designed to grow with your business.",
      },
    ],
    serviceLinkName: "enterprise-software-development",
    heroTitle: "Transform Your Business with Enterprise Software Development",
    heroSubtitle: "ENTERPRISE SOFTWARE DEVELOPMENT",
    heroDesctiption:
      "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
    heroButton: "Book A Consulation",
    heroButtonLink: "/schedule-consultation",
    heroImage: "/images/services/enterpise-application-development-banner-image.webp",
    steps: {
      developing_title: "Enterprise Software Development",
      developing_short_description:
        "Designing and building powerful, secure, and scalable software to streamline large-scale enterprise operations.",
      developing_short_title: "Scalable Enterprise Solutions",
      developing_image: "/images/services/enterprise-software-development.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Enterprise Analysis",
          description:
            "Assess business processes, systems, and infrastructure to identify opportunities for digital transformation.",
        },
        {
          id: 2,
          developing_step_title: "System Architecture Design",
          description:
            "Create robust and scalable software architecture to support complex enterprise workflows and high availability.",
        },
        {
          id: 3,
          developing_step_title: "Custom Development",
          description:
            "Develop tailored solutions with features like automation, data analytics, and ERP integration.",
        },
        {
          id: 4,
          developing_step_title: "Security & Compliance",
          description:
            "Implement enterprise-grade security, data protection policies, and industry-specific compliance standards.",
        },
        {
          id: 5,
          developing_step_title: "Deployment & Maintenance",
          description:
            "Roll out across departments with full documentation, training, and long-term support for upgrades and scaling.",
        },
      ],
      button_path: "/schedule-consultation",
      button_name: "Start Enterprise Project",
    },
  },
  {
    id: 4,
    title: "Transform Your Business with Enterprise Software Development",
    short_title: "Mobile App Development",
    short_description:
      "Design and develop mobile applications for iOS and Android platforms, enhancing user experience and engagement.",
    subTitle: "Mobile App Development",
    description:
      "Design and develop mobile applications for iOS and Android platforms, enhancing user experience and engagement.",
    keywords: ["iOS", "Android", "apps"],
    image: "/images/service4.svg",
    image1: "https://i.ibb.co.com/qYH97RVF/mobile-app-3.png",
    image2: "https://i.ibb.co.com/23PSHt2g/mobile-app-2.webp",
    image3: "https://i.ibb.co.com/mFHjqTj1/mobile-app-1.jpg",
    features: [
      {
        icon: "fas fa-users",
        title: "Collaborative",
        description: "We work closely with you at every stage.",
      },
      {
        icon: "fa-bullseye",
        title: "Transparent",
        description: "Regular updates keep you informed.",
      },
      {
        icon: "fa-rotate",
        title: "Quality-Focused",
        description: "Rigorous testing ensures a reliable product.",
      },
      {
        icon: "fa-code",
        title: "Scalable",
        description: "Solutions designed to grow with your business.",
      },
    ],
    serviceLinkName: "mobile-app-development",
    heroTitle: "Transform Your Business with Enterprise Software Development",
    heroSubtitle: " MOBILE APP DEVELOPMENT",
    heroDesctiption:
      "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
    heroButton: "Book A Consulation",
    heroButtonLink: "/schedule-consultation",
    heroImage: "/images/services/mobile-app-development-banner-image.webp",
    steps: {
      developing_title: "Mobile App Development",
      developing_short_description:
        "Creating high-quality mobile applications for iOS and Android with seamless performance and intuitive UI.",
      developing_short_title: "iOS & Android Apps",
      developing_image: "/images/hire/mobile-app.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "App Strategy & Planning",
          description:
            "Understand business goals, user needs, and define app features, platform, and roadmap.",
        },
        {
          id: 2,
          developing_step_title: "UI/UX Design",
          description:
            "Design intuitive and engaging interfaces with a focus on mobile usability and platform guidelines.",
        },
        {
          id: 3,
          developing_step_title: "Cross-Platform or Native Development",
          description:
            "Develop high-performance apps using Flutter, React Native, Swift, or Kotlin based on project needs.",
        },
        {
          id: 4,
          developing_step_title: "API & Backend Integration",
          description:
            "Connect apps to secure backend systems, databases, and third-party services for complete functionality.",
        },
        {
          id: 5,
          developing_step_title: "Testing & App Store Deployment",
          description:
            "Test for performance, security, and bugs before publishing to Google Play and Apple App Store.",
        },
      ],
      button_path: "/schedule-consultation",
      button_name: "Start Mobile Project",
    },
  },
  {
    id: 5,
    title: "Transform Your Business with MVP Development",
    short_title: "QA & Testing",
    short_description:
      "Ensure software quality with comprehensive testing services, from functional to performance testing.",
    subTitle: "QA & Testing",
    description:
      "Ensure software quality with comprehensive testing services, from functional to performance testing.",
    keywords: ["testing", "automation", "bugs"],
    image: "/images/service5.png",
    image1: "https://i.ibb.co.com/dwws7WK9/qa-1.webp",
    image2: "https://i.ibb.co.com/TdKNRWz/qa-2.webp",
    image3: "https://i.ibb.co.com/gZzGdR6m/qa-3.webp",
    features: [
      {
        icon: "fas fa-users",
        title: "Collaborative",
        description: "We work closely with you at every stage.",
      },
      {
        icon: "fa-bullseye",
        title: "Transparent",
        description: "Regular updates keep you informed.",
      },
      {
        icon: "fa-rotate",
        title: "Quality-Focused",
        description: "Rigorous testing ensures a reliable product.",
      },
      {
        icon: "fa-code",
        title: "Scalable",
        description: "Solutions designed to grow with your business.",
      },
    ],
    serviceLinkName: "qa-and-testing",
    heroTitle: "Transform Your Business with MVP Development",
    heroSubtitle: "QA & TESTING",
    heroDesctiption:
      "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
    heroButton: "Book A Consulation",
    heroButtonLink: "/schedule-consultation",
    heroImage: "/images/services/qa-testing-banner-image.webp",
    steps: {
      developing_title: "QA & Testing",
      developing_short_description:
        "Delivering bug-free, high-quality software through manual and automated testing practices.",
      developing_short_title: "Quality Assurance",
      developing_image: "/images/services/qa-testing.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Requirement Analysis",
          description:
            "Understand the application requirements and define the testing scope, types, and strategy.",
        },
        {
          id: 2,
          developing_step_title: "Test Planning",
          description:
            "Create test plans, test cases, and determine resources, tools, and environments required.",
        },
        {
          id: 3,
          developing_step_title: "Functional Testing",
          description:
            "Ensure all features work as expected through manual and automated functional test cases.",
        },
        {
          id: 4,
          developing_step_title: "Performance & Security Testing",
          description:
            "Check the app’s speed, stability under load, and identify vulnerabilities for secure performance.",
        },
        {
          id: 5,
          developing_step_title: "Bug Reporting & Retesting",
          description: "Log defects, fix bugs, perform regression testing, and prepare detailed QA reports.",
        },
      ],
      button_path: "/schedule-consultation",
      button_name: "Start QA & Testing",
    },
  },
  {
    id: 6,
    title: "Transform Your Business with MVP Development",
    short_title: "MVP Development",
    short_description:
      "Build a minimum viable product quickly to test your ideas, validate concepts, and enter the market faster.",
    subTitle: "MVP Development",
    description:
      "Build a minimum viable product quickly to test your ideas, validate concepts, and enter the market faster.",
    keywords: ["MVP", "validation", "startup"],
    image: "/images/service6.png",
    image1: "https://i.ibb.co.com/PzrRVmmK/mvp-1.webp",
    image2: "https://i.ibb.co.com/7dxNMcJN/mvp-2.webp",
    image3: "https://i.ibb.co.com/LDWnHgNG/mvp-3.webp",
    features: [
      {
        icon: "fas fa-users",
        title: "Collaborative",
        description: "We work closely with you at every stage.",
      },
      {
        icon: "fa-bullseye",
        title: "Transparent",
        description: "Regular updates keep you informed.",
      },
      {
        icon: "fa-rotate",
        title: "Quality-Focused",
        description: "Rigorous testing ensures a reliable product.",
      },
      {
        icon: "fa-code",
        title: "Scalable",
        description: "Solutions designed to grow with your business.",
      },
    ],
    serviceLinkName: "mvp-development",
    heroTitle: "Transform Your Business with MVP Development",
    heroSubtitle: "MVP DEVELOPMENT",
    heroDesctiption:
      "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
    heroButton: "Book A Consulation",
    heroButtonLink: "/schedule-consultation",
    heroImage: "/images/services/mvp-banner-image.webp",
    steps: {
      developing_title: "MVP Development",
      developing_short_description:
        "Quickly launch a functional version of your product to validate ideas and gather user feedback.",
      developing_short_title: "Lean Product Launch",
      developing_image: "/images/services/mvp.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Discovery & Ideation",
          description:
            "We begin by identifying business goals, user problems, and shaping a clear vision for the MVP.",
        },
        {
          id: 2,
          developing_step_title: "Feature Prioritization",
          description:
            "We select core features that solve the primary user need while ensuring a lean and valuable product scope.",
        },
        {
          id: 3,
          developing_step_title: "Rapid Prototyping",
          description:
            "Our team designs quick wireframes and visual mockups to simulate user flow and validate product direction early.",
        },
        {
          id: 4,
          developing_step_title: "MVP Development",
          description:
            "Using agile sprints, we build and test the MVP to deliver a functional version in the shortest time.",
        },
        {
          id: 5,
          developing_step_title: "Launch & Feedback",
          description:
            "We release the MVP to real users, collect feedback, and plan iterations based on performance and user input.",
        },
      ],
      button_path: "/schedule-consultation",
      button_name: "Build Your MVP",
    },
  },
];

// custom software data for service details page
export const customSoftwareData = {
  name: "Custom Software Solutions",
  description: "Choose Custom Solutions to Fit Your Business Needs",
  features: [
    { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
    { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
    { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
    { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
    { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
    { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
    { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
    { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
  ],
};

// service process data for service details page
export const serviceProcessData = {
  name: "Our Custom Software Development Process",
  description: "We create tailored, scalable software for seamless integration and business efficiency.",
  title: "Our Proven Process for Delivering Custom Software",
  features: [
    {
      id: 1,
      name: "Discovery & Planning",
      details:
        "We analyze your business needs, define project goals, and create a detailed roadmap to guide development.",
    },
    {
      id: 2,
      name: "Design & Prototyping",
      details:
        "We design wireframes and prototypes to visualize the software’s interface, ensuring it’s user-friendly and visually appealing.",
    },
    {
      id: 3,
      name: "Development",
      details:
        "Using agile methodologies, we build scalable and secure software tailored to your requirements.",
    },
    {
      id: 4,
      name: "Testing & QA",
      details:
        "We rigorously test the software to ensure it’s bug-free, performs well, and meets quality standards.",
    },
    {
      id: 5,
      name: "Deployment & Support",
      details: "We handle deployment and provide ongoing support to keep your software running smoothly.",
    },
  ],
};

// service booster data for service details page
export const boosterData = [
  {
    id: 1,
    icon: "fa-cart-shopping",
    name: "Retail",
    description:
      "Manage complex shift schedules, ensure labor law compliance, and gain insights to optimize staffing and reduce absenteeism.",
    features: ["Employee Scheduling", "Compliance", "Performance Insights"],
  },
  {
    id: 2,
    icon: "fa-heart-pulse",
    name: "Healthcare",
    description:
      "Efficiently manage rotating shifts, maintain accurate records for billing, and ensure timely emergency coverage.",
    features: ["Shift Management", "Accurate Records", "Emergency Coverage"],
  },
  {
    id: 3,
    icon: "fa-chalkboard-user",
    name: "Remote Teams",
    description:
      "Track attendance and productivity of remote employees, accommodate flexible schedules, and integrate with collaboration tools.",
    features: ["Virtual Attendance Tracking", "Flexible Scheduling", "Integration with Collaboration Tools"],
  },
  {
    id: 4,
    icon: "fa-industry",
    name: "Manufacturing",
    description:
      "Accurately track shifts and overtime, ensure safety compliance, and optimize workforce allocation for production targets.",
    features: ["Shift and Overtime Tracking", "Safety Compliance", "Resource Allocation"],
  },
  {
    id: 5,
    icon: "fa-graduation-cap",
    name: "Education",
    description:
      "Track faculty and student attendance, integrate with management systems, and manage attendance for school events.",
    features: ["Faculty and Staff Attendance", "Student Attendance", "Event Management"],
  },
  {
    id: 6,
    icon: "fa-hand-holding-medical",
    name: "Hospitality",
    description:
      "Efficiently schedule staff for various roles, maintain high guest service standards, and control labor costs.",
    features: ["Staff Scheduling", "Guest Services", "Labor Cost Control"],
  },
];

//products section
export const productsSections = [
  {
    id: 1,
    image: "https://i.ibb.co.com/TBR9drZ/product-1.png",
    name: "Time2Task",
    path: "time2task",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/DMMrh49/Rectangle-2.png",
    name: "Cloud ClockIn",
    path: "cloud-clockin",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/9qD0123/Rectangle-3.png",
    name: "Flyte CRM",
    path: "flyte-crm",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/MhWYXzG/Rectangle-4.png",
    name: "Flyte POS",
    path: "flyte-pos",
  },
  {
    id: 5,
    image: "https://i.ibb.co.com/7WSjJYM/case-study-banner.png",
    name: "Flyte ERP",
    path: "flyte-erp",
  },
  {
    id: 6,
    image: "https://i.ibb.co.com/dfKBJbd/case-study-img-2.png",
    name: "Flyte Queue",
    path: "flyte-queue",
  },
  // {
  //   id: 7,
  //   image: "https://i.ibb.co.com/FVY4cnX/case-study-img-3.png",
  //   name: "Queue Management",
  //   path:"",
  // },
];

// blog and news
export const blogData = {
  cards: [
    {
      id: 1,
      title: "Flyte Secures ISO Certification",
      titleName: "flyte-secures-iso-certification",
      image: "/images/blog-flyte-iso.png",
      description: `
        <section>
          <h2>Introduction</h2>
          <img src="/images/blog-flyte-iso.png" alt="Flyte Secures ISO Certification">
          <p>Flyte, a leading cloud-based platform, has recently secured its ISO certification, further enhancing its commitment to data security and customer trust.</p>
        </section>
        <section>
          <h2>Certification Process</h2>
          <p>The ISO certification process involved rigorous assessments and audits to ensure compliance with international standards.</p>
          <p>Flyte's dedication to maintaining high standards of data security and operational excellence was evident throughout the process.</p>
        </section>
        <section>
          <h2>Benefits of ISO Certification</h2>
          <p>Achieving ISO certification demonstrates Flyte's commitment to data security and customer trust.</p>
          <p>It also enhances Flyte's reputation as a reliable and secure cloud platform.</p>
        </section>
        <section>
          <h2>Customer Impact</h2>
          <p>Flyte's customers can now have greater confidence in the platform's security and reliability.</p>
          <blockquote>"The ISO certification is a testament to Flyte's dedication to data security and customer satisfaction," said Joanna Wellick, CEO of Flyte.</blockquote>
        </section>
        <section>
          <h2>Future Plans</h2>
          <p>Flyte plans to continue its commitment to excellence by pursuing additional certifications and enhancing its platform's security features.</p>
        </section>
      `,
      keywords: ["Flyte", "ISO Certification", "Data Security", "Cloud Platform"],
      profile: {
        name: "Joanna Wellick",
        image: "/images/ceo_sumon.jpg",
        date: "June 28, 2023",
      },
      article: {
        readTime: "4 min read",
        views: "230 views",
      },
    },
    {
      id: 2,
      title: "DevOps Best Practices",
      titleName: "devops-best-practices",
      image: "/images/blog-flyte-devops.png",
      description: `
        <section>
          <h2>Introduction</h2>
          <img src="/images/blog-flyte-devops.png" alt="DevOps Best Practices">
          <p>This article covers key DevOps practices that help streamline software development processes, improve collaboration, and increase deployment frequency.</p>
        </section>
        <section>
          <h2>Key Practices</h2>
          <p>Implementing continuous integration and continuous delivery (CI/CD) pipelines is crucial for automating the software release process.</p>
          <p>Infrastructure as Code (IaC) allows teams to manage and provision infrastructure through code, ensuring consistency and scalability.</p>
        </section>
        <section>
          <h2>Benefits</h2>
          <p>Adopting DevOps practices leads to faster time-to-market, improved product quality, and enhanced collaboration between development and operations teams.</p>
          <blockquote>"DevOps has transformed the way we develop and deliver software, making our processes more efficient and reliable," said John Doe, DevOps Engineer.</blockquote>
        </section>
        <section>
          <h2>Challenges</h2>
          <p>Despite the benefits, implementing DevOps practices can be challenging due to cultural and technical barriers.</p>
          <p>Organizations need to invest in training and tools to overcome these challenges.</p>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>DevOps practices are essential for modern software development, offering numerous benefits in terms of speed, quality, and collaboration.</p>
        </section>
      `,
      keywords: ["DevOps", "Best Practices", "Software Development", "Automation"],
      profile: {
        name: "John Doe",
        image: "/images/ceo_sumon.jpg",
        date: "March 15, 2024",
      },
      article: {
        readTime: "5 min read",
        views: "172 views",
      },
    },
    {
      id: 3,
      title: "Info Session on Cloud Management",
      titleName: "info-session-on-cloud-management",
      image: "/images/blog-flyte-cloudManagement.png",
      description: `
        <section>
          <h2>Introduction</h2>
          <img src="/images/blog-flyte-cloudManagement.png" alt="Info Session on Cloud Management">
          <p>Join us for an informative session on best practices in cloud management, focusing on scaling, cost optimization, and security in the cloud.</p>
        </section>
        <section>
          <h2>Scaling in the Cloud</h2>
          <p>Learn how to effectively scale your cloud infrastructure to meet growing demands.</p>
          <p>We will cover strategies for auto-scaling and load balancing.</p>
        </section>
        <section>
          <h2>Cost Optimization</h2>
          <p>Discover techniques for optimizing cloud costs and maximizing ROI.</p>
          <p>We will discuss cost management tools and best practices.</p>
        </section>
        <section>
          <h2>Security Best Practices</h2>
          <p>Understand the importance of cloud security and how to implement robust security measures.</p>
          <blockquote>"Security is a top priority in cloud management, and we must stay vigilant to protect our data," said Alex Smith, Cloud Specialist.</blockquote>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>This info session will provide valuable insights into cloud management, helping you optimize and secure your cloud infrastructure.</p>
        </section>
      `,
      keywords: ["Cloud Management", "Info Session", "Cost Optimization", "Security"],
      profile: {
        name: "Alex Smith",
        image: "/images/ceo_sumon.jpg",
        date: "April 10, 2024",
      },
      article: {
        readTime: "6 min read",
        views: "145 views",
      },
    },
    {
      id: 4,
      title: "The Future of DevOps Tools",
      titleName: "the-future-of-devops-tools",
      image: "/images/blog-flyte-devops.png",
      description: `
        <section>
          <h2>Introduction</h2>
          <img src="/images/blog-flyte-devops.png" alt="The Future of DevOps Tools">
          <p>This article discusses the evolving landscape of DevOps tools and technologies, focusing on emerging tools and trends that are reshaping the industry.</p>
        </section>
        <section>
          <h2>Emerging Tools</h2>
          <p>New DevOps tools are being developed to address the growing complexity of software development and deployment processes.</p>
          <p>These tools aim to improve automation, collaboration, and monitoring capabilities, making DevOps practices more efficient and effective.</p>
        </section>
        <section>
          <h2>Industry Trends</h2>
          <p>The DevOps industry is witnessing a shift towards more integrated and comprehensive toolsets that offer end-to-end solutions for development and operations teams.</p>
          <blockquote>"The future of DevOps tools lies in their ability to seamlessly integrate with existing workflows and provide actionable insights," said Sarah Lee, DevOps Specialist.</blockquote>
        </section>
        <section>
          <h2>Challenges</h2>
          <p>Despite the advancements, there are challenges in adopting new DevOps tools, including integration issues and learning curves.</p>
          <p>Organizations need to invest in training and support to overcome these challenges.</p>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>The future of DevOps tools is promising, with continuous innovations aimed at improving efficiency and collaboration in software development.</p>
        </section>
      `,
      keywords: ["DevOps Tools", "Emerging Technologies", "Industry Trends", "Automation"],
      profile: {
        name: "Sarah Lee",
        image: "/images/ceo_sumon.jpg",
        date: "February 19, 2024",
      },
      article: {
        readTime: "7 min read",
        views: "198 views",
      },
    },
    {
      id: 5,
      title: "How Cloud Infrastructure is Changing IT",
      titleName: "how-cloud-infrastructure-is-changing-it",
      image: "/images/blog-flyte-iso.png",
      description: `
        <section>
          <h2>Introduction</h2>
          <img src="/images/blog-flyte-iso.png" alt="How Cloud Infrastructure is Changing IT">
          <p>Cloud infrastructure is revolutionizing the IT industry. This article covers how organizations are adopting cloud solutions to improve flexibility and reduce costs.</p>
        </section>
        <section>
          <h2>Adoption of Cloud Solutions</h2>
          <p>Organizations are increasingly adopting cloud solutions to enhance their IT infrastructure.</p>
          <p>Cloud solutions offer scalability, flexibility, and cost savings.</p>
        </section>
        <section>
          <h2>Benefits of Cloud Infrastructure</h2>
          <p>Cloud infrastructure provides numerous benefits, including improved flexibility, reduced costs, and enhanced security.</p>
          <p>Organizations can scale their resources up or down based on demand.</p>
        </section>
        <section>
          <h2>Challenges in Cloud Adoption</h2>
          <p>Despite the benefits, there are challenges in adopting cloud infrastructure, such as data security and compliance issues.</p>
          <blockquote>"Adopting cloud infrastructure requires careful planning and consideration of security and compliance," said David Warner, IT Specialist.</blockquote>
        </section>
        <section>
          <h2>Future of Cloud Infrastructure</h2>
          <p>The future of cloud infrastructure looks promising, with continuous advancements in technology and increasing adoption by organizations.</p>
        </section>
      `,
      keywords: ["Cloud Infrastructure", "IT Industry", "Cost Reduction", "Flexibility"],
      profile: {
        name: "David Warner",
        image: "/images/ceo_sumon.jpg",
        date: "January 25, 2024",
      },
      article: {
        readTime: "8 min read",
        views: "300 views",
      },
    },
  ],
};

// hire tech data
export const techData = {
  frontend: {
    title: "Frontend Development",
    hireLinkName: "frontend-developer",
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
    heroTitle: "Hire Dedicated Frontend Developers for Seamless User Experiences",
    heroSubtitle: "HIRE FRONTEND DEVELOPERS",
    heroDesctiption:
      "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
    heroButton: "Hire Frontend Developers Now",
    heroButtonLink: "application-form",
    heroImage: "https://i.ibb.co.com/4gsDVSgp/hire-front-end-developer-1.webp",
    advantageTitle: "Why Choose Our Frontend Developers",
    advantages: [
      {
        icon: "fa-code",
        title: "Expertise in Modern Technologies",
        description: "Proficient in HTML, CSS, JavaScript, React, Angular, Vue.js, and more.",
      },
      {
        icon: "fa-cogs",
        title: "Custom Solutions",
        description: "Tailored frontend development to meet your business needs.",
      },
      {
        icon: "fa-users",
        title: "Agile Development",
        description: "Flexible and collaborative approach to deliver projects on time.",
      },
      {
        icon: "fa-database",
        title: "Robust Backend Systems",
        description: "Expert in building scalable, secure, and high-performance server-side applications.",
      },
      {
        icon: "fa-server",
        title: "API Development",
        description: "Building efficient and reliable APIs for seamless integrations.",
      },
      {
        icon: "fa-lock",
        title: "Security Focused",
        description: "Ensuring your backend systems are secure and compliant with best practices.",
      },
    ],
    developerExpertises: [],
    exploreMoreDevelopers: [
      { id: 1, name: "Hire React.js Developers", path: "reactjs-developer" },
      { id: 2, name: "Hire Angular Developers", path: "angular-developer" },
      { id: 3, name: "Hire Vue.js Developers", path: "vuejs-developer" },
      { id: 4, name: "Hire Next.js Developers", path: "nextjs-developer" },
    ],
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    steps: {
      developing_title: "Frontend Developer",
      developing_short_description:
        "Crafting responsive, user-friendly, and high-performance web interfaces using modern technologies.",
      developing_short_title: "UI/UX & Web Interfaces",
      developing_image: "/images/hire/frontend.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Requirement Analysis",
          description:
            "Understanding client needs, target users, and project goals to shape the frontend structure.",
        },
        {
          id: 2,
          developing_step_title: "Wireframing & Design",
          description:
            "Creating wireframes and visual designs that define layout, UI components, and user flow.",
        },
        {
          id: 3,
          developing_step_title: "Component Development",
          description: "Building reusable UI components using React, Tailwind CSS, and other modern tools.",
        },
        {
          id: 4,
          developing_step_title: "Integration & Responsiveness",
          description:
            "Connecting frontend with backend APIs and ensuring seamless performance across all devices.",
        },
        {
          id: 5,
          developing_step_title: "Testing & Optimization",
          description:
            "Performing UI testing, fixing bugs, and optimizing for speed, accessibility, and SEO.",
        },
      ],
      button_path: "/hire/application-form",
      button_name: "Get Started",
    },
  },

  reactjs: {
    title: "React JS Development",
    hireLinkName: "reactjs-developer",
    description: "Creating responsive and dynamic user interfaces using modern frontend technologies.",
    technologies: [],
    heroTitle: "Hire Dedicated React Developers for Scalable and Dynamic Web Applications",
    heroSubtitle: "HIRE REACT JS DEVELOPERS",
    heroDesctiption:
      "Build responsive, interactive, and high-performing web applications with our expert React developers. We specialize in creating seamless user experiences using cutting-edge React frameworks, optimized performance, and visually stunning interfaces.",
    heroButton: "Hire React JS Developers Now",
    heroButtonLink: "application-form",
    heroImage: "https://i.ibb.co.com/fdDsXnxw/Benefits-of-React-JS.jpg",
    advantageTitle: "Why Choose Our React JS Developers",
    advantages: [
      {
        icon: "fa-react",
        title: "Reusable Components",
        description: "Build modular UIs with reusable logic across your app.",
      },
      {
        icon: "fa-bolt",
        title: "High-Speed Rendering",
        description: "Leverages Virtual DOM for faster UI updates and performance.",
      },
      {
        icon: "fa-puzzle-piece",
        title: "Rich Ecosystem",
        description: "Seamless integration with Redux, React Router, and more.",
      },
      {
        icon: "fa-mobile-alt",
        title: "Cross-Platform Support",
        description: "Extend to mobile with React Native for true cross-platform power.",
      },
      {
        icon: "fa-expand-arrows-alt",
        title: "Scalability",
        description: "Easy to scale for enterprise-level applications.",
      },
      {
        icon: "fa-users",
        title: "Massive Community",
        description: "Vibrant open-source community and backed by Meta.",
      },
    ],
    developerExpertises: [
      {
        icon: "fa-code",
        title: "Single Page Applications (SPAs)",
        description: "Develop dynamic web apps with smooth, fast user interactions and minimal page reloads.",
      },
      {
        icon: "fa-cogs",
        title: "Server-Side Rendering (Next.js)",
        description:
          "Improve SEO, performance, and initial page load speed with efficient server-side rendering.",
      },
      {
        icon: "fa-users",
        title: "State Management (Redux, Context API)",
        description:
          "Manage application state efficiently, ensuring data consistency and seamless user experience.",
      },
      {
        icon: "fa-database",
        title: "API Integration & Third-Party Libraries",
        description:
          "Seamlessly connect with RESTful APIs, GraphQL, and third-party services for enhanced functionality.",
      },
      {
        icon: "fa-server",
        title: "Performance Optimization",
        description:
          "Optimize rendering, minimize re-renders, and enhance load times for a fast, responsive UI.",
      },
      {
        icon: "fa-lock",
        title: "Testing & Debugging",
        description:
          "Ensure app stability with unit, integration, and end-to-end testing using Jest, React Testing Library, and Cypress.",
      },
    ],

    exploreMoreDevelopers: [],
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    steps: {
      developing_title: "React JS Development",
      developing_short_description:
        "Building high-performance, scalable, and interactive user interfaces using React JS.",
      developing_short_title: "React-Based Interfaces",
      developing_image: "/images/hire/react-js.webp", // Replace with your actual image path
      developing_step: [
        {
          id: 1,
          developing_step_title: "Project Planning",
          description:
            "Identify project goals, user needs, and define the component architecture for the React application.",
        },
        {
          id: 2,
          developing_step_title: "Component Design",
          description:
            "Design modular, reusable, and maintainable UI components using JSX and styled with Tailwind or CSS-in-JS.",
        },
        {
          id: 3,
          developing_step_title: "State Management",
          description:
            "Implement efficient data flow using tools like React Context API, Redux, or Zustand depending on project needs.",
        },
        {
          id: 4,
          developing_step_title: "API Integration",
          description:
            "Connect the frontend to RESTful APIs or GraphQL backends to fetch, display, and manage dynamic data.",
        },
        {
          id: 5,
          developing_step_title: "Testing & Deployment",
          description:
            "Ensure app stability with unit and integration tests using Jest or React Testing Library, then deploy via Vercel or Netlify.",
        },
      ],
      button_path: "/hire/application-form",
      button_name: "Start with React JS",
    },
  },

  angular: {
    title: "Angular Development",
    hireLinkName: "angular-developer",
    description: "Building dynamic, scalable, and high-performance web applications using Angular.",
    technologies: [],
    heroTitle: "Hire Dedicated Angular Developers for Robust Web Applications",
    heroSubtitle: "HIRE ANGULAR DEVELOPERS",
    heroDesctiption:
      "Create seamless, single-page applications and dynamic websites with Angular. Our expert Angular developers ensure high performance, maintainable code, and user-friendly interfaces with the latest Angular technologies.",
    heroButton: "Hire Angular Developers Now",
    heroButtonLink: "application-form",
    heroImage: "/images/hire/Angular-Banner-Image.webp",
    advantageTitle: "Why Choose Our Angular Developers",
    advantages: [
      {
        icon: "fa-cubes",
        title: "Full-Fledged Framework",
        description: "Includes routing, HTTP, forms, and more out of the box.",
      },
      {
        icon: "fa-sync-alt",
        title: "Two-Way Data Binding",
        description: "Synchronizes data between model and view instantly.",
      },
      {
        icon: "fa-toolbox",
        title: "Powerful CLI",
        description: "Boosts productivity with code scaffolding and testing tools.",
      },
      {
        icon: "fa-lock",
        title: "Enterprise-Level Security",
        description: "Ideal for large-scale, mission-critical applications.",
      },
      {
        icon: "fa-chart-line",
        title: "Performance Optimization",
        description: "AOT compilation and tree shaking for faster apps.",
      },
      {
        icon: "fa-users-cog",
        title: "Strong Support & Community",
        description: "Backed by Google with regular updates and LTS.",
      },
    ],
    developerExpertises: [
      {
        icon: "fa-code",
        title: "Single Page Applications (SPAs)",
        description: "Build dynamic web applications with minimal page reloads for fast user interactions.",
      },
      {
        icon: "fa-cogs",
        title: "Two-Way Data Binding",
        description:
          "Easily sync the view and model for real-time updates with Angular’s powerful data binding.",
      },
      {
        icon: "fa-users",
        title: "State Management (NgRx, Angular Services)",
        description: "Use NgRx or Angular Services for managing and centralizing app state.",
      },
      {
        icon: "fa-database",
        title: "API Integration",
        description:
          "Connect with RESTful APIs and third-party services for rich, dynamic app functionality.",
      },
      {
        icon: "fa-server",
        title: "Component-Based Architecture",
        description: "Organize app features into manageable, reusable components for faster development.",
      },
      {
        icon: "fa-lock",
        title: "Testing & Debugging",
        description:
          "Leverage Angular testing tools like Jasmine and Karma to ensure app stability and high-quality code.",
      },
    ],

    exploreMoreDevelopers: [],
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From analyzing your needs to hiring the right Angular developer, we ensure an easy and efficient hiring process tailored to your project.",
      title: "Your Path to Hiring Angular Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We analyze your project scope, goals, and technology stack to match you with the perfect Angular developer.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We connect you with developers who specialize in Angular and possess the necessary skills for your project.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they meet your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We smoothly integrate your Angular developers into your workflow, ensuring they align with your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We offer continuous support throughout the project to address any challenges and ensure performance.",
        },
      ],
    },
    steps: {
      developing_title: "Angular Development",
      developing_short_description:
        "Building scalable, high-performance, and dynamic applications using Angular.",
      developing_short_title: "Angular-Based Interfaces",
      developing_image: "/images/hire/angular.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Project Planning",
          description:
            "Identify project goals and user needs while defining the structure of your Angular application.",
        },
        {
          id: 2,
          developing_step_title: "Component Design",
          description:
            "Design reusable and maintainable UI components with Angular’s component-based architecture.",
        },
        {
          id: 3,
          developing_step_title: "State Management",
          description:
            "Implement state management solutions like NgRx or Angular services to ensure consistency across the app.",
        },
        {
          id: 4,
          developing_step_title: "API Integration",
          description:
            "Connect the frontend to RESTful APIs or third-party services for real-time data management.",
        },
        {
          id: 5,
          developing_step_title: "Testing & Deployment",
          description:
            "Ensure application stability with testing tools like Jasmine, Karma, and deploy using Firebase or Heroku.",
        },
      ],
      button_path: "/hire/application-form",
      button_name: "Start with Angular Development",
    },
  },

  vuejs: {
    title: "Vue.js Development",
    hireLinkName: "vuejs-developer",
    description: "Building dynamic, scalable, and highly performant web applications using Vue.js.",
    technologies: [],
    heroTitle: "Hire Dedicated Vue.js Developers for High-Performance Web Applications",
    heroSubtitle: "HIRE VUE.JS DEVELOPERS",
    heroDesctiption:
      "Develop seamless and responsive user interfaces with Vue.js. Our expert Vue.js developers specialize in creating interactive web applications that are both highly performant and easy to maintain.",
    heroButton: "Hire Vue.js Developers Now",
    heroButtonLink: "application-form",
    heroImage: "/images/hire/vuejs-banner-image.webp",
    advantageTitle: "Why Choose Our Vue.js Developers",
    advantages: [
      {
        icon: "fa-leaf",
        title: "Lightweight & Fast",
        description: "A minimal core for lightning-fast performance.",
      },
      {
        icon: "fa-code-branch",
        title: "Simple Integration",
        description: "Easily integrate with existing projects or libraries.",
      },
      {
        icon: "fa-cogs",
        title: "Reactive Data Binding",
        description: "Built-in reactivity system for seamless UI updates.",
      },
      {
        icon: "fa-puzzle-piece",
        title: "Component-Based Architecture",
        description: "Develop modular and reusable UI components.",
      },
      {
        icon: "fa-wrench",
        title: "Developer Friendly",
        description: "Easy learning curve with extensive documentation.",
      },
      {
        icon: "fa-users",
        title: "Growing Ecosystem",
        description: "Supported by an enthusiastic open-source community.",
      },
    ],
    developerExpertises: [
      {
        icon: "fa-code",
        title: "Single Page Applications (SPAs)",
        description: "Develop dynamic, fast-loading web apps with minimal page reloads using Vue.js.",
      },
      {
        icon: "fa-cogs",
        title: "State Management (Vuex)",
        description: "Use Vuex to manage complex state and handle data flow in large Vue.js applications.",
      },
      {
        icon: "fa-users",
        title: "Component-Based Architecture",
        description:
          "Break down the user interface into small, reusable components for faster development and easier maintenance.",
      },
      {
        icon: "fa-database",
        title: "API Integration",
        description:
          "Easily connect the frontend to RESTful APIs or GraphQL backends to fetch, display, and manage dynamic data.",
      },
      {
        icon: "fa-server",
        title: "Performance Optimization",
        description:
          "Optimize rendering, minimize re-renders, and enhance load times for a fast, responsive UI.",
      },
      {
        icon: "fa-lock",
        title: "Testing & Debugging",
        description:
          "Use tools like Vue Test Utils and Jest to ensure application stability and reliability.",
      },
    ],

    exploreMoreDevelopers: [],
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "We provide a seamless hiring experience tailored to your needs, ensuring you get the best Vue.js developers for your project.",
      title: "Your Path to Hiring Vue.js Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project scope, requirements, and technology stack to match you with the perfect Vue.js developer.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details: "We handpick skilled developers with expertise in Vue.js and other relevant technologies.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they meet your technical and cultural requirements.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We integrate Vue.js developers into your team and project management workflow seamlessly.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to ensure your Vue.js application performs optimally throughout the project lifecycle.",
        },
      ],
    },
    steps: {
      developing_title: "Vue.js Development",
      developing_short_description: "Building fast, dynamic, and scalable applications using Vue.js.",
      developing_short_title: "Vue.js-Based Interfaces",
      developing_image: "/images/hire/vuejs.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Project Planning",
          description:
            "Identify your project goals, user needs, and define the structure of your Vue.js application.",
        },
        {
          id: 2,
          developing_step_title: "Component Design",
          description:
            "Design reusable and maintainable UI components with Vue.js’ flexible and modular component architecture.",
        },
        {
          id: 3,
          developing_step_title: "State Management",
          description:
            "Use Vuex to manage application state and handle complex data flow in large-scale Vue.js projects.",
        },
        {
          id: 4,
          developing_step_title: "API Integration",
          description:
            "Integrate your Vue.js frontend with RESTful APIs or GraphQL for fetching and managing dynamic data.",
        },
        {
          id: 5,
          developing_step_title: "Testing & Deployment",
          description:
            "Ensure app stability with unit testing using Vue Test Utils and deploy using platforms like Netlify or Heroku.",
        },
      ],
      button_path: "/hire/application-form",
      button_name: "Start with Vue.js Development",
    },
  },

  nextjs: {
    title: "Next.js Development",
    hireLinkName: "nextjs-developer",
    description: "Building scalable, high-performance, and SEO-friendly web applications with Next.js.",
    technologies: [],
    heroTitle: "Hire Dedicated Next.js Developers for Fast and Scalable Web Applications",
    heroSubtitle: "HIRE NEXT.JS DEVELOPERS",
    heroDesctiption:
      "Create high-performing, SEO-optimized, and dynamic web applications using Next.js. Our Next.js developers specialize in building applications that deliver fast performance and seamless user experiences.",
    heroButton: "Hire Next.js Developers Now",
    heroButtonLink: "application-form",
    heroImage: "/images/hire/nextjs-banner-image.webp",
    advantageTitle: "Why Choose Our Next.js Developers",
    advantages: [
      {
        icon: "fa-forward",
        title: "Server-Side Rendering (SSR)",
        description: "Enhances performance and SEO with SSR and static site generation.",
      },
      {
        icon: "fa-network-wired",
        title: "Built-in Routing",
        description: "Simplifies routing with file-based system.",
      },
      {
        icon: "fa-rocket",
        title: "Fast Refresh & Hot Reloading",
        description: "Blazing fast development experience out of the box.",
      },
      {
        icon: "fa-globe",
        title: "Internationalization Support",
        description: "Built-in i18n routing and localization capabilities.",
      },
      {
        icon: "fa-cloud",
        title: "Vercel Optimization",
        description: "Deploy seamlessly on Vercel with performance tuning.",
      },
      {
        icon: "fa-code",
        title: "Fullstack Ready",
        description: "API routes and backend integration support.",
      },
    ],
    developerExpertises: [
      {
        icon: "fa-code",
        title: "Static Site Generation (SSG)",
        description: "Generate static pages at build time for faster page loads and SEO optimization.",
      },
      {
        icon: "fa-cogs",
        title: "Server-Side Rendering (SSR)",
        description:
          "Pre-render pages on the server before sending them to the client for better SEO and performance.",
      },
      {
        icon: "fa-users",
        title: "API Routes",
        description:
          "Create backend functionality like RESTful APIs directly within the Next.js application using API routes.",
      },
      {
        icon: "fa-database",
        title: "Incremental Static Regeneration",
        description:
          "Regenerate static content on-demand without rebuilding the entire site, ensuring fresh content.",
      },
      {
        icon: "fa-server",
        title: "Performance Optimization",
        description:
          "Leverage Next.js features like Image Optimization, Automatic Static Optimization, and Lazy Loading for top-tier performance.",
      },
      {
        icon: "fa-lock",
        title: "Testing & Debugging",
        description:
          "Ensure code reliability and app stability through automated tests using tools like Jest, Cypress, and React Testing Library.",
      },
    ],

    exploreMoreDevelopers: [],
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a smooth and customized hiring process for your Next.js project.",
      title: "Your Path to Hiring Next.js Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We conduct a detailed analysis of your project requirements and goals to match you with the right Next.js developers.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We match you with experienced developers skilled in Next.js and your project’s specific needs.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview the shortlisted candidates to ensure they meet your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We integrate the developers into your workflow, ensuring smooth collaboration and project management.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support throughout the project, ensuring everything runs smoothly and addressing any issues.",
        },
      ],
    },
    steps: {
      developing_title: "Next.js Development",
      developing_short_description: "Building fast, scalable, and SEO-friendly applications using Next.js.",
      developing_short_title: "Next.js-Based Interfaces",
      developing_image: "/images/hire/nextjs.avif",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Project Planning",
          description:
            "Identify project goals, user requirements, and define the structure of the Next.js application.",
        },
        {
          id: 2,
          developing_step_title: "Page Design & Component Structure",
          description:
            "Design the layout and reusable components using Next.js, ensuring scalability and maintainability.",
        },
        {
          id: 3,
          developing_step_title: "Routing & Navigation",
          description:
            "Set up file-based routing with Next.js, ensuring seamless navigation between pages and components.",
        },
        {
          id: 4,
          developing_step_title: "API Integration & Dynamic Data",
          description:
            "Integrate backend APIs with Next.js, and implement dynamic data fetching using SSR or SSG for performance optimization.",
        },
        {
          id: 5,
          developing_step_title: "Testing & Deployment",
          description:
            "Ensure application stability with testing frameworks like Jest, and deploy to platforms like Vercel or Netlify for live production.",
        },
      ],
      button_path: "/hire/application-form",
      button_name: "Start with Next.js Development",
    },
  },

  backend: {
    title: "Backend Development",
    hireLinkName: "backend-developer",
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
    heroTitle: "Hire Dedicated Backend Developers for Seamless User Experiences",
    heroSubtitle: "HIRE BACKEND DEVELOPERS",
    heroDesctiption:
      "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
    heroButton: "Hire Backend Developers Now",
    heroButtonLink: "application-form",
    heroImage: "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
    advantageTitle: "Why Choose Our Backend Developers",
    advantages: [
      {
        icon: "fa-server",
        title: "Robust Architecture",
        description: "Design scalable, fault-tolerant backend systems.",
      },
      {
        icon: "fa-database",
        title: "Efficient Data Handling",
        description: "Optimized for handling large volumes of structured data.",
      },
      {
        icon: "fa-cogs",
        title: "API-First Approach",
        description: "RESTful and GraphQL API development for flexible frontend integration.",
      },
      {
        icon: "fa-shield-alt",
        title: "Security Best Practices",
        description: "Built-in authentication, authorization, and data protection.",
      },
      {
        icon: "fa-clock",
        title: "High Availability",
        description: "Design with load balancing and failover strategies.",
      },
      {
        icon: "fa-users-cog",
        title: "Scalable Teams",
        description: "Microservices and modularity for large team collaboration.",
      },
    ],
    developerExpertises: [],
    exploreMoreDevelopers: [
      { id: 1, name: "Hire Node.js Developers", path: "nodejs-developer" },
      { id: 2, name: "Hire Laravel Developers", path: "laravel-developer" },
      { id: 3, name: "Hire Python Developers", path: "python-developer" },
    ],
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Backend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    steps: {
      developing_title: "Backend Development",
      developing_short_description:
        "Powering web applications with secure, scalable, and high-performance server-side solutions.",
      developing_short_title: "Server-Side Solutions",
      developing_image: "/images/hire/backend.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "System Architecture Planning",
          description:
            "Define the backend architecture, database schema, and APIs based on project requirements and scalability.",
        },
        {
          id: 2,
          developing_step_title: "Database Design",
          description:
            "Design and optimize relational (e.g., PostgreSQL, MySQL) or NoSQL (e.g., MongoDB) databases for efficient data handling.",
        },
        {
          id: 3,
          developing_step_title: "API Development",
          description:
            "Build robust RESTful or GraphQL APIs using frameworks like Express.js, NestJS, or Laravel.",
        },
        {
          id: 4,
          developing_step_title: "Authentication & Security",
          description:
            "Implement secure user authentication, authorization, and data protection using industry best practices.",
        },
        {
          id: 5,
          developing_step_title: "Testing & Deployment",
          description:
            "Perform backend testing, optimize performance, and deploy on platforms like AWS, Heroku, or DigitalOcean.",
        },
      ],
      button_path: "/hire/application-form",
      button_name: "Explore Backend Services",
    },
  },

  mobileDevelopment: {
    title: "Mobile Development",
    hireLinkName: "mobile-app-developer",
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
    heroTitle: "Hire Dedicated Mobile App Developers for Seamless User Experiences",
    heroSubtitle: "HIRE MOBILE APP DEVELOPERS",
    heroDesctiption:
      "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
    heroButton: "Hire Mobile App Developers Now",
    heroButtonLink: "application-form",
    heroImage: "https://i.ibb.co.com/b5kgnLyz/Frame-1000005999-1.png",
    advantageTitle: "Why Choose Our Mobile App Developers",
    advantages: [
      {
        icon: "fa-mobile-alt",
        title: "Cross-Platform Development",
        description: "Build apps for iOS and Android from a single codebase.",
      },
      {
        icon: "fa-bolt",
        title: "High Performance",
        description: "Optimized native-like performance with frameworks like Flutter and React Native.",
      },
      {
        icon: "fa-sync",
        title: "Real-Time Sync",
        description: "Instant updates with real-time data syncing and notifications.",
      },
      {
        icon: "fa-paint-brush",
        title: "Modern UI/UX",
        description: "Stunning mobile designs that follow native guidelines.",
      },
      {
        icon: "fa-cloud-upload-alt",
        title: "Seamless Deployment",
        description: "Fast deployment to App Store and Play Store.",
      },
      {
        icon: "fa-tools",
        title: "Maintenance & Upgrades",
        description: "Ongoing support for bug fixes, updates, and features.",
      },
    ],
    developerExpertises: [],
    exploreMoreDevelopers: [
      { id: 1, name: "Hire Flutter Developers", path: "flutter-developer" },
      { id: 2, name: "Hire Android Developers", path: "android-developer" },
      { id: 3, name: "Hire React Native Developers", path: "react-native-developer" },
    ],
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Mobile App Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    steps: {
      developing_title: "Mobile Development",
      developing_short_description:
        "Creating fast, user-friendly, and feature-rich mobile applications for both Android and iOS platforms.",
      developing_short_title: "Cross-Platform Apps",
      developing_image: "/images/hire/mobile-app.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Requirement Gathering",
          description:
            "Understand user needs, business goals, and define key features for the mobile application.",
        },
        {
          id: 2,
          developing_step_title: "UI/UX Design",
          description:
            "Design intuitive and engaging mobile interfaces that provide a seamless user experience across devices.",
        },
        {
          id: 3,
          developing_step_title: "App Development",
          description:
            "Develop high-performance apps using React Native, Flutter, or native technologies like Swift and Kotlin.",
        },
        {
          id: 4,
          developing_step_title: "Backend & API Integration",
          description:
            "Connect the app to secure, scalable backend services and APIs for real-time data and functionality.",
        },
        {
          id: 5,
          developing_step_title: "Testing & App Store Deployment",
          description:
            "Test thoroughly for performance and bugs, then publish the app to Google Play and Apple App Store.",
        },
      ],
      button_path: "/hire/application-form",
      button_name: "Build Your Mobile App",
    },
  },

  qualityAssurance: {
    title: "Quality Assurance",
    hireLinkName: "qa-engineer",
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
    heroTitle: "Hire Dedicated Quality Assurance for Seamless User Experiences",
    heroSubtitle: "HIRE QUALITY ASSURANCE",
    heroDesctiption:
      "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
    heroButton: "Hire Quality Engineers Now",
    heroButtonLink: "application-form",
    heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    advantageTitle: "Why Choose Our QA Engineers",
    advantages: [
      {
        icon: "fa-bug",
        title: "Comprehensive Testing",
        description: "Manual and automated tests to ensure defect-free delivery.",
      },
      {
        icon: "fa-vial",
        title: "Automated Testing Frameworks",
        description: "Leverages tools like Selenium, Cypress, and Jest.",
      },
      {
        icon: "fa-shield-alt",
        title: "Security & Compliance",
        description: "Ensures data safety and compliance with standards.",
      },
      {
        icon: "fa-hourglass-half",
        title: "Performance Testing",
        description: "Stress tests to identify bottlenecks and optimize speed.",
      },
      {
        icon: "fa-cogs",
        title: "CI/CD Integration",
        description: "Integrated into DevOps pipelines for smooth delivery.",
      },
      {
        icon: "fa-users",
        title: "Dedicated QA Teams",
        description: "Experienced testers for each development stack.",
      },
    ],
    developerExpertises: [],
    exploreMoreDevelopers: [
      { id: 1, name: "Hire React.js Developers", path: "reactjs-developer" },
      { id: 2, name: "Hire Angular Developers", path: "angular-developer" },
      { id: 3, name: "Hire Vue.js Developers", path: "vuejs-developer" },
      { id: 4, name: "Hire Next.js Developers", path: "nextjs-developer" },
    ],
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Quality Assurance",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    steps: {
      developing_title: "Quality Assurance",
      developing_short_description:
        "Ensuring reliable, bug-free, and high-performing software through structured testing processes.",
      developing_short_title: "Software Testing",
      developing_image: "/images/hire/quality-assurance.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Requirement Analysis",
          description:
            "Review project requirements and user stories to define clear testing goals and strategies.",
        },
        {
          id: 2,
          developing_step_title: "Test Planning",
          description:
            "Prepare detailed test plans, select appropriate tools, and define test cases for each functionality.",
        },
        {
          id: 3,
          developing_step_title: "Test Case Execution",
          description:
            "Manually or automatically execute test cases to identify bugs, glitches, or performance issues.",
        },
        {
          id: 4,
          developing_step_title: "Bug Reporting & Tracking",
          description:
            "Log issues in tracking systems like Jira or Trello, and collaborate with developers for quick resolution.",
        },
        {
          id: 5,
          developing_step_title: "Final Validation",
          description:
            "Perform regression, load, and user acceptance testing to ensure the product is ready for release.",
        },
      ],
      button_path: "/hire/application-form",
      button_name: "Explore QA Services",
    },
  },

  devOps: {
    title: "DevOps",
    hireLinkName: "devops-engineer",
    description: "Streamlining development processes and infrastructure with DevOps practices and tools.",
    technologies: [
      {
        name: "Docker",
        image: "/images/docker.webp",
      },
      {
        name: "Kubernetes",
        image: "/images/kubernetes.webp",
      },
      {
        name: "AWS",
        image: "/images/aws.webp",
      },
      {
        name: "Azure",
        image: "/images/Azure.webp",
      },
      {
        name: "Jenkins",
        image: "/images/jenkins.webp",
      },
    ],
    heroTitle: "Hire Dedicated DevOps Engineers for Seamless User Experiences",
    heroSubtitle: "HIRE DEVOPS ENGINEERS",
    heroDesctiption:
      "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
    heroButton: "Hire DevOps Engineers Now",
    heroButtonLink: "application-form",
    heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    advantageTitle: "Why Choose Our DevOps Engineers",
    advantages: [
      {
        icon: "fa-sync-alt",
        title: "Continuous Integration & Delivery",
        description: "Accelerated release cycles with automated pipelines.",
      },
      {
        icon: "fa-server",
        title: "Infrastructure as Code",
        description: "Efficient infrastructure management with tools like Terraform.",
      },
      {
        icon: "fa-shield-alt",
        title: "Security & Monitoring",
        description: "Track performance and threats using real-time monitoring.",
      },
      {
        icon: "fa-dharmachakra",
        title: "Toolchain Flexibility",
        description: "Support for Docker, Kubernetes, Jenkins, and more.",
      },
      {
        icon: "fa-cloud",
        title: "Cloud Expertise",
        description: "Deployment and scaling across AWS, Azure, GCP.",
      },
      {
        icon: "fa-users-cog",
        title: "Collaborative Culture",
        description: "Bridges dev and ops for faster feedback loops.",
      },
    ],
    developerExpertises: [],
    exploreMoreDevelopers: [
      { id: 1, name: "Hire React.js Developers", path: "reactjs-developer" },
      { id: 2, name: "Hire Angular Developers", path: "angular-developer" },
      { id: 3, name: "Hire Vue.js Developers", path: "vuejs-developer" },
      { id: 4, name: "Hire Next.js Developers", path: "nextjs-developer" },
    ],
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Dev-Ops Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    steps: {
      developing_title: "DevOps",
      developing_short_description:
        "Accelerating software delivery through automation, continuous integration, and scalable infrastructure.",
      developing_short_title: "CI/CD & Automation",
      developing_image: "/images/hire/dev-ops.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Infrastructure Planning",
          description:
            "Design scalable, cloud-based infrastructure using tools like AWS, Azure, or Google Cloud.",
        },
        {
          id: 2,
          developing_step_title: "CI/CD Pipeline Setup",
          description:
            "Automate code integration, testing, and deployment using Jenkins, GitHub Actions, GitLab CI, etc.",
        },
        {
          id: 3,
          developing_step_title: "Containerization",
          description:
            "Use Docker and Kubernetes to containerize applications for consistency across environments.",
        },
        {
          id: 4,
          developing_step_title: "Monitoring & Logging",
          description:
            "Implement tools like Prometheus, Grafana, and ELK Stack to monitor application health and performance.",
        },
        {
          id: 5,
          developing_step_title: "Security & Optimization",
          description:
            "Ensure infrastructure security with proper access control, vulnerability scanning, and performance tuning.",
        },
      ],
      button_path: "/hire/application-form",
      button_name: "Start DevOps Transformation",
    },
  },

  aiML: {
    title: "AI & ML",
    hireLinkName: "ai-ml-developer",
    description: "Leveraging artificial intelligence and machine learning to build smart applications.",
    technologies: [
      {
        name: "TensorFlow",
        image: "/images/tensorflow.webp",
      },
      {
        name: "PyTorch",
        image: "/images/pytorch.webp",
      },
      {
        name: "Keras",
        image: "/images/keras.webp",
      },
      {
        name: "Scikit-learn",
        image: "/images/scikit-learn.webp",
      },
      {
        name: "OpenCV",
        image: "/images/opencv.webp",
      },
    ],
    heroTitle: "Hire Dedicated AI & Machine Learning Developers for Seamless User Experiences",
    heroSubtitle: "HIRE AI & MACHINE LEARNING DEVELOPERS",
    heroDesctiption:
      "Build responsive, interactive, and high-performing web applications with our expert frontend developers. We specialize in seamless user experiences, cutting-edge frameworks, and optimized performance for fast, scalable, and visually stunning interfaces.",
    heroButton: "Hire AI & ML Now",
    heroButtonLink: "application-form",
    heroImage: "https://i.ibb.co.com/b5kgnLyz/Frame-1000005999-1.png",
    advantageTitle: "Why Choose Our AI & ML Experts",
    advantages: [
      {
        icon: "fa-brain",
        title: "Custom AI Solutions",
        description: "Tailored models to solve specific business challenges.",
      },
      {
        icon: "fa-robot",
        title: "Automation & Efficiency",
        description: "Streamline operations with smart automation tools.",
      },
      {
        icon: "fa-chart-line",
        title: "Predictive Analytics",
        description: "Forecast trends and behaviors with high accuracy.",
      },
      {
        icon: "fa-database",
        title: "Big Data Integration",
        description: "Handle and process large datasets seamlessly.",
      },
      {
        icon: "fa-tools",
        title: "End-to-End ML Pipelines",
        description: "From data preprocessing to model deployment.",
      },
      {
        icon: "fa-users",
        title: "AI Expertise",
        description: "Skilled data scientists and engineers at your service.",
      },
    ],
    developerExpertises: [],
    exploreMoreDevelopers: [
      { id: 1, name: "Hire React.js Developers", path: "reactjs-developer" },
      { id: 2, name: "Hire Angular Developers", path: "angular-developer" },
      { id: 3, name: "Hire Vue.js Developers", path: "vuejs-developer" },
      { id: 4, name: "Hire Next.js Developers", path: "nextjs-developer" },
    ],
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring AI & ML Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    steps: {
      developing_title: "AI & Machine Learning",
      developing_short_description:
        "Creating intelligent systems that learn, predict, and automate processes using data-driven models.",
      developing_short_title: "Smart AI Solutions",
      developing_image: "/images/hire/ai.webp",
      developing_step: [
        {
          id: 1,
          developing_step_title: "Problem Definition",
          description:
            "Identify business challenges and determine how AI/ML can bring efficient, scalable solutions.",
        },
        {
          id: 2,
          developing_step_title: "Data Collection & Preparation",
          description:
            "Gather, clean, and preprocess structured or unstructured data to train machine learning models effectively.",
        },
        {
          id: 3,
          developing_step_title: "Model Selection & Training",
          description:
            "Choose the right algorithms (e.g., regression, classification, neural networks) and train models using Python, TensorFlow, or PyTorch.",
        },
        {
          id: 4,
          developing_step_title: "Model Evaluation & Tuning",
          description:
            "Evaluate accuracy, precision, and recall of models, then optimize with hyperparameter tuning or cross-validation.",
        },
        {
          id: 5,
          developing_step_title: "Deployment & Monitoring",
          description:
            "Deploy models into production with REST APIs or cloud services, and monitor performance over time.",
        },
      ],
      button_path: "/hire/application-form",
      button_name: "Unlock AI Power",
    },
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
  sectionTitle: "Driving Innovation Across Industries, From Start-ups To Global Leaders",
  industries: [
    {
      name: "Fintech",
      icon: "fa-solid fa-gauge",
      features: [
        {
          icon: "fas fa-coins",
          title: "Disruptive FinTech Solutions",
          description: "Empowering financial innovation and growth.",
        },
        {
          icon: "fas fa-credit-card",
          title: "Digital Payments",
          description: "Revolutionizing the way payments are made.",
        },
        {
          icon: "fas fa-chart-line",
          title: "Investment Strategies",
          description: "Providing innovative investment solutions.",
        },
        {
          icon: "fas fa-shield-alt",
          title: "Fraud Prevention",
          description: "Safeguarding transactions from malicious activities.",
        },
        {
          icon: "fas fa-lock",
          title: "Data Security",
          description: "Ensuring the security of sensitive financial data.",
        },
      ],
      industryAdvantages: {
        title: "Why Choose Us for Fintech Solutions?",
        description:
          "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
        advantages: [
          {
            id: 1,
            icon: "fa-chart-column",
            bgColor: "#EFF6F3",
            name: "Industry Expertise",
            description: "Deep understanding of financial regulations and technologies.",
          },
          {
            id: 2,
            icon: "fa-lock",
            bgColor: "#e6f3e5",
            name: "Secure Solutions",
            description: "Robust security measures to protect sensitive financial data.",
          },
          {
            id: 3,
            icon: "fa-arrow-trend-up",
            bgColor: "#fdf2c8",
            name: "Scalable Platforms",
            description: "Solutions designed to grow with your business.",
          },
          {
            id: 4,
            icon: "fa-palette",
            bgColor: "#ebeff3",
            name: "Customer-Centric Design",
            description: "Focus on delivering seamless user experiences.",
          },
        ],
      },
      industrySolution: {
        name: "Next-Gen Fintech Solutions",
        description: "Smarter, faster, and secure financial technology",
        features: [
          { id: 1, icon: "far fa-clock", title: "Digital Payments Solutions", color: "#1ed0c6" },
          { id: 2, icon: "far fa-lightbulb", title: "Blockchain Technology Integration", color: "#ff5733" },
          { id: 3, icon: "far fa-hdd", title: "Mobile Banking Applications", color: "#ffd700" },
          { id: 4, icon: "fa-mobile-screen", title: "Peer-to-Peer Lending Platforms", color: "#4caf50" },
          { id: 5, icon: "far fa-file-code", title: "Wealth & Asset Management Tools", color: "#ff33bb" },
          { id: 6, icon: "far fa-lightbulb", title: "InsurTech Platforms", color: "#8a2be2" },
          {
            id: 7,
            icon: "far fa-share-square",
            title: "Fraud Detection & Prevention Systems",
            color: "#dffc03",
          },
          { id: 8, icon: "far fa-shield-alt", title: "Cryptocurrency Platforms", color: "#2196f3" },
          { id: 8, icon: "far fa-shield-alt", title: "Regulatory Compliance Solutions", color: "#fff" },
        ],
      },
      trendSteps: {
        title: "Emerging Trends in Fintech",
        image: "https://i.ibb.co.com/v4515cNm/57043-1.webp",
        steps: [
          {
            id: 1,
            name: "AI & Machine Learning",
            description:
              "Artificial Intelligence and Machine Learning are revolutionizing fintech by enabling personalized financial services, predictive analytics, and automated decision-making. From chatbots that enhance customer support to algorithms that detect fraudulent transactions, AI is transforming how financial institutions operate.",
          },
          {
            id: 2,
            name: "Blockchain & DeFi (Decentralized Finance)",
            description:
              "Blockchain technology is powering decentralized finance (DeFi), offering transparent, secure, and trustless financial systems. DeFi platforms enable peer-to-peer lending, decentralized exchanges, and smart contracts, reducing the need for traditional intermediaries like banks.",
          },
          {
            id: 3,
            name: "Open Banking",
            description:
              "Open Banking is reshaping the financial landscape by allowing third-party developers to build applications and services around financial institutions. Through APIs, customers can securely share their financial data, enabling seamless integration of services like budgeting tools, investment platforms, and payment solutions.",
          },
          {
            id: 4,
            name: "Contactless Payments",
            description:
              "Contactless payments are becoming the norm, offering a faster, safer, and more convenient way to transact. With the rise of NFC (Near Field Communication) technology and mobile wallets, consumers can make payments with just a tap, reducing the need for physical cards or cash.",
          },
          {
            id: 5,
            name: "Embedded Finance",
            description:
              "Embedded finance integrates financial services into non-financial platforms, such as e-commerce sites, ride-sharing apps, and retail stores. This trend allows businesses to offer seamless payment options, loans, and insurance directly within their platforms, enhancing customer experience and driving revenue.",
          },
        ],
      },
      industryLinkName: "fintech",
      title: "Innovating Financial Services with Secure, Scalable Technology",
      short_title: "FINTECH",
      short_description:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroTitle: "Innovating Financial Services with Secure, Scalable Technology",
      heroSubtitle: "FINTECH",
      heroDesctiption:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroImage: "https://i.ibb.co.com/C3vYLnjp/fintech-title-blog.webp",
      heroButton: "Book A Consulation",
      image: "https://i.ibb.co.com/C3vYLnjp/fintech-title-blog.webp",
    },
    {
      name: "Startup",
      icon: "fas fa-lightbulb",
      features: [
        {
          icon: "fas fa-users ",
          title: "Team Building",
          description: "Assembling innovative teams for success.",
        },
        {
          icon: "fas fa-bullhorn ",
          title: "Brand Awareness",
          description: "Creating strong brand recognition in the market.",
        },
        {
          icon: "fas fa-chart-pie ",
          title: "Market Strategy",
          description: "Identifying and targeting the right market.",
        },
        {
          icon: "fas fa-cogs ",
          title: "Product Development",
          description: "Turning ideas into functional products.",
        },
        {
          icon: "fas fa-hand-holding-usd ",
          title: "Investment & Funding",
          description: "Securing capital for business growth.",
        },
      ],
      industryAdvantages: {
        title: "Why Choose Us for Startup Solutions?",
        description:
          "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
        advantages: [
          {
            id: 1,
            icon: "fa-chart-column",
            bgColor: "#EFF6F3",
            name: "Industry Expertise",
            description: "Deep understanding of financial regulations and technologies.",
          },
          {
            id: 2,
            icon: "fa-lock",
            bgColor: "#e6f3e5",
            name: "Secure Solutions",
            description: "Robust security measures to protect sensitive financial data.",
          },
          {
            id: 3,
            icon: "fa-arrow-trend-up",
            bgColor: "#fdf2c8",
            name: "Scalable Platforms",
            description: "Solutions designed to grow with your business.",
          },
          {
            id: 4,
            icon: "fa-palette",
            bgColor: "#ebeff3",
            name: "Customer-Centric Design",
            description: "Focus on delivering seamless user experiences.",
          },
        ],
      },
      industrySolution: {
        name: "Next-Gen Startup Solutions",
        description: "Smarter, faster, and secure financial technology",
        features: [
          { id: 1, icon: "far fa-clock", title: "Digital Payments Solutions", color: "#1ed0c6" },
          { id: 2, icon: "far fa-lightbulb", title: "Blockchain Technology Integration", color: "#ff5733" },
          { id: 3, icon: "far fa-hdd", title: "Mobile Banking Applications", color: "#ffd700" },
          { id: 4, icon: "fa-mobile-screen", title: "Peer-to-Peer Lending Platforms", color: "#4caf50" },
          { id: 5, icon: "far fa-file-code", title: "Wealth & Asset Management Tools", color: "#ff33bb" },
          { id: 6, icon: "far fa-lightbulb", title: "InsurTech Platforms", color: "#8a2be2" },
          {
            id: 7,
            icon: "far fa-share-square",
            title: "Fraud Detection & Prevention Systems",
            color: "#dffc03",
          },
          { id: 8, icon: "far fa-shield-alt", title: "Cryptocurrency Platforms", color: "#2196f3" },
          { id: 8, icon: "far fa-shield-alt", title: "Regulatory Compliance Solutions", color: "#fff" },
        ],
      },
      trendSteps: {
        title: "Emerging Trends in Startup",
        image: "https://i.ibb.co.com/v4515cNm/57043-1.webp",
        steps: [
          {
            id: 1,
            name: "AI & Machine Learning",
            description:
              "Artificial Intelligence and Machine Learning are revolutionizing fintech by enabling personalized financial services, predictive analytics, and automated decision-making. From chatbots that enhance customer support to algorithms that detect fraudulent transactions, AI is transforming how financial institutions operate.",
          },
          {
            id: 2,
            name: "Blockchain & DeFi (Decentralized Finance)",
            description:
              "Blockchain technology is powering decentralized finance (DeFi), offering transparent, secure, and trustless financial systems. DeFi platforms enable peer-to-peer lending, decentralized exchanges, and smart contracts, reducing the need for traditional intermediaries like banks.",
          },
          {
            id: 3,
            name: "Open Banking",
            description:
              "Open Banking is reshaping the financial landscape by allowing third-party developers to build applications and services around financial institutions. Through APIs, customers can securely share their financial data, enabling seamless integration of services like budgeting tools, investment platforms, and payment solutions.",
          },
          {
            id: 4,
            name: "Contactless Payments",
            description:
              "Contactless payments are becoming the norm, offering a faster, safer, and more convenient way to transact. With the rise of NFC (Near Field Communication) technology and mobile wallets, consumers can make payments with just a tap, reducing the need for physical cards or cash.",
          },
          {
            id: 5,
            name: "Embedded Finance",
            description:
              "Embedded finance integrates financial services into non-financial platforms, such as e-commerce sites, ride-sharing apps, and retail stores. This trend allows businesses to offer seamless payment options, loans, and insurance directly within their platforms, enhancing customer experience and driving revenue.",
          },
        ],
      },
      industryLinkName: "startup",
      title: "Fueling Startup Growth with Agile, Scalable Digital Solutions",
      short_title: "STARTUP",
      short_description:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroTitle: "Fueling Startup Growth with Agile, Scalable Digital Solutions",
      heroSubtitle: "STARTUP",
      heroDesctiption:
        "We empower startups with agile, scalable solutions tailored for rapid growth. From MVP development to full-scale products, we use modern tech stacks to turn bold ideas into successful digital products—fast and efficiently.",
      heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
      heroButton: "Book A Consulation",
      image: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    },
    {
      name: "Logistics",
      icon: "fas fa-truck",
      features: [
        {
          icon: "fas fa-route ",
          title: "Supply Chain Management",
          description: "Optimizing the flow of goods and services.",
        },
        {
          icon: "fas fa-truck-moving ",
          title: "Fleet Management",
          description: "Managing transportation logistics efficiently.",
        },
        {
          icon: "fas fa-box-open ",
          title: "Inventory Tracking",
          description: "Monitoring inventory in real-time.",
        },
        {
          icon: "fas fa-shipping-fast ",
          title: "Fast Delivery Solutions",
          description: "Ensuring on-time delivery to customers.",
        },
        {
          icon: "fas fa-chart-line ",
          title: "Logistics Optimization",
          description: "Improving operational efficiencies in logistics.",
        },
      ],
      industryAdvantages: {
        title: "Why Choose Us for Logistics Solutions?",
        description:
          "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
        advantages: [
          {
            id: 1,
            icon: "fa-chart-column",
            bgColor: "#EFF6F3",
            name: "Industry Expertise",
            description: "Deep understanding of financial regulations and technologies.",
          },
          {
            id: 2,
            icon: "fa-lock",
            bgColor: "#e6f3e5",
            name: "Secure Solutions",
            description: "Robust security measures to protect sensitive financial data.",
          },
          {
            id: 3,
            icon: "fa-arrow-trend-up",
            bgColor: "#fdf2c8",
            name: "Scalable Platforms",
            description: "Solutions designed to grow with your business.",
          },
          {
            id: 4,
            icon: "fa-palette",
            bgColor: "#ebeff3",
            name: "Customer-Centric Design",
            description: "Focus on delivering seamless user experiences.",
          },
        ],
      },
      industrySolution: {
        name: "Next-Gen Logistics Solutions",
        description: "Smarter, faster, and secure financial technology",
        features: [
          { id: 1, icon: "far fa-clock", title: "Digital Payments Solutions", color: "#1ed0c6" },
          { id: 2, icon: "far fa-lightbulb", title: "Blockchain Technology Integration", color: "#ff5733" },
          { id: 3, icon: "far fa-hdd", title: "Mobile Banking Applications", color: "#ffd700" },
          { id: 4, icon: "fa-mobile-screen", title: "Peer-to-Peer Lending Platforms", color: "#4caf50" },
          { id: 5, icon: "far fa-file-code", title: "Wealth & Asset Management Tools", color: "#ff33bb" },
          { id: 6, icon: "far fa-lightbulb", title: "InsurTech Platforms", color: "#8a2be2" },
          {
            id: 7,
            icon: "far fa-share-square",
            title: "Fraud Detection & Prevention Systems",
            color: "#dffc03",
          },
          { id: 8, icon: "far fa-shield-alt", title: "Cryptocurrency Platforms", color: "#2196f3" },
          { id: 8, icon: "far fa-shield-alt", title: "Regulatory Compliance Solutions", color: "#fff" },
        ],
      },
      trendSteps: {
        title: "Emerging Trends in Logistics",
        image: "https://i.ibb.co.com/v4515cNm/57043-1.webp",
        steps: [
          {
            id: 1,
            name: "AI & Machine Learning",
            description:
              "Artificial Intelligence and Machine Learning are revolutionizing fintech by enabling personalized financial services, predictive analytics, and automated decision-making. From chatbots that enhance customer support to algorithms that detect fraudulent transactions, AI is transforming how financial institutions operate.",
          },
          {
            id: 2,
            name: "Blockchain & DeFi (Decentralized Finance)",
            description:
              "Blockchain technology is powering decentralized finance (DeFi), offering transparent, secure, and trustless financial systems. DeFi platforms enable peer-to-peer lending, decentralized exchanges, and smart contracts, reducing the need for traditional intermediaries like banks.",
          },
          {
            id: 3,
            name: "Open Banking",
            description:
              "Open Banking is reshaping the financial landscape by allowing third-party developers to build applications and services around financial institutions. Through APIs, customers can securely share their financial data, enabling seamless integration of services like budgeting tools, investment platforms, and payment solutions.",
          },
          {
            id: 4,
            name: "Contactless Payments",
            description:
              "Contactless payments are becoming the norm, offering a faster, safer, and more convenient way to transact. With the rise of NFC (Near Field Communication) technology and mobile wallets, consumers can make payments with just a tap, reducing the need for physical cards or cash.",
          },
          {
            id: 5,
            name: "Embedded Finance",
            description:
              "Embedded finance integrates financial services into non-financial platforms, such as e-commerce sites, ride-sharing apps, and retail stores. This trend allows businesses to offer seamless payment options, loans, and insurance directly within their platforms, enhancing customer experience and driving revenue.",
          },
        ],
      },
      industryLinkName: "logistics",
      title: "Revolutionizing Logistics with Smart, Real-Time Technology",
      short_title: "LOGISTICS",
      short_description:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroTitle: "Revolutionizing Logistics with Smart, Real-Time Technology",
      heroSubtitle: "LOGISTICS",
      heroDesctiption:
        "We deliver logistics solutions that optimize routes, automate workflows, and improve real-time tracking. Powered by AI, IoT, and cloud systems, our tech ensures faster, smarter, and more reliable supply chain operations.",
      heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
      heroButton: "Book A Consulation",
      image: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    },
    {
      name: "Retail & Manufacturing",
      icon: "fas fa-store",
      features: [
        {
          icon: "fas fa-cogs ",
          title: "Manufacturing Optimization",
          description: "Streamlining production processes.",
        },
        {
          icon: "fas fa-tags ",
          title: "Retail Management",
          description: "Managing retail operations effectively.",
        },
        {
          icon: "fas fa-truck-loading ",
          title: "Supply Chain Solutions",
          description: "Ensuring smooth product flow.",
        },
        {
          icon: "fas fa-box ",
          title: "Product Packaging",
          description: "Enhancing packaging solutions for retail.",
        },
        {
          icon: "fas fa-percent ",
          title: "Sales Growth",
          description: "Driving revenue through retail strategies.",
        },
      ],
      industryAdvantages: {
        title: "Why Choose Us for Retail & Manufacturing?",
        description:
          "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
        advantages: [
          {
            id: 1,
            icon: "fa-chart-column",
            bgColor: "#EFF6F3",
            name: "Industry Expertise",
            description: "Deep understanding of financial regulations and technologies.",
          },
          {
            id: 2,
            icon: "fa-lock",
            bgColor: "#e6f3e5",
            name: "Secure Solutions",
            description: "Robust security measures to protect sensitive financial data.",
          },
          {
            id: 3,
            icon: "fa-arrow-trend-up",
            bgColor: "#fdf2c8",
            name: "Scalable Platforms",
            description: "Solutions designed to grow with your business.",
          },
          {
            id: 4,
            icon: "fa-palette",
            bgColor: "#ebeff3",
            name: "Customer-Centric Design",
            description: "Focus on delivering seamless user experiences.",
          },
        ],
      },
      industrySolution: {
        name: "Next-Gen Retail & Manufacturing",
        description: "Smarter, faster, and secure financial technology",
        features: [
          { id: 1, icon: "far fa-clock", title: "Digital Payments Solutions", color: "#1ed0c6" },
          { id: 2, icon: "far fa-lightbulb", title: "Blockchain Technology Integration", color: "#ff5733" },
          { id: 3, icon: "far fa-hdd", title: "Mobile Banking Applications", color: "#ffd700" },
          { id: 4, icon: "fa-mobile-screen", title: "Peer-to-Peer Lending Platforms", color: "#4caf50" },
          { id: 5, icon: "far fa-file-code", title: "Wealth & Asset Management Tools", color: "#ff33bb" },
          { id: 6, icon: "far fa-lightbulb", title: "InsurTech Platforms", color: "#8a2be2" },
          {
            id: 7,
            icon: "far fa-share-square",
            title: "Fraud Detection & Prevention Systems",
            color: "#dffc03",
          },
          { id: 8, icon: "far fa-shield-alt", title: "Cryptocurrency Platforms", color: "#2196f3" },
          { id: 8, icon: "far fa-shield-alt", title: "Regulatory Compliance Solutions", color: "#fff" },
        ],
      },
      trendSteps: {
        title: "Emerging Trends in Retail & Manufacturing",
        image: "https://i.ibb.co.com/v4515cNm/57043-1.webp",
        steps: [
          {
            id: 1,
            name: "AI & Machine Learning",
            description:
              "Artificial Intelligence and Machine Learning are revolutionizing fintech by enabling personalized financial services, predictive analytics, and automated decision-making. From chatbots that enhance customer support to algorithms that detect fraudulent transactions, AI is transforming how financial institutions operate.",
          },
          {
            id: 2,
            name: "Blockchain & DeFi (Decentralized Finance)",
            description:
              "Blockchain technology is powering decentralized finance (DeFi), offering transparent, secure, and trustless financial systems. DeFi platforms enable peer-to-peer lending, decentralized exchanges, and smart contracts, reducing the need for traditional intermediaries like banks.",
          },
          {
            id: 3,
            name: "Open Banking",
            description:
              "Open Banking is reshaping the financial landscape by allowing third-party developers to build applications and services around financial institutions. Through APIs, customers can securely share their financial data, enabling seamless integration of services like budgeting tools, investment platforms, and payment solutions.",
          },
          {
            id: 4,
            name: "Contactless Payments",
            description:
              "Contactless payments are becoming the norm, offering a faster, safer, and more convenient way to transact. With the rise of NFC (Near Field Communication) technology and mobile wallets, consumers can make payments with just a tap, reducing the need for physical cards or cash.",
          },
          {
            id: 5,
            name: "Embedded Finance",
            description:
              "Embedded finance integrates financial services into non-financial platforms, such as e-commerce sites, ride-sharing apps, and retail stores. This trend allows businesses to offer seamless payment options, loans, and insurance directly within their platforms, enhancing customer experience and driving revenue.",
          },
        ],
      },
      industryLinkName: "retail-and-manufacturing",
      title: "Transforming Retail & Manufacturing with Intelligent Automation",
      short_title: "RETAIL & MANUFACTURING",
      short_description:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroTitle: "Transforming Retail & Manufacturing with Intelligent Automation",
      heroSubtitle: "RETAIL & MANUFACTURING",
      heroDesctiption:
        "We build smart retail and manufacturing solutions that boost efficiency, streamline operations, and enhance customer experiences. Using IoT, AI, and cloud technologies, we help businesses stay agile and competitive in a fast-evolving market.",
      heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
      heroButton: "Book A Consulation",
      image: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    },
    {
      name: "Enterprise",
      icon: "fas fa-building",
      features: [
        {
          icon: "fas fa-network-wired ",
          title: "Network Infrastructure",
          description: "Building robust IT networks for enterprise.",
        },
        {
          icon: "fas fa-users-cog ",
          title: "Enterprise Resource Planning",
          description: "Integrating business functions with ERP systems.",
        },
        {
          icon: "fas fa-chart-bar ",
          title: "Business Analytics",
          description: "Leveraging data to drive business decisions.",
        },
        {
          icon: "fas fa-lock ",
          title: "Security Solutions",
          description: "Providing enterprise-level security services.",
        },
        {
          icon: "fas fa-cloud ",
          title: "Cloud Computing",
          description: "Empowering businesses with scalable cloud solutions.",
        },
      ],
      industryAdvantages: {
        title: "Why Choose Us for Enterprise Solutions?",
        description:
          "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
        advantages: [
          {
            id: 1,
            icon: "fa-chart-column",
            bgColor: "#EFF6F3",
            name: "Industry Expertise",
            description: "Deep understanding of financial regulations and technologies.",
          },
          {
            id: 2,
            icon: "fa-lock",
            bgColor: "#e6f3e5",
            name: "Secure Solutions",
            description: "Robust security measures to protect sensitive financial data.",
          },
          {
            id: 3,
            icon: "fa-arrow-trend-up",
            bgColor: "#fdf2c8",
            name: "Scalable Platforms",
            description: "Solutions designed to grow with your business.",
          },
          {
            id: 4,
            icon: "fa-palette",
            bgColor: "#ebeff3",
            name: "Customer-Centric Design",
            description: "Focus on delivering seamless user experiences.",
          },
        ],
      },
      industrySolution: {
        name: "Next-Gen Enterprise Solutions",
        description: "Smarter, faster, and secure financial technology",
        features: [
          { id: 1, icon: "far fa-clock", title: "Digital Payments Solutions", color: "#1ed0c6" },
          { id: 2, icon: "far fa-lightbulb", title: "Blockchain Technology Integration", color: "#ff5733" },
          { id: 3, icon: "far fa-hdd", title: "Mobile Banking Applications", color: "#ffd700" },
          { id: 4, icon: "fa-mobile-screen", title: "Peer-to-Peer Lending Platforms", color: "#4caf50" },
          { id: 5, icon: "far fa-file-code", title: "Wealth & Asset Management Tools", color: "#ff33bb" },
          { id: 6, icon: "far fa-lightbulb", title: "InsurTech Platforms", color: "#8a2be2" },
          {
            id: 7,
            icon: "far fa-share-square",
            title: "Fraud Detection & Prevention Systems",
            color: "#dffc03",
          },
          { id: 8, icon: "far fa-shield-alt", title: "Cryptocurrency Platforms", color: "#2196f3" },
          { id: 8, icon: "far fa-shield-alt", title: "Regulatory Compliance Solutions", color: "#fff" },
        ],
      },
      trendSteps: {
        title: "Emerging Trends in Enterprise",
        image: "https://i.ibb.co.com/v4515cNm/57043-1.webp",
        steps: [
          {
            id: 1,
            name: "AI & Machine Learning",
            description:
              "Artificial Intelligence and Machine Learning are revolutionizing fintech by enabling personalized financial services, predictive analytics, and automated decision-making. From chatbots that enhance customer support to algorithms that detect fraudulent transactions, AI is transforming how financial institutions operate.",
          },
          {
            id: 2,
            name: "Blockchain & DeFi (Decentralized Finance)",
            description:
              "Blockchain technology is powering decentralized finance (DeFi), offering transparent, secure, and trustless financial systems. DeFi platforms enable peer-to-peer lending, decentralized exchanges, and smart contracts, reducing the need for traditional intermediaries like banks.",
          },
          {
            id: 3,
            name: "Open Banking",
            description:
              "Open Banking is reshaping the financial landscape by allowing third-party developers to build applications and services around financial institutions. Through APIs, customers can securely share their financial data, enabling seamless integration of services like budgeting tools, investment platforms, and payment solutions.",
          },
          {
            id: 4,
            name: "Contactless Payments",
            description:
              "Contactless payments are becoming the norm, offering a faster, safer, and more convenient way to transact. With the rise of NFC (Near Field Communication) technology and mobile wallets, consumers can make payments with just a tap, reducing the need for physical cards or cash.",
          },
          {
            id: 5,
            name: "Embedded Finance",
            description:
              "Embedded finance integrates financial services into non-financial platforms, such as e-commerce sites, ride-sharing apps, and retail stores. This trend allows businesses to offer seamless payment options, loans, and insurance directly within their platforms, enhancing customer experience and driving revenue.",
          },
        ],
      },
      industryLinkName: "enterprise",
      title: "Powering Enterprises with Scalable, Future-Ready Tech Solutions",
      short_title: "ENTERPRISE",
      short_description:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroTitle: "Powering Enterprises with Scalable, Future-Ready Tech Solutions",
      heroSubtitle: "ENTERPRISE",
      heroDesctiption:
        "Our team delivers enterprise solutions designed to meet the complex demands of modern businesses. We prioritize scalability, data integrity, and seamless integration.",
      heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
      heroButton: "Book A Consulation",
      image: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    },
    {
      name: "Education",
      icon: "fas fa-graduation-cap",
      features: [
        {
          icon: "fas fa-laptop ",
          title: "E-learning Solutions",
          description: "Providing online learning platforms.",
        },
        {
          icon: "fas fa-chalkboard-teacher ",
          title: "Teacher Collaboration",
          description: "Improving collaboration among educators.",
        },
        {
          icon: "fas fa-book-open ",
          title: "Curriculum Development",
          description: "Designing innovative learning curricula.",
        },
        {
          icon: "fas fa-certificate ",
          title: "Certification Programs",
          description: "Offering credentialing for online learning.",
        },
        {
          icon: "fas fa-users ",
          title: "Student Engagement",
          description: "Enhancing student participation and interaction.",
        },
      ],
      industryAdvantages: {
        title: "Why Choose Us for Education Solutions?",
        description:
          "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
        advantages: [
          {
            id: 1,
            icon: "fa-chart-column",
            bgColor: "#EFF6F3",
            name: "Industry Expertise",
            description: "Deep understanding of financial regulations and technologies.",
          },
          {
            id: 2,
            icon: "fa-lock",
            bgColor: "#e6f3e5",
            name: "Secure Solutions",
            description: "Robust security measures to protect sensitive financial data.",
          },
          {
            id: 3,
            icon: "fa-arrow-trend-up",
            bgColor: "#fdf2c8",
            name: "Scalable Platforms",
            description: "Solutions designed to grow with your business.",
          },
          {
            id: 4,
            icon: "fa-palette",
            bgColor: "#ebeff3",
            name: "Customer-Centric Design",
            description: "Focus on delivering seamless user experiences.",
          },
        ],
      },
      industrySolution: {
        name: "Next-Gen Education Solutions",
        description: "Smarter, faster, and secure financial technology",
        features: [
          { id: 1, icon: "far fa-clock", title: "Digital Payments Solutions", color: "#1ed0c6" },
          { id: 2, icon: "far fa-lightbulb", title: "Blockchain Technology Integration", color: "#ff5733" },
          { id: 3, icon: "far fa-hdd", title: "Mobile Banking Applications", color: "#ffd700" },
          { id: 4, icon: "fa-mobile-screen", title: "Peer-to-Peer Lending Platforms", color: "#4caf50" },
          { id: 5, icon: "far fa-file-code", title: "Wealth & Asset Management Tools", color: "#ff33bb" },
          { id: 6, icon: "far fa-lightbulb", title: "InsurTech Platforms", color: "#8a2be2" },
          {
            id: 7,
            icon: "far fa-share-square",
            title: "Fraud Detection & Prevention Systems",
            color: "#dffc03",
          },
          { id: 8, icon: "far fa-shield-alt", title: "Cryptocurrency Platforms", color: "#2196f3" },
          { id: 8, icon: "far fa-shield-alt", title: "Regulatory Compliance Solutions", color: "#fff" },
        ],
      },
      trendSteps: {
        title: "Emerging Trends in Education",
        image: "https://i.ibb.co.com/v4515cNm/57043-1.webp",
        steps: [
          {
            id: 1,
            name: "AI & Machine Learning",
            description:
              "Artificial Intelligence and Machine Learning are revolutionizing fintech by enabling personalized financial services, predictive analytics, and automated decision-making. From chatbots that enhance customer support to algorithms that detect fraudulent transactions, AI is transforming how financial institutions operate.",
          },
          {
            id: 2,
            name: "Blockchain & DeFi (Decentralized Finance)",
            description:
              "Blockchain technology is powering decentralized finance (DeFi), offering transparent, secure, and trustless financial systems. DeFi platforms enable peer-to-peer lending, decentralized exchanges, and smart contracts, reducing the need for traditional intermediaries like banks.",
          },
          {
            id: 3,
            name: "Open Banking",
            description:
              "Open Banking is reshaping the financial landscape by allowing third-party developers to build applications and services around financial institutions. Through APIs, customers can securely share their financial data, enabling seamless integration of services like budgeting tools, investment platforms, and payment solutions.",
          },
          {
            id: 4,
            name: "Contactless Payments",
            description:
              "Contactless payments are becoming the norm, offering a faster, safer, and more convenient way to transact. With the rise of NFC (Near Field Communication) technology and mobile wallets, consumers can make payments with just a tap, reducing the need for physical cards or cash.",
          },
          {
            id: 5,
            name: "Embedded Finance",
            description:
              "Embedded finance integrates financial services into non-financial platforms, such as e-commerce sites, ride-sharing apps, and retail stores. This trend allows businesses to offer seamless payment options, loans, and insurance directly within their platforms, enhancing customer experience and driving revenue.",
          },
        ],
      },
      industryLinkName: "education",
      title: "Advancing Education Through Engaging and Scalable Digital Platforms",
      short_title: "EDUCATION",
      short_description:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroTitle: "Advancing Education Through Engaging and Scalable Digital Platforms",
      heroSubtitle: "EDUCATION",
      heroDesctiption:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
      heroButton: "Book A Consulation",
      image: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    },
    {
      name: "Real Estate",
      icon: "fas fa-home",
      features: [
        {
          icon: "fas fa-building ",
          title: "Property Development",
          description: "Developing and managing residential and commercial properties.",
        },
        {
          icon: "fas fa-search ",
          title: "Market Research",
          description: "Analyzing market trends and property values.",
        },
        {
          icon: "fas fa-handshake ",
          title: "Investment Opportunities",
          description: "Connecting investors with profitable properties.",
        },
        {
          icon: "fas fa-cogs ",
          title: "Property Management",
          description: "Managing real estate properties efficiently.",
        },
        {
          icon: "fas fa-chart-line ",
          title: "Real Estate Analytics",
          description: "Providing data-driven insights for real estate decisions.",
        },
      ],
      industryAdvantages: {
        title: "Why Choose Us for Real Estate?",
        description:
          "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
        advantages: [
          {
            id: 1,
            icon: "fa-chart-column",
            bgColor: "#EFF6F3",
            name: "Industry Expertise",
            description: "Deep understanding of financial regulations and technologies.",
          },
          {
            id: 2,
            icon: "fa-lock",
            bgColor: "#e6f3e5",
            name: "Secure Solutions",
            description: "Robust security measures to protect sensitive financial data.",
          },
          {
            id: 3,
            icon: "fa-arrow-trend-up",
            bgColor: "#fdf2c8",
            name: "Scalable Platforms",
            description: "Solutions designed to grow with your business.",
          },
          {
            id: 4,
            icon: "fa-palette",
            bgColor: "#ebeff3",
            name: "Customer-Centric Design",
            description: "Focus on delivering seamless user experiences.",
          },
        ],
      },
      industrySolution: {
        name: "Next-Gen Real Estate",
        description: "Smarter, faster, and secure financial technology",
        features: [
          { id: 1, icon: "far fa-clock", title: "Digital Payments Solutions", color: "#1ed0c6" },
          { id: 2, icon: "far fa-lightbulb", title: "Blockchain Technology Integration", color: "#ff5733" },
          { id: 3, icon: "far fa-hdd", title: "Mobile Banking Applications", color: "#ffd700" },
          { id: 4, icon: "fa-mobile-screen", title: "Peer-to-Peer Lending Platforms", color: "#4caf50" },
          { id: 5, icon: "far fa-file-code", title: "Wealth & Asset Management Tools", color: "#ff33bb" },
          { id: 6, icon: "far fa-lightbulb", title: "InsurTech Platforms", color: "#8a2be2" },
          {
            id: 7,
            icon: "far fa-share-square",
            title: "Fraud Detection & Prevention Systems",
            color: "#dffc03",
          },
          { id: 8, icon: "far fa-shield-alt", title: "Cryptocurrency Platforms", color: "#2196f3" },
          { id: 8, icon: "far fa-shield-alt", title: "Regulatory Compliance Solutions", color: "#fff" },
        ],
      },
      trendSteps: {
        title: "Emerging Trends in Real Estate",
        image: "https://i.ibb.co.com/v4515cNm/57043-1.webp",
        steps: [
          {
            id: 1,
            name: "AI & Machine Learning",
            description:
              "Artificial Intelligence and Machine Learning are revolutionizing fintech by enabling personalized financial services, predictive analytics, and automated decision-making. From chatbots that enhance customer support to algorithms that detect fraudulent transactions, AI is transforming how financial institutions operate.",
          },
          {
            id: 2,
            name: "Blockchain & DeFi (Decentralized Finance)",
            description:
              "Blockchain technology is powering decentralized finance (DeFi), offering transparent, secure, and trustless financial systems. DeFi platforms enable peer-to-peer lending, decentralized exchanges, and smart contracts, reducing the need for traditional intermediaries like banks.",
          },
          {
            id: 3,
            name: "Open Banking",
            description:
              "Open Banking is reshaping the financial landscape by allowing third-party developers to build applications and services around financial institutions. Through APIs, customers can securely share their financial data, enabling seamless integration of services like budgeting tools, investment platforms, and payment solutions.",
          },
          {
            id: 4,
            name: "Contactless Payments",
            description:
              "Contactless payments are becoming the norm, offering a faster, safer, and more convenient way to transact. With the rise of NFC (Near Field Communication) technology and mobile wallets, consumers can make payments with just a tap, reducing the need for physical cards or cash.",
          },
          {
            id: 5,
            name: "Embedded Finance",
            description:
              "Embedded finance integrates financial services into non-financial platforms, such as e-commerce sites, ride-sharing apps, and retail stores. This trend allows businesses to offer seamless payment options, loans, and insurance directly within their platforms, enhancing customer experience and driving revenue.",
          },
        ],
      },
      industryLinkName: "real-estate",
      title: "Modernizing Real Estate with Smart, Secure Tech Solutions",
      short_title: "REAL ESTATE",
      short_description:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroTitle: "Modernizing Real Estate with Smart, Secure Tech Solutions",
      heroSubtitle: "REAL ESTATE",
      heroDesctiption:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
      heroButton: "Book A Consulation",
      image: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    },
    {
      name: "Medical & Healthcare",
      icon: "fas fa-heartbeat",
      features: [
        {
          icon: "fas fa-stethoscope ",
          title: "Telemedicine Solutions",
          description: "Providing remote healthcare services.",
        },
        {
          icon: "fas fa-pills ",
          title: "Pharmaceutical Services",
          description: "Offering medical and pharmaceutical support.",
        },
        {
          icon: "fas fa-ambulance ",
          title: "Emergency Care",
          description: "Ensuring fast and efficient emergency services.",
        },
        {
          icon: "fas fa-heart ",
          title: "Patient Care",
          description: "Improving patient health and well-being.",
        },
        {
          icon: "fas fa-chart-simple ",
          title: "Health Data Analytics",
          description: "Using data to enhance healthcare delivery.",
        },
      ],
      industryAdvantages: {
        title: "Why Choose Us for Mediacal & Healthcare?",
        description:
          "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
        advantages: [
          {
            id: 1,
            icon: "fa-chart-column",
            bgColor: "#EFF6F3",
            name: "Industry Expertise",
            description: "Deep understanding of financial regulations and technologies.",
          },
          {
            id: 2,
            icon: "fa-lock",
            bgColor: "#e6f3e5",
            name: "Secure Solutions",
            description: "Robust security measures to protect sensitive financial data.",
          },
          {
            id: 3,
            icon: "fa-arrow-trend-up",
            bgColor: "#fdf2c8",
            name: "Scalable Platforms",
            description: "Solutions designed to grow with your business.",
          },
          {
            id: 4,
            icon: "fa-palette",
            bgColor: "#ebeff3",
            name: "Customer-Centric Design",
            description: "Focus on delivering seamless user experiences.",
          },
        ],
      },
      industrySolution: {
        name: "Next-Gen Medical & Healthcare",
        description: "Smarter, faster, and secure financial technology",
        features: [
          { id: 1, icon: "far fa-clock", title: "Digital Payments Solutions", color: "#1ed0c6" },
          { id: 2, icon: "far fa-lightbulb", title: "Blockchain Technology Integration", color: "#ff5733" },
          { id: 3, icon: "far fa-hdd", title: "Mobile Banking Applications", color: "#ffd700" },
          { id: 4, icon: "fa-mobile-screen", title: "Peer-to-Peer Lending Platforms", color: "#4caf50" },
          { id: 5, icon: "far fa-file-code", title: "Wealth & Asset Management Tools", color: "#ff33bb" },
          { id: 6, icon: "far fa-lightbulb", title: "InsurTech Platforms", color: "#8a2be2" },
          {
            id: 7,
            icon: "far fa-share-square",
            title: "Fraud Detection & Prevention Systems",
            color: "#dffc03",
          },
          { id: 8, icon: "far fa-shield-alt", title: "Cryptocurrency Platforms", color: "#2196f3" },
          { id: 8, icon: "far fa-shield-alt", title: "Regulatory Compliance Solutions", color: "#fff" },
        ],
      },
      trendSteps: {
        title: "Emerging Trends in Medical & Healthcare",
        image: "https://i.ibb.co.com/v4515cNm/57043-1.webp",
        steps: [
          {
            id: 1,
            name: "AI & Machine Learning",
            description:
              "Artificial Intelligence and Machine Learning are revolutionizing fintech by enabling personalized financial services, predictive analytics, and automated decision-making. From chatbots that enhance customer support to algorithms that detect fraudulent transactions, AI is transforming how financial institutions operate.",
          },
          {
            id: 2,
            name: "Blockchain & DeFi (Decentralized Finance)",
            description:
              "Blockchain technology is powering decentralized finance (DeFi), offering transparent, secure, and trustless financial systems. DeFi platforms enable peer-to-peer lending, decentralized exchanges, and smart contracts, reducing the need for traditional intermediaries like banks.",
          },
          {
            id: 3,
            name: "Open Banking",
            description:
              "Open Banking is reshaping the financial landscape by allowing third-party developers to build applications and services around financial institutions. Through APIs, customers can securely share their financial data, enabling seamless integration of services like budgeting tools, investment platforms, and payment solutions.",
          },
          {
            id: 4,
            name: "Contactless Payments",
            description:
              "Contactless payments are becoming the norm, offering a faster, safer, and more convenient way to transact. With the rise of NFC (Near Field Communication) technology and mobile wallets, consumers can make payments with just a tap, reducing the need for physical cards or cash.",
          },
          {
            id: 5,
            name: "Embedded Finance",
            description:
              "Embedded finance integrates financial services into non-financial platforms, such as e-commerce sites, ride-sharing apps, and retail stores. This trend allows businesses to offer seamless payment options, loans, and insurance directly within their platforms, enhancing customer experience and driving revenue.",
          },
        ],
      },
      industryLinkName: "medical-and-healthcare",
      title: "Enhancing Healthcare with Secure, Compliant Digital Innovation",
      short_title: "MEDIAL & HEALTHCARE",
      short_description:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroTitle: "Enhancing Healthcare with Secure, Compliant Digital Innovation",
      heroSubtitle: "MEDIAL & HEALTHCARE",
      heroDesctiption:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
      heroButton: "Book A Consulation",
      image: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    },
    {
      name: "Technology Company",
      icon: "fas fa-laptop-code",
      features: [
        {
          icon: "fas fa-code ",
          title: "Software Development",
          description: "Building custom software solutions for businesses.",
        },
        {
          icon: "fas fa-cloud ",
          title: "Cloud Solutions",
          description: "Enabling businesses with scalable cloud computing.",
        },
        {
          icon: "fas fa-digital-tachograph ",
          title: "Tech Consulting",
          description: "Providing expert guidance for technology adoption.",
        },
        {
          icon: "fas fa-mobile-alt ",
          title: "Mobile Development",
          description: "Creating mobile applications for various platforms.",
        },
        {
          icon: "fas fa-network-wired ",
          title: "IT Infrastructure",
          description: "Designing and implementing tech infrastructures.",
        },
      ],
      industryAdvantages: {
        title: "Why Choose Us for Technology Company?",
        description:
          "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
        advantages: [
          {
            id: 1,
            icon: "fa-chart-column",
            bgColor: "#EFF6F3",
            name: "Industry Expertise",
            description: "Deep understanding of financial regulations and technologies.",
          },
          {
            id: 2,
            icon: "fa-lock",
            bgColor: "#e6f3e5",
            name: "Secure Solutions",
            description: "Robust security measures to protect sensitive financial data.",
          },
          {
            id: 3,
            icon: "fa-arrow-trend-up",
            bgColor: "#fdf2c8",
            name: "Scalable Platforms",
            description: "Solutions designed to grow with your business.",
          },
          {
            id: 4,
            icon: "fa-palette",
            bgColor: "#ebeff3",
            name: "Customer-Centric Design",
            description: "Focus on delivering seamless user experiences.",
          },
        ],
      },
      industrySolution: {
        name: "Next-Gen Technology Company",
        description: "Smarter, faster, and secure financial technology",
        features: [
          { id: 1, icon: "far fa-clock", title: "Digital Payments Solutions", color: "#1ed0c6" },
          { id: 2, icon: "far fa-lightbulb", title: "Blockchain Technology Integration", color: "#ff5733" },
          { id: 3, icon: "far fa-hdd", title: "Mobile Banking Applications", color: "#ffd700" },
          { id: 4, icon: "fa-mobile-screen", title: "Peer-to-Peer Lending Platforms", color: "#4caf50" },
          { id: 5, icon: "far fa-file-code", title: "Wealth & Asset Management Tools", color: "#ff33bb" },
          { id: 6, icon: "far fa-lightbulb", title: "InsurTech Platforms", color: "#8a2be2" },
          {
            id: 7,
            icon: "far fa-share-square",
            title: "Fraud Detection & Prevention Systems",
            color: "#dffc03",
          },
          { id: 8, icon: "far fa-shield-alt", title: "Cryptocurrency Platforms", color: "#2196f3" },
          { id: 8, icon: "far fa-shield-alt", title: "Regulatory Compliance Solutions", color: "#fff" },
        ],
      },
      trendSteps: {
        title: "Emerging Trends in Technology Company",
        image: "https://i.ibb.co.com/v4515cNm/57043-1.webp",
        steps: [
          {
            id: 1,
            name: "AI & Machine Learning",
            description:
              "Artificial Intelligence and Machine Learning are revolutionizing fintech by enabling personalized financial services, predictive analytics, and automated decision-making. From chatbots that enhance customer support to algorithms that detect fraudulent transactions, AI is transforming how financial institutions operate.",
          },
          {
            id: 2,
            name: "Blockchain & DeFi (Decentralized Finance)",
            description:
              "Blockchain technology is powering decentralized finance (DeFi), offering transparent, secure, and trustless financial systems. DeFi platforms enable peer-to-peer lending, decentralized exchanges, and smart contracts, reducing the need for traditional intermediaries like banks.",
          },
          {
            id: 3,
            name: "Open Banking",
            description:
              "Open Banking is reshaping the financial landscape by allowing third-party developers to build applications and services around financial institutions. Through APIs, customers can securely share their financial data, enabling seamless integration of services like budgeting tools, investment platforms, and payment solutions.",
          },
          {
            id: 4,
            name: "Contactless Payments",
            description:
              "Contactless payments are becoming the norm, offering a faster, safer, and more convenient way to transact. With the rise of NFC (Near Field Communication) technology and mobile wallets, consumers can make payments with just a tap, reducing the need for physical cards or cash.",
          },
          {
            id: 5,
            name: "Embedded Finance",
            description:
              "Embedded finance integrates financial services into non-financial platforms, such as e-commerce sites, ride-sharing apps, and retail stores. This trend allows businesses to offer seamless payment options, loans, and insurance directly within their platforms, enhancing customer experience and driving revenue.",
          },
        ],
      },
      industryLinkName: "technology-company",
      title: "Accelerating Tech Innovation with Custom, Scalable Development",
      short_title: "TECHNOLOGY COMPANY",
      short_description:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroTitle: "Accelerating Tech Innovation with Custom, Scalable Development",
      heroSubtitle: "TECHNOLOGY COMPANY",
      heroDesctiption:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
      heroButton: "Book A Consulation",
      image: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    },
    {
      name: "Media & Entertainment",
      icon: "fas fa-film",
      features: [
        {
          icon: "fas fa-video ",
          title: "Film Production",
          description: "Producing high-quality films and content.",
        },
        {
          icon: "fas fa-headphones-alt ",
          title: "Music Production",
          description: "Creating and producing original music.",
        },
        {
          icon: "fas fa-camera ",
          title: "Media Coverage",
          description: "Providing media coverage and advertising services.",
        },
        {
          icon: "fas fa-tv ",
          title: "Broadcasting",
          description: "Delivering media content across various platforms.",
        },
        {
          icon: "fas fa-play-circle ",
          title: "Streaming Services",
          description: "Offering on-demand content to audiences.",
        },
      ],
      industryAdvantages: {
        title: "Why Choose Us for Media & Entertainment?",
        description:
          "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
        advantages: [
          {
            id: 1,
            icon: "fa-chart-column",
            bgColor: "#EFF6F3",
            name: "Industry Expertise",
            description: "Deep understanding of financial regulations and technologies.",
          },
          {
            id: 2,
            icon: "fa-lock",
            bgColor: "#e6f3e5",
            name: "Secure Solutions",
            description: "Robust security measures to protect sensitive financial data.",
          },
          {
            id: 3,
            icon: "fa-arrow-trend-up",
            bgColor: "#fdf2c8",
            name: "Scalable Platforms",
            description: "Solutions designed to grow with your business.",
          },
          {
            id: 4,
            icon: "fa-palette",
            bgColor: "#ebeff3",
            name: "Customer-Centric Design",
            description: "Focus on delivering seamless user experiences.",
          },
        ],
      },
      industrySolution: {
        name: "Next-Gen Media & Entertainment",
        description: "Smarter, faster, and secure financial technology",
        features: [
          { id: 1, icon: "far fa-clock", title: "Digital Payments Solutions", color: "#1ed0c6" },
          { id: 2, icon: "far fa-lightbulb", title: "Blockchain Technology Integration", color: "#ff5733" },
          { id: 3, icon: "far fa-hdd", title: "Mobile Banking Applications", color: "#ffd700" },
          { id: 4, icon: "fa-mobile-screen", title: "Peer-to-Peer Lending Platforms", color: "#4caf50" },
          { id: 5, icon: "far fa-file-code", title: "Wealth & Asset Management Tools", color: "#ff33bb" },
          { id: 6, icon: "far fa-lightbulb", title: "InsurTech Platforms", color: "#8a2be2" },
          {
            id: 7,
            icon: "far fa-share-square",
            title: "Fraud Detection & Prevention Systems",
            color: "#dffc03",
          },
          { id: 8, icon: "far fa-shield-alt", title: "Cryptocurrency Platforms", color: "#2196f3" },
          { id: 8, icon: "far fa-shield-alt", title: "Regulatory Compliance Solutions", color: "#fff" },
        ],
      },
      trendSteps: {
        title: "Emerging Trends in Media & Entertainment",
        image: "https://i.ibb.co.com/v4515cNm/57043-1.webp",
        steps: [
          {
            id: 1,
            name: "AI & Machine Learning",
            description:
              "Artificial Intelligence and Machine Learning are revolutionizing fintech by enabling personalized financial services, predictive analytics, and automated decision-making. From chatbots that enhance customer support to algorithms that detect fraudulent transactions, AI is transforming how financial institutions operate.",
          },
          {
            id: 2,
            name: "Blockchain & DeFi (Decentralized Finance)",
            description:
              "Blockchain technology is powering decentralized finance (DeFi), offering transparent, secure, and trustless financial systems. DeFi platforms enable peer-to-peer lending, decentralized exchanges, and smart contracts, reducing the need for traditional intermediaries like banks.",
          },
          {
            id: 3,
            name: "Open Banking",
            description:
              "Open Banking is reshaping the financial landscape by allowing third-party developers to build applications and services around financial institutions. Through APIs, customers can securely share their financial data, enabling seamless integration of services like budgeting tools, investment platforms, and payment solutions.",
          },
          {
            id: 4,
            name: "Contactless Payments",
            description:
              "Contactless payments are becoming the norm, offering a faster, safer, and more convenient way to transact. With the rise of NFC (Near Field Communication) technology and mobile wallets, consumers can make payments with just a tap, reducing the need for physical cards or cash.",
          },
          {
            id: 5,
            name: "Embedded Finance",
            description:
              "Embedded finance integrates financial services into non-financial platforms, such as e-commerce sites, ride-sharing apps, and retail stores. This trend allows businesses to offer seamless payment options, loans, and insurance directly within their platforms, enhancing customer experience and driving revenue.",
          },
        ],
      },
      industryLinkName: "media-and-entertainment",
      title: "Driving Media & Entertainment with Interactive Digital Experiences",
      short_title: "MEDIA & ENTERTAINMENT",
      short_description:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroTitle: "Driving Media & Entertainment with Interactive Digital Experiences",
      heroSubtitle: "MEDIA & ENTERTAINMENT",
      heroDesctiption:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
      heroButton: "Book A Consulation",
      image: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    },
    {
      name: "NGO",
      icon: "fas fa-hand-holding-heart",
      features: [
        {
          icon: "fas fa-donate ",
          title: "Fundraising",
          description: "Raising funds to support social causes.",
        },
        {
          icon: "fas fa-globe-americas ",
          title: "Global Outreach",
          description: "Expanding social impact globally.",
        },
        {
          icon: "fas fa-users ",
          title: "Community Support",
          description: "Building and supporting local communities.",
        },
        {
          icon: "fas fa-hands-helping ",
          title: "Volunteer Coordination",
          description: "Engaging volunteers for community projects.",
        },
        {
          icon: "fas fa-handshake ",
          title: "Partnerships",
          description: "Creating strategic partnerships for social good.",
        },
      ],
      industryAdvantages: {
        title: "Why Choose Us for NGO Solutions?",
        description:
          "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
        advantages: [
          {
            id: 1,
            icon: "fa-chart-column",
            bgColor: "#EFF6F3",
            name: "Industry Expertise",
            description: "Deep understanding of financial regulations and technologies.",
          },
          {
            id: 2,
            icon: "fa-lock",
            bgColor: "#e6f3e5",
            name: "Secure Solutions",
            description: "Robust security measures to protect sensitive financial data.",
          },
          {
            id: 3,
            icon: "fa-arrow-trend-up",
            bgColor: "#fdf2c8",
            name: "Scalable Platforms",
            description: "Solutions designed to grow with your business.",
          },
          {
            id: 4,
            icon: "fa-palette",
            bgColor: "#ebeff3",
            name: "Customer-Centric Design",
            description: "Focus on delivering seamless user experiences.",
          },
        ],
      },
      industrySolution: {
        name: "Next-Gen NGO Solutions",
        description: "Smarter, faster, and secure financial technology",
        features: [
          { id: 1, icon: "far fa-clock", title: "Digital Payments Solutions", color: "#1ed0c6" },
          { id: 2, icon: "far fa-lightbulb", title: "Blockchain Technology Integration", color: "#ff5733" },
          { id: 3, icon: "far fa-hdd", title: "Mobile Banking Applications", color: "#ffd700" },
          { id: 4, icon: "fa-mobile-screen", title: "Peer-to-Peer Lending Platforms", color: "#4caf50" },
          { id: 5, icon: "far fa-file-code", title: "Wealth & Asset Management Tools", color: "#ff33bb" },
          { id: 6, icon: "far fa-lightbulb", title: "InsurTech Platforms", color: "#8a2be2" },
          {
            id: 7,
            icon: "far fa-share-square",
            title: "Fraud Detection & Prevention Systems",
            color: "#dffc03",
          },
          { id: 8, icon: "far fa-shield-alt", title: "Cryptocurrency Platforms", color: "#2196f3" },
          { id: 8, icon: "far fa-shield-alt", title: "Regulatory Compliance Solutions", color: "#fff" },
        ],
      },
      trendSteps: {
        title: "Emerging Trends in NGO",
        image: "https://i.ibb.co.com/v4515cNm/57043-1.webp",
        steps: [
          {
            id: 1,
            name: "AI & Machine Learning",
            description:
              "Artificial Intelligence and Machine Learning are revolutionizing fintech by enabling personalized financial services, predictive analytics, and automated decision-making. From chatbots that enhance customer support to algorithms that detect fraudulent transactions, AI is transforming how financial institutions operate.",
          },
          {
            id: 2,
            name: "Blockchain & DeFi (Decentralized Finance)",
            description:
              "Blockchain technology is powering decentralized finance (DeFi), offering transparent, secure, and trustless financial systems. DeFi platforms enable peer-to-peer lending, decentralized exchanges, and smart contracts, reducing the need for traditional intermediaries like banks.",
          },
          {
            id: 3,
            name: "Open Banking",
            description:
              "Open Banking is reshaping the financial landscape by allowing third-party developers to build applications and services around financial institutions. Through APIs, customers can securely share their financial data, enabling seamless integration of services like budgeting tools, investment platforms, and payment solutions.",
          },
          {
            id: 4,
            name: "Contactless Payments",
            description:
              "Contactless payments are becoming the norm, offering a faster, safer, and more convenient way to transact. With the rise of NFC (Near Field Communication) technology and mobile wallets, consumers can make payments with just a tap, reducing the need for physical cards or cash.",
          },
          {
            id: 5,
            name: "Embedded Finance",
            description:
              "Embedded finance integrates financial services into non-financial platforms, such as e-commerce sites, ride-sharing apps, and retail stores. This trend allows businesses to offer seamless payment options, loans, and insurance directly within their platforms, enhancing customer experience and driving revenue.",
          },
        ],
      },
      industryLinkName: "ngo",
      title: "Empowering NGOs with Impact-Driven, Scalable Tech Solutions",
      short_title: "NGO",
      short_description:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroTitle: "Empowering NGOs with Impact-Driven, Scalable Tech Solutions",
      heroSubtitle: "NGO",
      heroDesctiption:
        "Our team delivers fintech solutions tailored to industry needs, ensuring compliance, security, and innovation. We leverage AI, blockchain, and cloud computing to develop high-performing applications for the financial sector.",
      heroImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
      heroButton: "Book A Consulation",
      image: "https://i.ibb.co.com/xKxpBqsk/ss.png",
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
        // "/images/clip.png",
        "https://i.ibb.co.com/0p6zVS2H/Clip.png",
        "/images/goodfirms.png",
        "/images/Untitled-design.png",
      ],
      ISOLogos: ["/images/iso1.png", "/images/iso2.png"],
      phoneNumbers: ["+880-171-320-3656 ", "+880-179-353-2035"],
      emails: ["info@flytesolutions.com ", "sales@flytesolutions.com "],
      socialLinks: [
        {
          platform: "Facebook",
          url: "https://www.facebook.com/@flytesoft/",
          icon: "fa-facebook",
        },
        {
          platform: "Twitter",
          url: "https://x.com/flytesolutions",
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
            { name: "Fintech", path: "/industries/fintech" },
            { name: "Startup", path: "/industries/startup" },
            { name: "Logistics", path: "/industries/logistics" },
            {
              name: "Retail & Manufacturing",
              path: "/industries/retail-and-manufacturing",
            },
            { name: "Enterprise", path: "/industries/enterprise" },
            { name: "Education", path: "/industries/education" },
            { name: "Real Estate", path: "/industries/real-estate" },
            { name: "Medical & Healthcare", path: "/industries/medical-and-healthcare" },
            { name: "Technology Company", path: "/industries/technology-company" },
            { name: "Media & Entertainment", path: "/industries/media-and-entertainment" },
            { name: "NGO", path: "/industries/ngo" },
          ],
        },
        {
          name: "Product",
          id: "product",
          items: [
            { name: "Time2Task", path: "/products/time-to-task" },
            { name: "Cloud ClockIn", path: "/products/cloud-clockIn" },
            { name: "Flyte Queue", path: "/products/flyte-queue" },
            { name: "Flyte ERP", path: "/products/flyte-erp" },
            { name: "Flyte CRM", path: "/products/flyte-crm" },
            { name: "Flyte POS", path: "/products/flyte-pos" },
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
            { name: "About Us", path: "/company" },
            { name: "News & Blogs", path: "/company/news&blogs" },
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
    image: "/images/case/time-tracking.png",
    title: "Time Tracker",
    description: "A task management tool to plan, assign, and track project tasks efficiently.",
    tags: ["Time Tracking", "Project Management", "Task Assignment"],
    category: "enterprise",
    caseStudyLinkName: "time-tracker",
    heroTitle: "See How We Helped Uber Revolutionize Queue Management",
    heroSubtitle: "Explore Our Success Stories",
    heroDesctiption:
      "Discover how Uber, a global leader in ride-sharing, transformed their queue management challenges into a seamless and efficient system with our innovative solutions. This case study highlights the journey, the obstacles they faced, and the remarkable results achieved through our collaboration.",
    heroButton: "Book A Consultation",
    heroImage: "https://i.ibb.co.com/CK4NTjVv/ss-3.png",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 2,
    image: "/images/case/cloud-clockin.png",
    title: "Cloud Clockin",
    description: "A powerful tool to manage complex projects with ease and efficiency.",
    tags: ["Project Management", "Collaboration", "Productivity"],
    category: "technology company",
    caseStudyLinkName: "cloud-clockin",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 3,
    image: "/images/case/BenefitNetGeneral.gif",
    title: "HR professionals and insurance specialists",
    description: "An intuitive task management app that helps teams stay organized and on track.",
    tags: ["Task Management", "Organization", "Teamwork"],
    category: "startup",
    caseStudyLinkName: "hr-professional",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "https://i.ibb.co.com/b5kgnLyz/Frame-1000005999-1.png",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 4,
    image: "/images/case/picture-ongold.png",
    title: "Picture onGold",
    description: "A collaboration platform for teams to communicate, share files, and track progress.",
    tags: ["Collaboration", "Communication", "File Sharing"],
    category: "enterprise",
    caseStudyLinkName: "picture-ongold",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 5,
    image: "/images/case/pushlocal.jpg",
    title: "Pushlocal",
    description: "A time management app that helps you save time with automated scheduling and reminders.",
    tags: ["Time Management", "Scheduling", "Reminders"],
    category: "enterprise",
    caseStudyLinkName: "pushlocal",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 6,
    image: "/images/case/bloomfire.jpg",
    title: "Social Learning Platform",
    description: "A team management app that fosters communication and collaboration among team members.",
    tags: ["Team Management", "Collaboration", "Communication"],
    category: "startup",
    caseStudyLinkName: "social-learning",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 7,
    image: "/images/case/cds.jpg",
    title: "CDS Platform Development",
    description: "A work management tool to streamline workflows, automate tasks, and boost productivity.",
    tags: ["Workflow", "Automation", "Productivity"],
    category: "enterprise",
    caseStudyLinkName: "cds-platform",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 8,
    image: "/images/case/keeferealestate.png",
    title: "Knee Pads",
    description: "A productivity app designed to keep you focused by blocking distractions.",
    tags: ["Productivity", "Focus", "Distraction-Free"],
    category: "technology company",
    caseStudyLinkName: "knee-pads",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 9,
    image: "/images/case/americandesign.jpg",
    title: "American Society of Interior Designers",
    description: "An intelligent scheduling app that adjusts to your work habits and preferences.",
    tags: ["Scheduling", "Automation", "Productivity"],
    category: "enterprise",
    caseStudyLinkName: "american-society",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 10,
    image: "/images/case/clinicaltrial.png",
    title: "Clinical Trials Management",
    description: "A collaborative workspace for teams to track tasks, share documents, and meet deadlines.",
    tags: ["Collaboration", "Workspace", "Teamwork"],
    category: "enterprise",
    caseStudyLinkName: "clinical-trails-management",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 11,
    image: "/images/case/12.jpg",
    title: "Organization IMS",
    description: "A professional planner to organize tasks, appointments, and goals efficiently.",
    tags: ["Planning", "Task Management", "Goal Setting"],
    category: "enterprise",
    caseStudyLinkName: "organization-ims",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 12,
    image: "/images/FuelPro.png",
    title: "Team Sync",
    description: "A tool that synchronizes teams across time zones, making collaboration easy and efficient.",
    tags: ["Teamwork", "Time Zones", "Collaboration"],
    category: "enterprise",
    caseStudyLinkName: "team-sync",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 13,
    image: "/images/case/realestate1.png",
    title: "Real Estate Property Management",
    description: "A task management solution to track tasks from start to finish with clear deadlines.",
    tags: ["Task Management", "Deadline Tracking", "Organization"],
    category: "enterprise",
    caseStudyLinkName: "real-estate",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 14,
    image: "/images/case/fsa.png",
    title: "FSA Argentina",
    description: "An app for quick task organization and tracking, ensuring high productivity.",
    tags: ["Task Organization", "Quick Tasks", "Efficiency"],
    category: "enterprise",
    caseStudyLinkName: "fsa-argentina",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 15,
    image: "/images/case/hydro-one.png",
    title: "HydroOne SharePoint Reporting",
    description: "A meeting scheduling app that optimizes team calendars and time slots.",
    tags: ["Scheduling", "Meetings", "Team Coordination"],
    category: "enterprise",
    caseStudyLinkName: "hydro-one-sharepoint",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
  {
    id: 16,
    image: "/images/case/case1.jpg",
    title: "Macmillan Education",
    description: "An app that organizes team tasks, schedules, and milestones to improve workflow.",
    tags: ["Team Management", "Task Scheduling", "Team Collaboration"],
    category: "enterprise",
    caseStudyLinkName: "macmillan-education",
    heroTitle: "",
    heroSubtitle: "",
    heroDesctiption: "",
    heroButton: "Book A Consultation",
    heroImage: "",
    hireProcess: {
      name: "Our Hiring Process",
      description:
        "From understanding your needs to onboarding the perfect team, we ensure a seamless hiring process customized to your project.",
      title: "Your Path to Hiring Frontend Developers",
      features: [
        {
          id: 1,
          name: "Requirement Analysis",
          details:
            "We thoroughly analyze your project needs, goals, and tech stack to ensure a perfect match.",
        },
        {
          id: 2,
          name: "Developer Matching",
          details:
            "We handpick skilled developers with expertise in React, Angular, Vue.js, or JavaScript based on your requirements.",
        },
        {
          id: 3,
          name: "Interview & Selection",
          details:
            "You interview shortlisted candidates to ensure they align with your technical and cultural expectations.",
        },
        {
          id: 4,
          name: "Onboarding & Collaboration",
          details:
            "We seamlessly integrate developers into your workflow, ensuring they adapt to your project management style.",
        },
        {
          id: 5,
          name: "Ongoing Support",
          details:
            "We provide continuous support to monitor performance and address any challenges during the project.",
        },
      ],
    },
    featuresData: {
      name: "Custom Software Solutions",
      description: "Choose Custom Solutions to Fit Your Business Needs",
      features: [
        { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
        { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
        { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
        { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
        { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
        { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
        { id: 7, icon: "far fa-share-square", title: "Networking", color: "#dffc03" },
        { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
      ],
    },
    caseInfo: [
      { id: 1, icon: "fa-map-marker-alt", label: "Location", value: "United States" },
      { id: 2, icon: "fa-industry", label: "Industry", value: "Ride Sharing" },
      { id: 3, icon: "fa-globe", label: "Service", value: "Web Application" },
      { id: 4, icon: "fa-handshake", label: "Partnership", value: "Since 2016" },
    ],
  },
];

//project section
export const projectSliderData = [
  {
    title: "Cloud Clockin",
    description:
      "Empowered a renowned educational publishing giant with a custom digital platform, streamlining content distribution and enhancing global accessibility. Delivered scalable solutions to meet diverse user needs and ensure seamless user experiences worldwide.",
    image: "https://i.ibb.co.com/qskBDPW/Image.png",
    tags: ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"],
  },
  {
    title: "Global Leader in Educational Publishing",
    description:
      "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
    image: "https://i.ibb.co.com/zWR2ttFC/Picture.png",
    tags: ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"],
  },
  {
    title: "Time 2 Task",
    description:
      "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
    image: "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
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

// contact us keypoint
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
    backgroundImage: "https://i.ibb.co.com/Wp6LKzk6/bg-3.png",
  },
  {
    id: 3,
    category: "Flexibility",
    title: "Adaptable Offshore Teams",
    description: "Scale your team as per your project's dynamic needs.",
    features: ["On-demand scaling", "Diverse tech capabilities", "Customized solutions"],
    backgroundImage: "https://i.ibb.co.com/twTgTLLd/bg-2.png",
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
    backgroundImage: "https://i.ibb.co.com/CjS0PVP/bg-1.png",
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
  btnPath: "/schedule-consultation",
};

// product
export const productBannerData = {
  bgImage: "https://i.ibb.co.com/bH3K5FL/Rectangle-3843-2x.png",
  subtitle: "EXPLORE OUR PRODUCTS, DESIGNED FOR YOUR SUCCESS!",
  title: "Discover Innovative Solutions Built for Your Business",
  description:
    "Explore our range of products designed to enhance your operations, boost productivity, and help you achieve your goals effortlessly.",
  btnName: "Book A Consultation",
  btnPath: "/hire/schedule-consultation",
};

// product card data
export const ProductCardsData = [
  {
    id: 1,
    productImg: "https://i.ibb.co/com/dbNN1h2/Picture.png",
    productTitle: "Cloud ClockIn",
    productLinkName: "cloud-clockIn",
    ProductDetails:
      "Cloud ClockIn is a digital attendance management solution designed to simplify employee time tracking and ensure compliance with company policies. It provides real-time insights, automated reporting, and seamless integration with HR systems.",
    tags: ["Attendance Management", "Real-Time Tracking", "SaaS"],
    version: "1.2.0",
    releaseDate: "2023-11-15",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co.com/qskBDPW/Image.png",
        status: "active",
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/4RbfdmG/Admin-Dashboard.png",
        status: "inactive",
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/RP5TZC0/Image-2.png",
        status: "inactive",
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/VWqsDcg/Image-3.png",
        status: "inactive",
      },
    ],
    features: ["Real-time Employee Monitoring", "Automatic Time Logging", "Customizable Attendance Reports"],
    featureImage: "https://i.ibb.co.com/rwLMFcg/Frame-48095769.png",
    videos: {
      bgImage: "https://i.ibb.co.com/nbHLb9P/Image.png",
      videoUrl: "https://www.youtube.com/embed/s7yhNF9nXUk?si=Zbn5bAjGyrd5cCmO",
    },
    technicalSpecifications: {
      technologyStack: [
        "https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png",
        "https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png",
        "https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png",
      ],
      integrationsAvailable: [
        "https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png",
        "https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png",
        "https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png",
      ],
    },
    productBenefits: [
      {
        title: "Real-Time Attendance Tracking",
        description:
          "Monitor employee attendance instantly from anywhere. Get accurate time-in and time-out records synced to the cloud.",
        points: [
          "Real-time updates across all platforms.",
          "Accessible via biometric, mobile, or web.",
          "Eliminates manual tracking errors.",
        ],
        image: "https://i.ibb.co.com/zWKmxvnN/Frame-48095769-1.png",
      },
      {
        title: "Automated Report Generation",
        description:
          "Generate detailed attendance and productivity reports with a single click. Save time and gain actionable insights into employee performance.",
        points: [
          "Customizable report creation.",
          "Schedule automatic reports.",
          "Visualize data with charts.",
        ],
        image: "https://i.ibb.co.com/mVQYXvxF/Frame-48095769-2.png",
      },
      {
        title: "Integration With Payroll Systems",
        description:
          "Sync attendance and overtime data directly with payroll systems. Automate calculations to ensure error-free and timely salary processing.",
        points: [
          "Automates salary calculations.",
          "Seamless integration with payroll software.",
          "Ensures labor law compliance.",
        ],
        image: "https://i.ibb.co.com/pv5PzFZJ/Frame-48095769-3.png",
      },
    ],
  },
  {
    id: 2,
    productImg: "https://i.ibb.co/com/dbNN1h2/Picture.png",
    productTitle: "Time2Task",
    productLinkName: "time-to-task",
    ProductDetails: "A task management tool to plan, assign, and track project tasks efficiently.",
    tags: ["Project Management", "Real-Time Tracking", "SaaS"],
    version: "2.0.1",
    releaseDate: "2023-12-05",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co.com/yxSBNXm/Payroll-1.png",
        status: "active",
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/4RbfdmG/Admin-Dashboard.png",
        status: "inactive",
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/RP5TZC0/Image-2.png",
        status: "inactive",
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/VWqsDcg/Image-3.png",
        status: "inactive",
      },
    ],
    features: ["Task Prioritization", "Real-Time Collaboration", "Customizable Dashboards"],
    featureImage: "https://i.ibb.co.com/zTXjbc62/Frame-1000005999.png",
    videos: {
      bgImage: "https://i.ibb.co.com/yxSBNXm/Payroll-1.png",
      videoUrl: "https://www.youtube.com/embed/s7yhNF9nXUk?si=Zbn5bAjGyrd5cCmO",
    },
    technicalSpecifications: {
      technologyStack: [
        "https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png",
        "https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png",
        "https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png",
      ],
      integrationsAvailable: [
        "https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png",
        "https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png",
        "https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png",
      ],
    },
    productBenefits: [
      {
        title: "Task Prioritization",
        description: "Organize tasks based on priority to ensure critical activities are completed first.",
        points: ["Drag-and-drop task sorting.", "Set deadlines and reminders.", "Team task sharing."],
        image: "https://i.ibb.co/com/task-prioritization.png",
      },
      {
        title: "Real-Time Collaboration",
        description: "Collaborate on tasks with team members instantly, ensuring everyone stays updated.",
        points: ["Live notifications.", "Shared task progress.", "Seamless team communication."],
        image: "https://i.ibb.co/com/real-time-collaboration.png",
      },
      {
        title: "Customizable Dashboards",
        description: "Create dashboards tailored to your workflow for enhanced task management.",
        points: [
          "Drag-and-drop widget customization.",
          "Overview of key metrics.",
          "Personalized view for each user.",
        ],
        image: "https://i.ibb.co/com/customizable-dashboards.png",
      },
    ],
  },
  {
    id: 3,
    productImg: "https://i.ibb.co/com/dbNN1h2/Picture.png",
    productTitle: "Flyte Queue",
    productLinkName: "flyte-queue",
    ProductDetails: "A digital queue management system to streamline customer flow and reduce waiting times.",
    tags: ["Queue Management", "Real-Time Tracking", "SaaS"],
    version: "1.5.0",
    releaseDate: "2023-09-18",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co.com/qskBDPW/Image.png",
        status: "active",
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/4RbfdmG/Admin-Dashboard.png",
        status: "inactive",
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/RP5TZC0/Image-2.png",
        status: "inactive",
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/VWqsDcg/Image-3.png",
        status: "inactive",
      },
    ],
    features: ["Customer Flow Optimization", "Real-Time Queue Updates", "Customizable Queue Display"],
    featureImage: "https://i.ibb.co/feature-image.png", // Single image for features section
    videos: {
      bgImage: "https://i.ibb.co.com/nbHLb9P/Image.png",
      videoUrl: "https://www.youtube.com/embed/s7yhNF9nXUk?si=Zbn5bAjGyrd5cCmO",
    },
    technicalSpecifications: {
      technologyStack: [
        "https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png",
        "https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png",
        "https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png",
      ],
      integrationsAvailable: [
        "https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png",
        "https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png",
        "https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png",
      ],
    },
    productBenefits: [
      {
        title: "Customer Flow Optimization",
        description: "Manage customer flow efficiently, reducing long wait times and improving experience.",
        points: [
          "Manage multiple queues simultaneously.",
          "Display estimated wait times.",
          "Ensure efficient handling of customer requests.",
        ],
        image: "https://i.ibb.co/com/customer-flow-optimization.png",
      },
      {
        title: "Real-Time Queue Updates",
        description: "Stay updated with real-time data to streamline operations.",
        points: [
          "Track queue length and status in real-time.",
          "Instantly alert customers when their turn is up.",
          "Reduce waiting time with optimized queue management.",
        ],
        image: "https://i.ibb.co/com/real-time-updates.png",
      },
      {
        title: "Customizable Queue Display",
        description: "Personalize the queue display for your customers and staff.",
        points: [
          "Design your display interface.",
          "Choose between digital and physical queue displays.",
          "Update queue status remotely.",
        ],
        image: "https://i.ibb.co/com/customizable-display.png",
      },
    ],
  },
  {
    id: 4,
    productImg: "https://i.ibb.co/com/dbNN1h2/Picture.png",
    productTitle: "Flyte ERP",
    productLinkName: "flyte-erp",
    ProductDetails:
      "A comprehensive platform that integrates and streamlines core business processes for enhanced productivity.",
    tags: ["Enterprise Solutions", "Real-Time Tracking", "SaaS"],
    version: "3.0.0",
    releaseDate: "2023-07-30",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co.com/qskBDPW/Image.png",
        status: "active",
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/4RbfdmG/Admin-Dashboard.png",
        status: "inactive",
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/RP5TZC0/Image-2.png",
        status: "inactive",
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/VWqsDcg/Image-3.png",
        status: "inactive",
      },
    ],
    features: ["Integrated Business Modules", "Real-Time Financial Tracking", "Customizable Reporting Tools"],
    featureImage: "https://i.ibb.co/feature-image.png", // Single image for features section
    videos: {
      bgImage: "https://i.ibb.co.com/nbHLb9P/Image.png",
      videoUrl: "https://www.youtube.com/embed/s7yhNF9nXUk?si=Zbn5bAjGyrd5cCmO",
    },
    technicalSpecifications: {
      technologyStack: [
        "https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png",
        "https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png",
        "https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png",
      ],
      integrationsAvailable: [
        "https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png",
        "https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png",
        "https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png",
      ],
    },
    productBenefits: [
      {
        title: "Customer Flow Optimization",
        description: "Manage customer flow efficiently, reducing long wait times and improving experience.",
        points: [
          "Manage multiple queues simultaneously.",
          "Display estimated wait times.",
          "Ensure efficient handling of customer requests.",
        ],
        image: "https://i.ibb.co/com/customer-flow-optimization.png",
      },
      {
        title: "Real-Time Queue Updates",
        description: "Stay updated with real-time data to streamline operations.",
        points: [
          "Track queue length and status in real-time.",
          "Instantly alert customers when their turn is up.",
          "Reduce waiting time with optimized queue management.",
        ],
        image: "https://i.ibb.co/com/real-time-updates.png",
      },
      {
        title: "Customizable Queue Display",
        description: "Personalize the queue display for your customers and staff.",
        points: [
          "Design your display interface.",
          "Choose between digital and physical queue displays.",
          "Update queue status remotely.",
        ],
        image: "https://i.ibb.co/com/customizable-display.png",
      },
    ],
  },
  {
    id: 5,
    productImg: "https://i.ibb.co/com/dbNN1h2/Picture.png",
    productTitle: "Flyte CRM",
    productLinkName: "flyte-crm",
    ProductDetails:
      "A customer relationship management tool designed to optimize sales, marketing, and customer support operations.",
    tags: ["Customer Management", "Real-Time Tracking", "SaaS"],
    version: "1.3.5",
    releaseDate: "2023-10-22",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co.com/qskBDPW/Image.png",
        status: "active",
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/4RbfdmG/Admin-Dashboard.png",
        status: "inactive",
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/RP5TZC0/Image-2.png",
        status: "inactive",
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/VWqsDcg/Image-3.png",
        status: "inactive",
      },
    ],
    features: ["Lead Management", "Customer Interaction Tracking", "Sales Pipeline Customization"],
    featureImage: "https://i.ibb.co.com/xKxpBqsk/ss.png",
    videos: {
      bgImage: "https://i.ibb.co.com/nbHLb9P/Image.png",
      videoUrl: "https://www.youtube.com/embed/s7yhNF9nXUk?si=Zbn5bAjGyrd5cCmO",
    },
    technicalSpecifications: {
      technologyStack: [
        "https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png",
        "https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png",
        "https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png",
      ],
      integrationsAvailable: [
        "https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png",
        "https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png",
        "https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png",
      ],
    },
    productBenefits: [
      {
        title: "Sales Process Automation",
        description: "Automate and streamline sales workflows to save time and enhance team productivity.",
        points: [
          "Automate lead capture and follow-up.",
          "Set reminders for sales team to track activities.",
          "Easily manage and convert leads into opportunities.",
        ],
        image: "https://i.ibb.co/com/sales-automation.png",
      },
      {
        title: "Customer Insights",
        description:
          "Gain actionable insights into customer behavior and preferences to improve interactions.",
        points: [
          "Track customer interaction history.",
          "Analyze data for smarter decision making.",
          "Segment customers based on preferences and behaviors.",
        ],
        image: "https://i.ibb.co/com/customer-insights.png",
      },
      {
        title: "Marketing Integration",
        description: "Seamlessly integrate with marketing tools to execute campaigns and track performance.",
        points: [
          "Integrate with email marketing platforms.",
          "Monitor campaign results in real-time.",
          "Enhance customer targeting with marketing data.",
        ],
        image: "https://i.ibb.co/com/marketing-integration.png",
      },
    ],
  },
  {
    id: 6,
    productImg: "https://i.ibb.co/com/dbNN1h2/Picture.png",
    productTitle: "Flyte POS",
    productLinkName: "flyte-pos",
    ProductDetails:
      "A reliable point-of-sale system for efficient retail transactions and inventory tracking.",
    tags: ["Retail Management", "Real-Time Tracking", "SaaS"],
    version: "2.2.3",
    releaseDate: "2023-08-19",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co.com/mCCWWV4L/flyte-pos-2.png",
        status: "active",
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/4RbfdmG/Admin-Dashboard.png",
        status: "inactive",
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/RP5TZC0/Image-2.png",
        status: "inactive",
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/VWqsDcg/Image-3.png",
        status: "inactive",
      },
    ],
    features: ["Sales Transactions Management", "Inventory Tracking", "Customer Insights"],
    featureImage: "https://i.ibb.co.com/b5kgnLyz/Frame-1000005999-1.png",
    videos: {
      bgImage: "https://i.ibb.co.com/6RhcPr0N/flyte-pos-3.png",
      videoUrl: "https://www.youtube.com/embed/s7yhNF9nXUk?si=Zbn5bAjGyrd5cCmO",
    },
    technicalSpecifications: {
      technologyStack: [
        "https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png",
        "https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png",
        "https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png",
      ],
      integrationsAvailable: [
        "https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png",
        "https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png",
        "https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png",
      ],
    },
    productBenefits: [
      {
        title: "Real-Time Sales Monitoring",
        description: "Monitor sales transactions in real-time to optimize retail performance.",
        points: [
          "Track sales transactions instantly.",
          "Analyze sales trends to improve stock and pricing decisions.",
          "Improve cashier efficiency with streamlined sales processes.",
        ],
        image: "https://i.ibb.co/com/real-time-sales.png",
      },
      {
        title: "Inventory Management",
        description: "Easily track and manage inventory to avoid stockouts and optimize stock levels.",
        points: [
          "Track inventory levels in real-time.",
          "Set automatic stock alerts to reorder products.",
          "Gain insights into product performance and sales.",
        ],
        image: "https://i.ibb.co/com/inventory-management.png",
      },
      {
        title: "Customer Insights",
        description: "Utilize customer data to make informed decisions and enhance customer relationships.",
        points: [
          "Track customer purchase history.",
          "Identify repeat customers for targeted promotions.",
          "Analyze customer behavior for better marketing strategies.",
        ],
        image: "https://i.ibb.co/com/customer-insights-pos.png",
      },
    ],
  },
  {
    id: 7,
    productImg: "https://i.ibb.co/com/dbNN1h2/Picture.png",
    productTitle: "inventory-management-system",
    productLinkName: "inventory Management System",
    ProductDetails: "A solution for tracking, managing, and optimizing stock levels across locations.",
    tags: ["Stock Control", "Real-Time Tracking", "SaaS"],
    version: "1.0.0",
    releaseDate: "2023-05-10",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co.com/qskBDPW/Image.png",
        status: "active",
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/4RbfdmG/Admin-Dashboard.png",
        status: "inactive",
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/RP5TZC0/Image-2.png",
        status: "inactive",
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/VWqsDcg/Image-3.png",
        status: "inactive",
      },
    ],
    features: ["Stock Level Monitoring", "Real-Time Updates", "Customizable Alerts"],
    featureImage: "https://i.ibb.co/feature-image.png", // Single image for features section
    videos: {
      bgImage: "https://i.ibb.co.com/nbHLb9P/Image.png",
      videoUrl: "https://www.youtube.com/embed/s7yhNF9nXUk?si=Zbn5bAjGyrd5cCmO",
    },
    technicalSpecifications: {
      technologyStack: [
        "https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png",
        "https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png",
        "https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png",
      ],
      integrationsAvailable: [
        "https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png",
        "https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png",
        "https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png",
      ],
    },
  },
  {
    id: 8,
    productImg: "https://i.ibb.co/com/dbNN1h2/Picture.png",
    productTitle: "Board Meeting Management",
    productLinkName: "board-meeting-management",
    ProductDetails: "A system to organize, schedule, and document board meetings effectively.",
    tags: ["Corporate Governance", "Real-Time Tracking", "Single Page Application"],
    version: "4.1.0",
    releaseDate: "2023-06-25",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co.com/qskBDPW/Image.png",
        status: "active",
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/4RbfdmG/Admin-Dashboard.png",
        status: "inactive",
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/RP5TZC0/Image-2.png",
        status: "inactive",
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/VWqsDcg/Image-3.png",
        status: "inactive",
      },
    ],
    features: ["Automated Meeting Scheduling", "Minutes of Meeting Generation", "Action Item Tracking"],
    featureImage: "https://i.ibb.co/feature-image.png", // Single image for features section
    videos: {
      bgImage: "https://i.ibb.co.com/nbHLb9P/Image.png",
      videoUrl: "https://www.youtube.com/embed/s7yhNF9nXUk?si=Zbn5bAjGyrd5cCmO",
    },
    technicalSpecifications: {
      technologyStack: [
        "https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png",
        "https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png",
        "https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png",
      ],
      integrationsAvailable: [
        "https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png",
        "https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png",
        "https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png",
      ],
    },
  },
  {
    id: 9,
    productImg: "https://i.ibb.co/com/dbNN1h2/Picture.png",
    productTitle: "Cloud Inventory",
    productLinkName: "cloud-inventory",
    ProductDetails:
      "Cloud-based system for efficient inventory management and distribution across locations.",
    tags: ["Inventory Management", "Cloud-based", "SaaS"],
    version: "3.5.1",
    releaseDate: "2023-04-15",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co.com/qskBDPW/Image.png",
        status: "active",
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/4RbfdmG/Admin-Dashboard.png",
        status: "inactive",
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/RP5TZC0/Image-2.png",
        status: "inactive",
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/VWqsDcg/Image-3.png",
        status: "inactive",
      },
    ],
    features: ["Stock Level Monitoring", "Real-Time Reporting", "Multiple Location Support"],
    featureImage: "https://i.ibb.co/feature-image.png", // Single image for features section
    videos: {
      bgImage: "https://i.ibb.co.com/nbHLb9P/Image.png",
      videoUrl: "https://www.youtube.com/embed/s7yhNF9nXUk?si=Zbn5bAjGyrd5cCmO",
    },
    technicalSpecifications: {
      technologyStack: [
        "https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png",
        "https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png",
        "https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png",
      ],
      integrationsAvailable: [
        "https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png",
        "https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png",
        "https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png",
      ],
    },
  },
  {
    id: 10,
    productImg: "https://i.ibb.co/com/dbNN1h2/Picture.png",
    productTitle: "Expense Tracker",
    productLinkName: "expense-tracker",
    ProductDetails: "A tool to track and categorize company expenses for better financial management.",
    tags: ["Expense Management", "Real-Time Reporting", "SaaS"],
    version: "1.0.1",
    releaseDate: "2023-01-25",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co.com/qskBDPW/Image.png",
        status: "active",
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/4RbfdmG/Admin-Dashboard.png",
        status: "inactive",
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/RP5TZC0/Image-2.png",
        status: "inactive",
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/VWqsDcg/Image-3.png",
        status: "inactive",
      },
    ],
    features: ["Categorize Expenses", "Real-Time Monitoring", "Reports Generation"],
    featureImage: "https://i.ibb.co/feature-image.png", // Single image for features section
    videos: {
      bgImage: "https://i.ibb.co.com/nbHLb9P/Image.png",
      videoUrl: "https://www.youtube.com/embed/s7yhNF9nXUk?si=Zbn5bAjGyrd5cCmO",
    },
    technicalSpecifications: {
      technologyStack: [
        "https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png",
        "https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png",
        "https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png",
      ],
      integrationsAvailable: [
        "https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png",
        "https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png",
        "https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png",
      ],
    },
  },
  {
    id: 11,
    productImg: "https://i.ibb.co/com/dbNN1h2/Picture.png",
    productTitle: "Employee Payroll",
    productLinkName: "employee-payroll",
    ProductDetails: "A comprehensive system to manage employee payroll and tax calculations.",
    tags: ["Payroll Management", "Tax Calculations", "SaaS"],
    version: "2.0.0",
    releaseDate: "2023-02-12",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co.com/qskBDPW/Image.png",
        status: "active",
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/4RbfdmG/Admin-Dashboard.png",
        status: "inactive",
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/RP5TZC0/Image-2.png",
        status: "inactive",
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/VWqsDcg/Image-3.png",
        status: "inactive",
      },
    ],
    features: ["Automated Payroll Processing", "Tax Calculation and Filing", "Customizable Payslips"],
    featureImage: "https://i.ibb.co/feature-image.png", // Single image for features section
    videos: {
      bgImage: "https://i.ibb.co.com/nbHLb9P/Image.png",
      videoUrl: "https://www.youtube.com/embed/s7yhNF9nXUk?si=Zbn5bAjGyrd5cCmO",
    },
    technicalSpecifications: {
      technologyStack: [
        "https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png",
        "https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png",
        "https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png",
      ],
      integrationsAvailable: [
        "https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png",
        "https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png",
        "https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png",
      ],
    },
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
      "The team's dedication and expertise in FinTech solutions were impressive, ensuring efficiency and keeping everyone aligned throughout the project",
    reviewerName: "Arif Al Zahin",
    reviewerImage: "https://i.ibb.co.com/j9FXMCk2/city-bank-Assistant-Manager.jpg",
    reviewerPosition: "Assistant Manager",
    reviewerCompany: "City Bank",
    industryLinkName: "fintech",
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
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-lightbulb",
    industryName: "Startup",
    industryDescription:
      "Empower your startup with innovative solutions that drive growth and efficiency. From MVP development to scaling, we provide the tools you need to succeed.",
    industryReview:
      "The team's innovative approach and commitment to developing tailored solutions helped us scale quickly and navigate early challenges with ease",
    reviewerName: "Tanvir Ahamad Fahim",
    reviewerImage: "https://i.ibb.co.com/ZRM2N8jQ/uber-Customer-Service-Associate.jpg",
    reviewerPosition: "Customer Service Associate",
    reviewerCompany: "Uber",
    industryLinkName: "startup",
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
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-truck",
    industryName: "Logistics",
    industryDescription:
      "Optimize your logistics operations with advanced technology solutions. From supply chain management to real-time tracking, enhance efficiency and reduce costs.",
    industryReview:
      "The team's solutions significantly optimized our supply chain operations, improving delivery efficiency and reducing costs across the board",
    reviewerName: "Robert Green",
    reviewerImage: "https://i.ibb.co.com/rXHnBgs/logistic.png",
    reviewerPosition: "Logistics Manager",
    reviewerCompany: "FastTrack Logistics",
    industryLinkName: "logistics",
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
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-store",
    industryName: "Retail & Manufacturing",
    industryDescription:
      "Transform your retail and manufacturing processes with technology-driven solutions. From inventory management to customer engagement, drive growth and efficiency.",
    industryReview:
      "Their industry-specific solutions streamlined our production processes, enhanced inventory management, and improved the overall customer experience",
    reviewerName: "Dewan Jamil",
    reviewerImage: "https://i.ibb.co.com/HDhZjtWf/deputy-Walton.jpg",
    reviewerPosition: "Deputy Assistant Director",
    reviewerCompany: "Walton",
    industryLinkName: "retail-and-manufacturing",
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
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-building",
    industryName: "Enterprise",
    industryDescription:
      "Empower your enterprise with scalable and secure technology solutions. From ERP systems to cloud computing, enhance productivity and drive innovation.",
    industryReview:
      "The team's enterprise solutions enabled us to modernize our infrastructure, improve efficiency, and enhance collaboration across departments.",
    reviewerName: "James Black",
    reviewerImage: "https://i.ibb.co.com/jZqFP8HK/Meet-Maelle-scaled-1.jpg",
    reviewerPosition: "CIO",
    reviewerCompany: "EnterpriseCorp",
    industryLinkName: "enterprise",
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
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-graduation-cap",
    industryName: "Education",
    industryDescription:
      "Enhance the learning experience with innovative education technology solutions. From e-learning platforms to student management systems, empower educators and students.",
    industryReview:
      "Their innovative educational technology solutions helped us enhance our learning platforms, making education more accessible and interactive for both students and teachers.",
    reviewerName: "Paolo Gallucci",
    reviewerImage: "https://i.ibb.co.com/BVLw1sbS/macmillan.jpg",
    reviewerPosition: "Editor & Copywriter",
    reviewerCompany: "Macmillan Education",
    industryLinkName: "education",
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
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-home",
    industryName: "Real Estate",
    industryDescription:
      "Revolutionize the real estate industry with technology solutions that enhance property management, sales, and customer engagement.",
    industryReview:
      "The solutions provided have significantly improved our property management processes, enhanced customer relationships, and streamlined our real estate operations",
    reviewerName: "David Grey",
    reviewerImage: "https://i.ibb.co.com/gZ5s9n11/uber-ceo.webp",
    reviewerPosition: "Real Estate Manager",
    reviewerCompany: "RealEstatePro",
    industryLinkName: "real-estate",
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
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-heartbeat",
    industryName: "Medical & Healthcare",
    industryDescription:
      "Enhance healthcare delivery with advanced technology solutions. From telemedicine to patient management systems, improve patient care and operational efficiency.",
    industryReview:
      "Their healthcare technology solutions have greatly improved our ability to deliver efficient, high-quality care, significantly enhancing patient outcomes.",
    reviewerName: "Emma Brown",
    reviewerImage: "https://i.ibb.co.com/jZqFP8HK/Meet-Maelle-scaled-1.jpg",
    reviewerPosition: "Healthcare Administrator",
    reviewerCompany: "HealthCarePlus",
    industryLinkName: "medical-and-healthcare",
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
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-laptop-code",
    industryName: "Technology Company",
    industryDescription:
      "Drive innovation with cutting-edge technology solutions. From software development to cloud computing, empower your tech company to achieve its goals.",
    industryReview:
      "The innovative technology solutions provided helped us stay ahead of the curve, enabling us to scale efficiently and improve our overall product offerings.",
    reviewerName: "Chris White",
    reviewerImage: "https://i.ibb.co.com/rXHnBgs/logistic.png",
    reviewerPosition: "CTO",
    reviewerCompany: "TechInnovate",
    industryLinkName: "technology-company",
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
    ],
  },
  {
    industryImage: "https://i.ibb.co.com/5nShXdt/fintech.png",
    industryLogo: "fa-solid fa-film",
    industryName: "Media & Entertainment",
    industryDescription:
      "Transform the media and entertainment industry with innovative technology solutions. From content creation to distribution, enhance your audience's experience.",
    industryReview:
      "Their digital solutions have transformed the way we engage with our audience, streamlining content delivery and enhancing interactivity",
    reviewerName: "Mahtab Uddin Ahmed",
    reviewerImage: "https://i.ibb.co.com/sJm4mL40/robi.png",
    reviewerPosition: "Managing Director and CEO",
    reviewerCompany: "Robi",
    industryLinkName: "media-and-entertainment",
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
  btnPath: "/schedule-consultation",
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
  btnPath: "/schedule-consultation",
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
      { name: "Logo & Branding", icon: "fa-brands fa-figma" },
      { name: "Apps Design", icon: "fa-qrcode" },
      { name: "Graphic Design", icon: "fa-cubes-stacked" },
      { name: "Website Design", icon: "fa-biohazard" },
    ],
  },
  businessShowcase: {
    title: "Business Solutions",
    description: "Transforming businesses with innovative software solutions.",
    services: [
      { name: "ERP Systems", icon: "fa-layer-group" },
      { name: "CRM Development", icon: "fa-building" },
      { name: "Data Visualization", icon: "fa-chart-line" },
      { name: "Workflow Automation", icon: "fa-shuffle" },
    ],
  },

  softwareShowcase: {
    title: "Software Development",
    description: "Building innovative and scalable software applications.",
    image: "https://i.ibb.co.com/fM130CB/about-3d-2x-1-removebg-preview.png",
    services: [
      { name: "Custom Software Development", icon: "fa-gears" },
      { name: "Web App Development", icon: "fa-globe" },
      { name: "Mobile App Development", icon: "fa-mobile-screen" },
    ],
  },

  technologyShowcase: {
    title: "Technology",
    description:
      "Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc.",
    services: [
      { name: "DevOps Services", icon: "fa-code-compare" },
      { name: "AI & Machine Learning", icon: "fa-font" },
    ],
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

// Hiring process data
export const processData = [
  {
    serialNo: "01",
    icon: "fa-upload",
    stepName: "Application",
    description: "Submit your application and provide the required details to kickstart the process.",
  },
  {
    serialNo: "02",
    icon: "fa-filter",
    stepName: "Screening",
    description: "Our team reviews your application to ensure it meets the requirements.",
  },
  {
    serialNo: "03",
    icon: "fa-microphone",
    stepName: "Interview",
    description: "Participate in an interview to discuss your skills and suitability for the role.",
  },
  {
    serialNo: "04",
    icon: "fa-handshake-simple",
    stepName: "Offer",
    description: "Receive and review the job offer to join our team.",
  },
];

// Opportunies data
export const opportunities = [
  {
    title: "Full Stack Developer",
    company: "Flyte Solutions",
    description: "Build, maintain, and enhance scalable web applications in a fast-paced environment.",
    location: "Onsite (Dhaka, Bangladesh)",
    jobType: "Full time",
    jobLink: "/job-details/1",
  },
  {
    title: "Backend Developer",
    company: "Flyte Solutions",
    description: "Work on developing and maintaining the backend of web applications.",
    location: "Remote",
    jobType: "Full time",
    jobLink: "/job-details/2",
  },
  {
    title: "Frontend Developer",
    company: "Flyte Solutions",
    description: "Design and implement user-friendly frontends for web applications.",
    location: "Onsite (Dhaka, Bangladesh)",
    jobType: "Part time",
    jobLink: "/job-details/3",
  },
  {
    title: "UI/UX Designer",
    company: "Flyte Solutions",
    description: "Create engaging and intuitive user interfaces and experiences.",
    location: "Onsite (Dhaka, Bangladesh)",
    jobType: "Freelance",
    jobLink: "/job-details/4",
  },
  {
    title: "Mobile App Developer",
    company: "Flyte Solutions",
    description: "Develop and maintain cross-platform mobile applications.",
    location: "Remote",
    jobType: "Full time",
    jobLink: "/job-details/5",
  },
  {
    title: "Data Scientist",
    company: "Flyte Solutions",
    description: "Analyze and interpret complex data to help make informed decisions.",
    location: "Onsite (Dhaka, Bangladesh)",
    jobType: "Full time",
    jobLink: "/job-details/6",
  },
];

// Hire top talent
export const hireTopTalents = [
  {
    title: "Monthly Based",
    features: [
      "Hire offshore staff for up to 160 hours a month",
      "Manage the team using your own methodologies",
      "Get timely updates on work progress",
      "Seamless integration with your workflow",
    ],
  },
  {
    title: "Hourly Based",
    features: [
      "Pay for the work done in hours",
      "Add or revoke hours based on requirements",
      "Communicate via your own preferred channels",
      "Real-time updates via timesheet",
    ],
  },
  {
    title: "Fixed-Cost Projects",
    features: [
      "Fix the project cost before getting started",
      "Pre-defined scope and deliverables established prior to commencement",
      "Flexibility to change scope at nominal charges",
      "Establishment of a fixed timeline for project completion",
    ],
  },
];

// Home banner clutch data 
export const clutchBadges = [
  {
    id: 1,
    src: "https://clutch.co/share/badges/122766/46961/?utm_medium=image_embed%22&utm_source=clutch_top_company_badge",
    title: "Top Clutch Software Developers Dhaka 2025",
  },
  {
    id: 2,
    src: "https://clutch.co/share/badges/122766/2484/?utm_medium=image_embed%22&utm_source=clutch_top_company_badge",
    title: "Top Clutch Software Developers Bangladesh 2025",
  },
  {
    id: 3,
    src: "https://clutch.co/share/badges/122766/10130/?utm_medium=image_embed%22&utm_source=clutch_top_company_badge",
    title: "Top Clutch Staff Augmentation Company Bangladesh 2025",
  },
  {
    id: 4,
    src: "https://clutch.co/share/badges/122766/109197/?utm_medium=image_embed%22&utm_source=clutch_top_company_badge",
    title: "Top Clutch Software Developers Small Business Dhaka",
  },
];

