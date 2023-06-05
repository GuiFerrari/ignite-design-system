import { themes } from '@storybook/theming'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export default preview;
