import React from 'react';
import SolidAuth from 'solid-auth-client';
import { useTranslation } from 'react-i18next';
import { successToaster, errorToaster } from '@utils';
import ldflex from '@solid/query-ldflex';
import { AccessControlList } from '@inrupt/solid-react-components';
import {Graph} from './components';
import{
    IoTGraphWrapper,
    IoTGraphContainer,
    Header,
    WebId
} from './iot-graph.style';

type Props = {webId: String};

const IoTGraph = ({webId}: Props) => {
    const { t } = useTranslation();
    console.log(webId);
    return(
        <IoTGraphWrapper>
            <IoTGraphContainer>
                <Header>
                    <h3>Historical data visualization</h3>
                    <p>{t('iot-graph.explanation')}</p>
                </Header>
                <Graph></Graph>
            </IoTGraphContainer>
        </IoTGraphWrapper>
    );
};

export default IoTGraph;