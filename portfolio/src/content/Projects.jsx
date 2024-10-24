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
                    <a href="https://github.com/iustinherciu2000/BlackJack" className="btn" target={"_blank"} rel="noreferrer">GitHub Link</a>
                </div>
                <div className="projects-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Add Project Name</h3>
                    <p>

                    </p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="btn">Read More</a>
                </div>
                <div className="projects-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Add Project Name</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Beatae consectetur doloremque dolorum minima nihil odit quis
                        recusandae reprehenderit vel voluptatem!</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="btn">Read More</a>
                </div>
                <div className="projects-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Add Project Name</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Beatae consectetur doloremque dolorum minima nihil odit quis
                        recusandae reprehenderit vel voluptatem!</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="btn">Read More</a>
                </div>
                <div className="projects-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Add Project Name</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Beatae consectetur doloremque dolorum minima nihil odit quis
                        recusandae reprehenderit vel voluptatem!</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
    );
}