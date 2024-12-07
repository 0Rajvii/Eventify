import axios from "./axios";

export const signupUser = async (body) => {
  return axios.post('/admin/signup', body).then(({ data: response }) => {
    return response.data;
  });
};

export const loginUser = async (body) => {
  return axios.post('/admin/login', body).then(({ data: response }) => {
    return response.data;
  });
};

export const deleteEvent = async (id) => {
  return axios.delete(`/admin/${id}/events`).then(({ data: response }) => {
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

export const getContacts = async () => {
  return axios.get('/admin/contacts').then(({ data: response }) => {
    return response.data;
  });
};

export const getFeedback = async () => {
  return axios.get('/admin/feedback').then(({ data: response }) => {
    return response.data;
  });
};

export const getSingleContact = async (id) => {
  return axios.get(`/admin/contacts/${id}`).then(({ data: response }) => {
    return response.data;
  });
};

export const getSingleFeedback = async (id) => {
  return axios.get(`/admin/feedback/${id}`).then(({ data: response }) => {
    return response.data;
  });
};

export const deleteSingleContact = async (id) => {
  return axios.delete('/admin/contacts/' + id).then(({ data: response }) => {
    return response.data;
  });
};

export const deleteSingleFeedback = async (id) => {
  return axios.delete('/admin/feedback/' + id).then(({ data: response }) => {
    return response.data;
  });
};

export const getEventBookings = async () => {
  return axios.get('/admin/event-bookings').then(({ data: response }) => {
    return response.data;
  });
};

export const getSingleEventBooking = async (id) => {
  return axios.get(`/admin/event-bookings/${id}`).then(({ data: response }) => {
    return response.data;
  });
};

export const deleteSingleEventBooking = async (id) => {
  return axios.delete('/admin/event-bookings/' + id).then(({ data: response }) => {
    return response.data;
  });
};

export const getEvents = async () => {
  return axios.get('/admin/events').then(({ data: response }) => {
    return response.data;
  });
};

export const getSingleUser = async (id) => {
  return axios.get(`/admin/${id}`).then(({ data: response }) => {
    return response.data;
  });
};
export const getUsers = async () => {
  return axios.get('/admin').then(({ data: response }) => {
    return response.data;
  });
};

export const getEventsById = async (id) => {
  return axios.get(`/admin/${id}/events`).then(({ data: response }) => {
    return response.data;
  });
};

export const createEvent = async (formData) => {
  try {
    const response = await axios.post('/admin/events', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Upload response:', response.data);
  } catch (error) {
    console.error('Error uploading event:', error);
  }
};

export const updateEvent = async (id, formData) => {
  try {
    const response = await axios.put(`/admin/${id}/events`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Update response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating event:', error);
  }
};

export const createUser = async (body) => {
  return axios.post('/admin', body).then(({ data: response }) => {
    return response.data;
  });
};