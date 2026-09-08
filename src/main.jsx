import React,{useEffect,useMemo,useState} from "react";
import{createRoot}from"react-dom/client";
import{motion,AnimatePresence}from"framer-motion";
import{ArrowUpRight,Download, Github, Linkedin, Mail, Phone, MapPin, Moon, Sun, Menu, X, Code2, Database, ShieldCheck, Layers3, Sparkles, ExternalLink, CheckCircle2, GraduationCap, Award, Terminal, ChevronUp}from"lucide-react";
import"./styles.css";

const resume="/Harshita_Vasudev_Naik_Resume.pdf";
const data={
 name:"HARSHITA VASUDEV NAIK",
 shortName:"HVN",
 role:"Software Engineer",
 location:"Bengaluru, Karnataka",
 phone:"+91 9742363446",
 email:"harshitavn000@gmail.com",
 github:"https://github.com/Harshita000-HVN",
 summary:"Software Engineering fresher (B.Tech ECE, CGPA 8.00) with hands-on full-stack experience across two internships and independent projects. Built REST APIs, relational schemas, and end-to-end web applications using Java, Spring Boot, React.js, Node.js, and MySQL.",
};

const skills=[
 ["Languages",["Java (Core)","JavaScript","Python (basics)","C (basics)"],Code2],
 ["Frameworks & Web",["React.js","Spring Boot","Spring Security","Node.js","JPA/Hibernate","HTML","CSS","REST API design","JWT Authentication"],Layers3],
 ["Databases & Concepts",["MySQL","RDBMS fundamentals","OOP","Data Structures","Digital Electronics"],Database],
 ["Tools",["Git","GitHub","VS Code","Eclipse","MySQL Workbench","MATLAB","LTSpice","Xilinx","Scilab"],Terminal]
];

const experience=[
 {date:"MAR 2026 — AUG 2026",title:"Full Stack Developer Intern",company:"ISBSOFT Technology Services LLP, Bangalore",points:[
 "Built and maintained web application features spanning front-end and back-end layers during a 6-month full-stack internship.",
 "Developed and integrated REST API endpoints connecting front-end views to backend services and MySQL databases, applying HTML, CSS, and JavaScript.",
 "Collaborated with the development team through code reviews and debugging sessions, maintaining consistent code quality."
 ]},
 {date:"1 MONTH",title:"Full Stack Development Intern (Java)",company:"Tap Academy",points:[
 "Completed an intensive full-stack development program covering core and advanced Java, OOP, and backend fundamentals.",
 "Built end-to-end web application knowledge through HTML, CSS, JavaScript and relational database concepts, solving Java coding exercises under deadline constraints.",
 "Strengthened debugging and collaborative development skills in a structured training environment."
 ]}
];

const projects=[
 {tag:"FULL-STACK",title:"Project Management System",desc:"A full-stack project management system to manage projects, teams, users, tasks, and notifications.",tech:["React.js","Java","Spring Boot","Spring Security","MySQL","JPA/Hibernate","REST API","JWT"],points:["Secure RESTful APIs with Spring Boot and Spring Security","JWT authentication and role-based authorization","Request validation and centralized exception handling","Responsive React dashboard with reusable components","MySQL schema modeled with JPA/Hibernate"],icon:Layers3,featured:true},
 {tag:"NODE.JS",title:"Task Manager Web App",desc:"A responsive task management web app enabling users to create, update, prioritize, and delete tasks through REST APIs.",tech:["HTML","CSS","JavaScript","Node.js","REST API"],points:["REST API routes and handlers built with Node.js","Responsive front end using HTML/CSS/JavaScript","Client-server request/response flow for real-time task updates"],icon:Code2},
 {tag:"JAVA",title:"Library Management System",desc:"A Java application to manage book inventory, issue/return records, and member details.",tech:["Java","OOP","Data Structures","ArrayList","HashMap"],points:["Book inventory, issue/return and member management","Search and sort functionality","Modular OOP design for future feature additions"],icon:Database}
];

const education=[
 ["B.Tech in Electronics and Communication Engineering","Srinivas University Institute of Engineering & Technology, Mukka","CGPA: 8.00"],
 ["Pre-University (PCMB)","Bandarkars Arts and Science College, Kundapura","83%"],
 ["SSLC, Karnataka State Board","Siddhartha English Medium High School, Shirali","87.2%"]
];

const certs=["IBM — RDBMS & Front-End Technologies","C Language","Python Programming","Data Analytics (Global Certificates)"];

function App(){
 const[dark,setDark]=useState(true),[mobile,setMobile]=useState(false),[filter,setFilter]=useState("ALL"),[modal,setModal]=useState(null),[top,setTop]=useState(false);
 useEffect(()=>{document.documentElement.dataset.theme=dark?"dark":"light";const f=()=>setTop(scrollY>500);addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[dark]);
 const filters=["ALL","FULL-STACK","NODE.JS","JAVA"];
 const shown=useMemo(()=>filter==="ALL"?projects:projects.filter(p=>p.tag===filter),[filter]);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMobile(false)};
 return <div className="site">
  <nav className="nav">
   <button className="logo" onClick={()=>go("home")}><span>HN</span><small>Harshita Naik<br/><b>Software Engineer</b></small></button>
   <div className={"navlinks "+(mobile?"show":"")}>{["home","about","experience","projects","skills","education","certifications","contact"].map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}</div>
   <div className="navright"><button className="theme" onClick={()=>setDark(!dark)}>{dark?<Sun/>:<Moon/>}</button><a className="download" href={resume} download>Resume <Download size={14}/></a><button className="mobile" onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</button></div>
  </nav>

  <section id="home" className="hero">
   <div className="stars"/>
   <div className="heroInner">
    <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="heroText">
     <div className="hello">👋 HELLO, I'M</div>
     <h1>HARSHITA<br/><span>VASUDEV NAIK</span></h1>
     <h2>{data.role}</h2>
     <p>{data.summary}</p>
     <div className="meta"><span><MapPin/> {data.location}</span><a href={"tel:"+data.phone}><Phone/> {data.phone}</a><a href={"mailto:"+data.email}><Mail/> {data.email}</a></div>
     <div className="heroCtas"><button onClick={()=>go("projects")} className="primary">View Projects <ArrowUpRight/></button><a href={resume} download className="outline">Download Resume <Download/></a></div>
     <div className="social"><a href={data.github} target="_blank" rel="noreferrer"><Github/></a><a href={"mailto:"+data.email}><Mail/></a><a href={"tel:"+data.phone}><Phone/></a></div>
    </motion.div>
    <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.8}} className="heroArt">
      <div className="mountain"/><div className="halo"/><div className="avatar"><div className="avatarLetters">HN</div><span>FULL-STACK<br/>DEVELOPER</span></div>
      <div className="codeFloat"><div className="bar"><i/><i/><i/> developer.java</div><pre>{`class Harshita {
  String role = "Software Engineer";
  String[] stack = {
    "Java", "Spring Boot",
    "React.js", "MySQL"
  };

  boolean build() {
    return true;
  }
}`}</pre></div>
      <div className="quote">“Building reliable solutions<br/>through technology.”</div>
      <div className="scribble">Build<br/>Learn<br/>Grow<br/>Repeat</div>
    </motion.div>
   </div>
   <div className="stats"><div><b>2</b><small>Internships</small></div><div><b>3+</b><small>Projects</small></div><div><b>8.00</b><small>CGPA</small></div><div><b>100%</b><small>Learning mindset</small></div></div>
  </section>

  <section id="about" className="about section lightSection">
   <div className="sectionHead"><span>GET TO KNOW ME</span><h2>About <em>Me</em></h2></div>
   <div className="aboutGrid"><div><p className="big">{data.summary}</p><button className="primary" onClick={()=>go("experience")}>More About Me <ArrowUpRight/></button></div><div className="traits">{[["Clean Code","Writing maintainable and scalable code",Code2],["Problem Solver","Turning ideas into solutions",Sparkles],["Team Player","Collaborative and adaptable",Layers3],["Always Learning","Exploring new technologies",Award]].map(([a,b,I])=><div className="trait" key={a}><I/><b>{a}</b><small>{b}</small></div>)}</div><blockquote>“Technology is not just about code; it's about creating solutions that make a difference.”</blockquote></div>
  </section>

  <section id="experience" className="darkSection section">
   <div className="sectionHead"><span>MY PROFESSIONAL JOURNEY</span><h2>Experience</h2></div>
   <div className="experience">{experience.map((e,i)=><motion.article initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="exp" key={e.title}><div className="expDot">{i+1}</div><div><div className="date">{e.date}</div><h3>{e.title}</h3><h4>{e.company}</h4><ul>{e.points.map(p=><li key={p}>{p}</li>)}</ul></div></motion.article>)}</div>
  </section>

  <section id="projects" className="projects section lightSection">
   <div className="sectionHead row"><div><span>THINGS I HAVE BUILT</span><h2>Selected <em>Projects</em></h2></div><a className="outline darkOutline" href={data.github} target="_blank" rel="noreferrer">View on GitHub <Github/></a></div>
   <div className="filters">{filters.map(f=><button className={filter===f?"active":""} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div>
   <div className="projectGrid">{shown.map((p,i)=>{const I=p.icon;return <motion.article layout initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className={"project "+(p.featured?"featured":"")} key={p.title}><div className="projectNo">0{i+1}</div><div className="projectVisual"><I/><span>{p.tag}</span></div><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.tech.map(t=><span key={t}>{t}</span>)}</div><div className="projectBtns"><button onClick={()=>setModal(p)} className="primary">View Details <ArrowUpRight/></button><a className="outline darkOutline" href={data.github} target="_blank" rel="noreferrer">GitHub <Github/></a></div></motion.article>})}</div>
  </section>

  <section id="skills" className="skills darkSection section">
   <div className="sectionHead row"><div><span>TECHNOLOGIES I WORK WITH</span><h2>My <em>Skills</em></h2></div><span className="skillBadge">⚙ Tools I Use</span></div>
   <div className="skillGrid">{skills.map(([title,items,I])=><article className="skillCard" key={title}><I/><h3>{title}</h3><div>{items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div>
  </section>

  <section id="education" className="edu darkSection section">
   <div className="eduCol"><div className="sectionHead"><span>MY ACADEMIC BACKGROUND</span><h2>Education</h2></div><div className="eduList">{education.map(([a,b,c])=><div className="eduItem" key={a}><GraduationCap/><div><b>{a}</b><small>{b}</small><span>{c}</span></div></div>)}</div></div>
   <div id="certifications" className="certCol"><div className="sectionHead"><span>COURSES & ACHIEVEMENTS</span><h2>Certifications</h2></div><div className="certList">{certs.map((x,i)=><div key={x}><Award/><div><b>{x}</b><small>{i===0?"IBM (Global Certificate)":"IBM (Global Certificate)"}</small></div></div>)}</div></div>
  </section>

  <section id="contact" className="contact lightSection section">
   <div className="contactGrid"><div><div className="sectionHead"><span>LET'S WORK TOGETHER</span><h2>Let's build<br/><em>something great.</em></h2></div><p>Looking for a Software Engineer opportunity where I can contribute to production-grade systems and continue growing as a full-stack developer.</p></div><div className="contactCard"><a href={"mailto:"+data.email}><Mail/><span>{data.email}</span><ArrowUpRight/></a><a href={"tel:"+data.phone}><Phone/><span>{data.phone}</span><ArrowUpRight/></a><span><MapPin/><span>{data.location}</span></span><a href={data.github} target="_blank" rel="noreferrer"><Github/><span>github.com/Harshita000-HVN</span><ArrowUpRight/></a><a href={resume} download className="primary message">Download Resume <Download/></a></div></div>
  </section>

  <footer><div className="footerLogo">HN <span>{data.name}<small>Software Engineer</small></span></div><div className="footerNav"><button onClick={()=>go("home")}>Home</button><button onClick={()=>go("about")}>About</button><button onClick={()=>go("projects")}>Projects</button><button onClick={()=>go("contact")}>Contact</button></div><p>© 2026 Harshita Vasudev Naik. All rights reserved.</p></footer>
  {top&&<button className="toTop" onClick={()=>go("home")}><ChevronUp/></button>}

  <AnimatePresence>{modal&&<motion.div className="modalBg" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setModal(null)}><motion.div className="modal" initial={{y:25,scale:.96}} animate={{y:0,scale:1}} exit={{y:15}} onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setModal(null)}><X/></button><div className="date">{modal.tag}</div><h2>{modal.title}</h2><p>{modal.desc}</p><ul>{modal.points.map(x=><li key={x}><CheckCircle2/>{x}</li>)}</ul><div className="chips">{modal.tech.map(x=><span key={x}>{x}</span>)}</div></motion.div></motion.div>}</AnimatePresence>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
