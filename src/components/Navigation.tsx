import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";


const Navigation = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Nav variant="pills"
                 onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
                 defaultActiveKey={location.pathname.split('/')[1]}>
              <Nav.Item>
                <Nav.Link eventKey="favorite" as={Link} to="/favorite">{t('Favorite')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="safe" as={Link} to="/safe">{t('Safe')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="settings" as={Link} to="/settings">{t('Settings')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="add" as={Link} to="/add">{t('Add')}</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;