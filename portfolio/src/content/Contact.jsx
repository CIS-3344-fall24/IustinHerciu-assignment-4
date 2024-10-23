export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>ME</span></h2>

            <form action="#">
                <div className="input-box">
                    <input type={"text"} placeholder={"Full Name"} />
                    <input type={"email"} placeholder={"Email Address"} />
                </div>

                <div className="input-box">
                    <input type={"number"} placeholder={"Phone Number"} />
                    <input type={"text"} placeholder={"Email Subject"} />
                </div>

            </form>
        </section>
    );
}