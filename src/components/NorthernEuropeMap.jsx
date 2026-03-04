import voyfaiMap from "../assets/Voyfai-map.svg";

export default function NorthernEuropeMap() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      <img
        src={voyfaiMap}
        alt="Voyfai partner locations in Europe"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}
