import debug from 'debug';

enum Colors {
  trace = 'lightblue',
  info = 'blue',
  warn = 'pink',
  error = 'red',
}

enum Level {
  TRACE = 'trace',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

export class Log {
  constructor(private origin: string = 'App') {
    // @ts-ignore
    window.localStorage.setItem('DEBUG', `${this.origin}:*`);
  }

  private log(level: Level, message: string, source?: string) {
    // Set the prefix which will cause log to enable the message
    const namespace = `${this.origin}`;
    const createDebug = debug(namespace);

    // Set the color of the message based on the level
    // @ts-ignore
    createDebug.color = Colors[level];

    if(source) {
      createDebug(source, message);
    }
    else {
      createDebug(message);
    }
  }

  public trace(message: string, source?: string) {
    return this.log(Level.TRACE, message, source);
  }

  public info(message: string, source?: string) {
    return this.log(Level.INFO, message, source);
  }

  public warn(message: string, source?: string) {
    return this.log(Level.WARN, message, source);
  }

  public error(message: string, source?: string) {
    return this.log(Level.ERROR, message, source);
  }
}
