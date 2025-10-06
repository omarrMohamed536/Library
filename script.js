// Course data
const courses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        instructor: "Sarah Johnson",
        description: "Learn HTML, CSS, JavaScript, React, Node.js and build real-world projects.",
        price: "$199",
        rating: 4.8,
        category: "programming",
        image: "fas fa-code"
    },
    {
        id: 2,
        title: "UI/UX Design Masterclass",
        instructor: "Michael Chen",
        description: "Master the principles of user interface and user experience design.",
        price: "$149",
        rating: 4.9,
        category: "design",
        image: "fas fa-palette"
    },
    {
        id: 3,
        title: "Digital Marketing Strategy",
        instructor: "Emily Rodriguez",
        description: "Learn modern digital marketing techniques and grow your business online.",
        price: "$129",
        rating: 4.7,
        category: "business",
        image: "fas fa-chart-line"
    },
    {
        id: 4,
        title: "Spanish for Beginners",
        instructor: "Carlos Mendez",
        description: "Start your Spanish learning journey with this comprehensive beginner course.",
        price: "$89",
        rating: 4.6,
        category: "language",
        image: "fas fa-language"
    },
    {
        id: 5,
        title: "Python Programming Fundamentals",
        instructor: "David Kim",
        description: "Learn Python from scratch and build your first applications.",
        price: "$179",
        rating: 4.8,
        category: "programming",
        image: "fas fa-python"
    },
    {
        id: 6,
        title: "Graphic Design Essentials",
        instructor: "Lisa Wang",
        description: "Master Adobe Creative Suite and create stunning visual designs.",
        price: "$159",
        rating: 4.7,
        category: "design",
        image: "fas fa-paint-brush"
    },
    {
        id: 7,
        title: "Business Analytics",
        instructor: "Robert Taylor",
        description: "Learn data analysis and business intelligence to make data-driven decisions.",
        price: "$199",
        rating: 4.9,
        category: "business",
        image: "fas fa-chart-bar"
    },
    {
        id: 8,
        title: "French Conversation",
        instructor: "Marie Dubois",
        description: "Improve your French speaking skills with practical conversation practice.",
        price: "$99",
        rating: 4.5,
        category: "language",
        image: "fas fa-comments"
    },
    {
        id: 9,
        title: "Mobile App Development",
        instructor: "Alex Thompson",
        description: "Build iOS and Android apps using React Native and Flutter.",
        price: "$249",
        rating: 4.8,
        category: "programming",
        image: "fas fa-mobile-alt"
    },
    {
        id: 10,
        title: "Photography Mastery",
        instructor: "James Wilson",
        description: "Learn professional photography techniques and post-processing.",
        price: "$139",
        rating: 4.6,
        category: "design",
        image: "fas fa-camera"
    },
    {
        id: 11,
        title: "Entrepreneurship 101",
        instructor: "Jennifer Lee",
        description: "Start and scale your own business with proven entrepreneurial strategies.",
        price: "$169",
        rating: 4.7,
        category: "business",
        image: "fas fa-rocket"
    },
    {
        id: 12,
        title: "Japanese Language Course",
        instructor: "Yuki Tanaka",
        description: "Learn Japanese from basic to intermediate level with cultural insights.",
        price: "$119",
        rating: 4.8,
        category: "language",
        image: "fas fa-globe-asia"
    }
];

// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const courseFilters = document.querySelectorAll('.filter-btn');
const coursesGrid = document.getElementById('courses-grid');
const contactForm = document.querySelector('.contact-form');

// Mobile Menu Toggle
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Course filtering functionality
function filterCourses(category) {
    const filteredCourses = category === 'all' 
        ? courses 
        : courses.filter(course => course.category === category);
    
    displayCourses(filteredCourses);
}

// Display courses in the grid
function displayCourses(coursesToShow) {
    coursesGrid.innerHTML = '';
    
    coursesToShow.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesGrid.appendChild(courseCard);
    });
}

// Create course card element
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
        <div class="course-image">
            <i class="${course.image}"></i>
            <div class="course-category">${course.category.charAt(0).toUpperCase() + course.category.slice(1)}</div>
        </div>
        <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <p class="course-instructor">by ${course.instructor}</p>
            <p class="course-description">${course.description}</p>
            <div class="course-footer">
                <span class="course-price">${course.price}</span>
                <div class="course-rating">
                    <div class="stars">
                        ${generateStars(course.rating)}
                    </div>
                    <span class="rating-text">${course.rating}</span>
                </div>
            </div>
        </div>
    `;
    
    // Add click event to course card
    card.addEventListener('click', () => {
        showCourseModal(course);
    });
    
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Course modal functionality
function showCourseModal(course) {
    const modal = document.createElement('div');
    modal.className = 'course-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <div class="modal-header">
                    <div class="modal-image">
                        <i class="${course.image}"></i>
                    </div>
                    <div class="modal-info">
                        <h2>${course.title}</h2>
                        <p class="modal-instructor">by ${course.instructor}</p>
                        <div class="modal-rating">
                            <div class="stars">
                                ${generateStars(course.rating)}
                            </div>
                            <span class="rating-text">${course.rating} (1,234 reviews)</span>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <h3>About this course</h3>
                    <p>${course.description}</p>
                    <p>This comprehensive course will take you from beginner to advanced level, covering all the essential concepts and practical applications. You'll work on real-world projects and build a portfolio that showcases your new skills.</p>
                    
                    <h3>What you'll learn</h3>
                    <ul class="learning-list">
                        <li>Master the fundamentals and advanced concepts</li>
                        <li>Build real-world projects and applications</li>
                        <li>Learn industry best practices and standards</li>
                        <li>Get hands-on experience with practical exercises</li>
                        <li>Receive a certificate of completion</li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <div class="modal-price">
                        <span class="price">${course.price}</span>
                        <span class="price-note">One-time payment</span>
                    </div>
                    <button class="btn btn-primary enroll-btn">Enroll Now</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(modal);
        }
    });
    
    // Enroll button functionality
    const enrollBtn = modal.querySelector('.enroll-btn');
    enrollBtn.addEventListener('click', () => {
        showEnrollmentMessage(course.title);
        document.body.removeChild(modal);
    });
}

// Show enrollment success message
function showEnrollmentMessage(courseTitle) {
    const message = document.createElement('div');
    message.className = 'enrollment-message';
    message.innerHTML = `
        <div class="message-content">
            <i class="fas fa-check-circle"></i>
            <h3>Enrollment Successful!</h3>
            <p>You have successfully enrolled in "${courseTitle}". Check your email for course access details.</p>
            <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()">Continue</button>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(message)) {
            document.body.removeChild(message);
        }
    }, 5000);
}

// Filter button event listeners
courseFilters.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        courseFilters.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Filter courses
        const category = btn.getAttribute('data-filter');
        filterCourses(category);
    });
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showContactSuccess();
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Show contact form success message
function showContactSuccess() {
    const message = document.createElement('div');
    message.className = 'contact-message';
    message.innerHTML = `
        <div class="message-content">
            <i class="fas fa-check-circle"></i>
            <h3>Message Sent!</h3>
            <p>Thank you for your message. We'll get back to you within 24 hours.</p>
            <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(message)) {
            document.body.removeChild(message);
        }
    }, 5000);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Hero button functionality
document.addEventListener('DOMContentLoaded', () => {
    const startLearningBtn = document.querySelector('.hero-buttons .btn-primary');
    const browseCoursesBtn = document.querySelector('.hero-buttons .btn-secondary');
    
    if (startLearningBtn) {
        startLearningBtn.addEventListener('click', () => {
            document.querySelector('#courses').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    if (browseCoursesBtn) {
        browseCoursesBtn.addEventListener('click', () => {
            document.querySelector('#courses').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display all courses initially
    displayCourses(courses);
    
    // Add animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .course-card, .about-text, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add CSS for modal and messages
const additionalCSS = `
    .course-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-content {
        background: #fff;
        border-radius: 20px;
        max-width: 600px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        animation: modalSlideIn 0.3s ease;
    }
    
    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 2rem;
        cursor: pointer;
        color: #64748b;
        z-index: 1;
    }
    
    .modal-close:hover {
        color: #1e293b;
    }
    
    .modal-header {
        display: flex;
        gap: 2rem;
        padding: 2rem;
        border-bottom: 1px solid #e2e8f0;
    }
    
    .modal-image {
        width: 100px;
        height: 100px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .modal-image i {
        font-size: 2.5rem;
        color: #fff;
    }
    
    .modal-info h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #1e293b;
    }
    
    .modal-instructor {
        color: #64748b;
        margin-bottom: 1rem;
    }
    
    .modal-rating {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .modal-body {
        padding: 2rem;
    }
    
    .modal-body h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #1e293b;
    }
    
    .modal-body p {
        color: #64748b;
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    .learning-list {
        list-style: none;
        padding: 0;
    }
    
    .learning-list li {
        padding: 0.5rem 0;
        color: #64748b;
        position: relative;
        padding-left: 1.5rem;
    }
    
    .learning-list li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #10b981;
        font-weight: bold;
    }
    
    .modal-footer {
        padding: 2rem;
        border-top: 1px solid #e2e8f0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .modal-price {
        text-align: left;
    }
    
    .price {
        font-size: 2rem;
        font-weight: 700;
        color: #6366f1;
        display: block;
    }
    
    .price-note {
        color: #64748b;
        font-size: 0.9rem;
    }
    
    .enrollment-message,
    .contact-message {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
        padding: 20px;
    }
    
    .message-content {
        background: #fff;
        padding: 2rem;
        border-radius: 20px;
        text-align: center;
        max-width: 400px;
        width: 100%;
        animation: messageSlideIn 0.3s ease;
    }
    
    @keyframes messageSlideIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .message-content i {
        font-size: 3rem;
        color: #10b981;
        margin-bottom: 1rem;
    }
    
    .message-content h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #1e293b;
    }
    
    .message-content p {
        color: #64748b;
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }
    
    @media (max-width: 768px) {
        .modal-header {
            flex-direction: column;
            text-align: center;
        }
        
        .modal-footer {
            flex-direction: column;
            gap: 1rem;
        }
        
        .modal-price {
            text-align: center;
        }
    }
`;

// Add the additional CSS to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);