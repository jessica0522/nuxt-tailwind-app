import { Message } from 'element-ui';

export default function ({redirect, app: { $axios } }) {
  $axios.onError((error) => {
    Message.error(error)
    // redirect('/')
  })
  
  $axios.onResponse((response) => {
    return response.data
  })
}



