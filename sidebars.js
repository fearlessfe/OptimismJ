/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  hildrSidebar: [
    "hildr/index",
    {
      type: "category",
      collapsed: true,
      label: "Run a Hildr Node",
      link: {
        type: "doc",
        id: "hildr/run-a-node/index",
      },
      items: ["hildr/run-a-node/use_jar", "hildr/run-a-node/use_docker"],
    },
  ],
  opBesuSidebar: [
    "op-besu/index",
    {
      type: "category",
      collapsed: true,
      label: "Run a Op-Besu node",
      link: {
        type: "doc",
        id: "op-besu/run-a-node/index",
      },
      items: [
        "op-besu/run-a-node/use_binaries",
        "op-besu/run-a-node/use_docker",
      ],
    },
  ],
};

module.exports = sidebars;
