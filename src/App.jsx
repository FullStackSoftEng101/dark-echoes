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
          <h2>{selectedEpisode.name}</h2>
          <p>{selectedEpisode.name}</p>
          <p>{selectedEpisode.description}</p>
        </section>
      );
    }
  }

