/**
 * Server Entry Point
 * 
 * This file starts the Express server and listens on the configured port.
 * It imports the configured Express app and starts listening for incoming requests.
 */

import app from './app';
import { config } from './config';

const PORT = config.port;

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📡 AI Provider: ${config.provider}`);
});