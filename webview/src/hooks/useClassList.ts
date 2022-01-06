const useClassList = () => {
  const gymName = new URLSearchParams(window.location.search).get('gymName') || undefined;

  const queryString = new URLSearchParams(window.location.search).toString();

  return {
    gymName,
    queryString
  }
};

export default useClassList;
