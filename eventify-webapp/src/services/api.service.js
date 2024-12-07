import axios from "./axios";

export const signupApi = async (body) => {
  return axios.post('/users/signup', body).then((response) => {
    return response.data;
  });
};

export const loginApi = async (body) => {
  return axios.post('/users/login', body).then(({ data: response }) => {
    return response.data;
  });
};

export const getEvents = async () => {
  return axios.get('/events').then(({ data: response }) => {
    return response.data;
  });
};

export const getUsers = async () => {
  return axios.get('/admin').then(({ data: response }) => {
    return response.data;
  });
};

export const getSingleUser = async (id) => {
  return axios.get(`/admin/${id}`).then(({ data: response }) => {
    return response.data;
  });
};

export const getEventsById = async (id) => {
  return axios.get(`/events/${id}`).then(({ data: response }) => {
    return response.data;
  });
};

export const createEvent = async (body) => {
  return axios.post('/events', body).then(({ data: response }) => {
    return response.data;
  });
};

export const createUser = async (body) => {
  return axios.post('/admin', body).then(({ data: response }) => {
    return response.data;
  });
};

export const deleteEvent = async (id) => {
  return axios.delete('/events/' + id).then(({ data: response }) => {
    return response.data;
  });
};

export const updateEvent = async (id, body) => {
  return axios.put('/events/' + id, body).then(({ data: response }) => {
    return response.data;
  });
};

export const getUpcomingFeaturedEvents = async () => {
  return axios.get('/events/upcoming/featured').then(({ data: response }) => {
    return response.data;
  });
};

export const deleteSingleUser = async (id) => {
  return axios.delete('/admin/' + id).then(({ data: response }) => {
    return response.data;
  });
};

export const updateUser = async (id, body) => {
  return axios.put('/admin/' + id, body).then(({ data: response }) => {
    return response.data;
  });
};

export const createContact = async (body) => {
  return axios.post('/contacts', body).then(({ data: response }) => {
    return response.data;
  });
};

export const createFeedback = async (body) => {
  return axios.post('/feedback', body).then(({ data: response }) => {
    return response.data;
  });
};

export const updateAccount = async (body) => {
  return axios.put('/users/update-account', body).then((response) => {
    return response.data;
  });
};

export const createEventBooking = async (body) => {
  console.log('body---------', body)
  return axios.post('/event-booking', body).then(({ data: response }) => {
    return response.data;
  });
};

