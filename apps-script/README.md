# Registration → Google Sheet

A static page can't write to a Sheet directly, so a small Apps Script web app does it.

1. Open the sheet → **Extensions → Apps Script**, paste `Code.gs`, save.
2. **Deploy → New deployment → Web app**. Execute as: **Me**. Who has access: **Anyone**.
3. Authorize when prompted, then copy the **Web app URL** (ends in `/exec`).
4. In `index.html`, set `SHEETS_URL` to that URL.
