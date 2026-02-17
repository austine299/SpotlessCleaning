
 const API = process.env.REACT_APP_GOOGLE_SCRIPT_URL

/* REGISTER */
export const registerAdmin = async (admin) => {
  const res = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      type: "addAdmin",
      ...admin,
    }),
  });

  return await res.json();
};

/* LOGIN */
export const loginAdmin = async (email, password) => {
  const res = await fetch(`${API}?type=admins`);
  const admins = await res.json();

  const found = admins.find(
    (a) => a[2] === email && a[3] === password
  );

  if (!found) return { success: false };

  return {
    success: true,
    name: found[1],
    email: found[2],
  };
};

/* SESSION */
export const setSession = (admin) => {
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getAdmin = () => {
  return JSON.parse(localStorage.getItem("admin"));
};

export const logoutAdmin = () => {
  localStorage.removeItem("admin");
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("admin");
};





// const KEY = "cleaning_admin";

// /* register */
// export const registerAdmin = (admin) => {
//   localStorage.setItem(KEY, JSON.stringify(admin));
// };

// /* get admin */
// export const getAdmin = () => {
//   return JSON.parse(localStorage.getItem(KEY));
// };

// /* login check */
// export const loginAdmin = (email, password) => {
//   const admin = getAdmin();
//   if (!admin) return false;

//   return admin.email === email && admin.password === password;
// };

// /* logout */
// export const logoutAdmin = () => {
//   localStorage.removeItem("admin_logged_in");
// };

// /* session */
// export const setSession = () => {
//   localStorage.setItem("admin_logged_in", "true");
// };

// export const isLoggedIn = () => {
//   return localStorage.getItem("admin_logged_in") === "true";
// };
