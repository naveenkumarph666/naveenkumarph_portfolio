import React from "react";
import NavBar from "./components/NavBar";
import CoverSection from "./components/CoverSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const githubUrl = "https://github.com/naveenkumarph4666/";
  const projects = [
    {
      title: "Task Manager",
      description: "Built with React Native and Expo for seamless cross-platform development and smooth performance. User Authentication & Secure Login Persistence implemented using Firebase Authentication. Real-time Task Management with Firebase Firestore as the backend for storing and syncing tasks. Push Notifications integrated with Expo Notifications to remind users of upcoming or due tasks. Intuitive User Interface designed for easy task creation, updates, and tracking. Features like user can download their task data, real-time data synchronisation. Optimized for Deployment on both Google Play Store and Apple App Store.",
      github: "https://github.com/naveenkumarph666/Task-Manager",
      image:'./public/cover.jpeg',
      portfolio_text:'View on GitHub'
    },
    {
      title: "Split Bill Application",
      description: "Currently architecting and developing a cross-platform mobile application using React Native and TypeScript. Developing core features including advanced bill splitting logic, tracking individual shares, and integrating push notifications for payment reminders. Setting up and integrating Firebase services (Authentication, Firestore) to manage secure user authentication and real-time data synchronization.",
      github: "https://github.com/teja8352/rn-mt5-copy-trader",
      image:'./public/logo192.png',
      portfolio_text:'View on GitHub'
    },
    {
      title: "Citizens Banking",
      description:"Proactively monitored system health, logs, and alerts via Datadog. Participated in Disaster Recovery (DR) drills and Monthly Rehydations, verified application behavior and updated DR playbooks. Handled certificate renewal, key management, trust store updates, and certificate rollouts across multiple environments. Liaised with vendors and users for troubleshooting, patches, or issue escalations. Performed regular BAU tasks and effectively troubleshooted client issues by addressing mails and servicenow incidents. Provided support for client requirements by implementing normal, standard and expedited changes. Collaborated with CAB team for change approvals. and also with cross-functionals teams like wintel, unix and db teams for patchings.",
      github: "https://www.linkedin.com/in/naveen-kumar-ponthalahari-a5738b222",
      image:'./public/itil4.jpeg',
      portfolio_text:'View on LinkedIn'
    },
    {
      title: "Valeo",
      description:"Delivered solutions by implementing new functionalities across SAP standard and custom ABAP programs, ensuring system alignment with evolving business requirements. Designed and developed a wide array of technical objects, including database tables, classes, function modules, and dialogue programs, to support with client requirements. Created interactive data reporting solutions, utilizing Smart Form, Standard and ALV reports. Provided technical support for client incidents, leveraging advanced ABAP debugging skills to identify root causes and implement solutions. Proactively collaborated with MM, SD, and QM module teams to perform joint root-cause analysis. Facilitated a smooth path to production by ensuring all code was meticulously documented with proper technical and functional specifications and actively engaging with senior developers for comprehensive code reviews and collaborating with the QA team to validate functional correctness and performance before final deployment.",
      github: "https://www.linkedin.com/in/naveen-kumar-ponthalahari-a5738b222",
      image:'./public/abap.jpeg',
      portfolio_text:'View on LinkedIn'
    }
  ];

  return (
    <div className="App">
      <NavBar />
      <AboutSection />
      <ProjectsSection githubUrl={githubUrl} projects={projects}/>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
