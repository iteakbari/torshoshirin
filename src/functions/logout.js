const logout = () => {
  localStorage.removeItem("temp_token");
  //   window.location.reload();
};
export default logout;
