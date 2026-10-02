const fetchRandomCharacter = async () => {
  // Rick and Morty API has 826 characters currently
  const randomId = Math.floor(Math.random() * 826) + 1;
  const baseUrl = process.env.RM_API_URL || 'https://rickandmortyapi.com/api/character';
  const url = `${baseUrl}/${randomId}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Rick and Morty API responded with status ${response.status}`);
  }
  return await response.json();
};

module.exports = {
  fetchRandomCharacter,
};
