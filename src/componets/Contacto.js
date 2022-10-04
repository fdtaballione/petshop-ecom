import { React} from "react";



const Contacto = () => {
    return (
        <div className="bg-amber-300 w-full p-4 b-4">
            <div className="antialiased">
                <div className="flex w-full min-h-screen justify-center items-center">
                    <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-6 bg-blue-800 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">

                        <div className=" flex flex-col space-y-8 justify-between">
                            <div>
                                <h1 className="font-bold text-4xl tracking-widw"> Contacto</h1>
                                <p className="pt-2 text-amber-300 ">Hacenos tu pedio o dejanos tu consulta.</p>
                            </div>

                            <div className="flex flex-col space-y-10">
                                <div className="inline-flex sapace-x-2 items-center">
                                <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" width={30}></img>
                                <span className="pl-4">+(351) 456 7890 </span>
                                </div>
                            </div>

                            <div className="inline-flex sapace-x-2 items-center">
                            <img src="https://img.icons8.com/ios/50/000000/schedule-mail.png" width={30}></img>
                            <span className="pl-4"> hola@petshopecom.com </span>
                            </div>

                            <div className="inline-flex sapace-x-2 items-center">
                            <img src="https://img.icons8.com/ios/50/000000/marker-o.png"width={30}></img>
                            <span className="pl-4">Leandro N. Alem 5600 </span>
                            </div>

                        </div>
                        
                        
                        <div class="bg-white rounded-xl shadow-lg p-8 text-gray-600">

                            <from action="" className="flex flex-col space-y-4">
                                <div>
                                    <label for="" className="text-sm">Nombre:</label>
                                </div>
                                <div className="w-full">
                                    <textarea
                                    type="text" 
                                    placeholder="Tu Nombre" 
                                    className="ring-1 ring-gray-300 w-full rounded-md px-4 
                                    py-2 mt-4 outline-none focus:ring-2 focus:ring-teal-300"
                                    />
                                </div>

                                <div>
                                    <label for="" className="text-sm">Tu Email:</label>
                                </div>
                                <div>
                                    <textarea 
                                    placeholder="Tu Email" 
                                    className="ring-1 ring-gray-300 w-full rounded-md px-2 
                                    py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                                    />
                                </div>

                                <div>
                                    <label for="" class="text-sm">Mensaje:</label>
                                </div>
                                <div>
                                    <textarea 
                                    placeholder="Escribe tu mensaje" 
                                    rowa="4"
                                    className="ring-1 ring-gray-300 w-full rounded-md px-4 
                                    py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                                    />
                                </div>

                                <button className="inline-block self-end bg-blue-800 text-white font-bold rounded-lg px-6 py-3
                                uppercase text-sm"> Enviar Mensaje</button>



                            </from>

                           


                        </div>





                    </div>

                </div>
                
            </div>
        </div>
        
      )
}

export default Contacto