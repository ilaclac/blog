const isDev = process.env.NODE_ENV !== "production";

enum LogLevel {
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
  DEBUG = "debug",
}

/**
 * Wrapper of the functions that handle log messages.
 * @param type log level: info | warn | error | debug
 * @returns the function to handle (show, send, etc) log messages
 */

const print =
  (type: LogLevel) =>
  (...messages: any[]) => {
    const fn: any = {
      info: (...messages: any[]) => console.info("%c INFO ", "background: blue; color: white;", ...messages),
      warn: (...messages: any[]) => console.warn("%c WARN ", "background: orange; color: white;", ...messages),
      error: (...messages: any[]) => {
        console.error("%c ERROR ", "background: red; color: white;", ...messages);
      },
      debug: (...messages: any[]) => console.log("%c DEBUG ", "background: green; color: white;", ...messages),
    };
    return fn[type](...messages);
  };

const Logger = {
  // enabled only in dev and test envs
  info: (isDev && print(LogLevel.INFO)) || null,
  warn: (isDev && print(LogLevel.WARN)) || null,
  debug: (isDev && print(LogLevel.DEBUG)) || null,
  // enabled by default
  error: print(LogLevel.ERROR),
};

export default Logger;
