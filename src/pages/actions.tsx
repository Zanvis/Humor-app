export const setData = (data: string) => {
    return {
      type: 'SET_DATA',
      payload: data,
    };
  };
  
  export const getData = () => {
    return {
      type: 'GET_DATA',
    };
  };