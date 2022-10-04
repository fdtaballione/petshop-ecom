import { React} from "react";

const classContainer = "bg-amber-300 w-full flex items-center justify-center"

const Servicios = () => {
    return (

<div class="bg-amber-300">

<h1 class="bg-amber-300 font-bold text-xl text-center p-6 mb-6">Disfruta de los mejores servicios para tus mascotas</h1>


<div className={classContainer}> 

<div class="flex flex-wrap justify-center mb-10">
    <div class="flex flex-col bg-white rounded-lg shadows-nd w-full m-6 overflow-hidden sm:w-72">
        <img src="https://espacioset.com.ar/aplicacion_agro_filedata/siga_webset/ecommerce_pictures/60/shome_peluqueria_canina_.jpg" 
            alt="Peluqueria Canina"
            class="h-100 m-6">
        </img>
        
        <h2 class="text-center px-2 font-bold mt-2 mb-2">Peluqueria Canina</h2>
        <h2 class="text-center px-2 mt-2 mb-3">ontamos con los mejores Médicos Veterinarios con formación académica de calidad para 
                                        ofrecerles las herramientas necesarias para cuidar de tu mascota. Consultá todas nuestras sucursales.</h2>

        <a href="#" class="bg-blue-500 text-white font-bold p-4 mb-2 text-center hover:bg-blue-800 transition-all duration-500">Turnos</a>

    </div>

    
    <div class="flex flex-col bg-white rounded-lg shadows-nd w-full m-6 overflow-hidden sm:w-72">
        <img src="https://veterinariaroyalpet.com/wp-content/uploads/2016/11/care_3.jpg" 
            alt="Peluqueria Canina"
            class="h-100 m-6">
        </img>
        
        <h2 class="text-center px-2 font-bold mt-2 mb-2">Clínica Veterinaria</h2>
        <h2 class="text-center px-2 mt-2 mb-3">Contamos con los mejores Médicos Veterinarios con formación académica de calidad para 
                                        ofrecerles las herramientas necesarias para cuidar de tu mascota. Consultá todas nuestras sucursales.</h2>
                                        <a href="#" class="bg-blue-500 text-white font-bold p-4 mb-2 text-center hover:bg-blue-800 transition-all duration-500">Sucursales</a>
    </div>

    <div class="flex flex-col bg-white rounded-lg shadows-nd w-full m-6 overflow-hidden sm:w-72">
        <img src="https://nupec.com/wp-content/uploads/2020/07/Captura-de-pantalla-2020-07-24-a-las-17.25.31.png" 
            alt="Peluqueria Canina"
            class="h-100 m-6">
        </img>
        
        <h2 class="text-center px-2 font-bold mt-2 mb-2">Adopciones</h2>
        <h2 class="text-center px-2 mt-2 mb-3">Descubrí nuestro plan de adopciones responsables
                                        ¡Te acompañamos en esta nueva etapa! Conocé un poco más
                                        sobre la adopción de perros y la adopción de gatos. Conectamos humanos con sus mascotas.</h2>

        <a href="#" class="bg-blue-500 text-white font-bold p-4 mb-2 text-center hover:bg-blue-800 transition-all duration-500">Encontra tu Match </a>

    </div>


    

</div>
</div>
</div> 
 
    )
}
export default Servicios