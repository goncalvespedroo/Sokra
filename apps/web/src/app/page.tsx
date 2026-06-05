import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full max-w-sm mx-auto mt-12 gap-10">
      
      {/* Logo Centralizado */}
      <div className="flex flex-col items-center gap-4">
        {/* Ícone de duas barras */}
        <Image
          src="/logoSokra.svg"
          alt= "Sokra's Logo"
          width={32} 
          height={32} 
          priority
        />
        <span className="text-sm tracking-[0.5em] font-semibold uppercase text-[#333333]">
          Sokra
        </span>
      </div>

      {/* Títulos */}
      <div className="flex flex-col items-center gap-4 mt-4">
        <h1 className="text-3xl text-center leading-snug">
          Quem é você que busca o<br />conhecimento?
        </h1>
        <p className="text-sm text-gray-500">
          Identifique-se para retomar o diálogo.
        </p>
      </div>

      {/* Formulário Mobile-First */}
      <form className="w-full flex flex-col gap-8 mt-6">
        <input 
          type="email" 
          placeholder="O seu identificador (E-mail)"
          className="w-full border-b border-gray-400 bg-transparent pb-2 text-[#333333] placeholder-gray-400 outline-none focus:border-[#333333] transition-colors"
        />
        
        <input 
          type="password" 
          placeholder="Sua chave de acesso (Senha)"
          className="w-full border-b border-gray-400 bg-transparent pb-2 text-[#333333] placeholder-gray-400 outline-none focus:border-[#333333] transition-colors"
        />
        
        <button 
          type="submit"
          className="mt-6 w-full bg-[#1c1c1c] text-white py-4 text-sm tracking-widest uppercase hover:bg-black transition-colors"
        >
          Iniciar Diálogo
        </button>
      </form>

      {/* Link de Cadastro */}
      <button className="text-sm text-gray-500 mt-2 hover:text-[#333333] transition-colors">
        Ainda não iniciei minha jornada. (Cadastrar)
      </button>
      
    </div>
  );
}