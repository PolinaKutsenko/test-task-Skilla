import { useContext } from 'react';

import { CallsApiContext } from '../contexts/CallsApiProvider.jsx';

export const useCallsApi = () => useContext(CallsApiContext);
