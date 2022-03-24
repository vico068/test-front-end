import Api from "../services/Api";

export const getContacts = () => {
  return Api.get("/contacts");
};

export const getContact = (id) => {
    return Api.get(`/contacts/${id}`);
  };

export const createContact = (payload) => {
  return Api.post("/contacts", payload);
};

export const editContact = (id, payload) => {
  return Api.patch(`/contacts/${id}`, payload);
};

export const removeContact = (id) => {
  return Api.put(`/contacts/${id}`);
};
