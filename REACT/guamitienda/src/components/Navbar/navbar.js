import './navbar.css'
import CartWidget from './CartWidget/CartWidget'
const Navbar = () => {
    return (
        <nav>
            <h1>Guami Tienda Online</h1>
            <div id="opciones">
                <ul>
                    <li><button>Inicio</button> </li>
                    <li><button>Nosotros</button> </li>
                    <li><button>Tienda</button> </li>
                    <li><button>Contacto</button> </li>
                </ul>
                <button> <CartWidget /></button>
            </div>

        </nav>

    )
}




export default Navbar