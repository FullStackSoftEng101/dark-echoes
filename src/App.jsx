import { useState } from "react";
import { episodeList } from "./data";
export default function App() {
  // TODO

  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  /** episode detaiils */

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more</p>
        </section>
      );
    }
    return (
      <section className="details">
        <h2>{selectedEpisode.title}</h2>
        <p>Title : {selectedEpisode.title}</p>
        <p>Description : {selectedEpisode.description}</p>
        {selectedEpisode.isScary && <p>⭐⭐⭐is very Scary!</p>}
      </section>
    );
  }
  /**
   * list of episodes
   */

  function Roster() {
    return (
      <section className="roster">
        <h2>Roster</h2>
        <ul className="roster">
          {episodes.map((episode) => (
            <li
              key={episode.id}
              className={
                selectedEpisode?.id === episode.id ? "selected" : "none"
              }
              onClick={() => {
                setSelectedEpisode(episode);
              }}
            >
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  //app() mounting
  return (
    <>
      <header>
        <h1>Episode List</h1>
        <main>
          <Roster />
          <EpisodeDetails />
        </main>
      </header>
    </>
  );
}
