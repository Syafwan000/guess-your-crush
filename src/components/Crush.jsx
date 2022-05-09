import { Button, Container, Form, Row, Col, Modal, ProgressBar } from "react-bootstrap";
import { BiRightArrowAlt, BiRotateRight } from "react-icons/bi";
import { useState } from "react";
import Pattern from "../assets/pattern.png";
import Information from "../assets/info.png";
import NavMain from "../elements/NavMain";
import './Crush.css';

function Crush() {
    const [value, setValue] = useState('');
    const [length, setLength] = useState('');
    const [choose, setChoose] = useState('');
    const [choose2, setChoose2] = useState('');
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    let progress = 0;
    let progress2 = 0;
    let step = 0;
    let step2 = 0;

    function numberHandler(e) {
        setValue(e.target.name);
    }
    
    function submitLength(e) {
        e.preventDefault()

        setLength(value);
        setValue('');
    }

    function clickHandler(e) {
        setChoose(choose.concat(e.target.name));
    }

    function clickHandler2(e) {
        setChoose2(choose2.concat(e.target.name));
    }

    function reset() {
        setLength('');
        setChoose('');
        setChoose2('');
    }

    function handleClose1() {
        setShow1(false);
    }

    function handleShow1() {
        setShow1(true);
    }

    function handleClose2() {
        setShow2(false);
    }

    function handleShow2() {
        setShow2(true);
    }

    function handleClose3() {
        setShow3(false);
    }

    function handleShow3() {
        setShow3(true);
    }

    if(length === "3") {

        // 3 WORD
        if(choose.length === 3) {
            progress = 33;
            step = 1;
        } else if(choose.length === 6) {
            progress = 66;
            step = 2;
        } else if(choose.length === 9) {
            progress = 100;
            step = 3;
        }

        if(choose2.length === 3) {
            progress2 = 33;
            step2 = 1;
        } else if(choose2.length === 6) {
            progress2 = 66;
            step2 = 2;
        } else if(choose2.length === 9) {
            progress2 = 100;
            step2 = 3;
        }

    } else if(length === "4") {

        // 4 WORD
        if(choose.length === 4) {
            progress = 25;
            step = 1;
        } else if(choose.length === 8) {
            progress = 50;
            step = 2;
        } else if(choose.length === 12) {
            progress = 75;
            step = 3;
        } else if(choose.length === 16) {
            progress = 100;
            step = 4;
        }

        if(choose2.length === 4) {
            progress2 = 25;
            step2 = 1;
        } else if(choose2.length === 8) {
            progress2 = 50;
            step2 = 2;
        } else if(choose2.length === 12) {
            progress2 = 75;
            step2 = 3;
        } else if(choose2.length === 16) {
            progress2 = 100;
            step2 = 4;
        }
        
    } else if(length === "5") {

        // 5 Word
        if(choose.length === 5) {
            progress = 20;
            step = 1;
        } else if(choose.length === 10) {
            progress = 40;
            step = 2;
        } else if(choose.length === 15) {
            progress = 60;
            step = 3;
        } else if(choose.length === 20) {
            progress = 80;
            step = 4;
        } else if(choose.length === 25) {
            progress = 100;
            step = 5;
        }

        if(choose2.length === 5) {
            progress2 = 20;
            step2 = 1;
        } else if(choose2.length === 10) {
            progress2 = 40;
            step2 = 2;
        } else if(choose2.length === 15) {
            progress2 = 60;
            step2 = 3;
        } else if(choose2.length === 20) {
            progress2 = 80;
            step2 = 4;
        } else if(choose2.length === 25) {
            progress2 = 100;
            step2 = 5;
        }
        
    } else if(length === "6") {

        // 6 WORD
        if(choose.length === 6) {
            progress = 16;
            step = 1;
        } else if(choose.length === 12) {
            progress = 32;
            step = 2;
        } else if(choose.length === 18) {
            progress = 48;
            step = 3;
        } else if(choose.length === 24) {
            progress = 64;
            step = 4;
        } else if(choose.length === 30) {
            progress = 80;
            step = 5;
        } else if(choose.length === 36) {
            progress = 100;
            step = 6;
        }

        if(choose2.length === 6) {
            progress2 = 16;
            step2 = 1;
        } else if(choose2.length === 12) {
            progress2 = 32;
            step2 = 2;
        } else if(choose2.length === 18) {
            progress2 = 48;
            step2 = 3;
        } else if(choose2.length === 24) {
            progress2 = 64;
            step2 = 4;
        } else if(choose2.length === 30) {
            progress2 = 80;
            step2 = 5;
        } else if(choose2.length === 36) {
            progress2 = 100;
            step2 = 6;
        }
        
    } else if(length === "7") {

        // 7 Word
        if(choose.length === 7) {
            progress = 14;
            step = 1;
        } else if(choose.length === 14) {
            progress = 28;
            step = 2;
        } else if(choose.length === 21) {
            progress = 42;
            step = 3;
        } else if(choose.length === 28) {
            progress = 56;
            step = 4;
        } else if(choose.length === 35) {
            progress = 70;
            step = 5;
        } else if(choose.length === 42) {
            progress = 84;
            step = 6;
        } else if(choose.length === 49) {
            progress = 100;
            step = 7;
        }

        if(choose2.length === 7) {
            progress2 = 14;
            step2 = 1;
        } else if(choose2.length === 14) {
            progress2 = 28;
            step2 = 2;
        } else if(choose2.length === 21) {
            progress2 = 42;
            step2 = 3;
        } else if(choose2.length === 28) {
            progress2 = 56;
            step2 = 4;
        } else if(choose2.length === 35) {
            progress2 = 70;
            step2 = 5;
        } else if(choose2.length === 42) {
            progress2 = 84;
            step2 = 6;
        } else if(choose2.length === 49) {
            progress2 = 100;
            step2 = 7;
        }
        
    } else if(length === "8") {

        // 8 Word
        if(choose.length === 8) {
            progress = 12;
            step = 1;
        } else if(choose.length === 16) {
            progress = 24;
            step = 2;
        } else if(choose.length === 24) {
            progress = 36;
            step = 3;
        } else if(choose.length === 32) {
            progress = 48;
            step = 4;
        } else if(choose.length === 40) {
            progress = 60;
            step = 5;
        } else if(choose.length === 48) {
            progress = 72;
            step = 6;
        } else if(choose.length === 56) {
            progress = 86;
            step = 7;
        } else if(choose.length === 64) {
            progress = 100;
            step = 8;
        }

        if(choose2.length === 8) {
            progress2 = 12;
            step2 = 1;
        } else if(choose2.length === 16) {
            progress2 = 24;
            step2 = 2;
        } else if(choose2.length === 24) {
            progress2 = 36;
            step2 = 3;
        } else if(choose2.length === 32) {
            progress2 = 48;
            step2 = 4;
        } else if(choose2.length === 40) {
            progress2 = 60;
            step2 = 5;
        } else if(choose2.length === 48) {
            progress2 = 72;
            step2 = 6;
        } else if(choose2.length === 56) {
            progress2 = 86;
            step2 = 7;
        } else if(choose2.length === 64) {
            progress2 = 100;
            step2 = 8;
        }
        
    } else if(length === 9) {
        
    }

    return (
        <>
            <NavMain>{length}</NavMain>
            <Container className="d-flex justify-content-center mt-4">
                <img className="information-image" width="120px" src={Information} alt="Information" />
                <div className="information-wrapper">
                    <h3 className="information-text m-0">Kami tidak akan menyimpan informasi atau data apapun</h3>
                </div>
            </Container>
            <Container className="mt-5">
                <div className="my-5 py-5 text-center">
                    <h3 className="main-title text-center"><span className="main-number">1</span> Pilih berapa huruf pada nama yang akan ditebak</h3>
                    <Button className="main-helper shadow-none" variant="link" onClick={handleShow1}>Butuh bantuan ?</Button>
                    <Modal show={show1} onHide={handleClose1} centered>
                        <Modal.Header className="justify-content-center">
                            <Modal.Title className="modal-title">Bantuan #1</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Kamu diminta untuk memilih berapa huruf yang terdapat di nama yang akan ditebak. Contohnya B-A-K-W-A-N yang terdiri dari 6 huruf. Untuk panjang huruf nama yang bisa ditebak oleh <strong>GuessYourCrush</strong> itu <i><u>minimal terdiri dari 3 huruf dan maksimal terdiri dari 7 huruf</u>.</i></Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger shadow-none" onClick={handleClose1}>
                                Tutup
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="d-flex justify-content-center mt-3">
                        <Form className="text-center" onSubmit={submitLength}>
                            <Form.Control className="main-display shadow-none" type="number" value={value} readOnly />
                            {length ? 
                            <Button className="main-btn-lanjut mt-3 shadow-none" type="submit" disabled>Lanjut <BiRightArrowAlt /></Button>
                            :
                            <Button className="main-btn-lanjut mt-3 shadow-none" type="submit">Lanjut <BiRightArrowAlt /></Button>
                            }
                        </Form>
                    </div>
                    <Container className="mt-3">
                        <Row>
                            {length ?
                            <Col className="d-flex justify-content-center my-2">
                                <Button className="keypad-number shadow-none" name="3" onClick={numberHandler} disabled>03</Button>
                                <Button className="keypad-number shadow-none" name="4" onClick={numberHandler} disabled>04</Button>
                            </Col>
                            :
                            <Col className="d-flex justify-content-center my-2">
                                <Button className="keypad-number shadow-none" name="3" onClick={numberHandler}>03</Button>
                                <Button className="keypad-number shadow-none" name="4" onClick={numberHandler}>04</Button>
                            </Col>
                            }
                        </Row>
                        <Row>
                            {length ?
                            <Col className="d-flex justify-content-center my-2">
                                <Button className="keypad-number shadow-none" name="5" onClick={numberHandler} disabled>05</Button>
                                <Button className="keypad-number shadow-none" name="6" onClick={numberHandler} disabled>06</Button>
                                <Button className="keypad-number shadow-none" name="7" onClick={numberHandler} disabled>07</Button>
                            </Col>
                            :
                            <Col className="d-flex justify-content-center my-2">
                                <Button className="keypad-number shadow-none" name="5" onClick={numberHandler}>05</Button>
                                <Button className="keypad-number shadow-none" name="6" onClick={numberHandler}>06</Button>
                                <Button className="keypad-number shadow-none" name="7" onClick={numberHandler}>07</Button>
                            </Col>
                            }
                        </Row>
                    </Container>
                </div>

{/* ============= 3 WORD ============= */}
            {length === "3" && 
            <div className="my-5 py-5 text-center">
                <h3 className="main-title text-center"><span className="main-number">2</span> Pilih baris mana saja yang terdapat huruf pada nama yang akan ditebak</h3>
                <Button className="main-helper shadow-none" variant="link" onClick={handleShow2}>Butuh bantuan ?</Button>
                <Modal show={show2} onHide={handleClose2} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title className="modal-title">Bantuan #2</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Kamu diminta untuk memilih baris yang terdapat huruf pada nama yang akan ditebak dan pastikan berurutan dari huruf awal sampai akhir. Perhatikan contoh berikut<br />
                        <div className="text-center">
                            <img className="mt-2" width="40%" src={Pattern} alt="Pattern" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger shadow-none" onClick={handleClose2}>
                            Tutup
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form.Control type="hidden" value={choose} />
                <div>
                    <div className="d-flex justify-content-center">
                        <ProgressBar className="main-progress mt-3" variant="success" striped now={progress} />
                    </div>
                    <p className="main-of mt-4">{step}/{length} Huruf</p>
                    {step === 3 ?
                    <Container className="mt-2">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="ABC" disabled><strong>1</strong> ABC</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="DEF" disabled><strong>2</strong> DEF</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="GHI" disabled><strong>3</strong> GHI</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="JKL" disabled><strong>4</strong> JKL</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="MNO" disabled><strong>5</strong> MNO</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="PQR" disabled><strong>6</strong> PQR</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="STU" disabled><strong>7</strong> STU</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="VWX" disabled><strong>8</strong> VWX</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="YZ0" disabled><strong>9</strong> YZ0</Button><br />
                    </Container>
                    :
                    <Container className="mt-2">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="ABC"><strong>1</strong> ABC</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="DEF"><strong>2</strong> DEF</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="GHI"><strong>3</strong> GHI</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="JKL"><strong>4</strong> JKL</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="MNO"><strong>5</strong> MNO</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="PQR"><strong>6</strong> PQR</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="STU"><strong>7</strong> STU</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="VWX"><strong>8</strong> VWX</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="YZ0"><strong>9</strong> YZ0</Button><br />
                    </Container>
                    }
                </div>
            </div>
            }

            {choose.length === 9 &&
            <div className="my-5 py-5 text-center">
                <h3 className="main-title text-center"><span className="main-number">3</span> Pilih baris mana saja yang terdapat huruf pada nama yang akan ditebak</h3>
                <Button className="main-helper shadow-none" variant="link" onClick={handleShow3}>Butuh bantuan ?</Button>
                <Modal show={show3} onHide={handleClose3} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title className="modal-title">Bantuan #3</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Sama seperti sebelumnya kamu diminta kembali untuk memilih baris yang terdapat huruf pada nama yang akan ditebak.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger shadow-none" onClick={handleClose3}>
                            Tutup
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form.Control type="hidden" value={choose2} />
                <div>
                    <div className="d-flex justify-content-center">
                        <ProgressBar className="main-progress mt-3" variant="success" striped now={progress2} />
                    </div>
                    <p className="main-of mt-4">{step2}/{length} Huruf</p>
                    {step2 === 3 ?
                    <Container className="mt-4">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(0, 1) + choose.slice(3, 4) + choose.slice(6, 7)} disabled><strong>1</strong> {choose.slice(0, 1) + choose.slice(3, 4) + choose.slice(6, 7)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(1, 2) + choose.slice(4, 5) + choose.slice(7, 8)} disabled><strong>2</strong> {choose.slice(1, 2) + choose.slice(4, 5) + choose.slice(7, 8)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(2, 3) + choose.slice(5, 6) + choose.slice(8, 9)} disabled><strong>3</strong> {choose.slice(2, 3) + choose.slice(5, 6) + choose.slice(8, 9)}</Button><br />
                    </Container>
                    :
                    <Container className="mt-4">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(0, 1) + choose.slice(3, 4) + choose.slice(6, 7)}><strong>1</strong> {choose.slice(0, 1) + choose.slice(3, 4) + choose.slice(6, 7)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(1, 2) + choose.slice(4, 5) + choose.slice(7, 8)}><strong>2</strong> {choose.slice(1, 2) + choose.slice(4, 5) + choose.slice(7, 8)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(2, 3) + choose.slice(5, 6) + choose.slice(8, 9)}><strong>3</strong> {choose.slice(2, 3) + choose.slice(5, 6) + choose.slice(8, 9)}</Button><br />
                    </Container>
                    }
                </div>
            </div>
            }

            {choose2.length === 9 &&
                <div className="my-5 py-5 text-center">
                    <h3 className="main-result-title text-center">Hasil tebakannya adalah . . . </h3>
                    <h1 className="main-result mt-5">{choose2.slice(0, 1) + choose2.slice(4, 5) + choose2.slice(8, 9)}</h1><br />
                    <Button className="main-reset shadow-none mt-5" variant="success" onClick={reset}><BiRotateRight className="reset-icon" /> Tebak Lagi</Button>
                </div>
            }

{/* ============= 4 WORD ============= */}
            {length === "4" && 
            <div className="my-5 py-5 text-center">
                <h3 className="main-title text-center"><span className="main-number">2</span> Pilih baris mana saja yang terdapat huruf pada nama yang akan ditebak</h3>
                <Button className="main-helper shadow-none" variant="link" onClick={handleShow2}>Butuh bantuan ?</Button>
                <Modal show={show2} onHide={handleClose2} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title className="modal-title">Bantuan #2</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Kamu diminta untuk memilih baris yang terdapat huruf pada nama yang akan ditebak dan pastikan berurutan dari huruf awal sampai akhir. Perhatikan contoh berikut<br />
                        <div className="text-center">
                            <img className="mt-2" width="40%" src={Pattern} alt="Pattern" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger shadow-none" onClick={handleClose2}>
                            Tutup
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form.Control type="hidden" value={choose} />
                <div>
                    <div className="d-flex justify-content-center">
                        <ProgressBar className="main-progress mt-3" variant="success" striped now={progress} />
                    </div>
                    <p className="main-of mt-4">{step}/{length} Huruf</p>
                    {step === 4 ?
                    <Container className="mt-2">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="ABCD" disabled><strong>1</strong> ABCD</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="EFGH" disabled><strong>2</strong> EFGH</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="IJKL" disabled><strong>3</strong> IJKL</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="MNOP" disabled><strong>4</strong> MNOP</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="QRST" disabled><strong>5</strong> QRST</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="UVWX" disabled><strong>6</strong> UVWX</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="YZ00" disabled><strong>7</strong> YZ00</Button><br />
                    </Container>
                    :
                    <Container className="mt-2">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="ABCD"><strong>1</strong> ABCD</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="EFGH"><strong>2</strong> EFGH</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="IJKL"><strong>3</strong> IJKL</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="MNOP"><strong>4</strong> MNOP</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="QRST"><strong>5</strong> QRST</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="UVWX"><strong>6</strong> UVWX</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="YZ00"><strong>7</strong> YZ00</Button><br />
                    </Container>
                    }
                </div>
            </div>
            }

            {choose.length === 16 &&
            <div className="my-5 py-5 text-center">
                <h3 className="main-title text-center"><span className="main-number">3</span> Pilih baris mana saja yang terdapat huruf pada nama yang akan ditebak</h3>
                <Button className="main-helper shadow-none" variant="link" onClick={handleShow3}>Butuh bantuan ?</Button>
                <Modal show={show3} onHide={handleClose3} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title className="modal-title">Bantuan #3</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Sama seperti sebelumnya kamu diminta kembali untuk memilih baris yang terdapat huruf pada nama yang akan ditebak.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger shadow-none" onClick={handleClose3}>
                            Tutup
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form.Control type="hidden" value={choose2} />
                <div>
                    <div className="d-flex justify-content-center">
                        <ProgressBar className="main-progress mt-3" variant="success" striped now={progress2} />
                    </div>
                    <p className="main-of mt-4">{step2}/{length} Huruf</p>
                    {step2 === 4 ?
                    <Container className="mt-4">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(0, 1) + choose.slice(4, 5) + choose.slice(8, 9) + choose.slice(12, 13)} disabled><strong>1</strong> {choose.slice(0, 1) + choose.slice(4, 5) + choose.slice(8, 9) + choose.slice(12, 13)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(1, 2) + choose.slice(5, 6) + choose.slice(9, 10) + choose.slice(13, 14)} disabled><strong>2</strong> {choose.slice(1, 2) + choose.slice(5, 6) + choose.slice(9, 10) + choose.slice(13, 14)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(2, 3) + choose.slice(6, 7) + choose.slice(10, 11) + choose.slice(14, 15)} disabled><strong>3</strong> {choose.slice(2, 3) + choose.slice(6, 7) + choose.slice(10, 11) + choose.slice(14, 15)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(3, 4) + choose.slice(7, 8) + choose.slice(11, 12) + choose.slice(15, 16)} disabled><strong>4</strong> {choose.slice(3, 4) + choose.slice(7, 8) + choose.slice(11, 12) + choose.slice(15, 16)}</Button><br />
                    </Container>
                    :
                    <Container className="mt-4">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(0, 1) + choose.slice(4, 5) + choose.slice(8, 9) + choose.slice(12, 13)}><strong>1</strong> {choose.slice(0, 1) + choose.slice(4, 5) + choose.slice(8, 9) + choose.slice(12, 13)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(1, 2) + choose.slice(5, 6) + choose.slice(9, 10) + choose.slice(13, 14)}><strong>2</strong> {choose.slice(1, 2) + choose.slice(5, 6) + choose.slice(9, 10) + choose.slice(13, 14)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(2, 3) + choose.slice(6, 7) + choose.slice(10, 11) + choose.slice(14, 15)}><strong>3</strong> {choose.slice(2, 3) + choose.slice(6, 7) + choose.slice(10, 11) + choose.slice(14, 15)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(3, 4) + choose.slice(7, 8) + choose.slice(11, 12) + choose.slice(15, 16)}><strong>4</strong> {choose.slice(3, 4) + choose.slice(7, 8) + choose.slice(11, 12) + choose.slice(15, 16)}</Button><br />
                    </Container>
                    }
                </div>
            </div>
            }

            {choose2.length === 16 &&
                <div className="my-5 py-5 text-center">
                    <h3 className="main-result-title text-center">Hasil tebakannya adalah . . . </h3>
                    <h1 className="main-result mt-5">{choose2.slice(0, 1) + choose2.slice(5, 6) + choose2.slice(10, 11) + choose2.slice(15, 16)}</h1><br />
                    <Button className="main-reset shadow-none mt-5" variant="success" onClick={reset}><BiRotateRight className="reset-icon" /> Tebak Lagi</Button>
                </div>
            }

{/* ============= 5 WORD ============= */}
            {length === "5" && 
            <div className="my-5 py-5 text-center">
                <h3 className="main-title text-center"><span className="main-number">2</span> Pilih baris mana saja yang terdapat huruf pada nama yang akan ditebak</h3>
                <Button className="main-helper shadow-none" variant="link" onClick={handleShow2}>Butuh bantuan ?</Button>
                <Modal show={show2} onHide={handleClose2} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title className="modal-title">Bantuan #2</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Kamu diminta untuk memilih baris yang terdapat huruf pada nama yang akan ditebak dan pastikan berurutan dari huruf awal sampai akhir. Perhatikan contoh berikut<br />
                        <div className="text-center">
                            <img className="mt-2" width="40%" src={Pattern} alt="Pattern" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger shadow-none" onClick={handleClose2}>
                            Tutup
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form.Control type="hidden" value={choose} />
                <div>
                    <div className="d-flex justify-content-center">
                        <ProgressBar className="main-progress mt-3" variant="success" striped now={progress} />
                    </div>
                    <p className="main-of mt-4">{step}/{length} Huruf</p>
                    {step === 5 ?
                    <Container className="mt-2">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="ABCDE" disabled><strong>1</strong> ABCDE</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="FGHIJ" disabled><strong>2</strong> FGHIJ</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="KLMNO" disabled><strong>3</strong> KLMNO</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="PQRST" disabled><strong>4</strong> PQRST</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="UVWXY" disabled><strong>5</strong> UVWXY</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="Z0000" disabled><strong>6</strong> Z0000</Button><br />
                    </Container>
                    :
                    <Container className="mt-2">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="ABCDE"><strong>1</strong> ABCDE</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="FGHIJ"><strong>2</strong> FGHIJ</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="KLMNO"><strong>3</strong> KLMNO</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="PQRST"><strong>4</strong> PQRST</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="UVWXY"><strong>5</strong> UVWXY</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="Z0000"><strong>6</strong> Z0000</Button><br />
                    </Container>
                    }
                </div>
            </div>
            }

            {choose.length === 25 &&
            <div className="my-5 py-5 text-center">
                <h3 className="main-title text-center"><span className="main-number">3</span> Pilih baris mana saja yang terdapat huruf pada nama yang akan ditebak</h3>
                <Button className="main-helper shadow-none" variant="link" onClick={handleShow3}>Butuh bantuan ?</Button>
                <Modal show={show3} onHide={handleClose3} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title className="modal-title">Bantuan #3</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Sama seperti sebelumnya kamu diminta kembali untuk memilih baris yang terdapat huruf pada nama yang akan ditebak.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger shadow-none" onClick={handleClose3}>
                            Tutup
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form.Control type="hidden" value={choose2} />
                <div>
                    <div className="d-flex justify-content-center">
                        <ProgressBar className="main-progress mt-3" variant="success" striped now={progress2} />
                    </div>
                    <p className="main-of mt-4">{step2}/{length} Huruf</p>
                    {step2 === 5 ?
                    <Container className="mt-4">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(0, 1) + choose.slice(5, 6) + choose.slice(10, 11) + choose.slice(15, 16) + choose.slice(20, 21)} disabled><strong>1</strong> {choose.slice(0, 1) + choose.slice(5, 6) + choose.slice(10, 11) + choose.slice(15, 16) + choose.slice(20, 21)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(1, 2) + choose.slice(6, 7) + choose.slice(11, 12) + choose.slice(16, 17) + choose.slice(21, 22)} disabled><strong>2</strong> {choose.slice(1, 2) + choose.slice(6, 7) + choose.slice(11, 12) + choose.slice(16, 17) + choose.slice(21, 22)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(2, 3) + choose.slice(7, 8) + choose.slice(12, 13) + choose.slice(17, 18) + choose.slice(22, 23)} disabled><strong>3</strong> {choose.slice(2, 3) + choose.slice(7, 8) + choose.slice(12, 13) + choose.slice(17, 18) + choose.slice(22, 23)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(3, 4) + choose.slice(8, 9) + choose.slice(13, 14) + choose.slice(18, 19) + choose.slice(23, 24)} disabled><strong>4</strong> {choose.slice(3, 4) + choose.slice(8, 9) + choose.slice(13, 14) + choose.slice(18, 19) + choose.slice(23, 24)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(4, 5) + choose.slice(9, 10) + choose.slice(14, 15) + choose.slice(19, 20) + choose.slice(24, 25)} disabled><strong>5</strong> {choose.slice(4, 5) + choose.slice(9, 10) + choose.slice(14, 15) + choose.slice(19, 20) + choose.slice(24, 25)}</Button><br />
                    </Container>
                    :
                    <Container className="mt-4">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(0, 1) + choose.slice(5, 6) + choose.slice(10, 11) + choose.slice(15, 16) + choose.slice(20, 21)}><strong>1</strong> {choose.slice(0, 1) + choose.slice(5, 6) + choose.slice(10, 11) + choose.slice(15, 16) + choose.slice(20, 21)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(1, 2) + choose.slice(6, 7) + choose.slice(11, 12) + choose.slice(16, 17) + choose.slice(21, 22)}><strong>2</strong> {choose.slice(1, 2) + choose.slice(6, 7) + choose.slice(11, 12) + choose.slice(16, 17) + choose.slice(21, 22)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(2, 3) + choose.slice(7, 8) + choose.slice(12, 13) + choose.slice(17, 18) + choose.slice(22, 23)}><strong>3</strong> {choose.slice(2, 3) + choose.slice(7, 8) + choose.slice(12, 13) + choose.slice(17, 18) + choose.slice(22, 23)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(3, 4) + choose.slice(8, 9) + choose.slice(13, 14) + choose.slice(18, 19) + choose.slice(23, 24)}><strong>4</strong> {choose.slice(3, 4) + choose.slice(8, 9) + choose.slice(13, 14) + choose.slice(18, 19) + choose.slice(23, 24)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(4, 5) + choose.slice(9, 10) + choose.slice(14, 15) + choose.slice(19, 20) + choose.slice(24, 25)}><strong>5</strong> {choose.slice(4, 5) + choose.slice(9, 10) + choose.slice(14, 15) + choose.slice(19, 20) + choose.slice(24, 25)}</Button><br />
                    </Container>
                    }
                </div>
            </div>
            }

            {choose2.length === 25 &&
                <div className="my-5 py-5 text-center">
                    <h3 className="main-result-title text-center">Hasil tebakannya adalah . . . </h3>
                    <h1 className="main-result mt-5">{choose2.slice(0, 1) + choose2.slice(6, 7) + choose2.slice(12, 13) + choose2.slice(18, 19) + choose2.slice(24, 25)}</h1><br />
                    <Button className="main-reset shadow-none mt-5" variant="success" onClick={reset}><BiRotateRight className="reset-icon" /> Tebak Lagi</Button>
                </div>
            }

{/* ============= 6 WORD ============= */}
            {length === "6" && 
            <div className="my-5 py-5 text-center">
                <h3 className="main-title text-center"><span className="main-number">2</span> Pilih baris mana saja yang terdapat huruf pada nama yang akan ditebak</h3>
                <Button className="main-helper shadow-none" variant="link" onClick={handleShow2}>Butuh bantuan ?</Button>
                <Modal show={show2} onHide={handleClose2} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title className="modal-title">Bantuan #2</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Kamu diminta untuk memilih baris yang terdapat huruf pada nama yang akan ditebak dan pastikan berurutan dari huruf awal sampai akhir. Perhatikan contoh berikut<br />
                        <div className="text-center">
                            <img className="mt-2" width="40%" src={Pattern} alt="Pattern" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger shadow-none" onClick={handleClose2}>
                            Tutup
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form.Control type="hidden" value={choose} />
                <div>
                    <div className="d-flex justify-content-center">
                        <ProgressBar className="main-progress mt-3" variant="success" striped now={progress} />
                    </div>
                    <p className="main-of mt-4">{step}/{length} Huruf</p>
                    {step === 6 ?
                    <Container className="mt-2">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="ABCDEF" disabled><strong>1</strong> ABCDEF</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="GHIJKL" disabled><strong>2</strong> GHIJKL</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="MNOPQR" disabled><strong>3</strong> MNOPQR</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="STUVWX" disabled><strong>4</strong> STUVWX</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="YZ0000" disabled><strong>5</strong> YZ0000</Button><br />
                    </Container>
                    :
                    <Container className="mt-2">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="ABCDEF"><strong>1</strong> ABCDEF</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="GHIJKL"><strong>2</strong> GHIJKL</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="MNOPQR"><strong>3</strong> MNOPQR</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="STUVWX"><strong>4</strong> STUVWX</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="YZ0000"><strong>5</strong> YZ0000</Button><br />
                    </Container>
                    }
                </div>
            </div>
            }

            {choose.length === 36 &&
            <div className="my-5 py-5 text-center">
                <h3 className="main-title text-center"><span className="main-number">3</span> Pilih baris mana saja yang terdapat huruf pada nama yang akan ditebak</h3>
                <Button className="main-helper shadow-none" variant="link" onClick={handleShow3}>Butuh bantuan ?</Button>
                <Modal show={show3} onHide={handleClose3} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title className="modal-title">Bantuan #3</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Sama seperti sebelumnya kamu diminta kembali untuk memilih baris yang terdapat huruf pada nama yang akan ditebak.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger shadow-none" onClick={handleClose3}>
                            Tutup
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form.Control type="hidden" value={choose2} />
                <div>
                    <div className="d-flex justify-content-center">
                        <ProgressBar className="main-progress mt-3" variant="success" striped now={progress2} />
                    </div>
                    <p className="main-of mt-4">{step2}/{length} Huruf</p>
                    {step2 === 6 ?
                    <Container className="mt-4">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(0, 1) + choose.slice(6, 7) + choose.slice(12, 13) + choose.slice(18, 19) + choose.slice(24, 25) + choose.slice(30, 31)} disabled><strong>1</strong> {choose.slice(0, 1) + choose.slice(6, 7) + choose.slice(12, 13) + choose.slice(18, 19) + choose.slice(24, 25) + choose.slice(30, 31)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(1, 2) + choose.slice(7, 8) + choose.slice(13, 14) + choose.slice(19, 20) + choose.slice(25, 26) + choose.slice(31, 32)} disabled><strong>2</strong> {choose.slice(1, 2) + choose.slice(7, 8) + choose.slice(13, 14) + choose.slice(19, 20) + choose.slice(25, 26) + choose.slice(31, 32)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(2, 3) + choose.slice(8, 9) + choose.slice(14, 15) + choose.slice(20, 21) + choose.slice(26, 27) + choose.slice(32, 33)} disabled><strong>3</strong> {choose.slice(2, 3) + choose.slice(8, 9) + choose.slice(14, 15) + choose.slice(20, 21) + choose.slice(26, 27) + choose.slice(32, 33)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(3, 4) + choose.slice(9, 10) + choose.slice(15, 16) + choose.slice(21, 22) + choose.slice(27, 28) + choose.slice(33, 34)} disabled><strong>4</strong> {choose.slice(3, 4) + choose.slice(9, 10) + choose.slice(15, 16) + choose.slice(21, 22) + choose.slice(27, 28) + choose.slice(33, 34)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(4, 5) + choose.slice(10, 11) + choose.slice(16, 17) + choose.slice(22, 23) + choose.slice(28, 29) + choose.slice(34, 35)} disabled><strong>5</strong> {choose.slice(4, 5) + choose.slice(10, 11) + choose.slice(16, 17) + choose.slice(22, 23) + choose.slice(28, 29) + choose.slice(34, 35)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(5, 6) + choose.slice(11, 12) + choose.slice(17, 18) + choose.slice(23, 24) + choose.slice(29, 30) + choose.slice(35, 36)} disabled><strong>6</strong> {choose.slice(5, 6) + choose.slice(11, 12) + choose.slice(17, 18) + choose.slice(23, 24) + choose.slice(29, 30) + choose.slice(35, 36)}</Button><br />
                    </Container>
                    :
                    <Container className="mt-4">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(0, 1) + choose.slice(6, 7) + choose.slice(12, 13) + choose.slice(18, 19) + choose.slice(24, 25) + choose.slice(30, 31)}><strong>1</strong> {choose.slice(0, 1) + choose.slice(6, 7) + choose.slice(12, 13) + choose.slice(18, 19) + choose.slice(24, 25) + choose.slice(30, 31)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(1, 2) + choose.slice(7, 8) + choose.slice(13, 14) + choose.slice(19, 20) + choose.slice(25, 26) + choose.slice(31, 32)}><strong>2</strong> {choose.slice(1, 2) + choose.slice(7, 8) + choose.slice(13, 14) + choose.slice(19, 20) + choose.slice(25, 26) + choose.slice(31, 32)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(2, 3) + choose.slice(8, 9) + choose.slice(14, 15) + choose.slice(20, 21) + choose.slice(26, 27) + choose.slice(32, 33)}><strong>3</strong> {choose.slice(2, 3) + choose.slice(8, 9) + choose.slice(14, 15) + choose.slice(20, 21) + choose.slice(26, 27) + choose.slice(32, 33)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(3, 4) + choose.slice(9, 10) + choose.slice(15, 16) + choose.slice(21, 22) + choose.slice(27, 28) + choose.slice(33, 34)}><strong>4</strong> {choose.slice(3, 4) + choose.slice(9, 10) + choose.slice(15, 16) + choose.slice(21, 22) + choose.slice(27, 28) + choose.slice(33, 34)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(4, 5) + choose.slice(10, 11) + choose.slice(16, 17) + choose.slice(22, 23) + choose.slice(28, 29) + choose.slice(34, 35)}><strong>5</strong> {choose.slice(4, 5) + choose.slice(10, 11) + choose.slice(16, 17) + choose.slice(22, 23) + choose.slice(28, 29) + choose.slice(34, 35)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(5, 6) + choose.slice(11, 12) + choose.slice(17, 18) + choose.slice(23, 24) + choose.slice(29, 30) + choose.slice(35, 36)}><strong>6</strong> {choose.slice(5, 6) + choose.slice(11, 12) + choose.slice(17, 18) + choose.slice(23, 24) + choose.slice(29, 30) + choose.slice(35, 36)}</Button><br />
                    </Container>
                    }
                </div>
            </div>
            }

            {choose2.length === 36 &&
                <div className="my-5 py-5 text-center">
                    <h3 className="main-result-title text-center">Hasil tebakannya adalah . . . </h3>
                    <h1 className="main-result mt-5">{choose2.slice(0, 1) + choose2.slice(7, 8) + choose2.slice(14, 15) + choose2.slice(21, 22) + choose2.slice(28, 29) + choose2.slice(35, 36)}</h1><br />
                    <Button className="main-reset shadow-none mt-5" variant="success" onClick={reset}><BiRotateRight className="reset-icon" /> Tebak Lagi</Button>
                </div>
            }

{/* ============= 7 WORD ============= */}
            {length === "7" && 
            <div className="my-5 py-5 text-center">
                <h3 className="main-title text-center"><span className="main-number">2</span> Pilih baris mana saja yang terdapat huruf pada nama yang akan ditebak</h3>
                <Button className="main-helper shadow-none" variant="link" onClick={handleShow2}>Butuh bantuan ?</Button>
                <Modal show={show2} onHide={handleClose2} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title className="modal-title">Bantuan #2</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Kamu diminta untuk memilih baris yang terdapat huruf pada nama yang akan ditebak dan pastikan berurutan dari huruf awal sampai akhir. Perhatikan contoh berikut<br />
                        <div className="text-center">
                            <img className="mt-2" width="40%" src={Pattern} alt="Pattern" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger shadow-none" onClick={handleClose2}>
                            Tutup
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form.Control type="hidden" value={choose} />
                <div>
                    <div className="d-flex justify-content-center">
                        <ProgressBar className="main-progress mt-3" variant="success" striped now={progress} />
                    </div>
                    <p className="main-of mt-4">{step}/{length} Huruf</p>
                    {step === 7 ?
                    <Container className="mt-2">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="ABCDEFG" disabled><strong>1</strong> ABCDEFG</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="HIJKLMN" disabled><strong>2</strong> HIJKLMN</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="OPQRSTU" disabled><strong>3</strong> OPQRSTU</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="VWXYZ00" disabled><strong>4</strong> VWXYZ00</Button><br />
                    </Container>
                    :
                    <Container className="mt-2">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="ABCDEFG"><strong>1</strong> ABCDEFG</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="HIJKLMN"><strong>2</strong> HIJKLMN</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="OPQRSTU"><strong>3</strong> OPQRSTU</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler} name="VWXYZ00"><strong>4</strong> VWXYZ00</Button><br />
                    </Container>
                    }
                </div>
            </div>
            }

            {choose.length === 49 &&
            <div className="my-5 py-5 text-center">
                <h3 className="main-title text-center"><span className="main-number">3</span> Pilih baris mana saja yang terdapat huruf pada nama yang akan ditebak</h3>
                <Button className="main-helper shadow-none" variant="link" onClick={handleShow3}>Butuh bantuan ?</Button>
                <Modal show={show3} onHide={handleClose3} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title className="modal-title">Bantuan #3</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Sama seperti sebelumnya kamu diminta kembali untuk memilih baris yang terdapat huruf pada nama yang akan ditebak.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger shadow-none" onClick={handleClose3}>
                            Tutup
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form.Control type="hidden" value={choose2} />
                <div>
                    <div className="d-flex justify-content-center">
                        <ProgressBar className="main-progress mt-3" variant="success" striped now={progress2} />
                    </div>
                    <p className="main-of mt-4">{step2}/{length} Huruf</p>
                    {step2 === 7 ?
                    <Container className="mt-4">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(0, 1) + choose.slice(7, 8) + choose.slice(14, 15) + choose.slice(21, 22) + choose.slice(28, 29) + choose.slice(35, 36) + choose.slice(42, 43)} disabled><strong>1</strong> {choose.slice(0, 1) + choose.slice(7, 8) + choose.slice(14, 15) + choose.slice(21, 22) + choose.slice(28, 29) + choose.slice(35, 36) + choose.slice(42, 43)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(1, 2) + choose.slice(8, 9) + choose.slice(15, 16) + choose.slice(22, 23) + choose.slice(29, 30) + choose.slice(36, 37) + choose.slice(43, 44)} disabled><strong>2</strong> {choose.slice(1, 2) + choose.slice(8, 9) + choose.slice(15, 16) + choose.slice(22, 23) + choose.slice(29, 30) + choose.slice(36, 37) + choose.slice(43, 44)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(2, 3) + choose.slice(9, 10) + choose.slice(16, 17) + choose.slice(23, 24) + choose.slice(30, 31) + choose.slice(37, 38) + choose.slice(44, 45)} disabled><strong>3</strong> {choose.slice(2, 3) + choose.slice(9, 10) + choose.slice(16, 17) + choose.slice(23, 24) + choose.slice(30, 31) + choose.slice(37, 38) + choose.slice(44, 45)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(3, 4) + choose.slice(10, 11) + choose.slice(17, 18) + choose.slice(24, 25) + choose.slice(31, 32) + choose.slice(38, 39) + choose.slice(45, 46)} disabled><strong>4</strong> {choose.slice(3, 4) + choose.slice(10, 11) + choose.slice(17, 18) + choose.slice(24, 25) + choose.slice(31, 32) + choose.slice(38, 39) + choose.slice(45, 46)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(4, 5) + choose.slice(11, 12) + choose.slice(18, 19) + choose.slice(25, 26) + choose.slice(32, 33) + choose.slice(39, 40) + choose.slice(46, 47)} disabled><strong>5</strong> {choose.slice(4, 5) + choose.slice(11, 12) + choose.slice(18, 19) + choose.slice(25, 26) + choose.slice(32, 33) + choose.slice(39, 40) + choose.slice(46, 47)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(5, 6) + choose.slice(12, 13) + choose.slice(19, 20) + choose.slice(26, 27) + choose.slice(33, 34) + choose.slice(40, 41) + choose.slice(47, 48)} disabled><strong>6</strong> {choose.slice(5, 6) + choose.slice(12, 13) + choose.slice(19, 20) + choose.slice(26, 27) + choose.slice(33, 34) + choose.slice(40, 41) + choose.slice(47, 48)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(6, 7) + choose.slice(13, 14) + choose.slice(20, 21) + choose.slice(27, 28) + choose.slice(34, 35) + choose.slice(41, 42) + choose.slice(48, 49)} disabled><strong>7</strong> {choose.slice(6, 7) + choose.slice(13, 14) + choose.slice(20, 21) + choose.slice(27, 28) + choose.slice(34, 35) + choose.slice(41, 42) + choose.slice(48, 49)}</Button><br />
                    </Container>
                    :
                    <Container className="mt-4">
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(0, 1) + choose.slice(7, 8) + choose.slice(14, 15) + choose.slice(21, 22) + choose.slice(28, 29) + choose.slice(35, 36) + choose.slice(42, 43)}><strong>1</strong> {choose.slice(0, 1) + choose.slice(7, 8) + choose.slice(14, 15) + choose.slice(21, 22) + choose.slice(28, 29) + choose.slice(35, 36) + choose.slice(42, 43)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(1, 2) + choose.slice(8, 9) + choose.slice(15, 16) + choose.slice(22, 23) + choose.slice(29, 30) + choose.slice(36, 37) + choose.slice(43, 44)}><strong>2</strong> {choose.slice(1, 2) + choose.slice(8, 9) + choose.slice(15, 16) + choose.slice(22, 23) + choose.slice(29, 30) + choose.slice(36, 37) + choose.slice(43, 44)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(2, 3) + choose.slice(9, 10) + choose.slice(16, 17) + choose.slice(23, 24) + choose.slice(30, 31) + choose.slice(37, 38) + choose.slice(44, 45)}><strong>3</strong> {choose.slice(2, 3) + choose.slice(9, 10) + choose.slice(16, 17) + choose.slice(23, 24) + choose.slice(30, 31) + choose.slice(37, 38) + choose.slice(44, 45)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(3, 4) + choose.slice(10, 11) + choose.slice(17, 18) + choose.slice(24, 25) + choose.slice(31, 32) + choose.slice(38, 39) + choose.slice(45, 46)}><strong>4</strong> {choose.slice(3, 4) + choose.slice(10, 11) + choose.slice(17, 18) + choose.slice(24, 25) + choose.slice(31, 32) + choose.slice(38, 39) + choose.slice(45, 46)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(4, 5) + choose.slice(11, 12) + choose.slice(18, 19) + choose.slice(25, 26) + choose.slice(32, 33) + choose.slice(39, 40) + choose.slice(46, 47)}><strong>5</strong> {choose.slice(4, 5) + choose.slice(11, 12) + choose.slice(18, 19) + choose.slice(25, 26) + choose.slice(32, 33) + choose.slice(39, 40) + choose.slice(46, 47)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(5, 6) + choose.slice(12, 13) + choose.slice(19, 20) + choose.slice(26, 27) + choose.slice(33, 34) + choose.slice(40, 41) + choose.slice(47, 48)}><strong>6</strong> {choose.slice(5, 6) + choose.slice(12, 13) + choose.slice(19, 20) + choose.slice(26, 27) + choose.slice(33, 34) + choose.slice(40, 41) + choose.slice(47, 48)}</Button><br />
                        <Button className="btn-word shadow-none my-2" onClick={clickHandler2} name={choose.slice(6, 7) + choose.slice(13, 14) + choose.slice(20, 21) + choose.slice(27, 28) + choose.slice(34, 35) + choose.slice(41, 42) + choose.slice(48, 49)}><strong>7</strong> {choose.slice(6, 7) + choose.slice(13, 14) + choose.slice(20, 21) + choose.slice(27, 28) + choose.slice(34, 35) + choose.slice(41, 42) + choose.slice(48, 49)}</Button><br />
                    </Container>
                    }
                </div>
            </div>
            }

            {choose2.length === 49 &&
                <div className="my-5 py-5 text-center">
                    <h3 className="main-result-title text-center">Hasil tebakannya adalah . . . </h3>
                    <h1 className="main-result mt-5">{choose2.slice(0, 1) + choose2.slice(8, 9) + choose2.slice(16, 17) + choose2.slice(24, 25) + choose2.slice(32, 33) + choose2.slice(40, 41) + choose2.slice(48, 49)}</h1><br />
                    <Button className="main-reset shadow-none mt-5" variant="success" onClick={reset}><BiRotateRight className="reset-icon" /> Tebak Lagi</Button>
                </div>
            }

            </Container>
        </>
    )
}

export default Crush;