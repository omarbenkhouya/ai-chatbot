export class Logger {
    log(message: string): void {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    }

    error(message: string, err?: unknown): void {
        const suffix = err instanceof Error ? `\n${err.stack || err.message}` : (err ? `\n${String(err)}` : '');
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}${suffix}`);
    }

    debug(message: string): void {
        console.debug(`[DEBUG] ${new Date().toISOString()}: ${message}`);
    }
}

export default Logger;