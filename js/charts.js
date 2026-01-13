export function lineChart(svg, data) {
  const width = 300;
  const height = 150;
  const max = Math.max(...data);

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - (d / max) * height;
    return `${x},${y}`;
  }).join(" ");

  svg.innerHTML = `
    <polyline fill="none"
      stroke="#60a5fa"
      stroke-width="2"
      points="${points}" />
  `;
}
