module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      plugins: ['react', 'prettier'],

      extends: [
        'next',
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier', // always make sure it's last so it overrides the settings from other configs.
      ],
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ],
};
