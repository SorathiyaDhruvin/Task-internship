const rickService = require('../services/rickService');

const getRandomCharacter = async (req, res) => {
  try {
    const characterData = await rickService.fetchRandomCharacter();
    res.json(characterData);
  } catch (error) {
    console.error('Error fetching character data:', error.message);
    res.status(500).json({ error: 'Failed to fetch character data' });
  }
};

module.exports = {
  getRandomCharacter,
};
