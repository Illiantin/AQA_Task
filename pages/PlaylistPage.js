export class PlaylistPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox');
    this.tracks = page.locator('div:has(> button)');
    this.addTrackButtons = this.tracks.locator('button');
    this.playlistDuration = page.locator('#playlist-duration');
  }

  async goto() {
    await this.page.goto('/');
  }

  async searchTrack(query) {
    await this.searchInput.fill(query);
  }

  async addTrackToPlaylist(index) {
    await this.addTrackButtons.nth(index).click();
  }

  async getPlaylistDurations() {
    return (await this.playlistDuration.allTextContents()).map(Number);
  }
}