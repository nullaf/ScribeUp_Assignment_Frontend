export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://nullaf.pythonanywhere.com'
    : 'http://localhost:8000';
