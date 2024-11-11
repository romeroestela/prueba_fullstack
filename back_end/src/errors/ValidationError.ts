export default class ValidationError extends Error {
    public statusCode: number
  
    constructor(message: string) {
      super(message)
      this.name = 'ValidationError'
      this.statusCode = 400 // Código HTTP para solicitud incorrecta
    }
  }