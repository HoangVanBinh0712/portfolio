import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    id: 1,
    name: '',
    year: '',
    duration: '',
    role: '',
    description: '',
    technologies: [],
    responsibilities: [],
    outcomes: '',
  });

  const { projectId } = useParams();
  const projects = [
    {
      id: 1,
      name: 'FA (Family Mart ERP system)',
      year: '2024',
      duration: 'Apr 2024 – Present',
      role: 'Middle Java Developer',
      description:
        'An internal management website for a sales company, managing assets, contracts, and billing. Designed for ERP domain, the system supports file uploads, reporting, and AWS-based batch processing.',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Batch',
        'Spring Security',
        'MyBatis',
        'Redis',
        'PostgreSQL',
        'Oracle',
        'AWS (S3, Step Functions)',
        'JUnit',
      ],
      responsibilities: [
        'Created coding documentation and guidelines for backend/frontend teams',
        'Implemented change requests, unit testing, and bug fixes',
        'Developed common functionalities like CSV export, Zip file handling, and file uploads to S3',
        'Integrated AWS Step Functions for batch system implementation',
        'Optimized SQL execution plans and caching mechanisms for performance',
      ],
      outcomes:
        'Improved maintainability through code guidelines, enhanced performance with optimized queries, and enabled scalable batch operations using AWS.',
    },
    {
      id: 2,
      name: 'FDX SYSTEM',
      year: '2023',
      duration: 'Feb 2023 – Apr 2024',
      role: 'Middle Java Developer',
      description:
        'A modern construction management system built with 12 microservices to streamline sales, cost estimation, and project workflows for a Japanese construction firm.',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Spring Data JPA',
        'Kafka',
        'Redis',
        'SQL Server',
        'Oracle',
        'AWS',
        'JasperReport',
        'JMeter',
      ],
      responsibilities: [
        'Implemented core APIs for project and estimation management',
        'Built data synchronization and migration batch systems',
        'Designed and implemented microservice architecture and secure API gateways',
        'Handled reporting with Excel, CSV, PDF exports',
        'Conducted performance testing using JMeter and Postman',
      ],
      outcomes: 'Delivered scalable and efficient microservices, improved legacy data integration, and enhanced system security and performance.',
    },
    {
      id: 3,
      name: 'Management System',
      year: '2022',
      duration: 'Feb 2022 – Dec 2022',
      role: 'Junior FullStack Developer',
      description:
        'A system managing employees, assets, and projects within the organization. Developed using a traditional JSP/Servlet stack with Oracle backend.',
      technologies: ['Java', 'Spring Framework', 'JSP', 'Servlet', 'HTML', 'jQuery', 'Oracle', 'AWS'],
      responsibilities: ['Implemented UI and business logic changes per request', 'Fixed bugs in both staging and production environments'],
      outcomes: 'Contributed to smoother user experience and maintained application reliability through consistent bug fixing.',
    },
  ];

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let waitTime = 100;
    if (isFirst) {
      setIsFirst(false);
      waitTime = 0;
    }
    const timeout = setTimeout(() => {
      const selectedProject = projects.find((x) => x.id === parseInt(projectId));
      setCurrentProject(selectedProject);
      setIsDataLoaded(true);
    }, waitTime);
    return () => clearTimeout(timeout);
  }, [projectId]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="container mx-auto mt-20 max-w-7xl px-4 py-8">
      {/* Back button */}
      <Link to="/" className="mb-6 inline-flex items-center text-gray-700 hover:text-black">
        <i className="ri-arrow-left-line mr-2"></i> Back to Portfolio
      </Link>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Project Navigation Sidebar */}
        <div className="w-full flex-shrink-0 lg:w-64">
          {/* Mobile Toggle */}
          <div className="mb-4 lg:hidden">
            <button
              onClick={toggleMobileNav}
              className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white p-3 shadow-sm"
            >
              <span className="font-medium">Select Project</span>
              <i className={`ri-arrow-${isMobileNavOpen ? 'up' : 'down'}-s-line`}></i>
            </button>
          </div>

          {/* Project List */}
          <div className={`${isMobileNavOpen ? 'block' : 'hidden'} overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md lg:block`}>
            <div className="border-b border-gray-300 p-4">
              <h2 className="text-lg font-bold">My Projects</h2>
            </div>
            <ul className="divide-y divide-gray-300">
              {projects.map((project) => (
                <li key={project.id} className={project.id === currentProject.id ? 'bg-gray-100' : ''}>
                  <div
                    onClick={() => {
                      setIsDataLoaded(false);
                      navigate(`/projects/${project.id}`);
                    }}
                    className="flex items-center justify-between p-4 font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <div className="max-w-40">{project.name}</div>
                    <span className="float-right mt-1 text-sm text-gray-500">{project.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Details Card */}
        <div
          className={`${isDataLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-600 ease-in-out
        flex-grow overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md`}
        >
          {/* Project Header */}
          <div className="border-b border-gray-300 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="mb-2 text-3xl font-bold md:mb-0">{currentProject.name}</h1>
              <div className="text-gray-500">{currentProject.duration}</div>
            </div>
          </div>

          {/* Project Content */}
          <div className="space-y-8 p-6">
            {/* Role */}
            <div>
              <h2 className="mb-2 text-xl font-semibold">Role</h2>
              <div className="inline-block rounded-md border border-gray-300 bg-gray-100 px-4 py-2">{currentProject.role}</div>
            </div>

            {/* Project Description */}
            <div>
              <h2 className="mb-2 text-xl font-semibold">Project Description</h2>
              <p className="text-gray-700">{currentProject.description}</p>
            </div>

            {/* Technologies Used */}
            <div>
              <h2 className="mb-3 text-xl font-semibold">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <div key={index} className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h2 className="mb-3 text-xl font-semibold">Responsibilities</h2>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                {currentProject.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            {/* Project Outcomes */}
            <div>
              <h2 className="mb-2 text-xl font-semibold">Project Outcomes</h2>
              <p className="text-gray-700">{currentProject.outcomes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
