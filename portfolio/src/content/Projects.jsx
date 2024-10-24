export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h2 className="heading">
                <span>Projects</span>
            </h2>

            <div className="projects-container">
                <div className="projects-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>BlackJack Game</h3>
                    <p>
                        A basic card game developed in Java where players aim to get
                        as close to 21 as possible without exceeding it. The project
                        features simple game logic and user interaction, making it
                        an easy-to-play, console-based game.
                    </p>
                    <p>
                        <strong>Tech Style: Java</strong>
                    </p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="https://github.com/iustinherciu2000/BlackJack" className="btn" target={"_blank"}
                       rel="noreferrer">GitHub Link</a>
                </div>
                <div className="projects-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Olympic Silver Medalists</h3>
                    <p>
                        Created an application that shows the user the top 15 Silver Medalists at the 2024 Paris
                        Olympics.
                        Then the user is able to click on an image and will get the name and a description of the
                        athlete.
                    </p>
                    <p>
                        <strong>
                            Tech Style: Android Studio(Kotlin)
                        </strong>
                    </p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="https://github.com/TempleCIS3515/assignment-4-iustinherciu2000" className="btn">GitHub
                        Link</a>
                </div>
                <div className="projects-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Knowledge Quiz</h3>
                    <p>

                        Test your knowledge with our interactive quiz platform! Explore quizzes in Physics, Geography,
                        and Architecture to challenge yourself and learn something new. From natural laws to world landmarks
                        and architectural wonders, there's a quiz for everyone. Track your progress and have fun learning!
                    </p>
                    <p>
                        <strong>
                            Tech Style: HTML, CSS, Javascript
                        </strong>
                    </p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="https://github.com/CIS-3344-fall24/IustinHerciu-project-MS1" className="btn">GitHub
                        Link</a>
                </div>
                <div className="projects-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>SignUpForm App</h3>
                    <p>
                        Created an application that collects a user’s name, email, program, a password, and a password
                        confirmation. It displays a message containing the user’s name, welcoming
                        them to the app. e.g. “Welcome, Jayne Dough, to the SignUpForm App”.
                    </p>
                    <p>
                        <strong>
                            Tech Style: Android Studio(Kotlin)
                        </strong>
                    </p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="https://github.com/TempleCIS3515/assignment-2-iustinherciu2000" className="btn">GitHub Link</a>
                </div>
            </div>
        </section>
    );
}