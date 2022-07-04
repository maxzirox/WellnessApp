import banner from '../../images/banner.png';
import '../Banner/Banner.css'
const Banner = () => {
    return(
        <div>
          <img className='bannerProductos' src={banner} alt="imagenGYM"/>
        </div> 
    )
}
export default Banner