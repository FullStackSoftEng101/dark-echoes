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
        <p>Title:{selectedEpisode.title}</p>
        <p>Description:{selectedEpisode.description}</p>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Episode List</h1>
        <main>
          <EpisodeDetails />
        </main>
      </header>
    </>
  );
}
