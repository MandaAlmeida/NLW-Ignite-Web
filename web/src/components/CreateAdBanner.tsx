import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner(){
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg  mt-8 overflow-hidden">
    <div className="bg-[#2A2634] px-5 py-3 sm:px-8 sm:py-6 rounded-t-lg flex justify-between items-center">
        <div>
          <strong className=" sm:text-2xl text-white font-black block">Não encontrou seu duo?</strong>
        <span className="text-zinc-400 block text-[10px] sm:text-[14px] lg:text-xl">Publique um anúncio para encontrar novos players!</span>  
        </div>
        <Dialog.Trigger className=" py-1 px-2 sm:py-3 sm:px-3 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus  className="sm:w-5  sm:h-5 lg:w-7 lg:h-7"/>
            <div className="text-[8px] sm:text-[12px] lg:text-2xl">
            Publicar anúncio
            </div>
        </Dialog.Trigger>
    </div>
    </div>

    )
}