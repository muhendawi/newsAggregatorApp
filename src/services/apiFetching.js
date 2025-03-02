const fetchGuardian = async (sectionName) => {
  const response = await fetch(
    `https://content.guardianapis.com/search?q=${sectionName}&api-key=81910c88-7ec8-4f5f-be38-eb37ced3daae`
  );

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return response.json();
};

const fetchNewsAPI = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=8b5332ca1aee4434b343b44750b1cd85`
  );

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return response.json();
};

export { fetchGuardian, fetchNewsAPI };
