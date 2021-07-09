import { Message } from 'element-ui';

export default function ({redirect, app: { $axios } }) {
  $axios.onError((error) => {
    //display error message when not successful
    Message.error(error)
  })
  
  $axios.onResponse((response) => {
    //return response data when successful
    return response.data
  })
}



