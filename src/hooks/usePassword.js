import axios from 'axios';
import { useQuery } from 'react-query';

const getPasswords = async () => {
  const { data } = await axios.get(
    'http://localhost:8080/password',
  );
  return data;
};

export const usePasswordsQuery = () => {
  return useQuery('postx', getPasswords);
};
