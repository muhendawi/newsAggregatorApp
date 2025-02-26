const fetchGuardian = async (sectionName = "debate") => {
  const response = await fetch(
    `https://content.guardianapis.com/search?q=${sectionName}&api-key=81910c88-7ec8-4f5f-be38-eb37ced3daae`
  );

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return response.json();
};

export { fetchGuardian };
