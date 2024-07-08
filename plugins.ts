import { TerriaPluginModule } from "terriajs-plugin-api";

/**
 * A function that when called imports all plugins.
 */
const plugins: () => Promise<TerriaPluginModule>[] = () => [
  // Add plugin imports. Example:
  import("terriajs-mvt-search")
];

export default plugins;
