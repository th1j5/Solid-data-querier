/* eslint-disable constructor-super */
import React from 'react';
import { Link } from 'react-router-dom';
import { ProviderLogin } from '@inrupt/solid-react-components';
import { LoginWrapper, LoginPanel, PanelBody, LoginTitle } from './login.style';
import { CenterContainer } from '@util-components';
import { Provider } from '@services';

const LoginComponent = () => {
  return (
    <LoginWrapper data-testid="login-wrapper">
      <CenterContainer>
        <h1 data-testid="title">{'Log in to your solid pod'}</h1>
        <LoginPanel className="login-panel">
          <PanelBody className="panel-body">
            <Link className="ids-link-filled ids-link-filled--primary" to="/register">
              {'Register'}
            </Link>
            <a
              href="https://solid.inrupt.com/get-a-solid-pod"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              {'Get Help'}
            </a>
            <LoginTitle data-testid="login-title">
              <span>{'Log in'}</span>
            </LoginTitle>
            <ProviderLogin
              selectPlaceholder={'Pick your provider'}
              inputPlaholder={'...'}
              formButtonText={'Submit'}
              btnTxtWebId={'Log in with your webID'}
              btnTxtProvider={'Log in with your provider'}
              className="provider-login-component"
              callbackUri={`${window.location.origin}/iot-graph`}
              errorsText={{
                unknown: 'Unknown',
                webIdNotValid: 'webId not valid',
                emptyProvider: 'No provider was submitted',
                emptyWebId: 'No webId was provided'
              }}
              theme={{
                buttonLogin: 'ids-link',
                inputLogin: '',
                linkButton: ''
              }}
              providers={Provider.getIdentityProviders()}
            />
          </PanelBody>
        </LoginPanel>
      </CenterContainer>
    </LoginWrapper>
  );
};

export default LoginComponent;
