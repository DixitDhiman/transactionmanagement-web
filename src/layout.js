import React, { useState } from 'react';
import ApiClient from "./api-client";
import env from './environment';
import Add from './add';
import List from './list';

const Layout = () => {
  const [showList, setShowList] = useState(true);

  const _handleSubmit = (data) => {
    ApiClient.post(`${env.apiUrl}/transaction`, data).then((response) => {
      if (response.statusCode === 200) {
        window.alert(response.message)
      }
    });
  }

  return (
    <div className="layout">
      {showList ? <List handleEvent={() => setShowList(!showList)} /> : <Add handleEvent={() => setShowList(!showList)} handleSubmit={(data) => _handleSubmit(data)} />}
    </div>
  );
}

export default Layout;
