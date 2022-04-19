import React from 'react';
import ConsumeContextData from './ConsumeContextData'

const AppProvider = ({ children }) => {
    return (
        <ConsumeContextData.Providr value={{ user: "Laudier fazendo teste.." }}>
            {children}
        </ConsumeContextData.Providr>
    );
}

export default AppProvider;