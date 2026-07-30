export function createSyncPlan({ familyName, playlists = [] }) {
  if (!familyName || typeof familyName !== "string") {
    throw new TypeError("familyName is required");
  }

  return {
    familyName,
    playlistCount: playlists.length,
    playlists: playlists.map((playlist) => ({
      name: playlist.name,
      trackCount: Array.isArray(playlist.tracks) ? playlist.tracks.length : 0
    }))
  };
}
