

const storybookManualChunks = (id) => {
  const normalizedId = id.replace(/\\/g, '/');

  if (!normalizedId.includes('node_modules')) {
    return undefined;
  }

  if (normalizedId.includes('/node_modules/axe-core/') || normalizedId.includes('/node_modules/@storybook/addon-a11y/')) {
    return 'storybook-a11y';
  }

  if (normalizedId.includes('/node_modules/@storybook/addon-docs/') || normalizedId.includes('/node_modules/@storybook/blocks/')) {
    return 'storybook-docs';
  }

  if (normalizedId.includes('/node_modules/@mui/')) {
    return 'mui';
  }

  if (normalizedId.includes('/node_modules/react/') || normalizedId.includes('/node_modules/react-dom/')) {
    return 'react';
  }

  if (normalizedId.includes('/node_modules/@storybook/')) {
    return 'storybook';
  }

  return undefined;
};

const withoutTestOnlyPlugins = (plugins = []) => {
  return plugins
    .map((plugin) => {
      if (Array.isArray(plugin)) {
        return withoutTestOnlyPlugins(plugin);
      }

      return plugin;
    })
    .filter((plugin) => {
      const name = plugin?.name || '';

      return !name.includes('vitest') && !name.includes('mocker');
    });
};

const addons = [
  '@chromatic-com/storybook',
  '@storybook/addon-a11y',
  '@storybook/addon-docs',
  '@storybook/addon-onboarding',
];

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": addons,
  "framework": "@storybook/react-vite",
  viteFinal: async (config) => ({
    ...config,
    plugins: withoutTestOnlyPlugins(config.plugins),
    build: {
      ...config.build,
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        ...config.build?.rollupOptions,
        output: {
          ...config.build?.rollupOptions?.output,
          manualChunks: storybookManualChunks,
        },
      },
    },
  }),
};
export default config;
