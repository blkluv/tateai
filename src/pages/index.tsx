import * as React from 'react'
import YouTube from 'react-youtube'; 
import axios from 'axios';

import { Layout } from '@/components/Layout/Layout'
import { PageHead } from '@/components/PageHead/PageHead'
import { SearchOptions } from '@/components/SearchOptions/SearchOptions'
import { SearchResults } from '@/components/SearchResults/SearchResults'
import { Search } from '@/lib/hooks/search'

import styles from './styles.module.css'

export default function HomePage() {
  // State to store the playlist ID
  const [playlistId, setPlaylistId] = React.useState(process.env.YOUTUBE_PLAYLIST_ID);

  // Array to store the video IDs of the playlist
  const playlistVideoIds = ['HUYp5Gkomng', 'LjYjLJpzeas', 'uAbERCAe9iI', 'd9_YWu9WAvg'];


  const [videoThumbnails, setVideoThumbnails] = React.useState([]);

  React.useEffect(() => {
    // Function to fetch video thumbnails using the YouTube Data API
    const fetchVideoThumbnails = async () => {
      try {
        const apiKey = 'YOUTUBE_API_KEY'; 
        const videoIds = playlistVideoIds.join(','); // Comma-separated video IDs

        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoIds}&key=${apiKey}&part=snippet`
        );

        const thumbnails = response.data.items.map(item => item.snippet.thumbnails.default.url);
        setVideoThumbnails(thumbnails);
      } catch (error) {
        console.error('Error fetching video thumbnails:', error);
      }
    };

    fetchVideoThumbnails();

    return () => {
    };
  }, []);


  return (
    <Search.Provider>
      <Layout>
        <PageHead />
        <div className={styles.homePage}>
          <div className={styles.body}>
            <p className={styles.title}>
              Perspicacious AI
            </p>
            <p className={styles.titlecap}>
              Search Podcasts / Interviews from the Top G <a href="https://twitter.com/cobratate">@cobratate</a>
            </p>
            <SearchOptions />
            <SearchResults />
            <div className={styles.videoGrid}>
              {playlistVideoIds.map((videoId) => (
                <div key={videoId} className={styles.videoItem}>
                  <YouTube videoId={videoId} className={styles.videoPlayer} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </Search.Provider>
  )
}
