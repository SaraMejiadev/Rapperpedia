import api from "./apiConfig";

export const getRappers = async () => {
  const res = await api.get("/Rappers");
  return res.data;
};

export const getRapper = async (id) => {
  const res = await api.get(`/Rappers/${id}`)
  return res.data
}

export const addRapper = async (RapperData) => {
  const res = await api.post("/Rappers", RapperData)
  return res.data
}

export const editRapper = async (id, RapperData) => {
  const res = await api.put(`/Rappers/${id}`, RapperData)
  return res.data
}

export const deleteRapper = async (id) => {
  const res = await api.delete(`/Rappers/${id}`)
  return res.data
}