# Developer Portfolio

## Project Overview
This is a personal portfolio website for **Samiksha Mishra**, showcasing her skills, projects, and experience as a **UI/UX Designer, Full Stack Developer, and Machine Learning Enthusiast**. The website features a modern glassmorphic UI with smooth animations and a responsive design.

## Features
- **Typing Animation**: Dynamic text animation for the introduction.
- **Glassmorphic Navbar**: A semi-transparent, modern navigation bar.
- **Smooth Scroll Animations**: Sections fade in as they appear on the screen.
- **Responsive Design**: Fully optimized for mobile and desktop users.
- **Contact Links**: Easily connect via email or LinkedIn.
- **Preloader Animation**: A loading spinner before the page content appears.

## Technologies Used
- **HTML5 & CSS3**: Structure and styling of the website.
- **JavaScript (Vanilla JS)**: Animations and interactivity.
- **Font Awesome**: Icons for social links.
- **Google Fonts**: Custom typography for a modern look.

## File Structure
```
/portfolio
│── index.html          # Main HTML file
│── style.css           # Stylesheet for design and animations
│── script.js           # JavaScript file for interactivity
│── profile.jpg         # Profile image
│── background.jpg      # Background image for hero section
│── README.md           # Documentation (this file)
```

## Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/samikshya97689/Developer-Portfolio.git
   ```
2. Navigate to the project folder:
   ```sh
   cd portfolio
   ```
3. Open `index.html` in your browser.

## How the Code Works
### **Typing Animation** (CSS + JS)
The name **"Samikshya Mishra"** appears with a typing effect.
```css
@keyframes typing {
    0% { width: 0; }
    100% { width: 100%; }
}
.typing {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 4px solid var(--primary-color);
    animation: typing 4s steps(40) 1s 1 normal both;
}
```
```js
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.highlight').classList.add('typing');
});
```

### **Section Scroll Animation** (JS)
Each section fades in when it comes into view.
```js
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
```

## Customization
- Replace **profile.jpg** with your own image.
- Modify `index.html` to update personal details, projects, and contact information.
- Edit `style.css` to customize the design, animations, and colors.
- Update `script.js` for additional interactive features.

## License
This project is open-source and free to use.

## Contact
- **Email**: [mishrasamikshya234@gmail.com](mailto:mishrasamikshya234@gmail.com)
- **LinkedIn**: [linkedin.com/in/samikshyamishra04032002](https://www.linkedin.com/in/samikshyamishra04032002)

Feel free to modify this project to suit your personal needs!

