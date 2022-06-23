import { Container } from "react-bootstrap";
import NavTop from "../elements/NavTop";
import './About.css';

function About() {
    return (
        <>
            <NavTop />
            <Container className="my-5 px-4">
                <h1 className="about-title pb-3">🔑&nbsp;&nbsp;Tentang</h1>
                <p className="about-desc m-0">Tujuan utama dibuatnya <strong>GuessYourCrush</strong> adalah untuk bersenang senang atau hiburan semata. Semoga dengan adanya <strong>GuessYourCrush</strong> bisa menjadi hiburan yang seru bagi siapa saja yang memainkannya.<br /> <i><strong>#GYC&nbsp;&nbsp;#GuessYourCrush&nbsp;&nbsp;#TebakNama</strong></i></p>
                <div className="mt-4 mb-5">
                    <h4 className="about-section">💻 Scripter & Concept</h4>
                    <p>
                        <a className="about-content" href="https://www.instagram.com/syafffwan/" target="_blank" rel="noreferrer">@Syafwan</a>
                    </p>
                </div>
                <div className="mt-3">
                    <h4 className="about-section">🎨 Artist</h4>   
                    <p>
                        <a className="about-content" href="https://www.instagram.com/fiq.un/" target="_blank" rel="noreferrer">@fiquun</a>
                    </p>
                </div>
            </Container>
        </>
    )
}

export default About;