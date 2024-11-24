import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProductProvider } from './components/ProductContext';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ProductProvider>
      <App />
    </ProductProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);
