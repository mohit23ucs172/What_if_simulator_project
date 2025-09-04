export const formatTimeline = (timeline) => {
  return timeline.sort((a, b) => a.year - b.year);
};
