const API =
  "https://script.google.com/macros/s/AKfycbxvvcRW1uSjAO6ADrN0avmrPx3x67kc3pcrfOZKlnJEqJXQ3foWDAHNw45oymFuN5GvIw/exec";

/* ======================
   GET SERVICES
====================== */
export const getServices = async () => {
  const res = await fetch(`${API}?type=services&t=${Date.now()}`);
  return await res.json();
};

/* ======================
   ADD SERVICE
====================== */
export const addService = async (service) => {
  const res = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      type: "addService",
      name: service.name,
      image: service.image,
      time: service.time,
      description: service.description,
    }),
  });

  return await res.json();
};

/* ======================
   UPDATE SERVICE
====================== */
export const updateService = async (service) => {
  const res = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      type: "updateService",
      id: service.id.toString(),
      name: service.name,
      image: service.image,
      time: service.time,
      description: service.description,
    }),
  });

  const data = await res.json();
  if (!data.success) throw new Error("Update failed");

  return data;
};

/* ======================
   DELETE SERVICE
====================== */
export const deleteService = async (id) => {
  const res = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      type: "deleteService",
      id: id.toString(),
    }),
  });

  const data = await res.json();
  if (!data.success) throw new Error("Delete failed");

  return data;
};




// const STORAGE_KEY = "cleaning_services";

// /* get all */
// export const getServices = () => {
//   return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// };

// /* save all */
// const saveServices = (services) => {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
// };

// /* add */
// export const addService = (service) => {
//   const services = getServices();
//   saveServices([...services, service]);
// };

// /* update */
// export const updateService = (updated) => {
//   const services = getServices().map((s) =>
//     s.id === updated.id ? updated : s
//   );
//   saveServices(services);
// };

// /* delete */
// export const deleteService = (id) => {
//   const services = getServices().filter((s) => s.id !== id);
//   saveServices(services);
// };
