export const getRoleFromToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    return payload.role;
  } catch {
    return false;
  }
};


