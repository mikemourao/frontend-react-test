export const required = (fieldName: string, customMessage?: string) => (
    { 
        required: true, 
        message: customMessage ? customMessage : `Campo ${fieldName} é obrigatório` 
    }
)
