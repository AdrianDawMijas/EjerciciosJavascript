// Tarea 1: Mostrar un mensaje simple en una alerta
function ejercicio1() {
    alert('¡Soy Javascript!');
}

// Tarea 2: Alerta reutilizada para mostrar el mismo mensaje
function ejercicio2() {
    alert('¡Soy Javascript!');
}

// Tarea 3: Trabajo con variables y asignaciones
function ejercicio3() {
    var admin, name; // Declarar dos variables
    name = "John"; // Asignar un valor
    admin = name; // Copiar el valor de name a admin
    alert(admin); // Mostrar el valor de admin
}

// Tarea 4: Declaración de variables con nombres descriptivos
function ejercicio4() {
    var nombreDelPlaneta = "Tierra"; // Variable que representa el nombre del planeta
    var nombreUsuarioActual = "Adrian"; // Variable que representa al usuario actual
    alert(`Declararia la variable planeta como "nombreDelPlaneta" y la variable que recoge el usuario actual como "nombreUsuarioActual"`);
}

// Tarea 5: Uso de plantillas literales con backticks
function ejercicio5() {
    let name = "llya"; // Variable con un nombre
    alert(`Hola ${1}\nHola ${"name"}\nHola ${name}`); // Mostrar diferentes casos en un mensaje
}

// Tarea 6: Uso de prompt para capturar un nombre
function ejercicio6() {
    let nombre = prompt('Dame un nombre :)'); // Captura el nombre del usuario
    alert(nombre); // Muestra el nombre ingresado
}

// Tarea 7: Incrementos prefijos y sufijos
function ejercicio7() {
    let a = 1, b = 1; // Inicializar variables
    let c = ++a, d = b++; // Incrementos prefijo y sufijo
    alert(`Valor de c = ${c}\nValor de d = ${d}`); // Mostrar resultados
}

// Tarea 8: Asignación y operaciones en línea
function ejercicio8() {
    let a = 2;
    let x = 1 + (a *= 2); // Multiplicación y asignación combinada
    alert(`Valor de a = ${a}\nValor de x = ${x}`); // Mostrar resultados
}

// Tarea 9: Conversiones de tipo y resultados inesperados
function ejercicio9() {
    let a = "" + 1 + 0; // Concatenación de cadenas
    let b = "" - 1 + 0; // Conversión de cadena a número y resta
    let c = true + false; // Operaciones con booleanos
    let d = 6 / "3"; // División con conversión implícita
    let e = "2" * "3"; // Multiplicación con conversión implícita
    let f = 4 + 5 + "px"; // Concatenación después de suma
    let g = "$" + 4 + 5; // Concatenación de cadenas
    let h = "4" - 2; // Resta con conversión implícita
    let i = "4px" - 2; // Resultado NaN por conversión inválida
    let j = "-9" + 5; // Concatenación de cadenas
    let k = "-9" - 5; // Resta con conversión implícita
    let l = null + 1; // Conversión de null a número
    let m = undefined + 1; // Resultado NaN por conversión inválida
    let n = " \t \n" - 2; // Conversión de espacio vacío a 0 y resta
    alert(`Resultados:
        a: ${a}
        b: ${b}
        c: ${c}
        d: ${d}
        e: ${e}
        f: ${f}
        g: ${g}
        h: ${h}
        i: ${i}
        j: ${j}
        k: ${k}
        l: ${l}
        m: ${m}
        n: ${n}`);
}

// Tarea 10: Sumar dos números ingresados como cadena
function ejercicio10() {
    let a = prompt("Primer número?", 1); // Captura el primer número
    let b = prompt("Segundo número?", 2); // Captura el segundo número
    alert(Number(a) + Number(b)); // Convierte a números y suma
}

// Tarea 11: Comparaciones entre diferentes tipos de datos
function ejercicio11() {
    let a = 5 > 4; // Comparación numérica
    let b = "apple" > "pineapple"; // Comparación lexicográfica
    let c = "2" > "12"; // Comparación lexicográfica
    let d = undefined == null; // Comparación no estricta
    let e = undefined === null; // Comparación estricta
    let f = null == "\n0\n"; // Comparación no estricta con conversión
    let g = null === +"\n0\n"; // Comparación estricta
    alert(`Resultados:
        a: ${a}
        b: ${b}
        c: ${c}
        d: ${d}
        e: ${e}
        f: ${f}
        g: ${g}`);
}

// Tarea 12: Uso de una condición siempre verdadera
function ejercicio12() {
    if ("0") { // Cualquier cadena no vacía es verdadera
        alert('Hello');
    }
    alert('Se muestra, la condición del if hace que sea siempre verdadero');
}

// Tarea 13: Verificar el nombre oficial de JavaScript
function ejercicio13() {
    let nombre = prompt('¿Cuál es el nombre "oficial" de Javascript?'); // Captura la entrada del usuario
    if (nombre === "ECMAScript") { // Verifica si coincide con el nombre oficial
        alert('¡Correcto!'); // Respuesta correcta
    } else {
        alert('¿No lo sabes? ¡ECMAScript!'); // Respuesta incorrecta
    }
}

// Tarea 14: Mostrar el signo de un número
function ejercicio14() {
    let x = prompt('Dame un numero'); // Captura el número del usuario
    if (x > 0) { // Si el número es mayor que 0
        alert(1); // Muestra 1
    } else if (x < 0) { // Si el número es menor que 0
        alert(-1); // Muestra -1
    } else {
        alert(0); // Si es igual a 0, muestra 0
    }
}

// Tarea 15: Usar operador ternario para decidir el resultado
function ejercicio15() {
    let result;
    let a = +prompt('Dame valor de a, debe ser un número'); // Captura el primer número
    let b = +prompt('Dame valor de b, debe ser un número'); // Captura el segundo número
    result = a + b < 4 ? 'Debajo' : 'Encima'; // Usa un operador ternario para evaluar
    alert(result); // Muestra el resultado
}

// Tarea 16: Usar operador ternario múltiple
function ejercicio16() {
    let message;
    let login = prompt('Dame valor de login, puede ser Empleado, Director o nada'); // Captura el tipo de usuario
    message = login == 'Empleado' ? 'Hola' : 
              login == 'Director' ? 'Felicidades' : 
              login == '' ? 'Sin sesión' : ''; // Determina el mensaje basado en el login
    alert(message); // Muestra el mensaje correspondiente
}

// Tarea 17: Evaluar expresiones lógicas
function ejercicio17() {
    if (-1 || 0) alert("primero"); // -1 es truthy, por lo que se muestra "primero"
    if (-1 && 0) alert("segundo"); // 0 es falsy, por lo que no se muestra nada
    if (null || -1 && 1) alert("tercero"); // Se evalúa -1 && 1 (que es 1), y luego null || 1 (que es 1), mostrando "tercero"
    alert('La condición -1 && 0 es imposible porque 0 es falsy');
}

// Tarea 18: Simular un sistema de inicio de sesión
function ejercicio18() {
    let usuario = prompt('Introduce Usuario'); // Captura el nombre de usuario
    if (usuario == 'Admin') { // Si es "Admin"
        let password = prompt('Introduce contraseña'); // Solicita contraseña
        let message = password == "TheMaster" ? 'Bienvenido!' : // Si coincide, muestra "Bienvenido!"
                      password == "" || password == "Esc" ? 'Cancelado' : // Si está vacío o se cancela, muestra "Cancelado"
                      'Contraseña Incorrecta'; // Para cualquier otra contraseña, muestra "Incorrecta"
        alert(message); // Muestra el mensaje
    } else if (usuario == '' || usuario == 'Esc') { // Si el usuario deja vacío o cancela
        alert('Cancelado'); // Muestra "Cancelado"
    } else {
        alert('No te conozco'); // Para cualquier otro usuario, muestra "No te conozco"
    }
}

// Tarea 19: Mostrar un contador decreciente
function ejercicio19() {
    let i = 3; // Inicializa el contador en 3
    while (i) { // Mientras i no sea 0 (falsy)
        alert(i--); // Muestra el valor de i y luego lo decrementa
    }
    alert("El código se ejecuta hasta que se evalúa while(0), esto para el bucle al interpretar 0 como false");
}

// Tarea 20: Comparar prefijo y sufijo en bucles
function ejercicio20() {
    // Forma de prefijo (++i):
    let i = 0;
    // while (++i < 5) alert(i); // Incrementa antes de la comparación
    // Forma de sufijo (i++):
    while (i++ < 5) alert(i); // Incrementa después de la comparación
    alert('El primero devuelve 4 números 1,2,3,4 y el otro devuelve 1,2,3,4,5 porque el incremento ocurre después de evaluar la condición');
}

// Tarea 21: Comparar incrementos en un bucle for
function ejercicio21() {
    // for (let i = 0; i < 5; i++) alert(i); // Incrementa después de cada iteración
    // for (let i = 0; i < 5; ++i) alert(i); // Incrementa antes de cada iteración
    alert('En este caso es igual porque primero se toma el caso base 0 y se va acumulando después.');
}

// Tarea 22: Mostrar números pares con un bucle while
function ejercicio22() {
    let i = 2; // Inicia en el primer número par
    while (i < 12) { // Mientras i sea menor a 12
        alert(i); // Muestra el valor de i
        i += 2; // Incrementa en 2
    }
}

// Tarea 23: Mostrar números con un bucle while
function ejercicio23() {
    let i = 0; // Inicializa el contador
    while (i < 3) { // Mientras i sea menor que 3
        alert(`número ${i}!`); // Muestra el valor actual de i
        i++; // Incrementa i en 1
    }
}

// Tarea 24: Mostrar números primos hasta n
function ejercicio24() {
    let n = +prompt('Dame valor de n, natural'); // Captura el límite
    let resultado = ""; // Inicializa la variable para almacenar los primos
    for (let i = 2; i <= n; i++) { // Itera desde 2 hasta n
        let esPrimo = true; // Asume que i es primo
        for (let j = 2; j <= Math.sqrt(i); j++) { // Verifica divisibilidad hasta la raíz cuadrada de i
            if (i % j == 0) { // Si es divisible por j
                esPrimo = false; // No es primo
            }
        }
        if (esPrimo) resultado += i + '\n'; // Si es primo, lo agrega al resultado
    }
    alert(resultado); // Muestra los primos encontrados
}

// Tarea 25: Reescribir un switch con if..else
function ejercicio25() {
    let navegador = prompt("¿Qué navegador estás utilizando?"); // Captura el navegador del usuario
    if (navegador === 'Edge') { // Caso para Edge
        alert("¡Tienes Edge!");
    } else if ( // Agrupar navegadores compatibles
        navegador === 'Chrome' || 
        navegador === 'Firefox' || 
        navegador === 'Safari' || 
        navegador === 'Opera'
    ) {
        alert("Está bien, soportamos estos navegadores también");
    } else { // Para cualquier otro navegador
        alert("Esperamos que esta página se vea bien");
    }
}

// Tarea 26: Reescribir un if..else con switch
function ejercicio26() {
    let a = +prompt('a?', ''); // Captura el valor de a
    switch (a) { // Evalúa el valor de a
        case 0: // Si a es 0
            alert(0);
            break;
        case 1: // Si a es 1
            alert(1);
            break;
        case 2: // Si a es 2 o 3
        case 3:
            alert('2,3');
            break;
        default: // Cualquier otro valor no contemplado
            break;
    }
}

// Tarea 27: Validar edad utilizando if..else
function ejercicio27() {
    let age = +prompt('Dime tu edad'); // Captura la edad
    function checkAge(age) { // Función para validar la edad
        if (age > 18) { // Si es mayor de 18
            return true;
        }
        return confirm('¿Tus padres te permitieron?'); // Si no, pregunta confirmación
    }
    alert(checkAge(age)); // Muestra el resultado de la validación
    alert('La función funciona porque en caso de cumplirse el if, la función automáticamente devuelve el resultado y se detiene.');
}

// Tarea 28: Reescribir función con operador ternario y OR
function ejercicio28() {
    let age = +prompt('Dime tu edad'); // Captura la edad
    function checkAgeTernario(age) { // Usando operador ternario
        return age > 18 ? true : confirm('¿Tus padres te permitieron?');
    }
    function checkAgeOr(age) { // Usando operador OR
        return age > 18 || confirm('¿Tus padres te permitieron?');
    }
    alert(checkAgeTernario(age)); // Muestra el resultado con el operador ternario
    alert(checkAgeOr(age)); // Muestra el resultado con el operador OR
}

// Tarea 29: Encontrar el menor de dos números
function ejercicio29() {
    let a = +prompt('Dame un número'); // Captura el primer número
    let b = +prompt('Dame otro número'); // Captura el segundo número
    let resultado = a > b ? b : a; // Usa operador ternario para determinar el menor
    alert(resultado); // Muestra el menor de los dos
}

// Tarea 30: Calcular potencias con validación
function ejercicio30() {
    let x = +prompt('Dame un número'); // Captura la base
    let n = +prompt('Dame su potencia'); // Captura el exponente
    let result = 1; // Inicializa el resultado
    if (isNaN(x) || isNaN(n) || n < 1 || !Number.isInteger(n)) { // Validaciones para la entrada
        alert('Por favor, introduce un número válido para la base y un exponente natural positivo.');
        return;
    } else {
        for (let i = 1; i <= n; i++) { // Calcula la potencia usando un bucle
            result = result * x; // Multiplicación acumulativa
        }
        alert(result); // Muestra el resultado
    }
}

// Tarea 31: Reescribir con funciones flecha
function ejercicio31() {
    function ask(question, yes, no) { // Función que ejecuta callbacks
        if (confirm(question)) yes(); // Si el usuario confirma, llama a yes
        else no(); // Si no, llama a no
    }
    ask(
        "Do you agree?", // Pregunta al usuario
        () => alert("You agreed."), // Callback si la respuesta es afirmativa
        () => alert("You canceled the execution.") // Callback si la respuesta es negativa
    );
}

