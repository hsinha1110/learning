export const API_BASE_URL = 'http://192.168.1.34:5001';
//================== GET API URL =======================

export const getApiUrl = (endpoint: string): string => {
  return `${API_BASE_URL}${endpoint}`;
};

//================== SERVICE ROUTES =======================

export const SERVICE_ROUTES = {
  GET_PRODUCTS: getApiUrl('/api/auth/login'),
} as const;

//=================== METHODS ==============================

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
} as const;

//=================== TYPES ==============================

export type MethodsType = (typeof METHODS)[keyof typeof METHODS];

export type ServiceRoutesType =
  (typeof SERVICE_ROUTES)[keyof typeof SERVICE_ROUTES];

//================== ReplaceUrl ======================

export const replaceUrl = (
  url: string,
  data: Record<string, string | number>,
): string => {
  const regex = new RegExp(':(' + Object.keys(data).join('|') + ')', 'g');

  return url.replace(regex, (_, key) => String(data[key]) || _);
};