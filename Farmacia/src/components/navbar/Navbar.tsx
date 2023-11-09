import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    Farmácia Amiga

                    <div className='flex gap-4'>
                        <Link to='/home' className='hover:underline'>Home</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
                        Produtos
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar