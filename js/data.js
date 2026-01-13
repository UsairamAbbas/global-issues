export const issues = [
  {
    id: "climate-change",
    title: "Climate Change",
    category: "Environment",
    summary: "Systemic alteration of Earth’s climate driven by anthropogenic greenhouse gas emissions.",
    analysis: `
Climate change represents a non-linear risk multiplier affecting ecological systems,
economic stability, food security, and geopolitical relations. The core driver remains
the accumulation of greenhouse gases from industrial activity.
    `,
    indicators: [
      "Global temperature anomaly",
      "Atmospheric CO₂ concentration",
      "Sea level rise"
    ],
    citations: [
      {
        author: "IPCC",
        title: "Sixth Assessment Report",
        year: 2023
      },
      {
        author: "NASA",
        title: "Global Climate Change Evidence",
        year: 2024
      }
    ]
  },
  {
    id: "economic-inequality",
    title: "Economic Inequality",
    category: "Society",
    summary: "Unequal distribution of income, wealth, and opportunity within and between states.",
    analysis: `
Persistent inequality erodes institutional legitimacy, increases political polarization,
and constrains long-term economic growth. It is both a cause and consequence of policy failure.
    `,
    indicators: [
      "Gini coefficient",
      "Wealth share of top 1%",
      "Intergenerational mobility"
    ],
    citations: [
      {
        author: "World Bank",
        title: "World Inequality Report",
        year: 2024
      }
    ]
  }
];
