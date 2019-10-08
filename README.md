# Connect Holland stylelint-config

Basic stylelint config rules for Connect Holland.
This config extends the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard).

## Installation

```bash
 npm install connectholland-stylelint-config --save-dev
```

## Usage

- Add a `.stylelintrc` to your project with the following content:
```json
{
    "extends": "connectholland-stylelint-config"
}
```

- Overrides or additional config can be added in your projects `.stylelintrc` file. Example:
```json
{
    "extends": "connectholland-stylelint-config",
    "ignoreFiles": [
        "assets/css/app.scss"
    ]
}
```
