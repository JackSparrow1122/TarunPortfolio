// Centralized Portfolio Content Configuration for Tarun Dandekar using local media
export const portfolioData = {
  profile: {
    name: "Tarun Dandekar",
    logo: "zozo",
    taglines: [
      "Robotics Engineer",
      "UAV Specialist",
      "Autonomous Navigation Developer",
      "Embedded Systems Developer"
    ],
    email: "tarundandekar@gmail.com",
    phone: "+44 7703399368",
    location: "Bristol, United Kingdom",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    about: [
      "MSc Robotics student with hands-on experience in robotics and drone systems, with a strong focus on hardware integration, autonomous systems, and embedded technologies. Experienced in working with Raspberry Pi, ESP32 microcontrollers, LiDAR sensors, cameras, microphone arrays, and wireless communication modules.",
      "My work includes autonomous mobile robots using ROS 2 and LiDAR-based navigation, swarm robotics using ESP-NOW communication, and drone-related projects involving sound localization and autonomous operation. I have practical experience in sensor integration, hardware testing, system calibration, troubleshooting, and integrating hardware with software frameworks such as ROS 2, PX4, and Gazebo.",
      "I am particularly interested in robotics, unmanned aerial vehicles (UAVs), autonomous navigation, sensing technologies, and intelligent systems for real-world applications."
    ],
    highlights: [
      { number: "4+", label: "UAV Projects" },
      { number: "ROS 2", label: "LiDAR Nav" },
      { number: "ESP-NOW", label: "Swarm Systems" },
      { number: "MSc", label: "Robotics, Bristol" }
    ],
    avatarUrl: "/images/dp.jpeg"
  },
  experience: [
    {
      role: "Swarm Robotics Lead Developer",
      company: "Academic Research Group",
      type: "Project Lead",
      logo: "/images/bristol.png",
      period: "2025 – Present",
      location: "Bristol, UK",
      bullets: [
        "Designed and implemented swarm robot communication architectures utilizing the ESP-NOW protocol.",
        "Integrated LiDAR mapping sensors and ultrasonic distance estimators on robotic frames.",
        "Developed leader-follower tracking models with embedded firmware routines.",
        "Configured real-time system calibrations and sensor data filtering pipelines."
      ]
    },
    {
      role: "Embedded Systems Developer",
      company: "Robotics Research Group",
      type: "Researcher",
      logo: "/images/bristol.png",
      period: "2024 – 2025",
      location: "Bristol, UK",
      bullets: [
        "Constructed custom FPV racing quadcopters and implemented autonomous flight controllers.",
        "Integrated sensor arrays (microphones, cameras, LiDAR) with ESP32 and Raspberry Pi boards.",
        "Programmed ROS 2 navigation nodes for autonomous map exploration.",
        "Simulated aerodynamic performance and robotic collisions in Gazebo and PX4 environments."
      ]
    }
  ],
  education: [
    {
      degree: "MSc Robotics",
      institution: "University of Bristol",
      period: "2024 – 2025",
      location: "Bristol, United Kingdom",
      bullets: [
        "Hands-on expertise in robotics, swarm systems, and drone technologies",
        "Autonomous mobile navigation using ROS 2 and LiDAR sensors",
        "Practical integration of PX4 flight stack and Gazebo physics simulation"
      ]
    },
    {
      degree: "B.E. Mechanical/Electrical Engineering (Background)",
      institution: "Technological University",
      period: "2020 – 2024",
      location: "India",
      bullets: [
        "Foundation of embedded control systems, electronics, and mechanical design",
        "National 2nd Runner-up at Govt. College of Engineering, Jalgaon Tech-Carvaan 2025"
      ]
    }
  ],
  skills: {
    categories: [
      {
        title: "Robotics & Hardware",
        items: [
          { name: "ROS-2 / ROS", level: "90%" },
          { name: "PX4 / ArduPilot", level: "85%" },
          { name: "Raspberry Pi & Arduino", level: "95%" },
          { name: "ESP32 & Microcontrollers", level: "100%" },
          { name: "LiDAR & Depth Cameras", level: "85%" },
          { name: "Microphone Arrays", level: "80%" }
        ]
      },
      {
        title: "Programming & Protocols",
        items: [
          { name: "Python", level: "95%" },
          { name: "C++ / Embedded C", level: "90%" },
          { name: "ESP-NOW Protocol", level: "95%" },
          { name: "ROS Topics & Services", level: "90%" }
        ]
      },
      {
        title: "Simulation & Tools",
        items: [
          { name: "Gazebo Simulator", level: "85%" },
          { name: "Rviz / rqt", level: "90%" },
          { name: "GitHub / Git", level: "95%" },
          { name: "Docker Containerization", level: "80%" }
        ]
      }
    ]
  },
  certificates: [
    {
      title: "Technoxian 2022 WRC Participation & 2nd Runner-up",
      imagePath: "/images/2nd prize in drone .jpeg",
      description: "National 2nd Runner-up at Govt. College of Engineering, Jalgaon Tech-Carvaan 2025."
    },
    {
      title: "Inside FPV Certified Drone Pilot",
      imagePath: "/images/certificate of pilot joining in inside fpv .jpeg",
      description: "Official drone pilot license and flight control certification from Inside FPV."
    },
    {
      title: "Celestial Working Certificate",
      imagePath: "/images/certificate of working with celestial .jpeg",
      description: "Certificate of contribution and technical experience working with Celestial systems."
    },
    {
      title: "Student of the Year Award",
      imagePath: "/images/student of the year .jpeg",
      description: "Academic excellence award for robotics research and drone engineering achievements."
    }
  ],
  blog: {
    date: "February 2026",
    title: "Exploring the Swarm: Cooperative Robotics",
    content: [
      {
        type: "paragraph",
        text: "Swarm robotics is one of the most promising fields in modern automation. By taking inspiration from natural swarms (like bees, ants, or flocks of birds), swarm robotics involves using large groups of simple, cost-effective physical robots to complete complex tasks cooperatively."
      },
      {
        type: "heading",
        text: "Swarm Communication with ESP-NOW"
      },
      {
        type: "paragraph",
        text: "A primary challenge in swarm systems is communication bandwidth. Standard Wi-Fi networks suffer from latency and connection overhead. In my projects, I utilized the ESP-NOW communication protocol on ESP32 microcontrollers. ESP-NOW allows for low-power direct peer-to-peer data transfers without needing a central router, keeping the swarm reaction times extremely quick."
      },
      {
        type: "heading",
        text: "Leader-Follower Navigation"
      },
      {
        type: "paragraph",
        text: "By establishing dynamic leader-follower logic, the swarm can follow a designated leader navigating autonomously via LiDAR mapping, while followers trace its path and maintain formation. This approach reduces computation costs for secondary robots, rendering the system highly scalable for logistics and agricultural monitoring."
      }
    ]
  },
  projects: [
    {
      id: "technoxian_championship",
      title: "Technoxian World Robotics Championship",
      subtitle: "Autonomous Drone Flight • UAV System Engineering",
      description: "Readying the autonomous flight controls and drone systems for the World Robotics Championship.",
      image: "/images/image.jpeg",
      tags: ["Drone", "UAV", "PX4", "Telemetry"],
      content: {
        intro: "In this challenge, we built and programmed a specialized robotics system and unmanned aerial vehicles (UAVs) to compete in the Technoxian World Robotics Championship. The project involved integrating custom flight decks, optimizing battery discharge efficiency, and coding autonomous stabilizers.",
        sections: [
          {
            title: "Autonomous Drone Flight Systems",
            paragraphs: [
              "Our drone platform was integrated with hardware fail-safes and telemetry links. We developed PID control loops for hover stabilization and trajectory adjustments based on onboard IMU readouts."
            ],
            youtubeId: "pyZlFBVpmgI",
            localVideoPath: "/images/Drone video .mp4"
          }
        ],
        links: [
          {
            label: "YouTube Video",
            url: "https://www.youtube.com/watch?v=pyZlFBVpmgI",
            icon: "video"
          }
        ]
      }
    },
    {
      id: "swarm_robotics",
      title: "Swarm Robotics: Leader-Follower",
      subtitle: "Swarm Intelligence • ESP-NOW Communication • ESP32",
      description: "Swarm robotics simulation utilizing physical mobile robots communicating wirelessly.",
      image: "/images/WhatsApp Image 2026-06-06 at 3.14.32 PM.jpeg",
      tags: ["ESP32", "ESP-NOW", "Embedded C", "Swarm"],
      content: {
        intro: "This project implements cooperative navigation for a fleet of mobile robots. By configuring one robot as the leader, follower units adjust their motor velocities dynamically to maintain formation, coordinating over ESP-NOW.",
        sections: [
          {
            title: "System Video Demo",
            paragraphs: [
              "Watch the leader-follower swarm robots in action. The video demonstrates communication latency below 10ms and real-time obstacle avoidance routines."
            ],
            localVideoPath: "/images/leader follower robor.mp4"
          }
        ],
        links: []
      }
    },
    {
      id: "ros2_amr",
      title: "ROS 2 Autonomous Mobile Robot",
      subtitle: "LiDAR Sensors • SLAM Mapping • ROS 2 Nav2",
      description: "LiDAR-based mapping and autonomous navigation using ROS 2 frame handlers.",
      image: "/images/i2.jpeg",
      tags: ["ROS 2", "LiDAR", "SLAM", "Navigation"],
      content: {
        intro: "Built and programmed an Autonomous Mobile Robot (AMR) using LiDAR sensors. The software pipeline runs on ROS 2, implementing SLAM mapping (Cartographer) and autonomous path planning (Nav2 Navigation Stack).",
        sections: [
          {
            title: "Navigation & Mapping Output",
            paragraphs: [
              "The robot autonomously maps an unknown indoor space and builds a 2D occupancy grid, calculating collision-free pathways around obstacles."
            ],
            localVideoPath: "/images/client work Ros 2 .mp4"
          }
        ],
        links: []
      }
    },
    {
      id: "fpv_drone",
      title: "FPV Drone Building & Flight Test",
      subtitle: "FPV Quadcopter • Betaflight • Drone Pilot",
      description: "Designing, soldering, and piloting custom FPV racing quadcopters.",
      image: "/images/WhatsApp Image 2026-06-06 at 3.14.32 PM.jpeg",
      tags: ["FPV", "Quadcopter", "Betaflight", "Solder"],
      content: {
        intro: "This project outlines the engineering process behind FPV quadcopter construction. From selecting motors and ESC ratings to fine-tuning PID rates in Betaflight, I configured multiple racing and acrobatic drones.",
        sections: [
          {
            title: "Flight Capture Demo",
            paragraphs: [
              "Raw FPV flight capture demonstrating acrobatic maneuvers, motor response times, and real-time flight telemetry overlay."
            ],
            localVideoPath: "/images/FPV drone built by me and fly by me .mp4"
          },
          {
            title: "Drone Flight Practice",
            paragraphs: [
              "Outdoor testing phase validating motor temperature thresholds, signal attenuation, and custom receiver ranges."
            ],
            localVideoPath: "/images/Drone flying Tarun .mp4"
          }
        ],
        links: []
      }
    },
    {
      id: "humanoid_robot",
      title: "Humanoid Robot Construction",
      subtitle: "Robotics Design • Servo Kinematics • Microcontrollers",
      description: "Designing and building a functional humanoid robot with multi-servo mechanics.",
      image: "/images/image.jpeg",
      tags: ["Servo", "Humanoid", "Microcontroller", "Design"],
      content: {
        intro: "Developed a functional multi-DOF humanoid robot. Integrated high-torque metal gear servos and calculated kinematics configurations to allow stable gaits and balancing motions.",
        sections: [
          {
            title: "Robot Movement Video",
            paragraphs: [
              "Video highlighting robot gait cycles, forward movement stabilization, and joint angular calibrations."
            ],
            localVideoPath: "/images/video of humniod robot made by me .mp4"
          }
        ],
        links: []
      }
    },
    {
      id: "irrigation_automation",
      title: "Smart Irrigation & Home Automation",
      subtitle: "ESP32 Sensors • Relay Controls • Automation Systems",
      description: "Integrating closed-loop smart sensors and decentralized home appliance relays.",
      image: "/images/image.jpeg",
      tags: ["IoT", "Relays", "Moisture Sensor", "ESP32"],
      content: {
        intro: "Developed two IoT micro-projects: a smart closed-loop irrigation system adjusting irrigation cycles based on soil humidity metrics, and a home automation hub controlling relays remotely.",
        sections: [
          {
            title: "Smart Irrigation Relays",
            paragraphs: [
              "The ESP32 reads analog data from soil sensors and triggers a water pump relay automatically when moisture levels fall below the required threshold."
            ],
            localVideoPath: "/images/smart irrigation .mp4"
          },
          {
            title: "Home Automation System",
            paragraphs: [
              "A decentralized home control setup that handles power triggers for light switches, cooling fans, and appliances."
            ],
            localVideoPath: "/images/home automation .mp4"
          }
        ],
        links: []
      }
    },
    {
      id: "edge_detection",
      title: "Computer Vision Edge Detection",
      subtitle: "Sobel & Canny Filter Processing • OpenCV",
      description: "Implementing real-time edge detection algorithms on camera feeds.",
      image: "/images/i2.jpeg",
      tags: ["CV", "OpenCV", "Python", "Edge Detection"],
      content: {
        intro: "Developed a Python application processing real-time video frames to extract boundaries using Sobel and Canny edge detection algorithms, serving as the basis for spatial boundary recognition in AMR.",
        sections: [
          {
            title: "Filter Execution Demo",
            paragraphs: [
              "Video demo running Sobel filters and extracting high-contrast edges in real-time camera feeds."
            ],
            localVideoPath: "/images/edage detection .mp4"
          }
        ],
        links: []
      }
    },
    {
      id: "volanture_robot",
      title: "Autonomous Assistant & Volunteer Robot",
      subtitle: "Mobile Navigation • Sensor Fusion • Payload Delivery",
      description: "Developing an assistive mobile robot platform equipped with sensory arrays for automated transportation.",
      image: "/images/i2.jpeg",
      tags: ["ROS 2", "Raspberry Pi", "Sensors", "Payload"],
      content: {
        intro: "Designed and built an autonomous volunteer robot platform. Equipped with microcontrollers and payload modules, this robot handles transport and assistive tasks dynamically in testing environments.",
        sections: [
          {
            title: "Robot Operation Demo",
            paragraphs: [
              "Testing the navigation controls, steering configurations, and structural integrity of the volunteer robot during payload transit."
            ],
            localVideoPath: "/images/volanture robot 1.mp4"
          }
        ],
        links: []
      }
    }
  ]
};
