import { FormEvent, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginRecord from "../components/LoginRecord";

const API_HOST: string = process.env.REACT_APP_API_HOST ?? '';

const getRecordTypes = async (): Promise<string[]> => {
  const jwt = sessionStorage.getItem('jwt');
  const response = await fetch(`${API_HOST}/record/types`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  });
  return await response.json();
};

class SecureRecord {
  constructor(public name: string, public type: string) {
  }
}

class SecureRecordLogin extends SecureRecord {
  login: string;
  host: string;
  password: string;
  notes: string;
}

const Add = () => {
  const nameRef: any = useRef();
  const typeRef: any = useRef();
  const { t } = useTranslation()
  const [jsxTypes, setJsxTypes] = useState(null);
  const [typeVal, setTypeVal] = useState('login');
  const [record, setRecord] = useState<SecureRecordLogin>();

  const recordLogin = new SecureRecordLogin(nameRef?.current?.value, typeRef?.current?.value);

  const collectLoginRecordDetails = (
                                    loginVal: string = '',
                                    password: string = '',
                                    host: string = '',
                                    notes: string = ''): void => {
    recordLogin.name = nameRef?.current.value ?? '';
    recordLogin.type = typeRef?.current.value ?? '';
    recordLogin.login = loginVal ?? '';
    recordLogin.host = host ?? '';
    recordLogin.password = password ?? '';
    recordLogin.notes = notes ?? '';

    setRecord(recordLogin);
  };

  const [recordDetails, setRecordDetails] = useState(<LoginRecord collect={collectLoginRecordDetails}/>);

  useEffect(() => {
    ( async () => {
      const types: any = await getRecordTypes();
      setJsxTypes(types.map((item: string) => {
        return <option key={item} value={item}>{item}</option>
      }));
    } )();

  }, []);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const jwt = sessionStorage.getItem('jwt');

    const response = await fetch(`${API_HOST}/record/new`, {
      method: 'POST',
      body: JSON.stringify(record),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })

    await response.json();
  };

  const updateRecordType = (event: any) => {
    setTypeVal(event.target.value);
    setRecordDetails(<LoginRecord collect={collectLoginRecordDetails}/>);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Form onChange={e => collectLoginRecordDetails()}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{t('Name')}</Form.Label>
                <Form.Control type="text" placeholder={t('Enter name')} ref={nameRef}/>
                <Form.Text className="text-muted">
                  {t('name of the item')}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{t('Type')}</Form.Label>
                <select ref={typeRef} value={typeVal}
                        onChange={updateRecordType}
                        className={'form-select'}>
                  {jsxTypes}
                </select>
              </Form.Group>

              {recordDetails}

              <Button variant="primary" type="submit" onClick={submitHandler}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
};

export default Add;
