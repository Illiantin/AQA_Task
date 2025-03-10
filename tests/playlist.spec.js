import { test, expect } from '@playwright/test';
import { PlaylistPage } from '../pages/PlaylistPage';
import { calculateTotalDuration } from '../utils/helpers';

test.describe('Playlist App Tests', () => {
  let playlistPage;

  test.beforeEach(async ({ page }) => {
    playlistPage = new PlaylistPage(page);
    await playlistPage.goto();
  });

  test('User can search for a track', async () => {
    const searchQuery = 'Summer';
    await playlistPage.searchTrack(searchQuery);
    await expect(await playlistPage.tracks.count()).toBeGreaterThan(0);
    await expect(playlistPage.tracks).toContainText(searchQuery);
  });

  test('User can add a track to the playlist', async () => {
    const updatedDurations = await playlistPage.getPlaylistDurations();
    await playlistPage.addTrackToPlaylist(0);
    await expect(updatedDurations.length).toBeGreaterThan(0);
  });

  test('Total playlist duration is calculated correctly', async () => {
    await playlistPage.addTrackToPlaylist(0);
    await playlistPage.addTrackToPlaylist(1);
    const trackDurations = await playlistPage.getPlaylistDurations();
    const expectedTotal = calculateTotalDuration(trackDurations);
    
    await expect(playlistPage.playlistDuration).toHaveText(expectedTotal.toString());
  });
});