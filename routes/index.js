const express = require('express');
const router = express.Router();

const glossary = [
  { id: 1, term: 'Keyboard', description: 'A keyboard is a peripheral input device used to input text, commands, and other data into a computer or electronic device. It consists of a set of keys arranged in a specific layout, such as QWERTY, and provides a means of communication between the user and the device.', reference: 'Little, J. (2019). The Complete Keyboard Guide: From Basic Typing to Advanced Shortcuts. New York, NY: ABC Publishers.' },
  { id: 2, term: 'Cloud Storage', description: 'Cloud storage refers to the storage of digital data in remote servers accessible over the internet. It allows users to store, manage, and retrieve their files and data from anywhere and on any device. Cloud storage offers scalability, data redundancy, and convenient data backup and recovery options.', reference: 'Johnson, L. (2020). Cloud Storage: A Comprehensive Guide to Storing and Managing Data in the Cloud. Boston, MA: XYZ Publishing.' },
  { id: 3, term: 'Augmented Reality', description: 'Augmented Reality (AR) is a technology that overlays digital information, such as images, videos, or 3D objects, onto the real world in real-time. It enhances the user\'s perception and interaction with the physical environment, providing a blended experience of the real and virtual worlds.', reference: 'Brown, M. (2018). Augmented Reality: Exploring the Intersection of Virtual and Real Worlds. San Francisco, CA: PQR Press.' },
  { id: 4, term: 'Machine Learning', description: 'Machine Learning is a subfield of artificial intelligence that focuses on developing algorithms and models that enable computers to learn from data and make predictions or decisions without explicit programming. It involves training and optimizing models using large datasets to uncover patterns and insights.', reference: 'Williams, R. (2019). Machine Learning in Practice: Real-world Applications and Use Cases. Seattle, WA: XYZ Publications.' },
  { id: 5, term: 'Internet of Things (IoT)', description: 'The Internet of Things (IoT) refers to the network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity capabilities that enable them to collect and exchange data. IoT allows for the integration of the physical and digital worlds, enabling various applications and services.', reference: 'Martin, S. (2020). IoT Essentials: An Introduction to the Internet of Things. Boston, MA: ABC Publishing.' },
  { id: 6, term: 'Virtual Reality', description: 'Virtual Reality (VR) is a technology that creates a simulated environment or immersive experience through the use of computer-generated visuals, sounds, and other sensory inputs. It typically involves wearing a VR headset or using specialized equipment to interact with the virtual world.', reference: 'Garcia, L. (2017). Virtual Reality: A Comprehensive Guide to Immersive Experiences. San Francisco, CA: PQR Press.' },
  { id: 7, term: 'Cryptocurrency', description: 'Cryptocurrency is a digital or virtual form of currency that uses cryptography for secure financial transactions, control the creation of additional units, and verify the transfer of assets. It operates independently of a central bank and is based on blockchain technology, ensuring transparency and decentralization.', reference: 'Johnson, M. (2021). Cryptocurrency Explained: A Beginner\'s Guide to Digital Money. New York, NY: ABC Publishers.' },
  { id: 8, term: 'Quantum Computing', description: 'Quantum Computing is an emerging field of computer science that leverages the principles of quantum mechanics to perform complex computations. It utilizes quantum bits (qubits) to represent and manipulate information, offering the potential for exponential processing power and solving problems beyond the capabilities of classical computers.', reference: 'Brown, A. (2022). Quantum Computing: Unleashing the Power of Quantum Mechanics. Seattle, WA: XYZ Publications.' },
  { id: 9, term: 'Biometric Authentication', description: 'Biometric authentication is a security measure that uses unique biological characteristics, such as fingerprints, iris patterns, or facial features, to verify and authenticate individuals\' identities. It offers a more secure and convenient alternative to traditional password-based authentication methods.', reference: 'Garcia, L. (2019). Biometrics: Enhancing Security with Unique Biological Traits. Boston, MA: ABC Publishing.' },
  { id: 10, term: 'Data Mining', description: 'Data Mining is the process of discovering patterns, relationships, and insights from large datasets. It involves using various statistical and computational techniques to extract valuable information and knowledge that can be used for decision-making, predictive modeling, and trend analysis.', reference: 'Higgins, T. (2020). Data Mining Essentials: Techniques and Applications for Knowledge Discovery. San Francisco, CA: PQR Press.' },
  { id: 11, term: 'Canary release', description: 'Canary release is a deployment strategy in which changes are been released initially. And this would reduces the risk of introducing a new version. ', reference: 'Sato, D. (2014, August 4). Canary Release. [Online]. Available: https://martinfowler.com/bliki/CanaryRelease.html [Accessed August 4, 2023]' },
  { id: 12, term: 'CI/CD', description: 'CI/CD is an integration of Continuous Integration and Continuous Delivery that would initiate certain DevOps workflows. ', reference: 'Sacolick, I. (2022). What is CI/CD? Continuous integration and continuous delivery explained. InfoWorld. [Online]. Available: https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html [Accessed August 4, 2023].' },
  { id: 13, term: 'ChatOps', description: 'ChatOps would focus on communication within the DevOps teams', reference: 'Palmer, M. (2023). ChatOps Explained and Why DevOps Teams Should Care. Orange Matter. [Online]. Available: https://orangematter.solarwinds.com/2023/01/17/what-is-chatops-for-devops/ [Accessed August 4, 2023].' },
  { id: 14, term: 'Application Release Automation (ARA)', description: 'ARA is a process to package and make delays in the software release across various environments. It focuses mainly on modeling of the software and deployment of custom application software releases.', reference: 'Kumar, P. (2022). 5 DevOps Application Release Automation (ARA) Tools. H2K Infosys Blog. [Online]. Available: https://www.h2kinfosys.com/blog/5-devops-application-release-automation-ara-tools/ [Accessed August 8, 2023].' },
  { id: 15, term: 'DevSecOp', description: 'DevSecOps is about integrating security into the pipeline of continuous integration, delivery, and deployment of applications. DevSecOps incorporates security into the product to decrease software vulnerabilities.', reference: 'Das, S. (2023). DevOps Lifecycle: Different Phases in DevOps. BrowserStack Guide. [Online]. Available: https://www.browserstack.com/guide/devops-lifecycle [Accessed August 4, 2023].' },
  { id: 16, term: 'DService Level Agreement (SLA)', description: 'SLA is defined as a contractual agreement which is made between a service provider and a customer stating the expected service level and performance.', reference: 'Nauda, A. (2021). Why DevOps Teams Should Eliminate SLAs. InfoWorld. [Online]. Available: https://www.infoworld.com/article/3630104/why-devops-teams-should-eliminate-slas.html [Accessed August 4, 2023].' },
  { id: 17, term: 'CD – Continuous Delivery', description: 'Continuous delivery is a set of processes and practices followed which would automate SLDC (Software Development Life Cycle) and create a feedback loop.', reference: 'Sacolick, I. (2022). What is CI/CD? Continuous integration and continuous delivery explained. InfoWorld. [Online]. Available: https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html [Accessed August 4, 2023].' },
  { id: 19, term: 'Behavior-Driven Development (BDD)', description: 'This Behavior-Driven Development - BDD is a method used in DevOps to establish standardized communication among the development teams and the project owner. ', reference: 'Goldberger, T. (2018). Behavior-driven development in DevOps. Nagarro Blog. [Online]. Available: https://www.nagarro.com/en/blog/behavior-driven-development-in-devops [Accessed August 4, 2023].' },
  { id: 20, term: 'User Acceptance testing – UAT', description: 'This user acceptance testing (UAT) helps DevOps teams to check whether a system had satisfied user demands, business requirements, etc. This testing is done every time when a new product is being developed.', reference: 'Oh, D. (2019). Automate user acceptance testing with your DevOps pipeline. Opensource.com. [Online]. Available: https://opensource.com/article/19/4/devops-pipeline-acceptance-testing [Accessed August 4, 2023].' },
  { id: 21, term: 'Express js', description: 'The express.js refers to the node.js with open sources which is used to manage the necessary process of routers. Also, the servers build the appropriate software application. It builds with the essential way of multipage and establishes the top layer process.', reference: 'Akshata Vhandale. (2020). MERN Stack: Technologies used for Web Development, IJRASET publication.' },
  { id: 22, term: 'Container in docker', description: 'The container is a process that depends upon the essential environment provided on the docker desktop. The docker mainly uses the container for fast deployment and to have a fast migration process. When establishing the container, it maintains the appropriate state of application of the docker images.', reference: 'Bellishree, P. (2020). A Survey on Docker Container and its Use Cases, Fast Track Publication.' },
  { id: 23, term: 'Data management', description: 'Data management is essential for each process, it collects the necessary details. According to the processing of data, it is validated to store the necessary data. In software, ensure that the data process with availability with appropriate recovery methods which will help to manage the data.', reference: 'Jerome Darmont (2022). Advance on Data Management and Information System, Frontiers publishing.' },
  { id: 24, term: 'Get and post method', description: 'The both get and the post method is used to send the essential data to the appropriate server. The get method, allows a particular small process of data due to request parameters on the URL with limited access. Also at the post method, the large process of data can be transferred due to parameters being applied on the body.', reference: 'Wisal Khan. (2023). SQL and NoSQL Database Software Architecture Performance Analysis and Assessments – A Systematic Literature Review, MDPI AG publishing.' },
  { id: 25, term: 'Virtual machines', description: 'The virtual machines were also called the image-like file process. This software can run the essential programs, and store the necessary data according to the needs. It needs to monitor and maintain the upgrading of the system. The main purpose is to run a separate environment on the window.', reference: 'Wenting Wei (2020). Multi-resource balance optimization for virtual machine placement in cloud data centres, Elsevier publishing.' },
  { id: 26, term: 'RESTful APIs', description: 'Using the internet process can exchange specific information between the two computers in an interfacing manner. This RESTful API will proceed to exchange with a secure and fast process.', reference: 'Sattam j Alharbi (2023). API Security Testing: The Challenges of Security Testing for Restful APIs, SIMHAPURI publishing.' },
  { id: 27, term: 'Docker image', description: 'The docker image is defined as a file that executes the necessary codes at the docker container. To demonstrate the appropriate docker container, the instructions were been followed. To view the docker images, on the docker desktop.', reference: 'Nannan Zhao (2021). Large-Scale Analysis of Docker Images and Performance Implications for Container Storage System, IEEE publishing.' },
  { id: 28, term: 'SDLC', description: 'Software Development Lifecycle (SDL) it to demonstrate the software with high-quality approaches. The main goal of the SDL is to proceed with the planning process according to the needs or requirements, to reduce the risk process. Also, it is cost-effective, which implements the various phases to get the proper outcomes.', reference: 'Gagan Gurung (2020). Software Development Life Cycle Models-A Comparative Study, SIMHAPURI publication.' },
  { id: 29, term: 'Version control(related to software', description: 'Version control is essential to adapt to the changes that occur in the software code. Also, it refers to the source code, which implements the necessary practices process to track the applications.', reference: 'Deepa, N. (2020). An analysis on Version Control Systems. International conference -ETITE.' },
  { id: 30, term: 'Software deployment', description: 'To support the software application, the software deployment will establish the designing process, and also deploy accordingly. It improves the overall efficiency.', reference: 'Xabier Larrucea. (2018). A cases analysis of enabling continuous software deployment through knowledge management, Elsevier publication.' },
  { id: 31, term: 'Kubernetes', description: 'Kubernetes is an open-source which is extensible, and portable platform for handling containerized services, and workloads to facilitate declarative automation and configuration. Kubernetes have ecosystems that are rapidly growing. The supported tools of Kubernetes services are broadly available. Developers are interacting with the Kubernetes with the support of deployment files. The deployment file is the configuration file which includes the workflow of the images. The activities and the responsibilities of these files are recorded in the form of deployment files.', reference: 'Dayo, A. O. (2021). A multi-containerized application using docker containers and Kubernetes clusters. International Journal of Computer Applications, 183(44), 55-60. https://doi.org/10.5120/ijca2021921843' },
  { id: 32, term: 'Azure CLI', description: 'Azure CLI (Command-Line Interface) is the command line tool of cross-platform which is connected to Azure and performs the administrative commands on the resources of Azure. Scripting in Azure PowerShell or Azure CLI is supported by Azure Storage. Additionally, you may work with your data easily visually with the Azure site and Azure Storage Explorer. Azure CLI has released preview support for Windows 10+, and WAM that acts like an authentication broker. An authentication broker like WAM has numerous benefits that include bug files shipped with Windows, enhanced security, fast single sign-on, and support for the FIDO keys, Windows Hello, and Conditional access.', reference: 'Azure command-line tools build 2023 announcements. (2023, June 1). TECHCOMMUNITY.MICROSOFT.COM. https://techcommunity.microsoft.com/t5/azure-tools-blog/azure-command-line-tools-build-2023-announcements/ba-p/3828158' },
  { id: 33, term: 'Virtual machine', description: 'Virtual machine is the digital version of the physical computer. It is the software that needs maintenance, running programs, computing functions, operating systems, connecting to the network, and storing the data. It needs maintenance like system monitoring and updates. Many virtual machine is hosted on only one physical machine. This offers flexibility for computing the resources and increasing efficiency. This also provides fundamental blocks for virtualized resources like cloud computing.', reference: 'Alyas, T., M. Ghazal, T., Sulaiman Alfurhood, B., Ahmad, M., Ali Thawabeh, O., Alissa, K., & Abbas, Q. (2023). Performance framework for virtual machine migration in cloud computing. Computers, Materials & Continua, 74(3), 6289-6305. https://doi.org/10.32604/cmc.2023.035161' },
  { id: 34, term: 'Microservices in cloud', description: 'Microservices are the organizational and architectural approach to the development of the software. The software will be composed of independent services over the APIs. These are the service architectures that make the applications simple to scale, enabling accelerating time, innovation, and faster development for the new features. With the support of microservices architecture, the application constructs the independent components that run every application process. Services are constructed for the business capabilities and execute a single function.', reference: 'Rezaei Nasab, A., Shahin, M., Liang, P., Basiri, M. E., Hoseyni Raviz, S. A., Khalajzadeh, H., Waseem, M., & Naseri, A. (2021). Automated identification of security discussions in microservices systems: Industrial surveys and experiments. Journal of Systems and Software, 181, 111046. https://doi.org/10.1016/j.jss.2021.111046' },
  { id: 35, term: 'Docker container', description: 'The container is the software which is the standard unit that packages up the cod and every dependencies. Because of this reason, this application runs reliably and quickly from one environment to another. The docker container image is an executable package, a lightweight, and standalone package of the software which consists of all requirements to run the application.', reference: 'Zou, Z., Xie, Y., Huang, K., Xu, G., Feng, D., & Long, D. (2022). A docker container anomaly monitoring system based on optimized isolation forest. IEEE Transactions on Cloud Computing, 10(1), 134-145. https://doi.org/10.1109/tcc.2019.2935724' },
  { id: 36, term: 'RabbitMQ', description: 'RabbitMQ is the message-queueing software called a queue manager or message broker. The message contains any type of information. The queue-manager software will store the messages until it gets the application that links the message. The obtaining application processes the message later. Message queueing permits the web servers to respond quickly rather than be forced to execute the resource-heavy procedures on that spot.', reference: 'Ćatović, A., Buzađija, N., & Lemes, S. (2022). Microservice development using RabbitMQ message broker. Science, Engineering and Technology, 2(1), 30-37. https://doi.org/10.54327/set2022/v2.i1.19' },
  { id: 37, term: 'software configuration', description: 'Software configuration management is the source control, version control, and change management. It is generally used in the software development groups on the set of files. The configuration item means the infrastructure element, and service component that is required to be managed to ensure the service delivery.', reference: 'Li, I., Khan, M., Mehmood, W., Nisar, W., Aslam, W., Qaiser Saleem, M., K. Omer, M., & Shafiq, M. (2021). CMMI-compliant workflow models to establish configuration management integrity in software SMEs. Intelligent Automation & Soft Computing, 27(3), 605-623. https://doi.org/10.32604/iasc.2021.014639' },
  { id: 38, term: 'cloud native security', description: 'Cloud-native security indicates infrastructure and platform security and also application security. The security should be constructed into the assets that are working to secure. This is applicable to multiple layers of the application. The cloud-native security 4C\' includes code, cloud, container, and clusters. This approach augments the defense in the computing approach to security which broadly corresponds to the best practices for securing the software systems.', reference: 'Zaman, M. T., & Rani, M. (2022). Cloud computing security challenges, analysis of security problems and cloud computing forensics issues. Security and Privacy Trends in Cloud Computing and Big Data, 147-164. https://doi.org/10.1201/9781003107286-8' },
  { id: 39, term: 'web API', description: 'The web API extends the web browser functionality. The various kinds of APIs used in web services are composite, public, private, and partner. Public API is available and open for usage by outside businesses or developers. The web API includes XML which is faster than WCF. It also uses the standard HTTP verbs such as DELETE, GET, PUT, and POST for every crud operation.', reference: 'Sanctis, V. D. (2023). undefined. Simon & Schuster.' },
  { id: 40, term: 'Project tracking', description: 'Project tracking is the approach of project management for some progress of functionalities included in the projects. Potential problems were solved and spotted by the team leaders and team members. The included project functionalities are project scope, resources, milestones, and budget are the most significant components that the project manager must concentrate on when tracking the progress of the project. It supports the project\'s performance.', reference: 'Tariq, W. (2019). Project management tracking approach and its effect to energy-saving projects. International Journal of Advanced Trends in Computer Science and Engineering, 8(1.6), 182-189. https://doi.org/10.30534/ijatcse/2019/2881.62019' },
];

router.get('/', function(req, res, next) {
  res.render('index', { glossary });
});

module.exports = router;
