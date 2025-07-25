// This file is entirely adapted from metaory's glitcher app
// see the site here (https://metaory.github.io/glitcher-app/)
// and the source code here (https://github.com/metaory/glitcher-app/)
// that code was published under the MIT LICENSE Copyright (c) 2025 metaory
// it has been adapted to react code below

const colorMatrices = {
  red: '1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0',
  green: '0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0',
  blue: '0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0',
}

function createKeyTimes(steps = 8) {
    const intermediates = [...Array.from({length: steps - 2}, () => (Math.random() * 0.92 + 0.08)).sort((a, b) => a-b)].map((num) => num.toFixed(4));
    return [
    0,
    ...intermediates,
    1,
  ].join(';')
}

function createValues(max: number, steps = 8) {
    return Array.from({ length: steps }, () => (Math.random() * (max - 0.001) + 0.001).toFixed(4)).join(';');
}

function calculateSliceDurations(speed: number, normalizedHeights: Array<number>) {
    const baseDuration = speed < 3 ? 300 - speed * 80 : speed < 7 ? 60 * 0.3 ** (speed - 3) : 20 * 0.2 ** (speed - 7);

    return normalizedHeights.map((height) => {
        const variation = (1 + height / 100) * (0.8 + Math.random() * 0.4);
        return Math.max(0.05, baseDuration * variation).toFixed(4);
    })
}

type ColorOffsetProps = {
    channel: string;
    dx: number;
    dur: number;
    colorSep: number;
}

function ColorOffset({channel, dx, dur, colorSep}: ColorOffsetProps) {
  const keyTimes = createKeyTimes();
  const values = createValues(colorSep);
  return <feOffset in={channel} result={`${channel}-shifted`} dx={dx} dy="0">
      <animate attributeName="dx" keyTimes={keyTimes} values={values} begin="0" dur={`${dur}s`} calcMode="discrete" repeatCount="indefinite" fill="freeze" />
      <animate attributeName="dy" keyTimes={keyTimes} values={values} begin="0" dur={`${dur}s`} calcMode="discrete" repeatCount="indefinite" fill="freeze" />
    </feOffset>;
}

function ColorMatrix({channel}: {channel: string}) {
    if (channel != "red" && channel != "blue" && channel !="green") {
        return;
    }
    return <feColorMatrix in="SourceGraphic" result={channel} type="matrix" values={colorMatrices[channel] as string}/>;
}

type SliceProps = {
    idx: number;
    y: number;
    height: number;
    duration: string;
    intensity: number;
}

function Slice({idx, y, height, duration, intensity}: SliceProps) {
    const values = createValues(intensity);
    const keyTimes = createKeyTimes();
    return <feOffset in="blended" dx="0" dy="0" y={`${y}%`} height={`${height}%`} result={`slice_${idx}`}>
      <animate attributeName="dx" keyTimes={keyTimes} values={values} begin="0s" dur={`${duration}s`} calcMode="discrete" repeatCount="indefinite" fill="freeze" />
      <animate attributeName="dy" keyTimes={keyTimes} values={values} begin="0s" dur={`${duration}s`} calcMode="discrete" repeatCount="indefinite" fill="freeze" />
    </feOffset>;
}

export default function GlitchFilter() {
  const speed = 5;
  const colorSep = 0.003;
  const heightVariation = 8;
  const intensity = 0.01;

  const sliceHeights = Array.from({length: 8}, () => Math.floor(Math.random() * (6 + heightVariation * 2 - 6) + 6));
  const totalHeight = sliceHeights.reduce((sum, height) => sum + height, 0);
  const normalizedHeights = sliceHeights.map((height) => Math.max(6, Math.round((height/totalHeight) * 100)),);
  const currentTotal = normalizedHeights.reduce((sum, height) => sum + height, 0);

  // scale the last height appropriately
  normalizedHeights[normalizedHeights.length - 1] += 100 - currentTotal;

  // get the partial sums of the normalized heights
  const sliceYs = normalizedHeights.map((_, i) => normalizedHeights.slice(0, i).reduce((sum, height) => sum + height, 0));

  const sliceDurations = calculateSliceDurations(speed, normalizedHeights);

  const slices = normalizedHeights.map((height, i) => <Slice idx={i} y={sliceYs[i]} height={height} duration={sliceDurations[i]} intensity={intensity} key={`slice-container-${i}`}/>);

  return <svg xmlns="https://www.w3.org/2000/svg" version="1.1" height="0">
    <filter id="glitchfilter" primitiveUnits="objectBoundingBox" x="-10%" y="0%" width="120%" height="100%" className="hidden sicko:inline">
      {Object.keys(colorMatrices).map((channel) => <ColorMatrix channel={channel} key={`colormat-${channel}`}/>)}
      <ColorOffset channel="red" dx={-0.01} dur={speed} colorSep={colorSep}/>
      <ColorOffset channel="blue" dx={0.01} dur={speed * 1.1} colorSep={colorSep}/>
      <feBlend mode="screen" in="red-shifted" in2="green" result="red-green" />
      <feBlend mode="screen" in="red-green" in2="blue-shifted" result="blended" />
      {[...slices]}
      <feMerge>
        {slices.map((_, i) => <feMergeNode in={`slice_${i}`} key={`mergeslice-${i}`} />)}
      </feMerge>
    </filter>
  </svg>;
}