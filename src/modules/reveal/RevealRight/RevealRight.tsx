import React from 'react'
// 👉 CAMBIA AQUÍ TU IMAGEN DE FONDO DERECHA
import bg from '@/assets/images/envelope/bg-right.jpg'

export const RevealRight: React.FC = () => {
    return (
        <div className="reveal-right">
            <img src={bg} alt="Sobre fondo derecho" />
        </div>
    )
}
