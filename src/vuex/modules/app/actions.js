import axios from 'axios';

export const fetchMsg = ({ commit }) => {
  axios.get('http://demo9975804.mockable.io/msg').then(res => {
    commit('setMsg', res.data.msg);
  });
};