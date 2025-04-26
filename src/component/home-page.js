import { useEffect, useState } from 'react';
import Certificate from './cert-section';
import Aos from 'aos';
import AboutMe from './homepage/aboutme';
import TechStack from './homepage/tectstack';
import ProjectList from './homepage/projects';
import Title from './homepage/title';
import CertificateModal from './homepage/cert-modal';

const info = {
  fullName: 'Hoang Van Binh',
  birth: '2001/12/07',
  avatar: 'images/avatar.jpg',
  address: ['Tran Quang Dieu Street', 'Di An', 'Binh Duong'],
  phone: '0337445596',
  email: 'binhhv0712@gmail.com',
  shortDescription:
    "I'm a Full Stack Developer with a strong focus on building scalable, efficient, and user-friendly web applications. With expertise in both frontend and backend technologies, cloud services, and modern software architecture, I aim to deliver clean, maintainable solutions that solve real-world problems and drive business success.",
  socialMedia: {
    facebook: 'https://www.facebook.com/vanbinh0712',
    linkedin: 'https://www.linkedin.com/in/binh-hoang-van-1b79b91b5',
    github: 'https://github.com/HoangVanBinh0712',
  },
  objective: 'Full Stack Developer crafting scalable web solutions with expertise in modern technologies, cloud services, and clean architecture.',
};
const techStack = [
  {
    title: 'Backend',
    skills: ['Java Spring Boot', 'Spring Batch', 'Spring Security', 'Micro-services', 'PostgreSQL', 'Oracle SQL', 'Redis', 'Kafka'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'TypeScript', 'TailwindCSS', 'Redux', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'Linux', 'Nginx'],
  },
  {
    title: 'Tools',
    skills: ['Intellij', 'Datagrip', 'DBeaver', 'VS Code', 'Postman', 'Jmeter'],
  },
];

const projects = [
  {
    id: 1,
    title: 'FA (Family Mart ERP system)',
    description:
      'The internal management website of a sale company which manages the asset, contract, billing for the whole business of that company.',
    image: {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'ERP System for Family Mart',
    },
    techStack: ['Java', 'Spring Boot', 'Spring Batch', 'Spring Security', 'MyBatis', 'PostgreSQL', 'Oracle', 'Redis', 'AWS'],
    github: {
      url: 'https://github.com/HoangVanBinh0712',
      label: 'View on GitHub',
    },
  },
  {
    id: 2,
    title: 'FDX SYSTEM',
    description:
      'A modern web-based Construction Management System built for a Japanese company, leveraging 12 micro-services to optimize sales, project tracking, cost estimation, and construction workflows.',
    image: {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Construction Management System',
    },
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Kafka', 'Redis', 'SQL Server', 'Oracle', 'AWS', 'JasperReport'],
    github: {
      url: 'https://github.com/HoangVanBinh0712',
      label: 'View on GitHub',
    },
  },
  {
    id: 3,
    title: 'MANAGEMENT SYSTEM',
    description: 'A project that includes functionalities such as employee management, asset management, and project management.',
    image: {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Management System',
    },
    techStack: ['Java', 'Spring Framework', 'JSP/Servlet', 'HTML', 'JavaScript (jQuery)', 'Oracle', 'AWS'],
    github: {
      url: 'https://github.com/HoangVanBinh0712',
      label: 'View on GitHub',
    },
  },
];

const certificates = [
  {
    title: 'Cloud DevOps Nanodegree',
    image: 'images/saa.png',
    achievedDate: 'March 2024',
    validUntil: 'No expired',
    description:
      'Completed a Udacity Nanodegree focused on AWS, Kubernetes, Terraform, and CI/CD practices, demonstrating cloud deployment and DevOps expertise.',
  },
  {
    title: 'JLPT N4',
    image: 'images/jp.png',
    achievedDate: 'January 2024',
    validUntil: 'No expired',
    description:
      'Achieved Japanese Language Proficiency Test (JLPT) N4 certification, demonstrating the ability to understand basic Japanese in everyday situations.',
  },
  {
    title: 'TOEIC 890',
    image: 'images/toeic.png',
    achievedDate: 'December 2024',
    validUntil: 'December 2026',
    description: 'Earned a TOEIC score of 890, demonstrating strong English communication skills in listening and reading comprehension.',
  },
];

function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 600, once: false });
  }, []);

   const [selectedImage, setSelectedImage] = useState(null);
  
    const openModal = (image) => {
      setSelectedImage(image);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
    };

  return (
    <>
      <Title info={info} />
      <ProjectList projects={projects} />
      <AboutMe info={info} />
      <TechStack techStack={techStack} />
      <Certificate certificates={certificates}  openModal={openModal}/>
      <CertificateModal selectedImage={selectedImage} closeModal={closeModal} />
    </>
  );
}

export default HomePage;
