const STORAGE_KEY = "cleaning_services";

/* get all */
export const getServices = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

/* save all */
const saveServices = (services) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
};

/* add */
export const addService = (service) => {
  const services = getServices();
  saveServices([...services, service]);
};

/* update */
export const updateService = (updated) => {
  const services = getServices().map((s) =>
    s.id === updated.id ? updated : s
  );
  saveServices(services);
};

/* delete */
export const deleteService = (id) => {
  const services = getServices().filter((s) => s.id !== id);
  saveServices(services);
};
