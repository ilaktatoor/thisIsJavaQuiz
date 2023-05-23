const preguntas = [
    {
      titulo: "¿Cuál de las siguientes es una firma de método JavaBean válida?",
      opciones: [
        { textoRespuesta: " public void setRange(int range)", isCorrect: true },
        { textoRespuesta: " public void getArrow()", isCorrect: false },
        { textoRespuesta: "public void setBow()", isCorrect: false },
        { textoRespuesta: " public String addTarget(String target)", isCorrect: false },
      ],
    },
    {
      titulo: "De los siguientes cuatro modificadores, elija el que no se aplica implícitamente a todas las variables de la interfaz.",
      opciones: [
        { textoRespuesta: "final", isCorrect: false },
        { textoRespuesta: "abstract", isCorrect: true },
        { textoRespuesta: "static", isCorrect: false },
        { textoRespuesta: "public", isCorrect: false },
      ],
    },
    {
      titulo: "¿Restringir el acceso solo a los métodos públicos de una clase está relacionado con cuál de estos conceptos en Java?",
      opciones: [
        { textoRespuesta: "Encapsulation", isCorrect: true },
        { textoRespuesta: "Platform independence", isCorrect: false },
        { textoRespuesta: " Object orientation", isCorrect: false },
        { textoRespuesta: "Inheritance", isCorrect: false },
      ],
    },
    {
      titulo: "¿Qué uso representa una forma válida de compilar el archivo fuente de Java con el nombre 'Principal'?",
      opciones: [
        { textoRespuesta: "javac Main", isCorrect: false },
        { textoRespuesta: "java Main.java", isCorrect: false },
        { textoRespuesta: "java Main.class", isCorrect: false },
        { textoRespuesta: "javac Main.java", isCorrect: true },
      ],
    },
  ];
  
  export default preguntas;