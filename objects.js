var playlist = new Object({artist: 'songTitle' })

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist,artistName){
  playlist = {}
  return playlist
}
