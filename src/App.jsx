import { useState } from "react";
import { episodeList } from "./data";
export default function App() {
  // TODO

  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();
}
