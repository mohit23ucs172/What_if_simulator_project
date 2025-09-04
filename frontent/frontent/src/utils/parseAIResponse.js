export const parseAIResponse = (response) => {
  try {
    if (typeof response === "string") {
      return JSON.parse(response);
    }
    return response;
  } catch (e) {
    console.error("Error parsing AI response:", e);
    return [];
  }
};
