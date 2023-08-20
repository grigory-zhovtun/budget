# Budget - Telegram Bot

This is a Telegram bot that helps you manage your budget. It uses the Telegraf library to interact with the Telegram API and the GoogleSpreadsheet library to store and retrieve data from a Google Spreadsheet.

## Getting Started

To get started, you will need to have Node.js installed on your system. You will also need to create a new bot on Telegram and obtain an API key. Additionally, you will need to create a new Google Spreadsheet and obtain the necessary credentials to access it.

Once you have these prerequisites, you can clone this repository and install the dependencies by running `npm install`. Then, update the `credentials.js` file with your API key, email, and private key. Finally, update the `spreadsheetId` variable with the ID of your Google Spreadsheet.

## Usage

To start the bot, run `node index.js`. The bot will then be active and ready to receive commands. You can interact with the bot by sending it messages on Telegram. The bot will guide you through the process of adding expenses and income to your budget.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please feel free to submit a pull request or open an issue.
