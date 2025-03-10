export function calculateTotalDuration(durations) {
    return durations.reduce((sum, duration) => sum + duration, 0);
  }