import { Button, Card, TextField } from '@material-ui/core';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './Sessions.module.scss';
import { Col, Row } from 'react-bootstrap';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useDispatch } from 'react-redux';
import sliceLogin from './sliceLogin';
const cx = classNames.bind(styles);
function SignIn() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const dispath = useDispatch();
    const ref = useRef('form');
    const { username, password } = formData;
    const handleChangeinput = (e) => {
        // e.persist();
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = () => {
        dispath(sliceLogin.actions.loginWithEmailAndPassword(formData));
    };
    return (
        <div className={cx('signin')}>
            <div className="p-8">
                <Helmet>
                    <title>Signin</title>
                </Helmet>
                <Card className={cx('signup_card')}>
                    <Row>
                        <Col xs={5}>
                            <div className={cx('img')}>
                                <img
                                    src="https://i.pinimg.com/736x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg"
                                    alt=""
                                />
                            </div>
                        </Col>
                        <Col xs={7}>
                            <ValidatorForm className={cx('form')} ref={ref} onSubmit={handleSubmit}>
                                <div className={cx('input')}>
                                    <TextValidator
                                        className="mb-24 w-100"
                                        variant="outlined"
                                        label="Tài khoản"
                                        onChange={handleChangeinput}
                                        type="text"
                                        name="username"
                                        value={username.trim()}
                                        validators={['required']}
                                        errorMessages={['Trường này không được bỏ trống']}
                                    />
                                </div>
                                <div className={cx('input')}>
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="Mật khẩu"
                                        variant="outlined"
                                        onChange={handleChangeinput}
                                        name="password"
                                        type="password"
                                        value={password.trim()}
                                        validators={['required']}
                                        errorMessages={['Trường này không được bỏ trống']}
                                    />
                                </div>
                                <div className="">
                                    <div className={cx('btn_submit')} style={{ width: '100%' }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            style={{ width: '100%' }}
                                        >
                                            Đăng nhập
                                        </Button>
                                        {/* {this.props.login.loading && (
                                                <CircularProgress size={24} className={cx('buttonProgress')} />
                                            )} */}
                                    </div>

                                    {/* <span className="ml-16 mr-16">{t("or")}</span>
                          <div className={classes.wrapper}>
                            <Button
                              className="capitalize"
                              variant="contained"
                              onClick={() =>
                                this.props.history.push(
                                  "/session/signupregisterhealthorg"
                                )
                              }
                            >
                              {t("sign_up.title")}
                            </Button>
                          </div> */}
                                </div>
                                <div className={cx('forgot_pass')}>
                                    <Button

                                    // onClick={() => this.props.history.push('/session/forgot-password')}
                                    >
                                        Quên mật khẩu
                                    </Button>
                                </div>
                                {/* <p class="bold" style={{textAlign: "center", marginBottom: 0}}>Hotline: 034.888.6670</p> */}
                            </ValidatorForm>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    );
}

export default SignIn;
