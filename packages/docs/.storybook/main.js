/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/pages/**/*.mdx", 
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials", 
    "@storybook/addon-interactions", 
    "@storybook/addon-a11y", 
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  },
  viteFinal: (config, {configType}) => {
    if (configType === 'PRODUCTION') {
      config.base = '/Design-system-ignite/'
    }
  
    return config
  }
};
export default config;