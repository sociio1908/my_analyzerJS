// Definición de los tipos de tokens
const TipoToken = {
    IDENTIFIER: 'Identificador',
    KEYWORD: 'Palabra reservada',
    NUMBER: 'Numero',
    STRING: 'Texto',
    SYMBOL: 'Simbolos',
    COMMENT: 'Comentarios'
  };
  
  // Función para analizar el código JavaScript y devolver los tokens
  function buscarCodigo(entrada) {
    const tokens = [];
    let actual = 0;
  
    while (actual < entrada.length) {
      let char = entrada[actual];
  
      // Separar palabras clave, identificadores y números
      if (/[a-zA-Z_]/.test(char)) {
        let value = '';
        while (/[a-zA-Z0-9_]/.test(char)) {
          value += char;
          char = entrada[++actual];
        }
        if (palabraReservada(value)) {
          tokens.push({ type: TipoToken.KEYWORD, value });
        } else if (/^[0-9]+$/.test(value)) {
          tokens.push({ type: TipoToken.NUMBER, value });
        } else {
          tokens.push({ type: TipoToken.IDENTIFIER, value });
        }
        continue;
      }
  
      // Separar símbolos
      if (/[^\s]/.test(char)) {
        tokens.push({ type: TipoToken.SYMBOL, value: char });
      }
  
      // Ignorar espacios en blanco y saltos de línea
      if (/\s/.test(char)) {
        char = entrada[++actual];
        continue;
      }
  
      actual++;
    }
  
    return tokens;
  }
  
  // Verificar si una palabra es una palabra clave
  function palabraReservada(palabra) {
    const reservadas = [
      'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger',
      'default', 'delete', 'do', 'else', 'export', 'extends', 'finally',
      'for', 'function', 'if', 'import', 'in', 'instanceof', 'new', 'return',
      'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void',
      'while', 'with', 'yield'
    ];
    return reservadas.includes(palabra);
  }
  