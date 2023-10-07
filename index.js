function superbowlWin(record) {
  const winningEntry = record.find(entry => entry.result === "W");
  if (winningEntry) {
    return winningEntry.year;
  } else {
    return undefined;
  }
}
