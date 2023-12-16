const { google } = require('googleapis');

// Replace 'YOUR_API_KEY' and 'YOUR_SPREADSHEET_ID' with actual values
const apiKey = 'YOUR_API_KEY';
const spreadsheetId = '1FdMQZex1bsROH6vYK0luLJrwUhjf8xqPp2GzGd46_FM';
const range = 'formData';

async function readGoogleSheet() {
  const sheets = google.sheets({ version: 'v4', auth: apiKey });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range,
    });

    const values = response.data.values;
    console.log(values);
  } catch (error) {
    console.error('Error reading Google Sheet:', error.message);
  }
}

readGoogleSheet();
