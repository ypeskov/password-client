import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import { FC, FormEvent, useRef } from "react";

interface LoginRecordProps {
  collect: any;
}

const LoginRecord: FC<LoginRecordProps> = (props) => {
  const { t } = useTranslation();
  const loginValRef: any = useRef();
  const hostRef: any = useRef();
  const passwordRef: any = useRef();
  const notesRef: any = useRef();

  const collectDetails = () => {
    props.collect(
      loginValRef.current.value,
      hostRef.current.value,
      passwordRef.current.value,
      notesRef.current.value
    )
  }

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>{t('Login-type')}</Form.Label>
        <Form.Control type="text"
                      onKeyUp={collectDetails}
                      placeholder={t('Login-type')}
                      ref={loginValRef}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>{t('Host')}</Form.Label>
        <Form.Control type="text"
                      onChange={collectDetails}
                      placeholder={t('Host')}
                      ref={hostRef}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>{t('Password')}</Form.Label>
        <Form.Control type="text"
                      onChange={collectDetails}
                      placeholder={t('Password')}
                      ref={passwordRef}/>
      </Form.Group>

      <Form.Group className={'mb-3'}>
        <Form.Label>{t('Notes')}</Form.Label>
        <Form.Control as="textarea" ref={notesRef}></Form.Control>
      </Form.Group>
    </div>
  );
}

export default LoginRecord;