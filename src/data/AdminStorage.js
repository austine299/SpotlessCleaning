const KEY = "cleaning_admin";

/* register */
export const registerAdmin = (admin) => {
  localStorage.setItem(KEY, JSON.stringify(admin));
};

/* get admin */
export const getAdmin = () => {
  return JSON.parse(localStorage.getItem(KEY));
};

/* login check */
export const loginAdmin = (email, password) => {
  const admin = getAdmin();
  if (!admin) return false;

  return admin.email === email && admin.password === password;
};

/* logout */
export const logoutAdmin = () => {
  localStorage.removeItem("admin_logged_in");
};

/* session */
export const setSession = () => {
  localStorage.setItem("admin_logged_in", "true");
};

export const isLoggedIn = () => {
  return localStorage.getItem("admin_logged_in") === "true";
};
