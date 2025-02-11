import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiPhone, FiBriefcase, FiBook, FiLayers, FiCheck } from 'react-icons/fi';
import '../styles/pages/onboarding.css';

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    maritalStatus: '',
    nationalID: '',
    passportNumber: '',
    profilePhoto: null,
    
    // Contact Information
    email: '',
    phone: '',
    alternatePhone: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    
    // Professional Information
    title: '',
    summary: '',
    linkedinUrl: '',
    portfolioUrl: '',
    githubUrl: '',
    behanceUrl: '',
    dribbleUrl: '',
    otherProfiles: [],
    
    // Education
    education: [],
    
    // Work Experience
    experiences: [],
    
    // Skills & Expertise
    technicalSkills: [],
    softSkills: [],
    industryKnowledge: [],
    tools: [],
    
    // Languages
    languages: [],
    
    // Certifications & Training
    certifications: [],
    
    // Additional Information
    interests: [],
    achievements: [],
    volunteerWork: [],
    publications: [],
    conferences: [],
    awards: [],
    references: [],
    
    // Preferences
    jobTypes: [], // Full-time, Part-time, Contract, etc.
    workModes: [], // Remote, Hybrid, On-site
    expectedSalary: '',
    noticePeriod: '',
    willingToRelocate: false,
    preferredLocations: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayInput = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: Array.isArray(prev[name]) ? [...prev[name], value] : [value]
    }));
  };

  const removeArrayItem = (name, index) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].filter((_, i) => i !== index)
    }));
  };


  // Personal Information Step
  const renderPersonalInfo = () => (
    <div className="onboarding-step">
      <div className="step-header">
        <FiUser className="step-icon" />
        <div>
          <h2>Personal Information</h2>
          <p>Let's get to know you better</p>
        </div>
      </div>
      
      <form className="onboarding-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name*</label>
            <input 
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="e.g., John Doe"
            />
          </div>
          
          <div className="form-group">
            <label>Date of Birth*</label>
            <input 
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Gender*</label>
            <select 
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-say">Prefer not to say</option>
            </select>
          </div>

          <div className="form-group">
            <label>Nationality*</label>
            <input 
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              required
              placeholder="e.g., Kenyan"
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>National ID Number</label>
            <input 
              type="text"
              name="nationalID"
              value={formData.nationalID}
              onChange={handleInputChange}
              placeholder="Enter your ID number"
            />
          </div>

          <div className="form-group">
            <label>Passport Number</label>
            <input 
              type="text"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleInputChange}
              placeholder="Enter passport number (if any)"
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Marital Status</label>
            <select 
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
            >
              <option value="">Select Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Profile Photo</label>
            <div className="file-upload">
              <input 
                type="file"
                name="profilePhoto"
                accept="image/*"
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  profilePhoto: e.target.files[0]
                }))}
              />
              <p className="file-hint">Maximum size: 5MB (JPEG, PNG)</p>
            </div>
          </div>
        </div>

        <div className="form-navigation">
          <button type="button" onClick={() => setStep(2)} className="next-btn">
            Continue to Contact Information
            <FiCheck className="btn-icon" />
          </button>
        </div>
      </form>
    </div>
  );

  // Contact Information Step
  const renderContactInfo = () => (
    <div className="onboarding-step">
      <div className="step-header">
        <FiPhone className="step-icon" />
        <div>
          <h2>Contact Information</h2>
          <p>How can employers reach you?</p>
        </div>
      </div>

      <form className="onboarding-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Email Address*</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your@email.com"
            />
          </div>
          
          <div className="form-group">
            <label>Phone Number*</label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="+254 XXX XXX XXX"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Alternative Phone Number</label>
          <input 
            type="tel"
            name="alternatePhone"
            value={formData.alternatePhone}
            onChange={handleInputChange}
            placeholder="+254 XXX XXX XXX"
          />
        </div>

        <div className="form-group">
          <label>Physical Address*</label>
          <textarea 
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            placeholder="Enter your current residential address"
            rows="3"
          />
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>City/Town*</label>
            <input 
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              placeholder="e.g., Nairobi"
            />
          </div>
          
          <div className="form-group">
            <label>Country*</label>
            <input 
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              placeholder="e.g., Kenya"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Postal Code</label>
          <input 
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            placeholder="Enter postal code"
          />
        </div>

        <div className="form-navigation">
          <button type="button" onClick={() => setStep(1)} className="back-btn">
            Back to Personal Info
          </button>
          <button type="button" onClick={() => setStep(3)} className="next-btn">
            Continue to Professional Info
            <FiCheck className="btn-icon" />
          </button>
        </div>
      </form>
    </div>
  );

  // Professional Information Step
  const renderProfessionalInfo = () => (
    <div className="onboarding-step">
      <div className="step-header">
        <FiBriefcase className="step-icon" />
        <div>
          <h2>Professional Information</h2>
          <p>Tell us about your career path</p>
        </div>
      </div>
      
      <form className="onboarding-form">
        <div className="form-group">
          <label>Professional Title*</label>
          <input 
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            placeholder="e.g., Senior Software Engineer"
          />
        </div>

        <div className="form-group">
          <label>Professional Summary*</label>
          <textarea 
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            required
            rows="4"
            placeholder="Provide a brief overview of your professional background, key achievements, and career aspirations"
          />
        </div>

        <div className="social-profiles">
          <h3>Professional Profiles</h3>
          
          <div className="form-grid">
            <div className="form-group">
              <label>LinkedIn URL</label>
              <input 
                type="url"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
            
            <div className="form-group">
              <label>Portfolio Website</label>
              <input 
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleInputChange}
                placeholder="https://yourportfolio.com"
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>GitHub URL</label>
              <input 
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleInputChange}
                placeholder="https://github.com/yourusername"
              />
            </div>
            
            <div className="form-group">
              <label>Behance URL</label>
              <input 
                type="url"
                name="behanceUrl"
                value={formData.behanceUrl}
                onChange={handleInputChange}
                placeholder="https://behance.net/yourprofile"
              />
            </div>
          </div>
        </div>

        <div className="form-preferences">
          <h3>Work Preferences</h3>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Expected Salary (Monthly in KES)*</label>
              <input 
                type="number"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleInputChange}
                required
                placeholder="e.g., 150000"
              />
            </div>
            
            <div className="form-group">
              <label>Notice Period (in days)*</label>
              <input 
                type="number"
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleInputChange}
                required
                placeholder="e.g., 30"
              />
            </div>
          </div>

          <div className="checkbox-group">
            <label>Preferred Work Types</label>
            <div className="checkbox-options">
              {['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'].map((type) => (
                <label key={type} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.jobTypes.includes(type)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleArrayInput('jobTypes', type);
                      } else {
                        removeArrayItem('jobTypes', formData.jobTypes.indexOf(type));
                      }
                    }}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="checkbox-group">
            <label>Work Mode Preferences</label>
            <div className="checkbox-options">
              {['Remote', 'Hybrid', 'On-site'].map((mode) => (
                <label key={mode} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.workModes.includes(mode)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleArrayInput('workModes', mode);
                      } else {
                        removeArrayItem('workModes', formData.workModes.indexOf(mode));
                      }
                    }}
                  />
                  {mode}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.willingToRelocate}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  willingToRelocate: e.target.checked
                }))}
              />
              Willing to Relocate
            </label>
          </div>
        </div>

        <div className="form-navigation">
          <button type="button" onClick={() => setStep(2)} className="back-btn">
            Back to Contact Info
          </button>
          <button type="button" onClick={() => setStep(4)} className="next-btn">
            Continue to Education
            <FiCheck className="btn-icon" />
          </button>
        </div>
      </form>
    </div>
  );

  const RenderEducation = () => {
    const [currentEducation, setCurrentEducation] = useState({
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      grade: '',
      activities: '',
      achievements: [],
      isCurrentlyStudying: false,
      location: '',
      certificateUrl: null
    });
  
    const addEducation = () => {
      if (currentEducation.institution && currentEducation.degree) {
        setFormData(prev => ({
          ...prev,
          education: [...prev.education, currentEducation]
        }));
        setCurrentEducation({
          institution: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          grade: '',
          activities: '',
          achievements: [],
          isCurrentlyStudying: false,
          location: '',
          certificateUrl: null
        });
      }
    };
  
  
    return (
      <div className="onboarding-step">
        <div className="step-header">
          <FiBook className="step-icon" />
          <div>
            <h2>Education Background</h2>
            <p>Tell us about your academic journey</p>
          </div>
        </div>

        {formData.education.length > 0 && (
          <div className="education-list">
            <h3>Added Education</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-card-header">
                  <h4>{edu.institution}</h4>
                  <button 
                    className="remove-btn"
                    onClick={() => removeArrayItem('education', index)}
                  >
                    Remove
                  </button>
                </div>
                <p className="degree">{edu.degree} in {edu.field}</p>
                <p className="date">{edu.startDate} - {edu.isCurrentlyStudying ? 'Present' : edu.endDate}</p>
                {edu.grade && <p className="grade">Grade: {edu.grade}</p>}
              </div>
            ))}
          </div>
        )}
        
        <form className="onboarding-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Institution Name*</label>
              <input 
                type="text"
                value={currentEducation.institution}
                onChange={(e) => setCurrentEducation({
                  ...currentEducation,
                  institution: e.target.value
                })}
                placeholder="e.g., University of Nairobi"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Degree/Certificate*</label>
              <select
                value={currentEducation.degree}
                onChange={(e) => setCurrentEducation({
                  ...currentEducation,
                  degree: e.target.value
                })}
                required
              >
                <option value="">Select Degree</option>
                <option value="Ph.D">Ph.D</option>
                <option value="Masters">Masters</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Diploma">Diploma</option>
                <option value="Certificate">Certificate</option>
                <option value="High School">High School</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Field of Study*</label>
            <input 
              type="text"
              value={currentEducation.field}
              onChange={(e) => setCurrentEducation({
                ...currentEducation,
                field: e.target.value
              })}
              placeholder="e.g., Computer Science"
              required
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Start Date*</label>
              <input 
                type="date"
                value={currentEducation.startDate}
                onChange={(e) => setCurrentEducation({
                  ...currentEducation,
                  startDate: e.target.value
                })}
                required
              />
            </div>
            
            <div className="form-group">
              <label>End Date</label>
              <input 
                type="date"
                value={currentEducation.endDate}
                onChange={(e) => setCurrentEducation({
                  ...currentEducation,
                  endDate: e.target.value
                })}
                disabled={currentEducation.isCurrentlyStudying}
              />
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={currentEducation.isCurrentlyStudying}
                  onChange={(e) => setCurrentEducation({
                    ...currentEducation,
                    isCurrentlyStudying: e.target.checked,
                    endDate: e.target.checked ? '' : currentEducation.endDate
                  })}
                />
                Currently Studying
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Grade/GPA</label>
            <input 
              type="text"
              value={currentEducation.grade}
              onChange={(e) => setCurrentEducation({
                ...currentEducation,
                grade: e.target.value
              })}
              placeholder="e.g., 3.8/4.0 or First Class Honours"
            />
          </div>

          <div className="form-group">
            <label>Activities and Societies</label>
            <textarea 
              value={currentEducation.activities}
              onChange={(e) => setCurrentEducation({
                ...currentEducation,
                activities: e.target.value
              })}
              placeholder="List any clubs, societies, or activities you participated in"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Upload Certificate (Optional)</label>
            <input 
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setCurrentEducation({
                ...currentEducation,
                certificateUrl: e.target.files[0]
              })}
            />
            <p className="file-hint">Maximum size: 5MB (PDF, JPEG, PNG)</p>
          </div>

          <button 
            type="button" 
            onClick={addEducation}
            className="add-btn"
          >
            + Add Education
          </button>

          <div className="form-navigation">
            <button type="button" onClick={() => setStep(3)} className="back-btn">
              Back to Professional Info
            </button>
            <button 
              type="button" 
              onClick={() => setStep(5)} 
              className="next-btn"
              disabled={formData.education.length === 0}
            >
              Continue to Work Experience
              <FiCheck className="btn-icon" />
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Work Experience Step
const RenderWorkExperience = () => {
    const [currentExperience, setCurrentExperience] = useState({
      title: '',
      company: '',
      location: '',
      employmentType: '',
      startDate: '',
      endDate: '',
      isCurrentJob: false,
      description: '',
      achievements: [''],
      technologies: [],
      projectsCompleted: '',
      teamSize: '',
      references: {
        name: '',
        position: '',
        contact: ''
      }
    });
  
    const addExperience = () => {
      if (currentExperience.title && currentExperience.company) {
        setFormData(prev => ({
          ...prev,
          experiences: [...prev.experiences, currentExperience]
        }));
        setCurrentExperience({
          title: '',
          company: '',
          location: '',
          employmentType: '',
          startDate: '',
          endDate: '',
          isCurrentJob: false,
          description: '',
          achievements: [''],
          technologies: [],
          projectsCompleted: '',
          teamSize: '',
          references: {
            name: '',
            position: '',
            contact: ''
          }
        });
      }
    };
  
    const addAchievement = () => {
      setCurrentExperience(prev => ({
        ...prev,
        achievements: [...prev.achievements, '']
      }));
    };
  
    const updateAchievement = (index, value) => {
      setCurrentExperience(prev => ({
        ...prev,
        achievements: prev.achievements.map((achievement, i) => 
          i === index ? value : achievement
        )
      }));
    };
  
    return (
      <div className="onboarding-step">
        <div className="step-header">
          <FiBriefcase className="step-icon" />
          <div>
            <h2>Work Experience</h2>
            <p>Tell us about your professional journey</p>
          </div>
        </div>

        {formData.experiences.length > 0 && (
          <div className="experience-list">
            <h3>Added Experiences</h3>
            {formData.experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-card-header">
                  <h4>{exp.title}</h4>
                  <button 
                    className="remove-btn"
                    onClick={() => removeArrayItem('experiences', index)}
                  >
                    Remove
                  </button>
                </div>
                <p className="company">{exp.company}</p>
                <p className="date">
                  {exp.startDate} - {exp.isCurrentJob ? 'Present' : exp.endDate}
                </p>
                <p className="location">{exp.location}</p>
              </div>
            ))}
          </div>
        )}

        <form className="onboarding-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Job Title*</label>
              <input 
                type="text"
                value={currentExperience.title}
                onChange={(e) => setCurrentExperience({
                  ...currentExperience,
                  title: e.target.value
                })}
                placeholder="e.g., Senior Software Engineer"
                required
              />
            </div>

            <div className="form-group">
              <label>Company Name*</label>
              <input 
                type="text"
                value={currentExperience.company}
                onChange={(e) => setCurrentExperience({
                  ...currentExperience,
                  company: e.target.value
                })}
                placeholder="e.g., Tech Solutions Ltd"
                required
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Employment Type*</label>
              <select
                value={currentExperience.employmentType}
                onChange={(e) => setCurrentExperience({
                  ...currentExperience,
                  employmentType: e.target.value
                })}
                required
              >
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="form-group">
              <label>Location*</label>
              <input 
                type="text"
                value={currentExperience.location}
                onChange={(e) => setCurrentExperience({
                  ...currentExperience,
                  location: e.target.value
                })}
                placeholder="e.g., Nairobi, Kenya"
                required
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Start Date*</label>
              <input 
                type="date"
                value={currentExperience.startDate}
                onChange={(e) => setCurrentExperience({
                  ...currentExperience,
                  startDate: e.target.value
                })}
                required
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input 
                type="date"
                value={currentExperience.endDate}
                onChange={(e) => setCurrentExperience({
                  ...currentExperience,
                  endDate: e.target.value
                })}
                disabled={currentExperience.isCurrentJob}
              />
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={currentExperience.isCurrentJob}
                  onChange={(e) => setCurrentExperience({
                    ...currentExperience,
                    isCurrentJob: e.target.checked,
                    endDate: e.target.checked ? '' : currentExperience.endDate
                  })}
                />
                Current Job
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Job Description*</label>
            <textarea 
              value={currentExperience.description}
              onChange={(e) => setCurrentExperience({
                ...currentExperience,
                description: e.target.value
              })}
              placeholder="Describe your role, responsibilities, and key contributions"
              rows="4"
              required
            />
          </div>

          <div className="achievements-section">
            <label>Key Achievements</label>
            {currentExperience.achievements.map((achievement, index) => (
              <div key={index} className="achievement-input">
                <input 
                  type="text"
                  value={achievement}
                  onChange={(e) => updateAchievement(index, e.target.value)}
                  placeholder="e.g., Increased team productivity by 25% through process automation"
                />
                {index === currentExperience.achievements.length - 1 && (
                  <button 
                    type="button"
                    onClick={addAchievement}
                    className="add-achievement-btn"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="form-group">
            <label>Technologies Used</label>
            <input 
              type="text"
              value={currentExperience.technologies.join(', ')}
              onChange={(e) => setCurrentExperience({
                ...currentExperience,
                technologies: e.target.value.split(',').map(tech => tech.trim())
              })}
              placeholder="e.g., React, Node.js, Python (comma-separated)"
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Projects Completed</label>
              <input 
                type="number"
                value={currentExperience.projectsCompleted}
                onChange={(e) => setCurrentExperience({
                  ...currentExperience,
                  projectsCompleted: e.target.value
                })}
                placeholder="Number of projects"
              />
            </div>

            <div className="form-group">
              <label>Team Size</label>
              <input 
                type="number"
                value={currentExperience.teamSize}
                onChange={(e) => setCurrentExperience({
                  ...currentExperience,
                  teamSize: e.target.value
                })}
                placeholder="Number of team members"
              />
            </div>
          </div>

          <div className="reference-section">
            <h4>Reference (Optional)</h4>
            <div className="form-grid">
              <div className="form-group">
                <label>Reference Name</label>
                <input 
                  type="text"
                  value={currentExperience.references.name}
                  onChange={(e) => setCurrentExperience({
                    ...currentExperience,
                    references: {
                      ...currentExperience.references,
                      name: e.target.value
                    }
                  })}
                  placeholder="Reference's full name"
                />
              </div>

              <div className="form-group">
                <label>Reference Position</label>
                <input 
                  type="text"
                  value={currentExperience.references.position}
                  onChange={(e) => setCurrentExperience({
                    ...currentExperience,
                    references: {
                      ...currentExperience.references,
                      position: e.target.value
                    }
                  })}
                  placeholder="e.g., Project Manager"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Reference Contact</label>
              <input 
                type="text"
                value={currentExperience.references.contact}
                onChange={(e) => setCurrentExperience({
                  ...currentExperience,
                  references: {
                    ...currentExperience.references,
                    contact: e.target.value
                  }
                })}
                placeholder="Email or phone number"
              />
            </div>
          </div>

          <button 
            type="button" 
            onClick={addExperience}
            className="add-btn"
          >
            + Add Experience
          </button>

          <div className="form-navigation">
            <button type="button" onClick={() => setStep(4)} className="back-btn">
              Back to Education
            </button>
            <button 
              type="button" 
              onClick={() => setStep(6)} 
              className="next-btn"
            >
              Continue to Skills
              <FiCheck className="btn-icon" />
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Additional Information Step
const RenderAdditionalInfo = () => {
    const [currentAchievement, setCurrentAchievement] = useState({
      title: '',
      date: '',
      description: ''
    });
  
    const [currentVolunteer, setCurrentVolunteer] = useState({
      organization: '',
      role: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  
    const addAchievement = () => {
      if (currentAchievement.title) {
        setFormData(prev => ({
          ...prev,
          achievements: [...prev.achievements, currentAchievement]
        }));
        setCurrentAchievement({ title: '', date: '', description: '' });
      }
    };
  
    const addVolunteer = () => {
      if (currentVolunteer.organization) {
        setFormData(prev => ({
          ...prev,
          volunteerWork: [...prev.volunteerWork, currentVolunteer]
        }));
        setCurrentVolunteer({
          organization: '',
          role: '',
          startDate: '',
          endDate: '',
          description: ''
        });
      }
    };
  
    return (
      <div className="onboarding-step">
        <div className="step-header">
          <FiLayers className="step-icon" />
          <div>
            <h2>Additional Information</h2>
            <p>Share other relevant achievements and activities</p>
          </div>
        </div>

        <form className="onboarding-form">
          {/* Achievements Section */}
          <div className="achievements-section">
            <h3>Notable Achievements</h3>

            {formData.achievements.length > 0 && (
              <div className="achievements-list">
                {formData.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-header">
                      <h4>{achievement.title}</h4>
                      <button
                        type="button"
                        onClick={() => removeArrayItem('achievements', index)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="date">{achievement.date}</p>
                    <p className="description">{achievement.description}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="form-group">
              <label>Achievement Title</label>
              <input 
                type="text"
                value={currentAchievement.title}
                onChange={(e) => setCurrentAchievement({
                  ...currentAchievement,
                  title: e.target.value
                })}
                placeholder="e.g., Best Employee of the Year"
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Date</label>
                <input 
                  type="date"
                  value={currentAchievement.date}
                  onChange={(e) => setCurrentAchievement({
                    ...currentAchievement,
                    date: e.target.value
                  })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea 
                value={currentAchievement.description}
                onChange={(e) => setCurrentAchievement({
                  ...currentAchievement,
                  description: e.target.value
                })}
                placeholder="Describe your achievement"
                rows="3"
              />
            </div>

            <button 
              type="button" 
              onClick={addAchievement}
              className="add-btn"
            >
              + Add Achievement
            </button>
          </div>

          {/* Volunteer Work Section */}
          <div className="volunteer-section">
            <h3>Volunteer Experience</h3>

            {formData.volunteerWork.length > 0 && (
              <div className="volunteer-list">
                {formData.volunteerWork.map((volunteer, index) => (
                  <div key={index} className="volunteer-card">
                    <div className="volunteer-header">
                      <h4>{volunteer.role} at {volunteer.organization}</h4>
                      <button
                        type="button"
                        onClick={() => removeArrayItem('volunteerWork', index)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="date">{volunteer.startDate} - {volunteer.endDate}</p>
                    <p className="description">{volunteer.description}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="form-grid">
              <div className="form-group">
                <label>Organization</label>
                <input 
                  type="text"
                  value={currentVolunteer.organization}
                  onChange={(e) => setCurrentVolunteer({
                    ...currentVolunteer,
                    organization: e.target.value
                  })}
                  placeholder="Organization name"
                />
              </div>

              <div className="form-group">
                <label>Role</label>
                <input 
                  type="text"
                  value={currentVolunteer.role}
                  onChange={(e) => setCurrentVolunteer({
                    ...currentVolunteer,
                    role: e.target.value
                  })}
                  placeholder="Your role"
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Start Date</label>
                <input 
                  type="date"
                  value={currentVolunteer.startDate}
                  onChange={(e) => setCurrentVolunteer({
                    ...currentVolunteer,
                    startDate: e.target.value
                  })}
                />
              </div>

              <div className="form-group">
                <label>End Date</label>
                <input 
                  type="date"
                  value={currentVolunteer.endDate}
                  onChange={(e) => setCurrentVolunteer({
                    ...currentVolunteer,
                    endDate: e.target.value
                  })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea 
                value={currentVolunteer.description}
                onChange={(e) => setCurrentVolunteer({
                  ...currentVolunteer,
                  description: e.target.value
                })}
                placeholder="Describe your volunteer work"
                rows="3"
              />
            </div>

            <button 
              type="button" 
              onClick={addVolunteer}
              className="add-btn"
            >
              + Add Volunteer Work
            </button>
          </div>

          {/* Final Navigation */}
          <div className="form-navigation">
            <button type="button" onClick={() => setStep(7)} className="back-btn">
              Back to Languages & Certifications
            </button>
            <button 
              type="button" 
              onClick={handleSubmit}
              className="submit-btn"
            >
              Complete Profile
              <FiCheck className="btn-icon" />
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Final submission handler
  const handleSubmit = async () => {
    try {
      // Save to localStorage for now
      localStorage.setItem('userProfile', JSON.stringify(formData));
      
      // Show success message
      alert('Profile completed successfully!');
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('There was an error saving your profile. Please try again.');
    }
  };

 // Step rendering logic
const renderStep = () => {
    switch(step) {
      case 1:
        return renderPersonalInfo();
      case 2:
        return renderContactInfo();
      case 3:
        return renderProfessionalInfo();
      case 4:
        return RenderEducation();
      case 5:
        return RenderWorkExperience();
      case 6:
        return RenderAdditionalInfo();
      default:
        return renderPersonalInfo();
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-progress">
        <div 
          className="progress-bar" 
          style={{width: `${(step/8) * 100}%`}} 
        />
      </div>
      {renderStep()}
    </div>
  );
};

export default Onboarding;