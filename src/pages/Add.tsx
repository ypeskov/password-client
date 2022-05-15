import { useContext, useEffect } from "react";

import { StoreContext } from '../context/store-context';
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Add = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{t('Name')}</Form.Label>
                <Form.Control type="name" placeholder={t('Enter name')} />
                <Form.Text className="text-muted">
                  {t('name of the item')}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{t('Type')}</Form.Label>
                <Form.Control type="text" placeholder={t('type')} />
              </Form.Group>

              <Button variant="primary" type="submit">
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
